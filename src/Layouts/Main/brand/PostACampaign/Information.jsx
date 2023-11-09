import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
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
  handleChange,
  setFormData,
  selectedOptions,
  setSelectedOptions,
  setFormErrors,
}) => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const [startToday, setStartToday] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const handleStartTodayChange = (e) => {
    const { checked } = e.target;
    setStartToday(checked);

    if (checked) {
      // If the checkbox is checked, set the start date to today's date
      const today = new Date();
      setStartDate(today);
      setFormData({
        ...formData,
        campaign_start_date: today.toISOString().split("T")[0],
        campaign_end_date: endDate,
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
  const [isDropdown2Open, setDropdown2Open] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [fruitCounts, setFruitCounts] = useState({});
  const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
  const inputRef = useRef(null);

  const handleCountChange = (fruit, newCount) => {
    setFruitCounts({ ...fruitCounts, [fruit]: newCount });
  };

  const handleFruitSelection = (fruit) => {
    if (selectedFruits.includes(fruit)) {
      setSelectedFruits((prevSelectedFruits) =>
        prevSelectedFruits.filter((selectedFruit) => selectedFruit !== fruit)
      );
    } else {
      setSelectedFruits([...selectedFruits, fruit]);
    }

    // Clear the error message when a checkbox is checked
    setFormErrors({
      ...formErrors,
      campaign_deliverables: "",
    });
  };
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
   const selectedCategoryNames = selectedCategories.join(", ");
   setFormData({
     ...formData,
     campaign_category_id: selectedCategoryNames,
   });
 };


  useEffect(() => {
    // Add a click event listener to the document to close the dropdown when clicking outside the component
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
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
            {/* <select
              className="form-control"
              style={{ width: "100%" }}
              name="campaign_category_id"
              value={formData.campaign_category_id}
              onChange={handleChange}
            >
              <option value="">Select Categories</option>
              {mediaCategories.map((media) => (
                <option key={media.media_id} value={media.media_id}>
                  {media.category_title}
                </option>
              ))}
            </select> */}

            <div className="form-group">
              <div
                className="form-group"
                ref={inputRef}
                style={{ position: "relative" }}
              >
                <input
                  onClick={() => setDropdown2Open(!isDropdown2Open)}
                  value={selectedCategories
                    .map((category) => category.category_title)
                    .join(", ")}
                  className="form-control"
                  type="text"
                  placeholder="select Categories"
                  onChange={handleChangess}
                  style={{ width: "100%" }}
                />

                {isDropdown2Open && (
                  <div
                    className="fruit-dropdown"
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
              </div>
            </div>

            <span className="alert-error" style={{ color: "red" }}>
              {formErrors.campaign_category_id}
            </span>
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
              <div
                className="form-group"
                ref={inputRef}
                style={{ position: "relative" }}
              >
                <input
                  type="text"
                  readOnly
                  placeholder="Select Deliverables"
                  value={selectedFruits.join(", ")}
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="form-control"
                  style={{ width: "100%" }}
                  onChange={handleChangess}
                />
                {isDropdownOpen && (
                  <div
                    className="fruit-dropdown"
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
                    {fruits.map((fruit, index) => (
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
            <div className="alert-error" style={{ color: "red" }}>
              {formErrors.followerRange}
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
                  selected={startDate}
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
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Information;
