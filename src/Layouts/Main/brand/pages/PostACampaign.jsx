import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Information from "../PostACampaign/Information";
import Requirement from "../PostACampaign/Requirement";
import PayoutAMilestone from "../PostACampaign/PayoutAMilestone";
import "./CustomStepper.css";
import WhiteBtn from "../utils/WhiteBtn";
import axios from "axios";
import PrivatePublic from "../PostACampaign/PrivatePublic";
const PostACampaign = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");
  const handleChangeRadio = (e) => {
    setSelectedOption(e.target.value);
    setFormErrors({ payout_type: "" }); 
  };
  const [barterError, setBarterError] = useState("");
  const [formData, setFormData] = useState({
    campaign_name: "",
    campaign_social_media_id: "",
    campaign_category_id: "",
    campaign_deliverables: {
      type: [], // Initialize an empty array for deliverable types
      qty: [], // Initialize an empty array for deliverable quantities
    },
    followerRange: "",
    InfluencerRequired: "",
    campaign_start_date: "",
    campaign_end_date: "",
    promotionGoals: "",
    campaignBrief: "",
    payout_type: "",
    payout_product:"",
    payout_influencer:"",
  });

  const [formErrors, setFormErrors] = useState({
    campaign_name: "",
    campaign_social_media_id: "",
    campaign_category_id: "",
    campaign_deliverables: "",
    followerRange: "",
    InfluencerRequired: "",
    Date: "",
    promotionGoals: "",
    campaignBrief: "",
    payout_type: "",
    payout_product: "",
    payout_influencer:"",
  });

  const validateInformationForm = () => {
    const errors = {};

    if (!formData.campaign_name) {
      errors.campaign_name = "Campaign Name is required";
    }
    if (!formData.campaign_social_media_id) {
      errors.campaign_social_media_id =
        "campaign_social_media_id Name is required";
    }
    if (!formData.campaign_category_id) {
      errors.campaign_category_id = "Listing Category is required";
    }
    if (selectedOptions.length === 0) {
      errors.campaign_deliverables = "campaign_deliverables is required";
      errors.followerRange = "follower Range is required";
    }
    if (!formData.InfluencerRequired) {
      errors.InfluencerRequired = "Influencer Required is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const validateRequirementForm = () => {
    const errors = {};
    if (!formData.promotionGoals) {
      errors.promotionGoals = "Please fill out this field.";
    }

    if (!formData.campaignBrief) {
      errors.campaignBrief = "Please fill out this field.";
    }
    setFormErrors({ ...formErrors, ...errors });
    return Object.keys(errors).length === 0;
  };
  const validatePayoutForm = () => {
    const errors = {};
    if (!selectedOption) {
      setFormErrors({ payout_type: "Please select a payout type." }); // Set an error message if no option is selected.
      return false; // There is an error
    } 
    if (!formData.payout_product) {
      errors.payout_product = "payout product is required";
    }
    if (!formData.payout_influencer) {
      errors.payout_influencer = "payout influencer is required";
    }
    return true; 
  };

  const handleChange = (event) => {
    const fieldName = event.target.name;
    setFormData({ ...formData, [fieldName]: event.target.value });
    // Clear the error message for the current field
    setFormErrors({ ...formErrors, [fieldName]: "" });
  };

  const [activebtn, setActivebtn] = useState(1);
  const handleNextClick = () => {
    if (activebtn === 1) {
      if (validateInformationForm()) {
        // Validation successful, move to the next step
        setActivebtn(activebtn + 1);
      }
    } else if (activebtn === 2) {
      if (
        validateInformationForm() &&
        validateRequirementForm() &&
        !validatePayoutForm()
      ) {
        // Validation successful, move to the next step
        setActivebtn(activebtn + 1);
      }
    } else if (activebtn === 3 && activestep === 1) {
      if (validatePayoutForm()) {
        setactivestep(2);
      }
    } else if (activebtn === 3 && activestep === 2) {
      handleSubmit();
    }
  };
  const [activestep, setactivestep] = useState(1);
  const handleSubmit = () => {
    if (activebtn === 3 && activestep===2) {
      
      axios
        .post("https://fallovers.com/fallovers-api/api/v1/create-campaign", 
          // Include your form data here
          formData
        )
        .then((response) => {
          console.log("API Response:", response.data);
          // Handle success, e.g., show a success message, redirect, etc.
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle the error, e.g., show an error message to the user
        });
    }
  };

  console.log("formdata", formData);




   const mapSelectedOptionToValue = (option) => {
     switch (option) {
       case "option1": // Barter
         return 0;
       case "option2": // Fixed
         return 1;
       case "option3": // Milestone
         return 2;
       default:
         return -1; // Handle unknown options as needed
     }
   };

   // Handle radio button changes
  //  const handleRadioChange = (event) => {
  //    const selectedValue = mapSelectedOptionToValue(event.target.value);
  //    if (selectedValue !== -1) {
  //      handleChangeRadio(event); // Update the selected option in the component state
  //      setFormData((prevData) => ({
  //        ...prevData,
  //        payout_type: selectedValue, // Update formData with the numerical value
  //      }));
  //    }
  //  };
const handleRadioChange = (event) => {
  const selectedValue = mapSelectedOptionToValue(event.target.value);
  if (selectedValue !== -1) {
    handleChangeRadio(event); // Update the selected option in the component state

    // Create a new object for the payout_data based on selected payout_type
    let payout_data = {};

    if (selectedValue === 0) {
      // If payout_type is 0, set the appropriate properties
      payout_data = {
        payout_type: selectedValue,
        payout_product: "",
        payout_influencer: "",
        milestone:""
      };
    } else if (selectedValue === 1) {
      // If payout_type is 1, set the appropriate properties
      payout_data = {
        payout_type: selectedValue,
        max_payout_from: "",
        max_payout: "",
        milestone: "",
      };
    } else if (selectedValue === 2) {
      // If payout_type is 2, set the appropriate properties
      payout_data = {
        payout_type: selectedValue,
        max_payout_from: "",
        milestone:"",
        max_payout: "",
      };
    }

    // Update formData with the payout_data
    setFormData(() => ({
      ...formData,
      ...payout_data,
    }));
  }
};




  
  const handleBtnClick = () => {
    if (activebtn === 3 && activestep == 2) {
      // Moving backward
      setactivestep(activestep - 1);
    } else if (activebtn === 3 && activestep == 1) {
      // Moving forward
      setActivebtn(activebtn - 1);
    } else if (activebtn === 2) {
      setActivebtn(activebtn - 1);
    }
  };

  const handleupperclicks = (stepIndex) => {
     if (stepIndex > activebtn + 1) {
     console.log("You can't skip steps.");
     return;
   }

   if (stepIndex === activebtn - 1) {
     // If moving backward to a previous step, allow it without further validation
     setActivebtn(stepIndex);
     return;
   }

   const currentStep = buttonData[activebtn - 1];

   // Based on the current step, perform validation before moving forward
   if (activebtn === 1 && validateInformationForm()) {
     setActivebtn(stepIndex);
   } else if (
     activebtn === 2 &&
     validateInformationForm() &&
     validateRequirementForm()
   ) {
     setActivebtn(stepIndex);
   } else if (
     activebtn === 3 &&
     !validateInformationForm() &&
     !validateRequirementForm() &&
     stepIndex === 2
   ) {
     // Allow moving back from step 3 to step 2 without validation
     setActivebtn(stepIndex);
   }
 };
  

  const buttonData = [
    { label: "Requirements", value: 1, hoverBorderRadius: "20px 0 0 0" },
    { label: "Information", value: 2, hoverBorderRadius: "0" },
    { label: "Payout & Milestones", value: 3, hoverBorderRadius: "0 20px 0 0" },
  ];

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Stack
        width={"670px"}
        height={"57px"}
        bgcolor={"#F7F5FF"}
        borderRadius={"20px 20px 0 0"}
        borderBottom={"1px solid #CEC1FF"}
      >
        <Stack direction={"row"}>
          {buttonData.map((button) => (
            <Button
              key={button.value}
              sx={{
                width: "223px",
                height: "57px",
                textTransform: "none",
                backgroundColor:
                  activebtn === button.value ? "#DFD7FE" : "none",
                color: activebtn === button.value ? "black" : "grey",
                borderRadius:
                  activebtn === 1
                    ? "20px 0 0 0"
                    : activebtn === 2
                    ? "0px"
                    : "0px 20px 0px 0px",
                "&:hover": {
                  color: activebtn === button.value ? "black" : "grey",
                  backgroundColor:
                    activebtn === button.value ? "#DFD7FE" : "none",
                  transition: "none",
                  borderRadius:
                    activebtn === button.value
                      ? button.hoverBorderRadius
                      : "0px",
                },

                transition: "none",
                fontSize: "16px",
                fontWeight: activebtn === button.value ? 600 : 400,
              }}
              onClick={() => handleupperclicks(button.value)}
            >
              <Box
                width={"24px"}
                height={"24px"}
                borderRadius={"50%"}
                bgcolor={"white"}
                mb={0.1}
                mr={1}
              >
                {button.value}
              </Box>
              {button.label}
            </Button>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          height: "fit-content",
        }}
        width={"670px"}
        bgcolor={"white"}
        borderRadius={"0 0 20px 20px"}
      >
        <Stack pt={4} pl={7} gap={2}>
          <Stack>
            <Typography fontSize={"22px"} fontWeight={"bold"}>
              {activebtn === 2 ? "Campaign Information" : "New Campaign"}
            </Typography>
            <Typography fontSize={"17px"} fontWeight={400} color={"grey"}>
              {activebtn === 1
                ? "Please provide all requirements"
                : "Please provide all information"}
            </Typography>
          </Stack>
          {activebtn === 1 && (
            <Information
              formData={formData}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
              handleChange={handleChange}
              setFormData={setFormData}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          )}
          {activebtn === 2 && (
            <Requirement
              formData={formData}
              formErrors={formErrors}
              handleChange={handleChange}
            />
          )}
          {activebtn === 3 && activestep === 1 && (
            <PayoutAMilestone
              handleChangeRadio={handleChangeRadio}
              selectedOption={selectedOption}
              formData={formData}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
              setFormData={setFormData}
              barterError={barterError}
              setBarterError={setBarterError}
              handleRadioChange={handleRadioChange}
            />
          )}
          {activebtn === 3 && activestep === 2 && (
            <PrivatePublic/>
          )}

          <Stack
            sx={{
              content: "''",
              width: "588px",
              height: "1px",
              bgcolor: "lightgrey",
            }}
          ></Stack>
          <Stack
            alignItems={"flex-end"}
            width={"566px"}
            direction={"row"}
            justifyContent={activebtn === 1 ? "flex-end" : "space-between"}
          >
            {activebtn !== 1 ? (
              <WhiteBtn
                onClick={
                  activebtn === 1
                    ? () => handleBtnClick(1)
                    : activebtn === 2
                    ? () => handleBtnClick(1)
                    : activebtn === 3
                    ? () => handleBtnClick(2)
                    : () => {
                        handleBtnClick(3);
                      }
                }
                sx={{
                  width: "112px",
                  height: "46px",
                  fontSize: "18px",
                  color: "#967CFE",
                  border: "1px solid #967CFE",
                  "&:hover": {
                    color: "#967CFE",
                  },
                }}
              >
                Back
              </WhiteBtn>
            ) : (
              ""
            )}
            <WhiteBtn
              onClick={activestep === 1 ? handleNextClick : handleSubmit}
              sx={{
                width: "112px",
                height: "46px",
                fontSize: "18px",
                bgcolor: "#603AFA",
                color: "white",
                "&:hover": {
                  bgcolor: "#603AFA",
                  color: "white",
                },
              }}
            >
              {activestep === 1 ? "Next" : "Submit"}
            </WhiteBtn>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostACampaign;
