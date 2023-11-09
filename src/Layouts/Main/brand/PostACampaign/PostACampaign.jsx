import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  Paper,
  InputLabel,
} from "@mui/material";
import WhiteBtn from "../../utils/WhiteBtn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CountBar from "../../Components/CountBar";
import Multiselect from "multiselect-react-dropdown";
import Adduptoattachment from "./Adduptoattachment";
import InformationRequests from "./InformationRequests";
import Fixed from "./Fixed";
import Barter from "./Barter";
import MileStone from "./MileStone";
import "./CustomStepper.css";
import Information from "./Information";
import Requirement from "./Requirement";
import PayoutAMilestone from "./PayoutAMilestone";

const PostACampaign = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [radioError, setRadioError] = useState("");
  const handleChangeRadio = (event) => {
    setSelectedOption(event.target.value);
    setRadioError("");
  };
  const [barterError, setBarterError] = useState("");
  const [formData, setFormData] = useState({
    campaignName: "",
    desCategory: "",
    selectedPlatform: [],
    promotionGoals: "",
    campaignBrief: "",
  });

  const [formErrors, setFormErrors] = useState({
    campaignName: "",
    desCategory: "",
    selectedPlatform: "",
    promotionGoals: "",
    campaignBrief: "",
  });

  const validateInformationForm = () => {
    const errors = {};

    if (!formData.campaignName) {
      errors.campaignName = "Campaign Name is required";
    }

    if (!formData.desCategory) {
      errors.desCategory = "Listing Category is required";
    }

    // Additional validations for other fields in the Information form

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

  const handleChange = (event) => {
    const fieldName = event.target.name;
    setFormData({ ...formData, [fieldName]: event.target.value });
    // Clear the error message for the current field
    setFormErrors({ ...formErrors, [fieldName]: "" });
  };

  const [activebtn, setActivebtn] = useState(1);

  const handleNextClick = () => {
    if (activebtn === 1) {
      if (!validateInformationForm()) {
        return;
      }
    } else if (activebtn === 2) {
      if (!validateRequirementForm()) {
        console.log("Information form is not valid");
        return;
      }
    }

    // If no errors, proceed to the next step
    console.log("Moving to the next step");
    setActivebtn(activebtn + 1);
  };
  const handleBtnClick = (btnNumber) => {
    if (activebtn === 1) {
      if (!validateInformationForm()) {
        return;
      }
    } else if (activebtn === 2) {
      if (!validateRequirementForm()) {
        console.log("Information form is not valid");
        return;
      }
    }
    setActivebtn(btnNumber);
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
              onClick={() => handleBtnClick(button.value)}
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
              handleChange={handleChange}
            />
          )}
          {activebtn === 2 && (
            <Requirement
              formData={formData}
              formErrors={formErrors}
              handleChange={handleChange}
            />
          )}
          {activebtn === 3 && (
            <PayoutAMilestone
              handleChangeRadio={handleChangeRadio}
              selectedOption={selectedOption}
              radioError={radioError}
              barterError={barterError}
              setBarterError={setBarterError}
            />
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
              onClick={handleNextClick}
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
              Next
            </WhiteBtn>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostACampaign;
