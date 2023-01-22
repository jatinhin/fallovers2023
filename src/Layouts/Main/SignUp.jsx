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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dropdown from "react-bootstrap/Dropdown";
//import Demo from "./crop/Demo";

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
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <>
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
                        <img src={LogoName} className="logo" alt="Logo" />
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
                <div className="col-md-9 info main-content">
                  <div className="tab-info">
                    <div className="row">
                      <div className="tab-content tab-content-info">
                        <div id="tab1" className="tab-pane fade active in">
                          <div className="event-area">
                            <div className="event-items">
                              <div className="item horizontal col-md-12">
                                <div className="col-md-6 info">
                                  <div className="row">
                                    <div className="col-md-4 left-side-create-ac">
                                      <h4>Create Account</h4>
                                      <ul className="wizard-list">
                                        <li onClick={() => setactiveForm(0)}>
                                          <span className="wizard-title-active">
                                            {" "}
                                            Description{" "}
                                          </span>
                                          <span className="wizard-number-active">
                                            1
                                          </span>
                                          <span
                                            className={
                                              activeForm > 0
                                                ? `wizard-line-active`
                                                : `wizard-line`
                                            }
                                          />
                                        </li>
                                        <li onClick={() => setactiveForm(1)}>
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
                                              activeForm > 1
                                                ? `wizard-line-active`
                                                : `wizard-line`
                                            }
                                          />
                                        </li>
                                        <li onClick={() => setactiveForm(2)}>
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
                                              activeForm > 2
                                                ? `wizard-line-active`
                                                : `wizard-line`
                                            }
                                          />
                                        </li>
                                        <li onClick={() => setactiveForm(3)}>
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
                                              activeForm > 3
                                                ? `wizard-line-active`
                                                : `wizard-line`
                                            }
                                          />
                                        </li>
                                        <li onClick={() => setactiveForm(4)}>
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
                                              activeForm > 4
                                                ? `wizard-line-active`
                                                : `wizard-line`
                                            }
                                          />
                                        </li>
                                        <li onClick={() => setactiveForm(5)}>
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
                                              activeForm > 5
                                                ? `wizard-line-active`
                                                : `wizard-line`
                                            }
                                          />
                                        </li>
                                        <li onClick={() => setactiveForm(6)}>
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
                                            class="wizard-line"
                                            style={{ height: "0px" }}
                                          ></span>
                                        </li>
                                      </ul>
                                    </div>

                                    {activeForm == 0 ? (
                                      <div className="col-md-8">
                                        <h4 className="wizard-title">
                                          <a href="#">Let’s Get You ‘Shakin’</a>
                                        </h4>
                                        <div className="meta wizard-subtitle">
                                          Please Provide basic information about
                                          you
                                        </div>
                                        <form
                                          action="#"
                                          method="POST"
                                          className="contact-form"
                                        >
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="form-group">
                                                <select className="form-control">
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
                                                <span className="alert-error" />
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="form-group">
                                                <select className="form-control">
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
                                                <span className="alert-error" />
                                              </div>
                                            </div>
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                <input
                                                  className="form-control"
                                                  id="titan"
                                                  name="titan"
                                                  placeholder="Titan"
                                                  type="number"
                                                />
                                                <span className="alert-error" />
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="form-group">
                                                <input
                                                  className="form-control"
                                                  id="baseprice"
                                                  name="baseprice"
                                                  placeholder="Base Price"
                                                  type="number"
                                                />
                                                <span className="alert-error" />
                                              </div>
                                            </div>
                                            <div className="col-md-6 usd-price">
                                              <p>All Price in USD.</p>
                                              <p>
                                                You can add pricing Options, on
                                                the next screens.
                                              </p>
                                              <p>
                                                A 15% marketplace fee applies to
                                                all orders.
                                              </p>
                                            </div>
                                            <div className="col-md-12">
                                              <div className="form-group comments">
                                                <textarea
                                                  className="form-control"
                                                  id="description"
                                                  name="description"
                                                  placeholder="Description"
                                                  defaultValue={""}
                                                />
                                              </div>
                                            </div>
                                            <div
                                              className="col-md-12"
                                              style={{ textAlign: "right" }}
                                            >
                                              <button
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
                                      <div className="col-md-8">
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
                                          Video uploads have a max file size of{" "}
                                          <b>500mb</b> Semples will be displayed
                                          in a <b>16:9</b> aspect ratio.
                                        </div>
                                        <form
                                          action="#"
                                          method="POST"
                                          className="contact-form"
                                        >
                                          <div className="row">
                                            <div className="col-md-12 form-group">
                                              <div className="sample-upload">
                                                <img
                                                  src={upload}
                                                  className="logo right-mobile-top-icon"
                                                  alt="Logo"
                                                />

                                                <p>
                                                  Drag and drop a featured photo
                                                  of video here of browse to
                                                  upload your package sample
                                                </p>
                                              </div>
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
                                      <div className="col-md-8">
                                        <h4 className="wizard-title">
                                          <a href="#">Your Deals</a>
                                        </h4>

                                        <div className="meta wizard-subtitle">
                                          You can add up to four unique deals,
                                          each with different prices and
                                          specifications.
                                        </div>
                                        <form
                                          action="#"
                                          method="POST"
                                          className="contact-form"
                                        >
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                <input
                                                  className="form-control"
                                                  id="email"
                                                  name="email"
                                                  placeholder="Deal Title"
                                                  type="email"
                                                />
                                                <span className="alert-error" />
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
                                                />
                                              </div>
                                            </div>

                                            <div className="col-md-12">
                                              <h4>Your Features</h4>
                                            </div>

                                            <div className="col-md-4">
                                              <label>
                                                <input
                                                  type={"checkbox"}
                                                ></input>
                                                1 Model
                                              </label>
                                            </div>

                                            <div className="col-md-4">
                                              <label>
                                                <input
                                                  type={"checkbox"}
                                                ></input>
                                                2 Models
                                              </label>
                                            </div>

                                            <div className="col-md-4">
                                              <label>
                                                <input
                                                  type={"checkbox"}
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
                                                />
                                                <span className="alert-error" />
                                              </div>
                                            </div>

                                            <div class="col-md-12 another-deal">
                                              <span>Add Another Deal </span>
                                            </div>

                                            <div className="col-md-12">
                                              <hr className="hr-marging"></hr>
                                            </div>

                                            <div
                                              className="col-md-12"
                                              style={{ textAlign: "right" }}
                                            >
                                              <button
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
                                      <div className="col-md-8">
                                        <h4 className="wizard-title">
                                          <a href="#">Your Options</a>
                                        </h4>

                                        <div className="meta wizard-subtitle">
                                          If you have optional services that can
                                          be added to this Shake add them here.
                                        </div>
                                        <form
                                          action="#"
                                          method="POST"
                                          className="contact-form"
                                        >
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                <input
                                                  className="form-control"
                                                  id="email"
                                                  name="email"
                                                  placeholder="Option Title"
                                                  type="email"
                                                />
                                                <span className="alert-error" />
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
                                                />
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
                                                />
                                                <span className="alert-error" />
                                              </div>
                                            </div>

                                            <div className="col-md-12 another-deal">
                                              <span>Add Another Deal </span>
                                            </div>

                                            <div className="col-md-12">
                                              <hr className="hr-marging"></hr>
                                            </div>

                                            <div
                                              className="col-md-12"
                                              style={{ textAlign: "right" }}
                                            >
                                              <button
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
                                      <div className="col-md-8">
                                        <h4 className="wizard-title">
                                          <a href="#">FAQs</a>
                                        </h4>

                                        <div className="meta wizard-subtitle">
                                          Frequently Asked Questions are used to
                                          help answer common pre-sale questions
                                          that customers might have about your
                                          service. Use FAQs to help gude your
                                          customers through the process and set
                                          expectations prior to shaking. View
                                          Example
                                        </div>
                                        <form
                                          action="#"
                                          method="POST"
                                          className="contact-form"
                                        >
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="form-group">
                                                <input
                                                  className="form-control"
                                                  id="email"
                                                  name="email"
                                                  placeholder="Question"
                                                  type="email"
                                                />
                                                <span className="alert-error" />
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
                                                />
                                              </div>
                                            </div>

                                            <div class="col-md-12 another-deal">
                                              <span>Add Another FAQs </span>
                                            </div>

                                            <div className="col-md-12">
                                              <hr className="hr-marging"></hr>
                                            </div>

                                            <div
                                              className="col-md-12"
                                              style={{ textAlign: "right" }}
                                            >
                                              <button
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
                                      <div className="col-md-8">
                                        <h4 className="wizard-title">
                                          <a href="#">Buyer Requests</a>
                                        </h4>

                                        <div className="meta wizard-subtitle">
                                          What information do you need from your
                                          customers in order to get started?
                                          When you create
                                        </div>
                                        <form
                                          action="#"
                                          method="POST"
                                          className="contact-form"
                                        >
                                          <div className="row">
                                            <div className="col-md-12">
                                              <div className="form-group comments">
                                                <textarea
                                                  className="form-control"
                                                  id="comments"
                                                  name="comments"
                                                  placeholder="Ask your buyer what you need in order to start creating 400 characters remaining"
                                                  defaultValue={""}
                                                />
                                              </div>
                                            </div>

                                            <div className="col-md-12">
                                              <div className="form-group comments">
                                                <label>Type Request</label>
                                                <textarea
                                                  className="form-control"
                                                  id="comments"
                                                  name="comments"
                                                  placeholder="Choose One"
                                                  defaultValue={""}
                                                />
                                              </div>
                                            </div>

                                            <div className="col-md-12">
                                              <b>Required Request</b>
                                            </div>


                                            <div class="col-md-12 another-deal">
                                              <span>Add Another Request </span>
                                            </div>

                                            <div className="col-md-12">
                                              <hr className="hr-marging"></hr>
                                            </div>

                                            <div
                                              className="col-md-12"
                                              style={{ textAlign: "right" }}
                                            >
                                              <button
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
                                      <div className="col-md-8">
                                        <h4 className="wizard-title">
                                          <a href="#">
                                            <h4>
                                              Professional Model and photo shoot
                                              with your product
                                            </h4>
                                          </a>
                                        </h4>

                                        <p>
                                          Have your product photographed with a
                                          professional model by a professional
                                          photographer! This Shake includes
                                          model of your choice (we will send you
                                          three potential models to choose from)
                                          and Eight high resolution retouched
                                          images with reproduction rights.
                                        </p>

                                        <div>
                                          <h2>Let’s Shake On...</h2>
                                          <h3>Model & Photoshoot</h3>
                                          <h3>Description</h3>
                                          <p>
                                            Have your product photographed with
                                            a professional model by a
                                            professional photographer! This
                                            Shake includes model of your choice
                                            (we will send you three potential
                                            models to choose from) and Eight
                                            high resolution retouched images
                                            with reproduction rights.
                                          </p>

                                          <div>$1,200</div>

                                          <hr></hr>

                                          <h3>Features</h3>

                                          <span>1 Model</span>
                                          <span>1 Model</span>
                                          <span>1 Model</span>

                                          <div>1 Revisions</div>
                                          <div>2 Days Delivery</div>
                                          <div>Full commercial use</div>
                                        </div>

                                        <div>
                                          <h3>
                                            Model & Photoshoot with Behind the
                                            scenes video
                                          </h3>

                                          <h3>Description</h3>
                                          <p>
                                            Have your product photographed with
                                            a professional model by a
                                            professional photographer! This
                                            Shake includes model of your choice
                                            (we will send you three potential
                                            models to choose from) and Eight
                                            high resolution retouched images
                                            with reproduction rights.
                                          </p>

                                          <div>$1,200</div>

                                          <hr></hr>

                                          <h3>Features</h3>
                                          <span>1 Model</span>
                                          <span>1 Model</span>
                                          <span>1 Model</span>

                                          <div>1 Revisions</div>
                                          <div>2 Days Delivery</div>
                                          <div>Full commercial use</div>
                                        </div>

                                        <h3>Options</h3>
                                        <h3>FAQs</h3>
                                        <h3>Buyer Requests</h3>
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
                <div className="col-md-3 thumb wizard-right">
                  <h4>Marketplace Preview</h4>
                  <div className="desc">
                    <div className="marketplace-inner">
                      <div className="marketplace-top" />
                      <div className="marketplace-cirlce">
                        <h2>$50</h2>
                        <p>Base Price</p>
                      </div>
                      <div className="marketplace-inner-white" />
                      <div className="marketplace-bottom">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="marketplace-profile" />
                          </div>
                          <div className="col-md-8">
                            <div className="marketplace-name">Gopal Daiya</div>
                            <div className="marketplace-location">Jaipur</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="marketplace-preview">
                    Click here to see what a complete Shake listing looks like
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
