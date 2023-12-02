import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "./CustomStepper.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useRef } from "react";
function Counter({ count, onCountChange }) {
  const increment = () => {
    onCountChange(count + 1);
  };

  const decrement = () => {
    onCountChange(count - 1);
  };

  return (
    <div className="counter">
      <Stack direction={"row"} gap={0.5}>
        <RemoveCircleOutlineIcon
          onClick={decrement}
          style={{ cursor: "pointer", fontSize: "30px" }}
        />
        <Typography fontSize={"20px"}>{count}</Typography>
        <ControlPointIcon
          onClick={increment}
          style={{ cursor: "pointer", fontSize: "30px" }}
        />
      </Stack>
    </div>
  );
}
const Information = ({
  formData,
  formErrors,
  setFormData,
  selectedOptions,
  setSelectedOptions,
  setFormErrors,
  selectedCategories,
  setSelectedCategories,
  selectedFruits,
  setSelectedFruits,
  selectedFoll,
  setSelectedFoll,
  selectedDeliverables,
setSelectedDeliverables,
deliverableCounts,
setDeliverableCounts,
}) => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const [startToday, setStartToday] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(new Date);



  const handleStartTodayChange = (e) => {
    const { checked } = e.target;
    setStartToday(checked)

    if (checked) {
      // If the checkbox is checked, set the start date to today's date
      const today = new Date();
      setStartDate(today);
      setFormData({
        ...formData,
        campaign_start_date: today.toISOString().split("T")[0],
        campaign_end_date: endDate,
      });
       setFormErrors({
         ...formErrors,
         campaign_start_date: "",
         campaign_end_date: "", // Clear end date error
       });
      
    } else {
      // If the checkbox is unchecked, reset the start date to its previous value
      setStartDate(new Date());
      setEndDate("");
      setFormData({
        ...formData,
        campaign_start_date: "",
        campaign_end_date: "",
      });
    }
  };
  // const handleEndDateChange = (date) => {
  //   setEndDate(date);
  //   setFormData({
  //     ...formData,
  //     campaign_end_date: date.toISOString().split("T")[0],
  //   });
  // };
  const handleEndDateChange = (date) => {
    setEndDate(date);
    setFormData({
      ...formData,
      campaign_end_date: date.toISOString().split("T")[0],
    });
  };
  const [dates, setDatesState] = useState({
    startDate: "10/20/2023",
    endDate: "08/28/2024",
  });
  const setDates = (e, { startDate, endDate }) => {
    setDatesState({
      startDate: startDate.format("YYYY-MM-DD"),
      endDate: endDate.format("YYYY-MM-DD"),
    });
    setFormData({
      ...formData,
      campaign_start_date: startDate.format("YYYY-MM-DD"),
      campaign_end_date: endDate.format("YYYY-MM-DD"),
    });
    
  };

  const [mediaOptions, setMediaOptions] = useState([]);
  const [mediaCategories, setMediaCategories] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://fallovers.com/fallovers-api/api/v1/get-campaign-requirements"
      )
      .then((response) => {
        const mediaData = response.data.data.socailDeliverables;
        setMediaOptions(mediaData);
        const mediaDataCat = response.data.data.categories;
        setMediaCategories(mediaDataCat);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //////////////////////////////////////////////////
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdown3Open, setDropdown3Open] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false);
  
  const [fruitCounts, setFruitCounts] = useState({});
  const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

  // const handleCountChange = (fruit, newCount) => {
  //   setFruitCounts({ ...fruitCounts, [fruit]: newCount });
  // };
const handleFollowers = (selectedFollower) => {
  setSelectedFoll([selectedFollower]);

  // Clear the error message when a checkbox is checked
  setFormErrors({
    ...formErrors,
    campaign_followers_range: "",
  });

  // Save the selected follower in the formData state
  setFormData({
    ...formData,
    campaign_followers_range: selectedFollower,
  });
};



  const handleFruitSelection = (deliverable) => {
    setSelectedDeliverables((prevSelectedDeliverables) => {
      const updatedDeliverables = prevSelectedDeliverables.includes(deliverable)
        ? prevSelectedDeliverables.filter(
            (selectedDeliverable) => selectedDeliverable !== deliverable
          )
        : [...prevSelectedDeliverables, deliverable];

      // Update the input field value when a deliverable is selected
      updateDeliverablesFormData(updatedDeliverables);

      return updatedDeliverables;
    });
  };

  const handleCountChange = (deliverable, newCount) => {
    setDeliverableCounts((prevDeliverableCounts) => {
      const updatedCounts = {
        ...prevDeliverableCounts,
        [deliverable]: newCount,
      };

      // Update the input field value when the count changes
      updateDeliverablesFormData(selectedDeliverables, updatedCounts);

      return updatedCounts;
    });
  };

  const updateDeliverablesFormData = (updatedDeliverables) => {
    const types = updatedDeliverables.map((deliverable) => deliverable);
    const quantities = updatedDeliverables.map(
      (deliverable) => deliverableCounts[deliverable] || 0
    );

    setFormData({
      ...formData,
      campaign_deliverables: {
        type: types,
        qty: quantities,
      },
    });
  };


  //////////////
 const handlecategorySelection = (category) => {
   if (selectedCategories.includes(category)) {
     setSelectedCategories((prevSelectedCategory) =>
       prevSelectedCategory.filter(
         (selectedCategory) => selectedCategory !== category
       )
     );
   } else {
     setSelectedCategories([...selectedCategories, category]);
   }

   // Update the input field value when a category is selected
   const selectedCategoryNames = selectedCategories.includes(category)
     ? selectedCategories.filter(
         (selectedCategory) => selectedCategory !== category
       )
     : [...selectedCategories, category];

   setFormData({
     ...formData,
     campaign_category_id: selectedCategoryNames.join(", "),
   });

   setFormErrors({
     ...formErrors,
     campaign_category_id: "",
   });
 };
