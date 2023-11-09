import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GET_HOMEPAGE_DATA, LOGIN } from "../../actions/authenticationAction";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BASE_URL } from "../../actions/api";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Dropdown from "react-bootstrap/Dropdown";
//import Demo from "./crop/Demo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Switch from "react-switch";

import icon1 from "../../Assets/blogIcon/Icon1.jpeg";
import icon2 from "../../Assets/blogIcon/icon2.jpeg";
import icon3 from "../../Assets/blogIcon/icon3.jpeg";
import icon4 from "../../Assets/blogIcon/icon4.jpeg";
import icon5 from "../../Assets/blogIcon/icon5.jpeg";
import icon6 from "../../Assets/blogIcon/icon6.jpeg";
import icon7 from "../../Assets/blogIcon/icon7.jpeg";
import icon8 from "../../Assets/blogIcon/icon8.jpeg";
import icon9 from "../../Assets/blogIcon/icon9.jpeg";
import icon10 from "../../Assets/blogIcon/icon10.jpeg";
import icon11 from "../../Assets/blogIcon/icon11.jpeg";
import axios from "axios";

import {
  Logo,
  LogoName,
  profileCircle,
  upload,
  footer1,
  footer2,
  footerCircle,
  footerbtn1,
  footer3,
  footerBtn2,
  footerRight,
  footer4,
  social,
  LogoFooter,
} from "../../Constants/Images";
import { useRef } from "react";
import { render } from "@testing-library/react";
import { useUserRole } from "../../UserRoleContext";

