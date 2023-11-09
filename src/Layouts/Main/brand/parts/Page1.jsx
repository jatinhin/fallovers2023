import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Typography } from "@mui/material";
import img5 from "../../assets/img5.png";
import WhiteBtn from "../utils/WhiteBtn";
import "./Buttons.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const [apiResponse, setApiResponse] = useState(null);
  const [userTypeError, setuserTypeError] = useState(false);
  const [userStart, setUserStart] = useState("");
  const [userType, setUserType] = useState("");
  const location = useLocation();
  const { email } = location.state || { email: "No email provided" };

  const onSubmit = async (data) => {
    setuserTypeError(false);

    if (step == 2 && !userType) {
      setuserTypeError(true);
      return false;
    }

    if (step == 4 && !userStart) {
      setuserTypeError(true);
      return false;
    }

    if (step < 4) {
      setStep(step + 1);
    } else {
      // Send form data to the backend API
      try {
        const response = await axios.post(
          "https://fallovers.com/fallovers-api/api/v1/sign-up",
          {
            login_for: 0,
            user_name: data.user_name,
            user_password: data.password,
            user_type: userType == 1 ? 0 : 1,
            user_mobile_no: data.user_mobile_no,
            user_website: data.user_website,
            user_handle_name: data.user_handle_name,
            user_piches_type: userStart == 1 ? 0 : 1,
            user_mail_id: (data.user_mail_id = email),
          }
        );
        // Handle the API response here
        if (response.status === 200) {
          // Redirect the user to the home page or any other page
          window.location.href = "/home";
          setApiResponse(response.data);

          // Replace with your desired URL
        } else {
          // Handle API errors or display a message to the user
          console.error("API Error:", response.data);
        }
      } catch (error) {
        console.error("API Request Error:", error);
      }
    }
  };

  useEffect(() => {
    if (apiResponse) {
      // Convert the API response data to a JSON string
      const jsonApiResponse = JSON.stringify(apiResponse);

      // Save the JSON string in local storage
      localStorage.setItem("apiResponseData", jsonApiResponse);
    }
  }, [apiResponse]);

  const [error, setError] = useState("");

 
  

  const renderFormFields = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Stack gap={1.2}>
              <input
                style={{ width: "320px" }}
                className={`input-style ${
                  errors.user_name ? "error-input" : ""
                }`}
                type="name"
                name="user_name"
                placeholder="Name"
                {...register("user_name", { required: true })}
                required
              />
              {errors.user_name && (
                <Typography variant="caption" color="error">
                  This field is required
                </Typography>
              )}
              <input
                style={{
                  width: "320px",
                  borderBottom: "5px solid #DFD7FE",
                }}
                className={`input-style ${
                  errors.password ? "error-input" : ""
                }`}
                type="password"
                name="password"
                placeholder="Create Password"
                {...register("password", { required: true })}
                required
              />
              {errors.password && (
                <Typography variant="caption" color="error">
                  This field is required
                </Typography>
              )}
            </Stack>
            <Stack
              direction={"row"}
              width={"350px"}
              gap={1}
              pt={2.5}
              pl={2}
              alignItems={"center"}
            >
              {console.log(errors, "errors")}
              <input type="checkbox" {...register("emailMarketing")}/>
              <Typography display={"flex"} alignItems={"Center"} pt={2} >
                Yes, I would like to receive email marketing communication from
                Fallovers. I understand that I can unsubscribe at any time.
              </Typography>
            </Stack>
          </>
        );
      case 2:
        return (
          <Stack gap={1.2}>
            <div>
              <input
                type="button"
                value="I'm a buyer, brand, or agency"
                className={`button ${userType === 1 ? "active" : ""}`}
                onClick={(e) => {
                  setuserTypeError(false);
                  setUserType(1);
                  //handleButtonClick("I'm a buyer, brand, or agency");
                }}
              />
            </div>
            <div>
              <input
                type="button"
                value="I'm an influencer or creator"
                className={`button ${userType === 2 ? "active" : ""}`}
                onClick={(e) => {
                  setuserTypeError(false);
                  setUserType(2);
                  //handleButtonClick("I'm an influencer or creator");
                }}
              />
            </div>

            {userTypeError && (
              <Typography variant="caption" color="error">
                Please select a user type
              </Typography>
            )}
          </Stack>
        );
      case 3:
        return (
          <>
            <Stack gap={1.2}>
              <input
                style={{ width: "320px" }}
                className={`input-style ${
                  errors.user_handle_name ? "error-input" : ""
                }`}
                type="name"
                name="user_handle_name"
                placeholder={userType === 1 ? "Brand Name" : "Influencer Name"}
                {...register("user_handle_name", { required: true })}
                required
              />
              {errors.user_handle_name && (
                <Typography variant="caption" color="error">
                  This field is required
                </Typography>
              )}
              <input
                style={{ width: "320px" }}
                className={`input-style ${
                  errors.user_website ? "error-input" : ""
                }`}
                type="name"
                name="user_website"
                placeholder={userType === 1 ? "Brand Website" : "Influencer Website"}
                {...register("user_website", { required: true })}
                required
              />
              {errors.user_website && (
                <Typography variant="caption" color="error">
                  This field is required
                </Typography>
              )}
              <input
                style={{ width: "320px" }}
                className={`input-style ${
                  errors.user_mobile_no ? "error-input" : ""
                }`}
                type="Number"
                name="=user_mobile_no"
                placeholder="Phone Number"
                {...register("user_mobile_no", { required: true })}
                required
              />
              {errors.user_mobile_no && (
                <Typography variant="caption" color="error">
                  This field is required
                </Typography>
              )}
            </Stack>
          </>
        );
      case 4:
        return (
          <Stack gap={1.2}>
            <div>
              <input
                type="button"
                value={
                  userType === 1
                    ? "View and Buy Listing"
                    : "Pitch a brand or agency your skills"
                }
                className={`button ${userStart === 1 ? "active" : ""}`}
                onClick={() => {
                  setUserStart(1);
                }}
              />
            </div>
            <div>
              <input
                type="button"
                value={
                  userType === 1
                    ? "Post a casting call and have creators pitch you"
                    : "Post a listing and have buyers find you"
                }
                className={`button ${userStart === 2 ? "active" : ""}`}
                onClick={() => {
                  setUserStart(2);
                }}
              />
            </div>
            {userTypeError && (
              <Typography variant="caption" color="error">
                This field is required
              </Typography>
            )}
          </Stack>
        );
      default:
        return null;
    }
  };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
      <Stack
        width={"60%"}
        bgcolor={"white"}
        borderRadius={"15px"}
        boxShadow={"0px 0px 8px 1px grey"}
        direction={"row"}
      >
        <Stack width={"35%"} p={1} alignItems={"center"}>
          <img src={img5} alt="" />
        </Stack>
        <Stack direction={"row"} width={"65%"} justifyContent={"center"}>
          <Stack justifyContent={"center"}>
            <Stack gap={1}>
              <Stack justifyContent={"Center"} alignItems={"center"} gap={1}>
                <Typography
                  variant="h4"
                  color={"black"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  {step === 1
                    ? "Let's get you signed up"
                    : step === 2
                    ? "A few questions to get started"
                    : step === 3 && userType === 1
                    ? "Tell us something about your Brand"
                    : step === 3 && userType === 2
                    ? "Tell us something about you"
                    : step === 4 && userType === 1
                    ? "Last Step - Where do you want to start?"
                    : "What are you looking to do?"}
                </Typography>
                <Typography variant="h6">
                  {step === 1
                    ? `No account found with the email address ${email}`
                    : step === 2
                    ? "We'll help you find the product that's right for you."
                    : step === 3 && userType === 1
                    ? "Some information about Brand."
                    : step === 3 && userType === 2
                    ? "We've got just the thing for you."
                    : step === 4 && userType === 2
                    ? "We've got just the thing for you."
                    : ""}
                </Typography>
              </Stack>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                {renderFormFields()}
              </form>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                pt={3}
                gap={15}
              >
                <WhiteBtn
                  disabled={step === 1}
                  type="button"
                  onClick={() => setStep(step - 1)}
                  sx={{
                    width: "96px",
                    borderRadius: "12px",
                  }}
                >
                  Back
                </WhiteBtn>
                <WhiteBtn
                  onClick={handleSubmit(onSubmit)}
                  type="submit"
                  value="Next"
                  sx={{
                    width: "96px",
                    borderRadius: "12px",
                    color: "white",
                    bgcolor: "#603AFA",
                    "&:hover": {
                      bgcolor: "#603AFA",
                    },
                  }}
                >
                  {step === 4 ? "Submit" : "Next"}
                </WhiteBtn>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Page;