const categoriesDropdownRef = useRef(null);
const followersDropdownRef = useRef(null);
const deliverablesDropdownRef = useRef(null);




  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside the categories dropdown
      if (
        categoriesDropdownRef.current &&
        !categoriesDropdownRef.current.contains(event.target)
      ) {
        setDropdown2Open(false);
      }

      // Check if the click is outside the followers dropdown
      if (
        followersDropdownRef.current &&
        !followersDropdownRef.current.contains(event.target)
      ) {
        setDropdown3Open(false);
      }

      // Check if the click is outside the deliverables dropdown
      if (
        deliverablesDropdownRef.current &&
        !deliverablesDropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  /////////////////////////////////////////////

  const handleChangess = (e) => {
    const { name, value } = e.target;
    // Clear the error message for the input field being changed
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
    setFormData({ ...formData, [name]: value });
  };
  ////////////////////////////////////////

  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };  

  const updateInputValue = () => {
    setInputValue(`${selectedOptions.length} selected`);
  };
/////////////////////////////////////////
  return (
    <Stack>
      <Stack width={"550px"}>
        <input
          className="form-control"
          type="text"
          id="campaign-name"
          placeholder="Campaign Name"
          name="campaign_name"
          value={formData.campaign_name}
          onChange={handleChangess}
        />
        <div className="alert-error" style={{ color: "red" }}>
          {formErrors.campaign_name}
        </div>

        <Stack
          direction={"row"}
          className="form-group"
          width={"100%"}
          gap={1.5}
        >
          <Stack className="form-group" width={"50%"}>
            <select
              className="form-control"
              style={{ width: "100%" }}
              name="campaign_social_media_id"
              value={formData.campaign_social_media_id}
              onChange={handleChangess}
            >
              <option value="">Select Platform</option>
              {mediaOptions.map((media) => (
                <option key={media.media_id} value={media.media_id}>
                  {media.media_name}
                </option>
              ))}
            </select>

            <div className="alert-error" style={{ color: "red" }}>
              {formErrors.campaign_social_media_id}
            </div>
          </Stack>
          <Stack width={"50%"} className="form-group">
            <div className="form-group">
              <div className="form-group" style={{ position: "relative" }}>
                <input
                  onClick={() => setDropdown2Open(!isDropdown2Open)}
                  value={selectedCategories.join(", ")}
                  className="form-control"
                  type="text"
                  placeholder="select Categories"
                  onChange={handleChangess}
                  style={{ width: "100%" }}
                  ref={categoriesDropdownRef}
                />

                {isDropdown2Open && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      marginTop: "10px",
                      border: "1px solid #9277FF",
                      borderRadius: "10px",
                      width: "260px",
                      position: "absolute",
                      backgroundColor: "#F8F8FF",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      zIndex: 10,
                    }}
                  >
                    {mediaCategories.map((media, index) => (
                      <Stack
                        key={index}
                        direction={"row"}
                        gap={3}
                        width={"166px"}
                      >
                        <Stack direction={"row"} gap={1}>
                          <input
                            style={{ margin: "0px", width: "17px" }}
                            type="checkbox"
                            onChange={() =>
                              handlecategorySelection(media.category_title)
                            }
                            checked={selectedCategories.includes(
                              media.category_title
                            )}
                          />
                          <Typography
                            fontSize={"15px"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            {media.category_title}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </div>
                )}
                <div className="alert-error" style={{ color: "red" }}>
                  {formErrors.campaign_category_id}
                </div>
              </div>
            </div>
          </Stack>
        </Stack>
        <Stack
          gap={1.5}
          direction={"row"}
          className="form-group"
          width={"100%"}
        >
          <Stack className="form-group" justifyContent={"center"} width={"50%"}>
            <div className="form-group">
              <div className="form-group" style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Select Deliverables"
                  value={selectedDeliverables.join(", ")}
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="form-control"
                  style={{ width: "100%" }}
                  onChange={handleChangess}
                  ref={deliverablesDropdownRef}
                />
                {isDropdownOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      marginTop: "10px",
                      border: "1px solid #9277FF",
                      borderRadius: "10px",
                      width: "260px",
                      position: "absolute",
                      backgroundColor: "#F8F8FF",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {/* {fruits.map((fruit, index) => (
                      <Stack
                        key={index}
                        direction={"row"}
                        gap={3}
                        width={"166px"}
                      >
                        <Counter
                          count={fruitCounts[fruit] || 0}
                          onCountChange={(newCount) =>
                            handleCountChange(fruit, newCount)
                          }
                        />
                        <Stack direction={"row"} gap={1}>
                          <input
                            style={{ margin: "0px", width: "17px" }}
                            type="checkbox"
                            onChange={() => handleFruitSelection(fruit)}
                            checked={selectedFruits.includes(fruit)}
                          />
                          <Typography
                            fontSize={"15px"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            {fruit}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))} */}
                    {fruits.map((fruit, index) => (
                      <Stack
                        key={index}
                        direction={"row"}
                        gap={3}
                        width={"166px"}
                      >
                        <Counter
                          count={deliverableCounts[fruit] || 0}
                          onCountChange={(newCount) =>
                            handleCountChange(fruit, newCount)
                          }
                        />
                        <Stack direction={"row"} gap={1}>
                          <input
                            style={{ margin: "0px", width: "17px" }}
                            type="checkbox"
                            onChange={() => handleFruitSelection(fruit)}
                            checked={selectedDeliverables.includes(fruit)}
                          />
                          <Typography
                            fontSize={"15px"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            {fruit}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </div>
                )}
                <div className="alert-error" style={{ color: "red" }}>
                  {formErrors.campaign_deliverables}
                </div>
              </div>
            </div>
          </Stack>
          <Stack className="form-group" justifyContent={"center"} width={"50%"}>
            <div className="form-group">
              <div className="form-group" style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Select Followers"
                  value={selectedFoll.join(", ")}
                  onClick={() => setDropdown3Open(true)}
                  className="form-control"
                  style={{ width: "100%" }}
                  onChange={handleChangess}
                  ref={followersDropdownRef}
                />
                {isDropdown3Open && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      marginTop: "10px",
                      border: "1px solid #9277FF",
                      borderRadius: "10px",
                      width: "260px",
                      position: "absolute",
                      backgroundColor: "#F8F8FF",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {options.map((Followers, index) => (
                      <Stack
                        key={index}
                        direction={"row"}
                        gap={3}
                        width={"166px"}
                      >
                        <Stack direction={"row"} gap={1}>
                          <input
                            style={{ margin: "0px", width: "17px" }}
                            type="checkbox"
                            onChange={() => handleFollowers(Followers)}
                            checked={selectedFoll.includes(Followers)}
                          />
                          <Typography
                            fontSize={"15px"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            {Followers}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </div>
                )}
                <div className="alert-error" style={{ color: "red" }}>
                  {formErrors.campaign_followers_range}
                </div>
              </div>
            </div>
          </Stack>
        </Stack>
        <Stack>
          <input
            className="form-control"
            type="number"
            id="numberinfluencer"
            placeholder="Type number of influencers required"
            name="InfluencerRequired"
            value={formData.InfluencerRequired}
            onChange={handleChangess}
          />
          <div className="alert-error" style={{ color: "red" }}>
            {formErrors.InfluencerRequired}
          </div>
        </Stack>
        <Stack
          direction={"row"}
          gap={2}
          width={"550px"}
          pt={4}
          justifyContent={"space-between"}
        >
          <div className="form-group" style={{ margin: "0px" }}>
            <label style={{ display: "flex", paddingTop: "12px", gap: "9px" }}>
              Start Today
              <input
                type="checkbox"
                checked={startToday}
                onChange={handleStartTodayChange}
              />
            </label>
          </div>
          <Stack direction={"row"} gap={2}>
            <Typography
              variant="h4"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              End Date:
            </Typography>
            <Stack>
              {startToday ? (
                <ReactDatePicker
                  className="form-control"
                  selected={endDate}
                  onChange={handleEndDateChange}
                />
              ) : (
                <DateRangePicker
                  onApply={setDates}
                  initialSettings={{
                    startDate: "10/20/2023",
                    endDate: "08/28/2024",
                  }}
                >
                  <input
                    type="text"
                    value={dates.startDate + "-" + dates.endDate}
                    className="form-control"
                  />
                </DateRangePicker>
              )}
              <div className="alert-error" style={{ color: "red" }}>
                {formErrors.campaign_end_date}
              </div>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Information;