function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    // setisLoading(true);
    GET_HOMEPAGE_DATA().then((res) => {
      //const { data } = res;
    });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [dropdown, setDropdown] = useState(false);
  const [activeForm, setactiveForm] = useState(0);
  const [submitStatus, setsubmitStatus] = useState(0);
  const [field, setField] = useState({ requestsStatus: { 0: false } });
  const [error, setError] = useState({});
  const [wizardStep, setWizardStep] = useState(1);
  const [dealsFormCount, setDealsFormCount] = useState(1);
  const [optionsFormCount, setOptionsFormCount] = useState(1);
  const [frequentlyFormCount, setFrequentlyFormCount] = useState(1);
  const [requiredFormCount, setRequiredFormCount] = useState(1);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown][field["sampleImg"]]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const handleChangeToggle = (checked, fields, i) => {
    console.log("handle", checked, fields, i);

    setField((prev) => {
      return {
        ...prev,
        // field[fields][i]  e.target.value
        [fields]: { ...prev[fields], [i]: checked ? false : true },
      };
    });
  };
  const handleChange = (e, fields, i) => {
    if (wizardStep > 2) {
      setField((prev) => {
        return {
          ...prev,
          // field[fields][i]  e.target.value
          [fields]: { ...prev[fields], [i]: e.target.value },
        };
      });

      const errors = error;
      if (errors[fields] != undefined) {
        delete errors[fields][i];
        setError(errors);
      }
    } else {
      setField((prev) => {
        return {
          ...prev,
          [fields]: e.target.value,
        };
      });

      const errors = error;
      if (errors[fields] != undefined) {
        delete errors[fields];
        setError(errors);
      }
    }
  };

  const handleValidation = (typeOfSucessWiz) => {
    let fields = field;
    let fromValid = true;
    let errors = {};

    if (typeOfSucessWiz == "DescriptionSuccess1") {
      if (
        fields["desCategory"] == undefined ||
        !fields["desCategory"] ||
        fields["desCategory"].trim() == ""
      ) {
        fromValid = false;
        errors["desCategory"] = "Field can' t be empty";
      }
      if (
        fields["desSubCategory"] == undefined ||
        !fields["desSubCategory"] ||
        fields["desSubCategory"].trim() == ""
      ) {
        fromValid = false;
        errors["desSubCategory"] = "Field can' t be empty";
      }
      if (
        fields["desTittan"] == undefined ||
        !fields["desTittan"] ||
        fields["desTittan"].trim() == ""
      ) {
        fromValid = false;
        errors["desTittan"] = "Field can' t be empty";
      }
      if (
        fields["desBasePrice"] == undefined ||
        !fields["desBasePrice"] ||
        fields["desBasePrice"].trim() == ""
      ) {
        fromValid = false;
        errors["desBasePrice"] = "Field can' t be empty";
      }

      if (
        fields["desDescription"] == undefined ||
        !fields["desDescription"] ||
        fields["desDescription"].trim() == ""
      ) {
        fromValid = false;
        errors["desDescription"] = "Field can' t be empty";
      }
    }

    if (typeOfSucessWiz == "SamplesSuccess2") {
      if (fields["sampleImg"] == undefined || !fields["sampleImg"]) {
        fromValid = false;
        errors["sampleImg"] = "Please upload an image";
      }
    }

    if (typeOfSucessWiz == "DealSuccess3") {
      for (let i = 0; i < dealsFormCount; i++) {
        if (fields["dealDealTitle"] != undefined) {
          if (
            !fields["dealDealTitle"][i] ||
            fields["dealDealTitle"][i].trim() == ""
          ) {
            fromValid = false;
            // [fields]: { ...prev[fields], [i]: e.target.name }

            errors["dealDealTitle"] = {
              ...errors["dealDealTitle"],
              [i]: "Field can' t be empty",
            };
          }
        } else if (fields["dealDealTitle"] == undefined) {
          fromValid = false;
          errors["dealDealTitle"] = {
            ...errors["dealDealTitle"],
            [i]: "Field can' t be empty",
          };
        }

        if (fields["dealDescription"] != undefined) {
          if (
            !fields["dealDescription"][i] ||
            fields["dealDescription"][i].trim() == ""
          ) {
            fromValid = false;
            // [fields]: { ...prev[fields], [i]: e.target.name }

            errors["dealDescription"] = {
              ...errors["dealDescription"],
              [i]: "Field can' t be empty",
            };
          }
        } else if (fields["dealDescription"] == undefined) {
          fromValid = false;
          errors["dealDescription"] = {
            ...errors["dealDescription"],
            [i]: "Field can' t be empty",
          };
        }
      }
    }
    if (typeOfSucessWiz == "OptionsSuccess4") {
      for (let i = 0; i < optionsFormCount; i++) {
        if (fields["OptionTitle"] != undefined) {
          if (
            !fields["OptionTitle"][i] ||
            fields["OptionTitle"][i].trim() == ""
          ) {
            fromValid = false;
            // [fields]: { ...prev[fields], [i]: e.target.name }

            errors["OptionTitle"] = {
              ...errors["OptionTitle"],
              [i]: "Field can' t be empty",
            };
          }
        } else if (fields["OptionTitle"] == undefined) {
          fromValid = false;
          errors["OptionTitle"] = {
            ...errors["OptionTitle"],
            [i]: "Field can' t be empty",
          };
        }

        if (fields["optionsDescription"] != undefined) {
          if (
            !fields["optionsDescription"][i] ||
            fields["optionsDescription"][i].trim() == ""
          ) {
            fromValid = false;
            // [fields]: { ...prev[fields], [i]: e.target.name }

            errors["optionsDescription"] = {
              ...errors["optionsDescription"],
              [i]: "Field can' t be empty",
            };
          }
        } else if (fields["optionsDescription"] == undefined) {
          fromValid = false;
          errors["optionsDescription"] = {
            ...errors["optionsDescription"],
            [i]: "Field can' t be empty",
          };
        }

        if (fields["optionsAdditionalDeliveryTime"] != undefined) {
          if (
            !fields["optionsAdditionalDeliveryTime"][i] ||
            fields["optionsAdditionalDeliveryTime"][i].trim() == ""
          ) {
            fromValid = false;
            // [fields]: { ...prev[fields], [i]: e.target.name }

            errors["optionsAdditionalDeliveryTime"] = {
              ...errors["optionsAdditionalDeliveryTime"],
              [i]: "Field can' t be empty",
            };
          }
        } else if (fields["optionsAdditionalDeliveryTime"] == undefined) {
          fromValid = false;
          errors["optionsAdditionalDeliveryTime"] = {
            ...errors["optionsAdditionalDeliveryTime"],
            [i]: "Field can' t be empty",
          };
        }

        if (fields["optionsotherPrice"] != undefined) {
          if (
            !fields["optionsotherPrice"][i] ||
            fields["optionsotherPrice"][i].trim() == ""
          ) {
            fromValid = false;
            // [fields]: { ...prev[fields], [i]: e.target.name }

            errors["optionsotherPrice"] = {
              ...errors["optionsotherPrice"],
              [i]: "Field can' t be empty",
            };
          }
        } else if (fields["optionsotherPrice"] == undefined) {
          fromValid = false;
          errors["optionsotherPrice"] = {
            ...errors["optionsotherPrice"],
            [i]: "Field can' t be empty",
          };
        }
      }
    }

    if (typeOfSucessWiz == "FrequentlySuccess5") {
      for (let i = 0; i < frequentlyFormCount; i++) {
        if (fields["frequentlyQuestion"] != undefined) {
          if (
            !fields["frequentlyQuestion"][i] ||
            fields["frequentlyQuestion"][i].trim() == ""
          ) {
            fromValid = false;
            // [fields]: { ...prev[fields], [i]: e.target.name }

            errors["frequentlyQuestion"] = {
              ...errors["frequentlyQuestion"],
              [i]: "Field can' t be empty",
            };
          }
        } else if (fields["frequentlyQuestion"] == undefined) {
          fromValid = false;
          errors["frequentlyQuestion"] = {
            ...errors["frequentlyQuestion"],
            [i]: "Field can' t be empty",
          };
        }

        if (fields["frequentlyComments"] != undefined) {
          if (
            !fields["frequentlyComments"][i] ||
            fields["frequentlyComments"][i].trim() == ""
          ) {
            fromValid = false;
            // [fields]: { ...prev[fields], [i]: e.target.name }

            errors["frequentlyComments"] = {
              ...errors["frequentlyComments"],
              [i]: "Field can' t be empty",
            };
          }
        } else if (fields["frequentlyComments"] == undefined) {
          fromValid = false;
          errors["frequentlyComments"] = {
            ...errors["frequentlyComments"],
            [i]: "Field can' t be empty",
          };
        }
      }
    }

    setError(errors);
    return fromValid;
  };

  const OnImageChange = (event) => {
    if (
      event.target.files &&
      event.target.files[0] &&
      event.target.files[0].type.match(/image.*/)
    ) {
      setField((prev) => {
        return {
          ...prev,
          ["sampleImg"]: event.target.files,
        };
      });
      setError({});
    }
  };

  const handleChangeCheckBox = (e, fields, i) => {
    let checked = e.target.checked;
    if (checked)
      setField((prev) => {
        return {
          ...prev,
          // [fields]: { ...prev[fields], [i]: e.target.name }
          [fields]: { ...prev[fields], [fields + i]: true },
        };
      });
    else if (checked == false) {
      // const unSelectedFieds = field
      // delete unSelectedFieds[fields][i]

      // setField(unSelectedFieds);
      setField((prev) => {
        return {
          ...prev,
          // [fields]: { ...prev[fields], [i]: e.target.name }
          [fields]: { ...prev[fields], [fields + i]: false },
        };
      });
    }

    //     this.setState({
    //       details:{ first_name: 'jack', last_name:'high'}
    //  });
  };

  const handleSubmitValue = (type) => {
    if (type != "finalSubmit") {
      if (handleValidation(type)) {
        let countWizActive = activeForm;
        let totalWizActive = countWizActive + 1;

        setactiveForm(totalWizActive);
        setWizardStep(totalWizActive + 1);
        setError({});
      }
    } else {
      alert("asdas");

      var bodyFormData = new FormData();

      bodyFormData.append(
        "info_reg_description_category",
        field["desCategory"]
      );
      bodyFormData.append(
        "info_reg_description_sub_category",
        field["desSubCategory"]
      );
      bodyFormData.append("info_reg_description_title", field["desTittan"]);
      bodyFormData.append("info_reg_basic_price", field["desBasePrice"]);
      bodyFormData.append("info_reg_description", field["desDescription"]);
      // step 2

      bodyFormData.append("info_reg_uplods_sample", field["sampleImg"]);

      //step 3

      bodyFormData.append("info_reg_deal_title", field["dealDealTitle"]);
      bodyFormData.append(
        "info_reg_deal_description",
        field["dealDescription"]
      );

      bodyFormData.append(
        "info_reg_deal_revisions_min",
        field["dealRevisions"]
      );
      bodyFormData.append(
        "info_reg_deal_revisions_max",
        field["dealRevisions2"]
      );

      bodyFormData.append("info_reg_deal_time", field["dealDeliveryTime"]);
      bodyFormData.append("info_reg_deal_price", field["dealOtherPrice"]);

      // bodyFormData.append('info_reg_deal_features', field['desCategory']);

      // step 4

      bodyFormData.append("info_options_title", field["OptionTitle"]);
      bodyFormData.append(
        "info_options_description",
        field["optionsDescription"]
      );
      bodyFormData.append(
        "info_options_delivery_time",
        field["optionsAdditionalDeliveryTime"]
      );
      bodyFormData.append("info_options_price", field["optionsotherPrice"]);

      //step 5
      bodyFormData.append("info_faq_question", field["frequentlyQuestion"]);
      bodyFormData.append("info_faq_answer", field["frequentlyComments"]);

      // step 6

      bodyFormData.append(
        "info_request_description",
        field["requestsComments"]
      );
      bodyFormData.append("info_request_type", field["requestsTypesOf"]);
      bodyFormData.append("info_request_status", field["requestsStatus"]);

      bodyFormData.append("user_id", 1);

      var headers = { "content-type": "application/x-www-form-urlencoded" };
      axios
        .post(
          "http://localhost/sites/fallovers/api/v1/update-profile",
          bodyFormData,
          headers
        )
        .then((res) => {
          return res.data;
        });
    }
  };

  const removeItem = (type, i) => {
    var fields = field;
    if (type == "Deal") {
      if (fields["dealDealTitle"] != undefined) {
        delete fields["dealDealTitle"][i];
      }
      if (fields["dealDescription"] != undefined) {
        delete fields["dealDescription"][i];
      }
      if (fields["dealRevisions"] != undefined) {
        delete fields["dealRevisions"][i];
      }
      if (fields["dealDeliveryTime"] != undefined) {
        delete fields["dealDeliveryTime"][i];
      }
      if (fields["dealRevisions2"] != undefined) {
        delete fields["dealRevisions2"][i];
      }
      if (fields["dealOtherPrice"] != undefined) {
        delete fields["dealOtherPrice"][i];
      }
      if (fields["dealFeaturescheckBoxFirst"] != undefined) {
        delete fields["dealFeaturescheckBoxFirst"][
          "dealFeaturescheckBoxFirst" + i
        ];
      }
      if (fields["dealFeaturescheckBoxSecond"] != undefined) {
        delete fields["dealFeaturescheckBoxSecond"][
          "dealFeaturescheckBoxSecond" + i
        ];
      }
      if (fields["dealFeaturescheckBoxThired"] != undefined) {
        delete fields["dealFeaturescheckBoxThired"][
          "dealFeaturescheckBoxThired" + i
        ];
      }

      setField(fields);
      var value = dealsFormCount - 1;
      setDealsFormCount(value);
    }
    if (type == "option") {
      if (fields["OptionTitle"] != undefined) {
        delete fields["OptionTitle"][i];
      }
      if (fields["optionsDescription"] != undefined) {
        delete fields["optionsDescription"][i];
      }
      if (fields["optionsAdditionalDeliveryTime"] != undefined) {
        delete fields["optionsAdditionalDeliveryTime"][i];
      }
      if (fields["optionsotherPrice"] != undefined) {
        delete fields["optionsotherPrice"][i];
      }

      setOptionsFormCount(optionsFormCount - 1);
    }

    if (type == "FAQs") {
      if (fields["frequentlyQuestion"] != undefined) {
        delete fields["frequentlyQuestion"][i];
      }
      if (fields["frequentlyComments"] != undefined) {
        delete fields["frequentlyComments"][i];
      }

      setFrequentlyFormCount(frequentlyFormCount - 1);
    }

    if (type == "request") {
      if (fields["requestsComments"] != undefined) {
        delete fields["requestsComments"][i];
      }
      if (fields["requestsTypesOf"] != undefined) {
        delete fields["requestsTypesOf"][i];
      }
      if (fields["requestsStatus"] != undefined) {
        delete fields["requestsStatus"][i];
      }

      setRequiredFormCount(requiredFormCount - 1);
    }
  };
 
  return (
    <>
      {console.log("state", field, error)}
      <ParallaxProvider>
        

        <div className="background">
          <header id="home">
            <nav className="navbar navbar-default navbar-sticky bootsnav">
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    {/* Start Header Navigation */}
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#navbar-menu"
                      >
                        <i className="fa fa-bars" />
                      </button>
                      <a className="navbar-brand" href="#">
                        <img src={Logo} className="logo" alt="Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="top-search" style={{ display: "block" }}>
                      <div className="input-group">
                        <form action="#">
                          <input
                            type="text"
                            name="text"
                            className="form-control"
                            placeholder="Find creators"
                          />
                          <button type="button">
                            <i className="fas fa-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="collapse navbar-collapse" id="navbar-menu">
                      <ul
                        className="nav navbar-nav navbar-right"
                        data-in="#"
                        data-out="#"
                      >
                        <li className="dropdown">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                              className="menu-register-btn menu-register-btn-after-login"
                            >
                              Creators
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item>Creators</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>

                        <li className="dropdown">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                              className="menu-register-btn menu-register-btn-after-login"
                            >
                              Brands
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item>Brands</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>

                        <li className="dropdown">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                              className="menu-register-btn menu-register-btn-after-login"
                            >
                              Resources
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item>Resources</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <button className="get-started">Get Started</button>
                  </div>
                  <div className="col-md-1 top-user-profile">
                    <img src={profileCircle} width={35} />
                  </div>
                </div>
                <div className="seperator seperator-top col-md-12">
                  <span className="border" />
                </div>
              </div>
            </nav>
            {/* End Navigation */}
          </header>
          {/* End Header */}
          {/* Start Login Form 
    ============================================= */}
          <form
            action="#"
            id="login-form"
            className="mfp-hide white-popup-block"
          >
            <div className="col-md-4 login-social">
              <h4>Login with social</h4>
              <ul>
                <li className="facebook">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8 login-custom">
              <h4>login to your registered account!</h4>
              <div className="col-md-12">
                <div className="row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Email*"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Password*"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <label htmlFor="login-remember">
                    <input type="checkbox" id="login-remember" />
                    Remember Me
                  </label>
                  <a title="Lost Password" href="#" className="lost-pass-link">
                    Lost your password?
                  </a>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <button type="button">Login</button>
                </div>
              </div>
              <p className="link-bottom">
                Not a member yet? <a href="#">Register now</a>
              </p>
            </div>
          </form>
          {/* End Login Form */}
          {/* Start Register Form 
    ============================================= */}
          <form
            action="#"
            id="register-form"
            className="mfp-hide white-popup-block"
          >
            <div className="col-md-4 login-social">
              <h4>Register with social</h4>
              <ul>
                <li className="facebook">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8 login-custom">
              <h4>Register a new account</h4>
              <div className="col-md-12">
                <div className="row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Email*"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Username*"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Password*"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Repeat Password*"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <button type="button">Sign up</button>
                </div>
              </div>
              <p className="link-bottom">
                Are you a member? <a href="#">Login now</a>
              </p>
            </div>
          </form>

          <div className="adviros-details-area default-padding profile-edit profile-wizard">
            <div className="container">
              <div className="row">
                <div className="col-md-12 info main-content">
                  <div className="tab-info">
                    <div className="row">
                      <div className="tab-content tab-content-info">
                        <div id="tab1" className="tab-pane fade active in">
                          <div className="event-area">
                            <div className="event-items">
                              <div className="item horizontal col-md-12">
                                <div className="col-md-6 info">
                                  <div className="row margin-0">
                                    <div className="col-md-12 left-side-create-ac">
                                      <ul className="wizard-list">
                                        <li
                                          onClick={
                                            wizardStep > 0
                                              ? () => setactiveForm(0)
                                              : ""
                                          }
                                        >
                                          <div class="text arrow-active">
                                            <span className="wizard-number-active">
                                              1
                                            </span>
                                            <span className="wizard-title-active">
                                              Description
                                            </span>
                                            <span class="arrow"></span>
                                          </div>
                                        </li>
                                        <li
                                          onClick={
                                            wizardStep > 1
                                              ? () => setactiveForm(1)
                                              : ""
                                          }
                                        >
                                          <div class="text">
                                            <span
                                              className={
                                                activeForm > 0
                                                  ? `wizard-number-active`
                                                  : `wizard-number`
                                              }
                                            >
                                              2
                                            </span>

                                            <span
                                              className={
                                                activeForm > 0
                                                  ? `wizard-title-active`
                                                  : `wizard-title`
                                              }
                                            >
                                              {" "}
                                              Samples{" "}
                                            </span>
                                            <span class="arrow"></span>
                                          </div>
                                        </li>
                                        <li
                                          onClick={
                                            wizardStep > 2
                                              ? () => setactiveForm(2)
                                              : ""
                                          }
                                        >
                                          <div class="text">
                                            <span
                                              className={
                                                activeForm > 1
                                                  ? `wizard-number-active`
                                                  : `wizard-number`
                                              }
                                            >
                                              3
                                            </span>
                                            <span
                                              className={
                                                activeForm > 1
                                                  ? `wizard-title-active`
                                                  : `wizard-title`
                                              }
                                            >
                                              {" "}
                                              Deals{" "}
                                            </span>
                                            <span class="arrow"></span>
                                          </div>
                                        </li>
                                        <li
                                          onClick={
                                            wizardStep > 3
                                              ? () => setactiveForm(3)
                                              : ""
                                          }
                                        >
                                          <div class="text">
                                            <span
                                              className={
                                                activeForm > 2
                                                  ? `wizard-number-active`
                                                  : `wizard-number`
                                              }
                                            >
                                              4
                                            </span>

                                            <span
                                              className={
                                                activeForm > 2
                                                  ? `wizard-title-active`
                                                  : `wizard-title`
                                              }
                                            >
                                              {" "}
                                              Options{" "}
                                            </span>
                                            <span class="arrow"></span>
                                          </div>
                                        </li>
                                        <li
                                          onClick={
                                            wizardStep > 4
                                              ? () => setactiveForm(4)
                                              : ""
                                          }
                                        >
                                          <div class="text">
                                            <span
                                              className={
                                                activeForm > 3
                                                  ? `wizard-number-active`
                                                  : `wizard-number`
                                              }
                                            >
                                              5
                                            </span>
                                            <span
                                              className={
                                                activeForm > 3
                                                  ? `wizard-title-active`
                                                  : `wizard-title`
                                              }
                                            >
                                              {" "}
                                              FAQs{" "}
                                            </span>
                                            <span class="arrow"></span>
                                          </div>
                                        </li>
                                        <li
                                          onClick={
                                            wizardStep > 5
                                              ? () => setactiveForm(5)
                                              : ""
                                          }
                                        >
                                          <div class="text">
                                            <span
                                              className={
                                                activeForm > 4
                                                  ? `wizard-number-active`
                                                  : `wizard-number`
                                              }
                                            >
                                              6
                                            </span>

                                            <span
                                              className={
                                                activeForm > 4
                                                  ? `wizard-title-active`
                                                  : `wizard-title`
                                              }
                                            >
                                              {" "}
                                              Requests{" "}
                                            </span>
                                            <span class="arrow"></span>
                                          </div>
                                        </li>
                                        <li
                                          onClick={
                                            wizardStep > 6
                                              ? () => setactiveForm(6)
                                              : ""
                                          }
                                        >
                                          <div class="text">
                                            <span
                                              className={
                                                activeForm > 5
                                                  ? `wizard-number-active`
                                                  : `wizard-number`
                                              }
                                            >
                                              7
                                            </span>
                                            <span
                                              className={
                                                activeForm > 5
                                                  ? `wizard-title-active`
                                                  : `wizard-title`
                                              }
                                            >
                                              {" "}
                                              Submit{" "}
                                            </span>
                                          </div>
                                          <span class="arrow"></span>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-9">
                                        {activeForm == 0 ? (
                                          <div className="col-md-12">
                                            <h4 className="wizard-title">
                                              <a href="#">
                                                Let’s Get You ‘Shakin’
                                              </a>
                                            </h4>
                                            <div className="meta wizard-subtitle">
                                              Please Provide basic information
                                              about you
                                            </div>
                                            <form
                                              action="#"
                                              method="POST"
                                              className="contact-form"
                                            >
                                              <div className="row">
                                                <div className="col-md-6">
                                                  <div className="form-group">
                                                    <select
                                                      className="form-control"
                                                      onChange={(e) =>
                                                        handleChange(
                                                          e,
                                                          "desCategory"
                                                        )
                                                      }
                                                      value={
                                                        field["desCategory"]
                                                      }
                                                    >
                                                      <option value="">
                                                        Listing Category
                                                      </option>
                                                      <option value="1">
                                                        Influencer marketing
                                                      </option>
                                                      <option value="2">
                                                        virtual Appearance
                                                      </option>
                                                      <option value="3">
                                                        video
                                                      </option>
                                                      <option value="4">
                                                        Photography
                                                      </option>
                                                      <option value="5">
                                                        Design
                                                      </option>
                                                      <option value="6">
                                                        Audio
                                                      </option>
                                                      <option value="7">
                                                        Writing
                                                      </option>
                                                    </select>
                                                    <span
                                                      className="alert-error"
                                                      style={{ color: "red" }}
                                                    >
                                                      {error["desCategory"]}
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="col-md-6">
                                                  <div className="form-group">
                                                    <select
                                                      className="form-control"
                                                      onChange={(e) =>
                                                        handleChange(
                                                          e,
                                                          "desSubCategory"
                                                        )
                                                      }
                                                      value={
                                                        field["desSubCategory"]
                                                      }
                                                    >
                                                      <option value="">
                                                        Sub Category
                                                      </option>
                                                      <option value="1">
                                                        Influencer marketing
                                                      </option>
                                                      <option value="2">
                                                        virtual Appearance
                                                      </option>
                                                      <option value="3">
                                                        video
                                                      </option>
                                                      <option value="4">
                                                        Photography
                                                      </option>
                                                      <option value="5">
                                                        Design
                                                      </option>
                                                      <option value="6">
                                                        Audio
                                                      </option>
                                                      <option value="7">
                                                        Writing
                                                      </option>
                                                    </select>
                                                    <span
                                                      className="alert-error"
                                                      style={{ color: "red" }}
                                                    >
                                                      {error["desSubCategory"]}
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="col-md-12">
                                                  <div className="form-group">
                                                    <input
                                                      onChange={(e) =>
                                                        handleChange(
                                                          e,
                                                          "desTittan"
                                                        )
                                                      }
                                                      value={field["desTittan"]}
                                                      className="form-control"
                                                      id="titan"
                                                      name="titan"
                                                      placeholder="Titan"
                                                      type="number"
                                                    />
                                                    <span
                                                      className="alert-error"
                                                      style={{ color: "red" }}
                                                    >
                                                      {error["desTittan"]}
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="col-md-6">
                                                  <div className="form-group">
                                                    <input
                                                      onChange={(e) =>
                                                        handleChange(
                                                          e,
                                                          "desBasePrice"
                                                        )
                                                      }
                                                      value={
                                                        field["desBasePrice"]
                                                      }
                                                      className="form-control"
                                                      id="baseprice"
                                                      name="baseprice"
                                                      placeholder="Base Price"
                                                      type="number"
                                                    />
                                                    <span
                                                      className="alert-error"
                                                      style={{ color: "red" }}
                                                    >
                                                      {error["desBasePrice"]}
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="col-md-6 usd-price">
                                                  <p>
                                                    All Price in USD. You can
                                                    add pricing Options, on the
                                                    next screens.
                                                  </p>
                                                  <p>
                                                    A 15% marketplace fee
                                                    applies to all orders.
                                                  </p>
                                                </div>
                                                <div className="col-md-12">
                                                  <div className="form-group comments">
                                                    <i
                                                      class="fa fa-info-circle"
                                                      aria-hidden="true"
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="This Business name is the name of your business or brand"
                                                      style={{
                                                        float: "right",
                                                        display: "flex",
                                                        marginTop: "19px",
                                                        marginBottom: "-23px",
                                                        paddingRight: "10px",
                                                      }}
                                                    ></i>
                                                    <textarea
                                                      onChange={(e) =>
                                                        handleChange(
                                                          e,
                                                          "desDescription"
                                                        )
                                                      }
                                                      value={
                                                        field["desDescription"]
                                                      }
                                                      className="form-control"
                                                      id="description"
                                                      name="description"
                                                      placeholder="Description"
                                                      defaultValue={""}
                                                    />
                                                    <span
                                                      className="alert-error"
                                                      style={{ color: "red" }}
                                                    >
                                                      {error["desDescription"]}
                                                    </span>
                                                  </div>
                                                </div>
                                                <div
                                                  className="col-md-12"
                                                  style={{ textAlign: "right" }}
                                                >
                                                  <button
                                                    onClick={(e) =>
                                                      handleSubmitValue(
                                                        "DescriptionSuccess1"
                                                      )
                                                    }
                                                    className="wizard-btn"
                                                    type="button"
                                                    name="submit"
                                                    id="submit"
                                                  >
                                                    Save &amp; Continue
                                                  </button>
                                                </div>
                                                {/* Alert Message */}
                                                <div className="col-md-12 alert-notification">
                                                  <div
                                                    id="message"
                                                    className="alert-msg"
                                                  />
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        ) : activeForm == 1 ? (
                                          <div className="col-md-12">
                                            <h4 className="wizard-title">
                                              <a href="#">
                                                Upload Your Deal Samples
                                              </a>
                                            </h4>

                                            <div className="meta wizard-subtitle wizar-des">
                                              Images for samples need to be a
                                              minimum of{" "}
                                              <b> 800px width, 450px height </b>
                                              and max file size of <b> 40mb</b>,
                                              Video uploads have a max file size
                                              of <b>500mb</b> Semples will be
                                              displayed in a <b>16:9</b> aspect
                                              ratio.
                                            </div>
                                            <form
                                              action="#"
                                              method="POST"
                                              className="contact-form"
                                            >
                                              <div className="row">
                                                <div
                                                  className="col-md-12 form-group"
                                                  style={{
                                                    marginBottom: "0px",
                                                  }}
                                                >
                                                  <div className="sample-upload">
                                                    <input
                                                      type="file"
                                                      name="pic1"
                                                      id="pic1"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                      accept="image/*"
                                                      onChange={(e) =>
                                                        OnImageChange(e)
                                                      }
                                                      multiple
                                                    />
                                                    <label for="pic1">
                                                      <img
                                                        src={upload}
                                                        className="logo right-mobile-top-icon"
                                                        alt="Logo"
                                                      />
                                                    </label>

                                                    <p>
                                                      Drag and drop a featured
                                                      photo of video here of
                                                      browse to upload your
                                                      package sample
                                                    </p>
                                                  </div>
                                                </div>
                                                <span
                                                  className="alert-error"
                                                  style={{
                                                    color: "red",
                                                    paddingLeft: "18px",
                                                  }}
                                                >
                                                  {error["sampleImg"]}
                                                </span>

                                                <div
                                                  className="col-md-12"
                                                  style={{ marginTop: "20px" }}
                                                >
                                                  {field["sampleImg"] !=
                                                  undefined ? (
                                                    <>
                                                      {(() => {
                                                        const options = [];

                                                        for (
                                                          let i = 0;
                                                          i <
                                                          field["sampleImg"]
                                                            .length;
                                                          i++
                                                        ) {
                                                          options.push(
                                                            <div className="col-md-4">
                                                              <img
                                                                key={i}
                                                                //  src={imgShow(field['sampleImg'][i])}
                                                                src={URL.createObjectURL(
                                                                  field[
                                                                    "sampleImg"
                                                                  ][i]
                                                                )}
                                                                className="img-rounded"
                                                                width="auto"
                                                                height="116"
                                                              />
                                                            </div>
                                                          );
                                                        }

                                                        return options;
                                                      })()}
                                                    </>
                                                  ) : (
                                                    ""
                                                  )}
                                                </div>
                                                <div
                                                  className="col-md-12"
                                                  style={{ textAlign: "right" }}
                                                >
                                                  <hr className="hr-marging"></hr>
                                                  <button
                                                    className="wizard-btn"
                                                    type="button"
                                                    name="submit"
                                                    id="submit"
                                                    onClick={(e) =>
                                                      handleSubmitValue(
                                                        "SamplesSuccess2"
                                                      )
                                                    }
                                                  >
                                                    Save &amp; Continue
                                                  </button>
                                                </div>
                                                {/* Alert Message */}
                                                <div className="col-md-12 alert-notification">
                                                  <div
                                                    id="message"
                                                    className="alert-msg"
                                                  />
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        ) : activeForm == 2 ? (
                                          <div className="col-md-12">
                                            <h4 className="wizard-title">
                                              <a href="#">Your Deals</a>
                                            </h4>

                                            <div
                                              className="meta wizard-subtitle"
                                              style={{
                                                borderBottom: "none",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              You can add up to four unique
                                              deals, each with different prices
                                              and specifications.
                                            </div>
                                            <form
                                              action="#"
                                              method="POST"
                                              className="contact-form"
                                            >
                                              <div className="row">
                                                {(() => {
                                                  const options = [];

                                                  for (
                                                    let i = 0;
                                                    i < dealsFormCount;
                                                    i++
                                                  ) {
                                                    options.push(
                                                      <>
                                                        <div className="col-md-12">
                                                          <hr className="hr-marging"></hr>
                                                        </div>
                                                        <div className="col-md-12">
                                                          <div className="form-group">
                                                            <input
                                                              className="form-control"
                                                              id="email"
                                                              name="email"
                                                              placeholder="Deal Title"
                                                              type="email"
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "dealDealTitle",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "dealDealTitle"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealDealTitle"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span
                                                              className="alert-error"
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              {error[
                                                                "dealDealTitle"
                                                              ] != undefined
                                                                ? error[
                                                                    "dealDealTitle"
                                                                  ][i]
                                                                : ""}
                                                            </span>
                                                          </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                          <div className="form-group comments">
                                                            <textarea
                                                              className="form-control"
                                                              id="comments"
                                                              name="comments"
                                                              placeholder="Description"
                                                              // defaultValue={""}
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "dealDescription",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "dealDescription"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealDescription"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span
                                                              className="alert-error"
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              {error[
                                                                "dealDescription"
                                                              ] != undefined
                                                                ? error[
                                                                    "dealDescription"
                                                                  ][i]
                                                                : ""}
                                                            </span>
                                                          </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                          <h4>Your Features</h4>
                                                        </div>

                                                        <div className="col-md-4">
                                                          <label>
                                                            <input
                                                              id={"checkbox1"}
                                                              type={"checkbox"}
                                                              onChange={(e) =>
                                                                handleChangeCheckBox(
                                                                  e,
                                                                  "dealFeaturescheckBoxFirst",
                                                                  i
                                                                )
                                                              }
                                                              name="1 Model"
                                                              value={
                                                                field[
                                                                  "dealFeaturescheckBoxFirst"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealFeaturescheckBoxFirst"
                                                                    ][
                                                                      "dealFeaturescheckBoxFirst" +
                                                                        i
                                                                    ]
                                                                  : ""
                                                              }
                                                              defaultChecked={
                                                                field[
                                                                  "dealFeaturescheckBoxFirst"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealFeaturescheckBoxFirst"
                                                                    ][
                                                                      "dealFeaturescheckBoxFirst" +
                                                                        i
                                                                    ]
                                                                  : false
                                                              }
                                                            ></input>
                                                            1 Model
                                                          </label>
                                                        </div>
                                                        {/* {console.log("check",field['dealFeaturescheckBoxSecond'] != undefined ? field['dealFeaturescheckBoxSecond'][i] != undefined ? true : false : false)} */}
                                                        <div className="col-md-4">
                                                          <label>
                                                            <input
                                                              id={"checkbox2"}
                                                              type={"checkbox"}
                                                              onChange={(e) =>
                                                                handleChangeCheckBox(
                                                                  e,
                                                                  "dealFeaturescheckBoxSecond",
                                                                  i
                                                                )
                                                              }
                                                              name="2 Models"
                                                              value={
                                                                field[
                                                                  "dealFeaturescheckBoxSecond"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealFeaturescheckBoxSecond"
                                                                    ][
                                                                      "dealFeaturescheckBoxSecond" +
                                                                        i
                                                                    ]
                                                                  : ""
                                                              }
                                                              defaultChecked={
                                                                field[
                                                                  "dealFeaturescheckBoxSecond"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealFeaturescheckBoxSecond"
                                                                    ][
                                                                      "dealFeaturescheckBoxSecond" +
                                                                        i
                                                                    ]
                                                                  : false
                                                              }
                                                            ></input>
                                                            2 Models
                                                          </label>
                                                        </div>

                                                        <div className="col-md-4">
                                                          <label>
                                                            <input
                                                              id={"checkbox3"}
                                                              type={"checkbox"}
                                                              onChange={(e) =>
                                                                handleChangeCheckBox(
                                                                  e,
                                                                  "dealFeaturescheckBoxThired",
                                                                  i
                                                                )
                                                              }
                                                              name="3 Models"
                                                              value={
                                                                field[
                                                                  "dealFeaturescheckBoxThired"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealFeaturescheckBoxThired"
                                                                    ][
                                                                      "dealFeaturescheckBoxThired" +
                                                                        i
                                                                    ]
                                                                  : ""
                                                              }
                                                              defaultChecked={
                                                                field[
                                                                  "dealFeaturescheckBoxThired"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealFeaturescheckBoxThired"
                                                                    ][
                                                                      "dealFeaturescheckBoxThired" +
                                                                        i
                                                                    ]
                                                                  : false
                                                              }
                                                            ></input>
                                                            3 Models
                                                          </label>
                                                        </div>

                                                        <div className="col-md-6">
                                                          <div className="form-group">
                                                            <input
                                                              className="form-control"
                                                              id="email"
                                                              name="email"
                                                              placeholder="Revisions"
                                                              type="email"
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "dealRevisions",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "dealRevisions"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealRevisions"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span className="alert-error" />
                                                          </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                          <div className="form-group">
                                                            <input
                                                              className="form-control"
                                                              id="email"
                                                              name="email"
                                                              placeholder="delivery time"
                                                              type="email"
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "dealDeliveryTime",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "dealDeliveryTime"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealDeliveryTime"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span className="alert-error" />
                                                          </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                          <div className="form-group">
                                                            <input
                                                              className="form-control"
                                                              id="email"
                                                              name="email"
                                                              placeholder="Revisions"
                                                              type="email"
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "dealRevisions2",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "dealRevisions2"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealRevisions2"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span className="alert-error" />
                                                          </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                          <div className="form-group">
                                                            <input
                                                              className="form-control"
                                                              id="otherPrice"
                                                              name="otherPrice"
                                                              placeholder="Price"
                                                              type="number"
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "dealOtherPrice",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "dealOtherPrice"
                                                                ] != undefined
                                                                  ? field[
                                                                      "dealOtherPrice"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span className="alert-error" />
                                                          </div>
                                                        </div>
                                                        {i != 0 ? (
                                                          <div class="col-md-12">
                                                            <span>
                                                              <a
                                                                onClick={() =>
                                                                  removeItem(
                                                                    "Deal",
                                                                    i
                                                                  )
                                                                }
                                                              >
                                                                Remove Deal
                                                              </a>
                                                            </span>
                                                          </div>
                                                        ) : (
                                                          ""
                                                        )}
                                                      </>
                                                    );
                                                  }

                                                  return options;
                                                })()}

                                                <div class="col-md-12 another-deal">
                                                  <span>
                                                    <a
                                                      onClick={() =>
                                                        setDealsFormCount(
                                                          dealsFormCount + 1
                                                        )
                                                      }
                                                    >
                                                      Add Another Deal
                                                    </a>
                                                  </span>
                                                </div>

                                                <div className="col-md-12">
                                                  <hr className="hr-marging"></hr>
                                                </div>

                                                <div
                                                  className="col-md-12"
                                                  style={{ textAlign: "right" }}
                                                >
                                                  <button
                                                    onClick={(e) =>
                                                      handleSubmitValue(
                                                        "DealSuccess3"
                                                      )
                                                    }
                                                    className="wizard-btn"
                                                    type="button"
                                                    name="submit"
                                                    id="submit"
                                                  >
                                                    Save &amp; Continue
                                                  </button>
                                                </div>
                                                {/* Alert Message */}
                                                <div className="col-md-12 alert-notification">
                                                  <div
                                                    id="message"
                                                    className="alert-msg"
                                                  />
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        ) : activeForm == 3 ? (
                                          <div className="col-md-12">
                                            <h4 className="wizard-title">
                                              <a href="#">Your Options</a>
                                            </h4>

                                            <div className="meta wizard-subtitle">
                                              If you have optional services that
                                              can be added to this Shake add
                                              them here.
                                            </div>
                                            <form
                                              action="#"
                                              method="POST"
                                              className="contact-form"
                                            >
                                              <div className="row">
                                                {(() => {
                                                  const options = [];

                                                  for (
                                                    let i = 0;
                                                    i < optionsFormCount;
                                                    i++
                                                  ) {
                                                    options.push(
                                                      <>
                                                        <div className="col-md-12">
                                                          <div className="form-group">
                                                            <input
                                                              className="form-control"
                                                              id="email"
                                                              name="email"
                                                              placeholder="Option Title"
                                                              type="email"
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "OptionTitle",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "OptionTitle"
                                                                ] != undefined
                                                                  ? field[
                                                                      "OptionTitle"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span
                                                              className="alert-error"
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              {error[
                                                                "OptionTitle"
                                                              ] != undefined
                                                                ? error[
                                                                    "OptionTitle"
                                                                  ][i]
                                                                : ""}
                                                            </span>
                                                          </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                          <div className="form-group comments">
                                                            <textarea
                                                              className="form-control"
                                                              id="comments"
                                                              name="comments"
                                                              placeholder="Description"
                                                              defaultValue={""}
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "optionsDescription",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "optionsDescription"
                                                                ] != undefined
                                                                  ? field[
                                                                      "optionsDescription"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span
                                                              className="alert-error"
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              {error[
                                                                "optionsDescription"
                                                              ] != undefined
                                                                ? error[
                                                                    "optionsDescription"
                                                                  ][i]
                                                                : ""}
                                                            </span>
                                                          </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                          <div className="form-group">
                                                            <input
                                                              className="form-control"
                                                              id="email"
                                                              name="email"
                                                              placeholder="Additional Delivery Time"
                                                              type="email"
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "optionsAdditionalDeliveryTime",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "optionsAdditionalDeliveryTime"
                                                                ] != undefined
                                                                  ? field[
                                                                      "optionsAdditionalDeliveryTime"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span
                                                              className="alert-error"
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              {error[
                                                                "optionsAdditionalDeliveryTime"
                                                              ] != undefined
                                                                ? error[
                                                                    "optionsAdditionalDeliveryTime"
                                                                  ][i]
                                                                : ""}
                                                            </span>
                                                          </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                          <div className="form-group">
                                                            <input
                                                              className="form-control"
                                                              id="otherPrice"
                                                              name="otherPrice"
                                                              placeholder="Price"
                                                              type="number"
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "optionsotherPrice",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "optionsotherPrice"
                                                                ] != undefined
                                                                  ? field[
                                                                      "optionsotherPrice"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span
                                                              className="alert-error"
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              {error[
                                                                "optionsotherPrice"
                                                              ] != undefined
                                                                ? error[
                                                                    "optionsotherPrice"
                                                                  ][i]
                                                                : ""}
                                                            </span>
                                                          </div>
                                                        </div>
                                                        {i != 0 ? (
                                                          <div class="col-md-12">
                                                            <span>
                                                              <a
                                                                onClick={() =>
                                                                  removeItem(
                                                                    "option",
                                                                    i
                                                                  )
                                                                }
                                                              >
                                                                Remove options
                                                              </a>
                                                            </span>
                                                          </div>
                                                        ) : (
                                                          ""
                                                        )}
                                                      </>
                                                    );
                                                  }

                                                  return options;
                                                })()}

                                                <div className="col-md-12 another-deal">
                                                  <span>
                                                    <a
                                                      onClick={() =>
                                                        setOptionsFormCount(
                                                          optionsFormCount + 1
                                                        )
                                                      }
                                                    >
                                                      Add Another options
                                                    </a>
                                                  </span>
                                                </div>

                                                <div className="col-md-12">
                                                  <hr className="hr-marging"></hr>
                                                </div>

                                                <div
                                                  className="col-md-12"
                                                  style={{ textAlign: "right" }}
                                                >
                                                  <button
                                                    onClick={(e) =>
                                                      handleSubmitValue(
                                                        "OptionsSuccess4"
                                                      )
                                                    }
                                                    className="wizard-btn"
                                                    type="button"
                                                    name="submit"
                                                    id="submit"
                                                  >
                                                    Save &amp; Continue
                                                  </button>
                                                </div>
                                                {/* Alert Message */}
                                                <div className="col-md-12 alert-notification">
                                                  <div
                                                    id="message"
                                                    className="alert-msg"
                                                  />
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        ) : activeForm == 4 ? (
                                          <div className="col-md-12">
                                            <h4 className="wizard-title">
                                              <a href="#">FAQs</a>
                                            </h4>

                                            <div className="meta wizard-subtitle">
                                              Frequently Asked Questions are
                                              used to help answer common
                                              pre-sale questions that customers
                                              might have about your service. Use
                                              FAQs to help gude your customers
                                              through the process and set
                                              expectations prior to shaking.
                                              View Example
                                            </div>
                                            <form
                                              action="#"
                                              method="POST"
                                              className="contact-form"
                                            >
                                              <div className="row">
                                                {(() => {
                                                  const options = [];

                                                  for (
                                                    let i = 0;
                                                    i < frequentlyFormCount;
                                                    i++
                                                  ) {
                                                    options.push(
                                                      <>
                                                        <div className="col-md-12">
                                                          <div className="form-group">
                                                            <input
                                                              className="form-control"
                                                              id="email"
                                                              name="email"
                                                              placeholder="Question"
                                                              type="email"
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "frequentlyQuestion",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "frequentlyQuestion"
                                                                ] != undefined
                                                                  ? field[
                                                                      "frequentlyQuestion"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span
                                                              className="alert-error"
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              {error[
                                                                "frequentlyQuestion"
                                                              ] != undefined
                                                                ? error[
                                                                    "frequentlyQuestion"
                                                                  ][i]
                                                                : ""}
                                                            </span>
                                                          </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                          <div className="form-group comments">
                                                            <textarea
                                                              className="form-control"
                                                              id="comments"
                                                              name="comments"
                                                              placeholder="Answer"
                                                              defaultValue={""}
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "frequentlyComments",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "frequentlyComments"
                                                                ] != undefined
                                                                  ? field[
                                                                      "frequentlyComments"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                            <span
                                                              className="alert-error"
                                                              style={{
                                                                color: "red",
                                                              }}
                                                            >
                                                              {error[
                                                                "frequentlyComments"
                                                              ] != undefined
                                                                ? error[
                                                                    "frequentlyComments"
                                                                  ][i]
                                                                : ""}
                                                            </span>
                                                          </div>
                                                        </div>
                                                        {i != 0 ? (
                                                          <div class="col-md-12">
                                                            <span>
                                                              <a
                                                                onClick={() =>
                                                                  removeItem(
                                                                    "FAQs",
                                                                    i
                                                                  )
                                                                }
                                                              >
                                                                Remove FAQs
                                                              </a>
                                                            </span>
                                                          </div>
                                                        ) : (
                                                          ""
                                                        )}
                                                      </>
                                                    );
                                                  }

                                                  return options;
                                                })()}

                                                <div class="col-md-12 another-deal">
                                                  <span>
                                                    <a
                                                      onClick={() =>
                                                        setFrequentlyFormCount(
                                                          frequentlyFormCount +
                                                            1
                                                        )
                                                      }
                                                    >
                                                      Add Another FAQs{" "}
                                                    </a>
                                                  </span>
                                                </div>

                                                <div className="col-md-12">
                                                  <hr className="hr-marging"></hr>
                                                </div>

                                                <div
                                                  className="col-md-12"
                                                  style={{ textAlign: "right" }}
                                                >
                                                  <button
                                                    onClick={(e) =>
                                                      handleSubmitValue(
                                                        "FrequentlySuccess5"
                                                      )
                                                    }
                                                    className="wizard-btn"
                                                    type="button"
                                                    name="submit"
                                                    id="submit"
                                                  >
                                                    Save &amp; Continue
                                                  </button>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        ) : activeForm == 5 ? (
                                          <div className="col-md-12">
                                            <h4 className="wizard-title">
                                              <a href="#">Buyer Requests</a>
                                            </h4>

                                            <div className="meta wizard-subtitle">
                                              What information do you need from
                                              your customers in order to get
                                              started? When you create
                                            </div>
                                            <form
                                              action="#"
                                              method="POST"
                                              className="contact-form"
                                            >
                                              <div className="row">
                                                {(() => {
                                                  const options = [];

                                                  for (
                                                    let i = 0;
                                                    i < requiredFormCount;
                                                    i++
                                                  ) {
                                                    options.push(
                                                      <>
                                                        <div className="col-md-12">
                                                          <div className="form-group comments">
                                                            <textarea
                                                              className="form-control"
                                                              id="comments"
                                                              name="comments"
                                                              placeholder="Ask your buyer what you need in order to start creating 400 characters remaining"
                                                              defaultValue={""}
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "requestsComments",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "requestsComments"
                                                                ] != undefined
                                                                  ? field[
                                                                      "requestsComments"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                          </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                          <div className="form-group comments">
                                                            <label>
                                                              Type Request
                                                            </label>
                                                            <textarea
                                                              className="form-control"
                                                              id="comments"
                                                              name="comments"
                                                              placeholder="Choose One"
                                                              defaultValue={""}
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  "requestsTypesOf",
                                                                  i
                                                                )
                                                              }
                                                              value={
                                                                field[
                                                                  "requestsTypesOf"
                                                                ] != undefined
                                                                  ? field[
                                                                      "requestsTypesOf"
                                                                    ][i]
                                                                  : ""
                                                              }
                                                            />
                                                          </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                          <b>
                                                            Required Request
                                                          </b>

                                                          <label
                                                            style={{
                                                              float: "right",
                                                            }}
                                                          >
                                                            <Switch
                                                              onChange={() =>
                                                                handleChangeToggle(
                                                                  field[
                                                                    "requestsStatus"
                                                                  ][i],
                                                                  "requestsStatus",
                                                                  i
                                                                )
                                                              }
                                                              checked={
                                                                field[
                                                                  "requestsStatus"
                                                                ][i]
                                                              }
                                                              onColor="#86d3ff"
                                                              onHandleColor="#2693e6"
                                                              handleDiameter={
                                                                30
                                                              }
                                                              uncheckedIcon={
                                                                false
                                                              }
                                                              checkedIcon={
                                                                false
                                                              }
                                                              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                              height={20}
                                                              width={48}
                                                              className="react-switch"
                                                              id="material-switch"
                                                            />
                                                          </label>
                                                        </div>
                                                        {i != 0 ? (
                                                          <div class="col-md-12">
                                                            <span>
                                                              <a
                                                                onClick={() =>
                                                                  removeItem(
                                                                    "request",
                                                                    i
                                                                  )
                                                                }
                                                              >
                                                                Remove Request
                                                              </a>
                                                            </span>
                                                          </div>
                                                        ) : (
                                                          ""
                                                        )}
                                                      </>
                                                    );
                                                  }

                                                  return options;
                                                })()}

                                                <div class="col-md-12 another-deal">
                                                  <span>
                                                    <a
                                                      onClick={() =>
                                                        setRequiredFormCount(
                                                          requiredFormCount + 1
                                                        )
                                                      }
                                                    >
                                                      Add Another Request
                                                    </a>
                                                  </span>
                                                </div>

                                                <div className="col-md-12">
                                                  <hr className="hr-marging"></hr>
                                                </div>

                                                <div
                                                  className="col-md-12"
                                                  style={{ textAlign: "right" }}
                                                >
                                                  <button
                                                    //  this time Skip Validations
                                                    onClick={(e) =>
                                                      handleSubmitValue(
                                                        "RequestsSuccess6"
                                                      )
                                                    }
                                                    className="wizard-btn"
                                                    type="button"
                                                    name="submit"
                                                    id="submit"
                                                  >
                                                    Skip &amp; Continue
                                                  </button>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        ) : (
                                          <div className="col-md-12">
                                            <div className="row">
                                              {field["sampleImg"] !=
                                              undefined ? (
                                                <Carousel>
                                                  {(() => {
                                                    const options = [];

                                                    for (
                                                      let i = 0;
                                                      i <
                                                      field["sampleImg"].length;
                                                      i++
                                                    ) {
                                                      options.push(
                                                        <div
                                                          style={{
                                                            marginTop: "0px",
                                                          }}
                                                        >
                                                          <img
                                                            key={i}
                                                            //  src={imgShow(field['sampleImg'][i])}
                                                            src={URL.createObjectURL(
                                                              field[
                                                                "sampleImg"
                                                              ][i]
                                                            )}
                                                            // className="img-rounded" width="auto" height="116"
                                                          />
                                                        </div>
                                                      );
                                                    }

                                                    return options;
                                                  })()}

                                                  {/* <div>
                                              <img src="https://i.imgur.com/weXVL8M.jpg" />
                                            </div>
                                            <div>
                                              <img src="https://i.imgur.com/weXVL8M.jpg" />
                                            </div>
                                            <div>
                                              <img src="https://i.imgur.com/weXVL8M.jpg" />
                                            </div> */}
                                                </Carousel>
                                              ) : (
                                                ""
                                              )}
                                            </div>
                                            <h4 className="wizard-title">
                                              <a href="#">
                                                <h4>
                                                  Professional Model and photo
                                                  shoot with your product
                                                </h4>
                                              </a>
                                            </h4>

                                            <p>
                                              Have your product photographed
                                              with a professional model by a
                                              professional photographer! This
                                              Shake includes model of your
                                              choice (we will send you three
                                              potential models to choose from)
                                              and Eight high resolution
                                              retouched images with reproduction
                                              rights.
                                            </p>
                                            {(() => {
                                              const options = [];

                                              for (
                                                let i = 0;
                                                i < dealsFormCount;
                                                i++
                                              ) {
                                                options.push(
                                                  <>
                                                    <div
                                                      className="col-md-12"
                                                      style={{
                                                        borderRadius: ".25rem",
                                                        boxShadow:
                                                          "0 .125rem .25rem rgba(0,0,0,.075)",
                                                        border:
                                                          "rgb(59, 113, 202) 1px inset",
                                                        borderRadius: "13px",
                                                      }}
                                                    >
                                                      {i == 0 ? (
                                                        <h4
                                                          style={{
                                                            marginTop: "-2%",
                                                            background: "white",
                                                            width:
                                                              "fit-content",
                                                            marginLeft: "4%",
                                                          }}
                                                        >
                                                          Let’s Shake On...
                                                        </h4>
                                                      ) : (
                                                        ""
                                                      )}
                                                      {i == 0 ? (
                                                        <img
                                                          src={icon4}
                                                          className="signup-edit-icon"
                                                          onClick={() =>
                                                            setactiveForm(2)
                                                          }
                                                        ></img>
                                                      ) : (
                                                        ""
                                                      )}
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                          marginTop:
                                                            1 == 0
                                                              ? "3%"
                                                              : "4%",
                                                        }}
                                                      >
                                                        <div className="col-md-10">
                                                          <h5
                                                            style={{
                                                              marginLeft: "1%",
                                                              color: "black",
                                                              fontWeight: "800",
                                                            }}
                                                          >
                                                            {field[
                                                              "dealDealTitle"
                                                            ] != undefined &&
                                                            field[
                                                              "dealDealTitle"
                                                            ][i] != undefined
                                                              ? field[
                                                                  "dealDealTitle"
                                                                ][i]
                                                              : ""}
                                                          </h5>
                                                        </div>
                                                        <div className="col-md-2">
                                                          <h5
                                                            style={{
                                                              color: "black",
                                                              fontWeight: "800",
                                                            }}
                                                          >
                                                            {field[
                                                              "dealOtherPrice"
                                                            ] != undefined &&
                                                            field[
                                                              "dealOtherPrice"
                                                            ][i] != undefined
                                                              ? field[
                                                                  "dealOtherPrice"
                                                                ][i]
                                                              : ""}
                                                          </h5>
                                                        </div>
                                                      </div>
                                                      <h5
                                                        style={{
                                                          marginLeft: "4%",
                                                          color: "black",
                                                          fontWeight: "800",
                                                        }}
                                                      >
                                                        Description
                                                      </h5>
                                                      <p
                                                        style={{
                                                          marginLeft: "4%",
                                                          marginRight: "4%",
                                                        }}
                                                      >
                                                        {field[
                                                          "dealDescription"
                                                        ] != undefined &&
                                                        field[
                                                          "dealDescription"
                                                        ][i] != undefined
                                                          ? field[
                                                              "dealDescription"
                                                            ][i]
                                                          : ""}
                                                      </p>

                                                      {/* <div>$1,200</div> */}

                                                      <hr></hr>

                                                      {/* <h3>Features</h3> */}
                                                      <h5
                                                        style={{
                                                          marginLeft: "4%",
                                                          color: "black",
                                                          fontWeight: "800",
                                                        }}
                                                      >
                                                        Features
                                                      </h5>
                                                      <div className="col-md-12">
                                                        <div className="col-md-4">
                                                          <span>
                                                            <i
                                                              class="fa fa-check-circle"
                                                              aria-hidden="true"
                                                              style={{
                                                                color:
                                                                  field[
                                                                    "dealFeaturescheckBoxFirst"
                                                                  ] !=
                                                                    undefined &&
                                                                  field[
                                                                    "dealFeaturescheckBoxFirst"
                                                                  ][
                                                                    "dealFeaturescheckBoxFirst" +
                                                                      i
                                                                  ] != undefined
                                                                    ? "#008000ab"
                                                                    : "gray",
                                                              }}
                                                            ></i>{" "}
                                                            1 Model
                                                          </span>
                                                        </div>
                                                        <div className="col-md-4">
                                                          <span>
                                                            <i
                                                              class="fa fa-check-circle"
                                                              aria-hidden="true"
                                                              style={{
                                                                color:
                                                                  field[
                                                                    "dealFeaturescheckBoxSecond"
                                                                  ] !=
                                                                    undefined &&
                                                                  field[
                                                                    "dealFeaturescheckBoxSecond"
                                                                  ][
                                                                    "dealFeaturescheckBoxSecond" +
                                                                      i
                                                                  ] != undefined
                                                                    ? "#008000ab"
                                                                    : "gray",
                                                              }}
                                                            ></i>{" "}
                                                            1 Model
                                                          </span>
                                                        </div>
                                                        <div className="col-md-4">
                                                          <span>
                                                            <i
                                                              class="fa fa-check-circle"
                                                              aria-hidden="true"
                                                              style={{
                                                                color:
                                                                  field[
                                                                    "dealFeaturescheckBoxThired"
                                                                  ] !=
                                                                    undefined &&
                                                                  field[
                                                                    "dealFeaturescheckBoxThired"
                                                                  ][
                                                                    "dealFeaturescheckBoxThired" +
                                                                      i
                                                                  ] != undefined
                                                                    ? "#008000ab"
                                                                    : "gray",
                                                              }}
                                                            ></i>{" "}
                                                            1 Model
                                                          </span>
                                                        </div>
                                                        {/* <div className="col-md-4">
                                              <span><i class="fa fa-check-circle" aria-hidden="true" style={{ color: '#008000ab' }} ></i> 1 Revisions</span>
                                            </div>
                                            <div className="col-md-4">
                                              <span><i class="fa fa-check-circle" aria-hidden="true" style={{ color: '#008000ab' }} ></i> 2 Days Delivery</span>
                                            </div> */}
                                                        <div className="col-md-4"></div>
                                                        {/* <div>Full commercial use</div> */}
                                                      </div>
                                                      <div className="col-md-12">
                                                        <div className="col-md-4">
                                                          <spna
                                                            style={{
                                                              fontSize: "12px",
                                                            }}
                                                          >
                                                            <img
                                                              src={icon1}
                                                              style={{
                                                                marginTop:
                                                                  "-1px",
                                                              }}
                                                            ></img>{" "}
                                                            {field[
                                                              "dealRevisions"
                                                            ] != undefined &&
                                                            field[
                                                              "dealRevisions"
                                                            ][i] != undefined
                                                              ? field[
                                                                  "dealRevisions"
                                                                ][i]
                                                              : ""}{" "}
                                                            Revisions
                                                          </spna>
                                                        </div>
                                                        <div
                                                          className="col-md-4"
                                                          style={{
                                                            padding: "0px",
                                                          }}
                                                        >
                                                          <spna
                                                            style={{
                                                              fontSize: "12px",
                                                            }}
                                                          >
                                                            <img
                                                              src={icon2}
                                                              style={{
                                                                marginTop:
                                                                  "-1px",
                                                              }}
                                                            ></img>{" "}
                                                            {field[
                                                              "dealDeliveryTime"
                                                            ] != undefined &&
                                                            field[
                                                              "dealDeliveryTime"
                                                            ][i] != undefined
                                                              ? field[
                                                                  "dealDeliveryTime"
                                                                ][i]
                                                              : ""}{" "}
                                                            Days Delivery
                                                          </spna>
                                                        </div>
                                                        {/* <div className="col-md-4">
                                              <spna style={{ fontSize: '12px' }}><img src={icon3} style={{ marginTop: '-1px' }}></img> Full commercial use</spna>
                                            </div> */}
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              }

                                              return options;
                                            })()}

                                            {/* <div className="col-md-12" style={{ borderRadius: '.25rem', boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)', border: 'rgb(59, 113, 202) 1px inset', borderRadius: '13px' }}>
                                          <div style={{ display: "flex", paddingTop: '2%' }}>
                                            <div className="col-md-10">
                                              <h5 style={{ marginLeft: '1%', color: "black", fontWeight: '800' }} >Model & Photoshoot with Behind the
                                                scenes video</h5>
                                            </div>
                                            <div className="col-md-2">
                                              <h5 style={{ color: 'black', fontWeight: "800" }}>$1,200</h5>
                                            </div>
                                          </div>
                                          <h5 style={{ marginLeft: '4%', color: "black", fontWeight: '800' }} >Description</h5>
                                          <p style={{ marginLeft: '4%', marginRight: '4%' }}>
                                            Have your product photographed with
                                            a professional model by a
                                            professional photographer! This
                                            Shake includes model of your choice
                                            (we will send you three potential
                                            models to choose from) and Eight
                                            high resolution retouched images
                                            with reproduction rights.
                                          </p>


                                          <hr></hr>

                                          <h5 style={{ marginLeft: '4%', color: "black", fontWeight: '800' }} >Features</h5>
                                          <div className="col-md-12">
                                            <div className="col-md-4">
                                              <span><i class="fa fa-check-circle" aria-hidden="true" style={{ color: '#008000ab' }} ></i> 1 Model</span>
                                            </div>
                                            <div className="col-md-4">
                                              <span><i class="fa fa-check-circle" aria-hidden="true" style={{ color: '#008000ab' }}></i> 1 Model</span>
                                            </div>
                                            <div className="col-md-4">
                                              <span><i class="fa fa-check-circle" aria-hidden="true" style={{ color: '#008000ab' }}></i> 1 Model</span>
                                            </div>
                                            <div className="col-md-4">
                                              <span><i class="fa fa-check-circle" aria-hidden="true" style={{ color: '#008000ab' }}></i> 1 Revisions</span>
                                            </div>
                                            <div className="col-md-4">
                                              <span><i class="fa fa-check-circle" aria-hidden="true" style={{ color: '#008000ab' }}></i> 2 Days Delivery</span>
                                            </div>
                                            <div className="col-md-4"></div>
                                          </div>

                                          <div className="col-md-12">
                                            <div className="col-md-3">
                                              <spna style={{ fontSize: '12px' }}><img src={icon1} style={{ marginTop: '-1px' }}></img> 1 Revisions</spna>
                                            </div>
                                            <div className="col-md-3" style={{ padding: '0px' }}>
                                              <spna style={{ fontSize: '12px' }}><img src={icon2} style={{ marginTop: '-1px' }}></img> 2 Days Delivery</spna>
                                            </div>
                                            <div className="col-md-6">
                                              <spna style={{ fontSize: '12px' }}><img src={icon3} style={{ marginTop: '-1px' }}></img> Full commercial use</spna>
                                            </div>

                                          </div>
                                        </div> */}

                                            {(() => {
                                              const options = [];

                                              for (
                                                let i = 0;
                                                i < optionsFormCount;
                                                i++
                                              ) {
                                                options.push(
                                                  <>
                                                    <div
                                                      className="col-md-12"
                                                      style={{
                                                        borderRadius: ".25rem",
                                                        boxShadow:
                                                          "0 .125rem .25rem rgba(0,0,0,.075)",
                                                        border:
                                                          "rgb(59, 113, 202) 1px inset",
                                                        borderRadius: "13px",
                                                        marginTop:
                                                          i == 0 ? "5%" : "0%",
                                                      }}
                                                    >
                                                      {i == 0 ? (
                                                        <h4
                                                          style={{
                                                            marginTop: "-2%",
                                                            background: "white",
                                                            width:
                                                              "fit-content",
                                                            marginLeft: "4%",
                                                          }}
                                                        >
                                                          Options
                                                        </h4>
                                                      ) : (
                                                        ""
                                                      )}
                                                      {i == 0 ? (
                                                        <img
                                                          src={icon4}
                                                          className="signup-edit-icon"
                                                          onClick={() =>
                                                            setactiveForm(3)
                                                          }
                                                        ></img>
                                                      ) : (
                                                        ""
                                                      )}

                                                      {/* <div style={{ display: "flex" }}> */}
                                                      {/* <div className="col-md-12">
                                              <h5 style={{ marginLeft: '1%', color: "black", fontWeight: '800' }} > {field['OptionTitle']!= undefined && field['OptionTitle'][i] != undefined ? field['OptionTitle'][i] :''}</h5>
                                            </div> */}
                                                      {/* <div className="col-md-2">
                                            <h5 style={{color: 'black', fontWeight: "800" }}>$1,200</h5>
                                            </div> */}
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                          marginTop:
                                                            i == 0
                                                              ? "0%"
                                                              : "4%",
                                                        }}
                                                      >
                                                        <div className="col-md-10">
                                                          <h5
                                                            style={{
                                                              marginLeft: "1%",
                                                              color: "black",
                                                              fontWeight: "800",
                                                            }}
                                                          >
                                                            {field[
                                                              "OptionTitle"
                                                            ] != undefined &&
                                                            field[
                                                              "OptionTitle"
                                                            ][i] != undefined
                                                              ? field[
                                                                  "OptionTitle"
                                                                ][i]
                                                              : ""}
                                                          </h5>
                                                        </div>
                                                        <div className="col-md-2">
                                                          <h5
                                                            style={{
                                                              color: "black",
                                                              fontWeight: "800",
                                                            }}
                                                          >
                                                            {field[
                                                              "optionsotherPrice"
                                                            ] != undefined &&
                                                            field[
                                                              "optionsotherPrice"
                                                            ][i] != undefined
                                                              ? field[
                                                                  "optionsotherPrice"
                                                                ][i]
                                                              : ""}
                                                          </h5>
                                                        </div>
                                                      </div>
                                                      {/* </div> */}
                                                      <h5
                                                        style={{
                                                          marginLeft: "4%",
                                                          color: "black",
                                                          fontWeight: "800",
                                                        }}
                                                      >
                                                        Description
                                                      </h5>
                                                      <p
                                                        style={{
                                                          marginLeft: "4%",
                                                          marginRight: "4%",
                                                        }}
                                                      >
                                                        {field[
                                                          "optionsDescription"
                                                        ] != undefined &&
                                                        field[
                                                          "optionsDescription"
                                                        ][i] != undefined
                                                          ? field[
                                                              "optionsDescription"
                                                            ][i]
                                                          : ""}
                                                      </p>

                                                      {/* <div>$1,200</div> */}

                                                      <hr></hr>

                                                      {/* <h3>Features</h3> */}
                                                      <h5
                                                        style={{
                                                          marginLeft: "4%",
                                                          color: "black",
                                                          fontWeight: "800",
                                                        }}
                                                      >
                                                        Features
                                                      </h5>
                                                      <div className="col-md-12">
                                                        <div className="col-md-3">
                                                          <spna
                                                            style={{
                                                              fontSize: "12px",
                                                            }}
                                                          >
                                                            <i
                                                              class="fa fa-check-circle"
                                                              aria-hidden="true"
                                                            ></i>{" "}
                                                            1 Revisions
                                                          </spna>
                                                        </div>
                                                        <div className="col-md-9"></div>
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              }
                                              return options;
                                            })()}

                                            <div
                                              className="col-md-12"
                                              style={{ marginTop: "5%" }}
                                            >
                                              <h4 style={{ marginLeft: "4%" }}>
                                                FAQs
                                              </h4>

                                              {(() => {
                                                const options = [];

                                                for (
                                                  let i = 0;
                                                  i < frequentlyFormCount;
                                                  i++
                                                ) {
                                                  options.push(
                                                    <>
                                                      <h5
                                                        style={{
                                                          marginLeft: "4%",
                                                          color: "black",
                                                          fontWeight: "800",
                                                        }}
                                                      >
                                                        {field[
                                                          "frequentlyQuestion"
                                                        ] != undefined &&
                                                        field[
                                                          "frequentlyQuestion"
                                                        ][i] != undefined
                                                          ? field[
                                                              "frequentlyQuestion"
                                                            ][i]
                                                          : ""}
                                                      </h5>
                                                      <hr />
                                                      <p
                                                        style={{
                                                          marginLeft: "4%",
                                                          marginRight: "4%",
                                                        }}
                                                      >
                                                        {field[
                                                          "frequentlyComments"
                                                        ] != undefined &&
                                                        field[
                                                          "frequentlyComments"
                                                        ][i] != undefined
                                                          ? field[
                                                              "frequentlyComments"
                                                            ][i]
                                                          : ""}
                                                      </p>
                                                    </>
                                                  );
                                                }

                                                return options;
                                              })()}
                                            </div>
                                            {(() => {
                                              const options = [];

                                              for (
                                                let i = 0;
                                                i < requiredFormCount;
                                                i++
                                              ) {
                                                options.push(
                                                  <>
                                                    <div
                                                      className="col-md-12 signup-edit-card"
                                                      style={{
                                                        marginTop:
                                                          i == 0 ? "5%" : "0%",
                                                      }}
                                                    >
                                                      {i == 0 ? (
                                                        <>
                                                          {" "}
                                                          <h4
                                                            style={{
                                                              marginTop: "-2%",
                                                              background:
                                                                "white",
                                                              width:
                                                                "fit-content",
                                                              marginLeft: "4%",
                                                            }}
                                                          >
                                                            Buyer Requests
                                                          </h4>
                                                          <img
                                                            src={icon4}
                                                            style={{
                                                              marginTop: "-8%",
                                                              float: "right",
                                                              marginRight: "6%",
                                                              cursor: "pointer",
                                                            }}
                                                            onClick={() =>
                                                              setactiveForm(5)
                                                            }
                                                          ></img>
                                                        </>
                                                      ) : (
                                                        ""
                                                      )}

                                                      {/* <span style={{ display: 'block', color: 'gray', fontSize: '14px', fontWeight: '500' }}>Type: Multiple Selections</span>
                                          <span style={{ display: 'block', color: 'gray', fontSize: '14px', fontWeight: '500', marginBottom: '2%' }}>How will i receive the product</span>

                                          <spam style={{ marginTop: '-2px', display: 'block' }}> <input id={"checkboxCard"} type={"checkbox"} style={{ marginRight: '2px' }}></input>  You will need to purchase</spam>
                                          <spam style={{ marginTop: '-2px', display: 'block' }}> <input id={"checkboxCard"} type={"checkbox"} style={{ marginRight: '2px' }}></input> You will ship you the product</spam> */}
                                                      <h5
                                                        style={{
                                                          marginLeft: "4%",
                                                          color: "black",
                                                          fontWeight: "800",
                                                          marginTop:
                                                            i == 0
                                                              ? "0%"
                                                              : "4%",
                                                        }}
                                                      >
                                                        Ask Your Buyer
                                                      </h5>

                                                      <span
                                                        style={{
                                                          display: "block",
                                                          color: "gray",
                                                          fontSize: "14px",
                                                          fontWeight: "500",
                                                          paddingBottom: "3%",
                                                          marginLeft: "4%",
                                                        }}
                                                      >
                                                        {field[
                                                          "requestsComments"
                                                        ] != undefined &&
                                                        field[
                                                          "requestsComments"
                                                        ][i] != undefined
                                                          ? field[
                                                              "requestsComments"
                                                            ][i]
                                                          : ""}
                                                      </span>

                                                      <hr></hr>

                                                      {/* <span style={{ display: 'block', color: 'gray', fontSize: '14px', fontWeight: '500', marginTop: '3%' }}>Type: FreeForm</span> */}
                                                      <h5
                                                        style={{
                                                          marginLeft: "4%",
                                                          color: "black",
                                                          fontWeight: "800",
                                                        }}
                                                      >
                                                        Type Request
                                                      </h5>

                                                      <span
                                                        style={{
                                                          display: "block",
                                                          color: "gray",
                                                          fontSize: "14px",
                                                          fontWeight: "500",
                                                          paddingBottom: "3%",
                                                          marginLeft: "4%",
                                                        }}
                                                      >
                                                        {field[
                                                          "requestsTypesOf"
                                                        ] != undefined &&
                                                        field[
                                                          "requestsTypesOf"
                                                        ][i] != undefined
                                                          ? field[
                                                              "requestsTypesOf"
                                                            ][i]
                                                          : ""}
                                                      </span>
                                                    </div>
                                                  </>
                                                );
                                              }

                                              return options;
                                            })()}
                                          </div>
                                        )}
                                      </div>

                                      <div className="col-md-3">
                                        {activeForm != 6 ? (
                                          <div className="col-md-12 thumb wizard-right padding-left-0">
                                            <h4>Marketplace Preview</h4>
                                            <div className="desc">
                                              <div className="marketplace-inner">
                                                <div className="marketplace-top"></div>
                                                <div className="marketplace-cirlce">
                                                  {field["sampleImg"] !=
                                                  undefined ? (
                                                    <img
                                                      src={URL.createObjectURL(
                                                        field["sampleImg"][0]
                                                      )}
                                                    ></img>
                                                  ) : (
                                                    ""
                                                  )}
                                                </div>
                                                <div className="marketplace-inner-white" />
                                                <div className="marketplace-bottom">
                                                  {/* <div className="row">
                                                    <div className="col-md-3">
                                                      <div className="marketplace-profile" />
                                                    </div>
                                                    <div className="col-md-8">
                                                      <div className="marketplace-name">
                                                        {/* Gopal Daiya */}
                                                </div>
                                                <div className="marketplace-location">
                                                  {/* Jaipur */
                                                  /*}
                                                      </div>
                                                    </div>
                                                  </div> */}
                                                </div>
                                              </div>
                                            </div>

                                            <div className="marketplace-preview">
                                              Click here to see what a complete
                                              Shake listing looks like
                                            </div>
                                          </div>
                                        ) : (
                                          <div className="col-md-3 thumb wizard-right">
                                            <div className="desc">
                                              <span
                                                style={{
                                                  fontSize: "8px",
                                                  color: "#00000094",
                                                  paddingLeft: "6%",
                                                }}
                                              >
                                                Photography | Modal +
                                                Photography
                                              </span>
                                              <h5
                                                style={{
                                                  lineHeight: "17px",
                                                  textAlign: "left",
                                                  paddingLeft: "6%",
                                                  fontWeight: "800",
                                                }}
                                              >
                                                Professional Model and photo
                                                shoot with your product
                                              </h5>
                                              <div
                                                className="marketplace-inner"
                                                style={{ padding: "3%" }}
                                              >
                                                <div
                                                  className="marketplace-top"
                                                  style={{
                                                    padding: "0px",
                                                    display: "grid",
                                                    marginBottom: "5%",
                                                  }}
                                                >
                                                  <div className="col-md-12">
                                                    <div className="col-md-6">
                                                      <span
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#00000094",
                                                          paddingLeft: "6%",
                                                        }}
                                                      >
                                                        <img
                                                          src={icon6}
                                                          style={{
                                                            height: "14px",
                                                          }}
                                                        ></img>{" "}
                                                        Deal
                                                      </span>
                                                    </div>
                                                    <div
                                                      className="col-md-6"
                                                      style={{
                                                        textAlign: "end",
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#00000094",
                                                          paddingLeft: "6%",
                                                          cursor: "pointer",
                                                        }}
                                                        onClick={() =>
                                                          setactiveForm(2)
                                                        }
                                                      >
                                                        View
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="col-md-12"
                                                    style={{
                                                      display: "contents",
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: "12px",
                                                        color: "#00000094",
                                                        paddingLeft: "8%",
                                                      }}
                                                    >
                                                      Deal Price Range:
                                                    </span>
                                                    <span
                                                      style={{
                                                        fontSize: "14px",
                                                        color: "#00000094",
                                                        paddingLeft: "8%",
                                                        fontWeight: "800",
                                                      }}
                                                    >
                                                      {" "}
                                                      ${" "}
                                                      {field[
                                                        "dealOtherPrice"
                                                      ] != undefined &&
                                                      field[
                                                        "dealOtherPrice"
                                                      ][0] != undefined
                                                        ? field[
                                                            "dealOtherPrice"
                                                          ][0]
                                                        : ""}
                                                    </span>
                                                    {/* <span style={{ fontSize: '12px', color: '#00000094', paddingLeft: '8%', display: '-webkit-inline-box' }}>
                                                      <input id={"checkboxCard"} type={"checkbox"} style={{ marginRight: '2px' }}></input> <spam style={{ marginTop: '-2px', display: 'block' }}> Show This Only Brand</spam>
                                                    </span> */}
                                                  </div>
                                                </div>

                                                <div
                                                  className="marketplace-top"
                                                  style={{
                                                    padding: "0px",
                                                    display: "grid",
                                                    marginBottom: "5%",
                                                    border:
                                                      "1px solid #8080808a",
                                                  }}
                                                >
                                                  <div className="col-md-12">
                                                    <div className="col-md-7">
                                                      <span
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#00000094",
                                                          paddingLeft: "6%",
                                                        }}
                                                      >
                                                        <img
                                                          src={icon9}
                                                          style={{
                                                            height: "14px",
                                                          }}
                                                        ></img>{" "}
                                                        1 Option
                                                      </span>
                                                    </div>
                                                    <div
                                                      className="col-md-5"
                                                      style={{
                                                        textAlign: "end",
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#00000094",
                                                          paddingLeft: "6%",
                                                          cursor: "pointer",
                                                        }}
                                                        onClick={() =>
                                                          setactiveForm(3)
                                                        }
                                                      >
                                                        View
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="col-md-12"
                                                    style={{
                                                      display: "contents",
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: "12px",
                                                        color: "#00000094",
                                                        paddingLeft: "8%",
                                                      }}
                                                    >
                                                      Option Price
                                                    </span>
                                                    <span
                                                      style={{
                                                        fontSize: "14px",
                                                        color: "#00000094",
                                                        paddingLeft: "8%",
                                                        fontWeight: "800",
                                                      }}
                                                    >
                                                      ${" "}
                                                      {field[
                                                        "optionsotherPrice"
                                                      ] != undefined &&
                                                      field[
                                                        "optionsotherPrice"
                                                      ][0] != undefined
                                                        ? field[
                                                            "optionsotherPrice"
                                                          ][0]
                                                        : ""}
                                                    </span>
                                                  </div>
                                                </div>
                                                <div
                                                  className="marketplace-top"
                                                  style={{
                                                    padding: "0px",
                                                    display: "grid",
                                                    marginBottom: "5%",
                                                    border:
                                                      "1px solid #8080808a",
                                                    borderRadius: "7px",
                                                  }}
                                                >
                                                  <div className="col-md-12">
                                                    <div className="col-md-7">
                                                      <span
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#00000094",
                                                          paddingLeft: "6%",
                                                        }}
                                                      >
                                                        <img
                                                          src={icon8}
                                                          style={{
                                                            height: "14px",
                                                          }}
                                                        ></img>{" "}
                                                        1 Option
                                                      </span>
                                                    </div>
                                                    <div
                                                      className="col-md-5"
                                                      style={{
                                                        textAlign: "end",
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#00000094",
                                                          paddingLeft: "6%",
                                                        }}
                                                      >
                                                        View
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div
                                                  className="marketplace-top"
                                                  style={{
                                                    padding: "0px",
                                                    display: "grid",
                                                    marginBottom: "5%",
                                                    border:
                                                      "1px solid #8080808a",
                                                    borderRadius: "7px",
                                                  }}
                                                >
                                                  <div className="col-md-12">
                                                    <div className="col-md-7">
                                                      <span
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#00000094",
                                                          paddingLeft: "6%",
                                                        }}
                                                      >
                                                        <img
                                                          src={icon8}
                                                          style={{
                                                            height: "14px",
                                                          }}
                                                        ></img>{" "}
                                                        1 Option
                                                      </span>
                                                    </div>
                                                    <div
                                                      className="col-md-5"
                                                      style={{
                                                        textAlign: "end",
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: "12px",
                                                          color: "#00000094",
                                                          paddingLeft: "6%",
                                                        }}
                                                      >
                                                        View
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <button
                                                  style={{
                                                    background: "#311696c7",
                                                    color: "white",
                                                    fontWeight: "500",
                                                    border: "none",
                                                    borderRadius: "5px",
                                                    marginTop: "5%",
                                                    margin: "auto",
                                                    display: "block",
                                                  }}
                                                  className="button btn-sm"
                                                  type="button"
                                                  name="submit"
                                                  id="submit"
                                                  onClick={() =>
                                                    handleSubmitValue(
                                                      "finalSubmit"
                                                    )
                                                  }
                                                >
                                                  Save &amp; Continue
                                                </button>
                                              </div>
                                            </div>

                                            <div className="marketplace-preview">
                                              Click here to see what a complete
                                              Shake listing looks like
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="clients-area default-padding"
            style={{ paddingTop: "0px" }}
          >
            <div className="container footer-new">
              <div className="row">
                <div className="col-md-4 info">
                  <img src={footer1} className="icon-1" alt="Logo" />
                  <a
                    className="navbar-brand"
                    href="#"
                    style={{ padding: "38px 15px" }}
                  >
                    <img src={LogoFooter} className="logo" alt="Logo" />
                    <img src={LogoName} className="logo" alt="Logo" />
                  </a>
                  <img src={footer2} className="icon-2" alt="Logo" />

                  <Parallax speed={-10} scale={[0.75, 1]} easing="easeOutQuint">
                    <img
                      src={footerCircle}
                      className="icon-circle"
                      alt="Logo"
                    />
                  </Parallax>
                </div>
                <div className="col-md-8 clients">
                  <img src={footerbtn1} className="icon-3" alt="Logo" />
                  <ul>
                    <li>
                      <img
                        src={social}
                        className="logo"
                        alt="Logo"
                        style={{ position: "relative", top: "5rem" }}
                      />
                    </li>
                  </ul>
                  <img src={footer3} className="icon-4" alt="Logo" />
                  <img src={footerBtn2} className="icon-5" alt="Logo" />

                  <Parallax
                    style={{ position: "absolute" }}
                    speed={-10}
                    easing="easeInOut"
                  >
                    <img src={footerRight} className="icon-6" alt="Logo" />
                  </Parallax>

                  <Parallax
                    translateX={["-100px", "0px"]}
                    scale={[0.75, 1]}
                    easing="easeOutQuint"
                  >
                    <img src={footer4} className="icon-8" alt="Logo" />
                  </Parallax>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
}

export default SignUp;
