import React from "react";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import $ from "jquery";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import {
  Logo,
  profileCircle,
  LogoFooter,
  gmail,
  menu_1_1,
  menu_1_2,
  menu_2_1,
  menu_2_2,
  menu_3_1,
  menu_3_2,
  menu_3_3,
} from "../../../Constants/Images";
import { GET_SEARCH_DATA, LOGOUT } from "../../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import { LOGIN } from "../../../actions/authenticationAction";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import WhiteBtn from "../brand/utils/WhiteBtn";
import { Stack } from "@mui/material";

function Header(props) {
  // console.log(props.headerbg, "propsprops");

  const dispatch = useDispatch();
  const parm = useParams();
  const [isLoading, setIsloading] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [searchBox, setsearchBox] = useState(false);
  const [searchData, setsearchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tradingPlatforms, settradingPlatforms] = useState([]);
  const [tradingCategory, settradingCategory] = useState([]);
  const [tradingTags, settradingTags] = useState([]);
  const [userDataa, setUserDataa] = useState(null);
  const loginuser = useSelector((state) => state.authenticated);

  // console.log(props, "parmm");
  // console.log(loginuser.userData, "loginuser");

  useEffect(() => {
    GET_SEARCH_DATA().then((res) => {
      const { data } = res;
      if (res.status == 200) {
        settradingPlatforms(data.trading_platforms);
        settradingCategory(data.category);
        settradingTags(data.trading_tags);
      }
    });
  }, []);

  const inputSearch = () => {
    setsearchData([1, 1, 2, 6, 1, 1, 2, 61, 1, 2, 6]);
  };

  $(".about-area").on("click", function () {
    setsearchBox(false);
  });

  const userLogin = (values) => {
    setIsloading(true);
    LOGIN(values, setIsloading, dispatch, navigate);
  };

  const searchInfluencer = () => {
    navigate(``);
  };

  // const logout = () => {
  //   LOGOUT(dispatch, navigate);
  // };
  const logout = () => {
    setUserDataa(null);
    localStorage.removeItem("apiResponseData");
  };
  const findCreators = (data, type) => {
    navigate(`/create-listing/${type}/${data}`);
  };

  // console.log(parm, "parmparm");
  const [error, setError] = useState("");

  const [step, setStep] = useState(1);

  const userData = JSON.parse(localStorage.getItem("apiResponseData"));
  const userTypes = userData ? userData.user_type : null;

  //for login or signup

  const [email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [userType, setUserType] = useState(1);

  const getUserType = async () => {
    try {
      let res = await axios.post(
        "https://fallovers.com/fallovers-api/api/v1/sign-up",
        { login_for: 1, user_mail_id: email }
      );
      console.log(res, "response user type");
      if (res.data) {
        if (res.data?.login_access === 1) {
          setUserType(2);
        } else {
          //redirect
          navigate("/page1", { state: { email } });
          console.log("redirect to signup page");
        }
      } else {
        console.log("error", error);
      }
    } catch (error) {
      //alert
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const [inputErrorClass, setInputErrorClass] = useState("");

  const loginUser = async (e) => {
     e.preventDefault();

    console.log(email, user_password, "userCredentials");
    try {
      let res = await axios.post(
        "https://fallovers.com/fallovers-api/api/v1/sign-up",
        { login_for: 2, user_mail_id: email, user_password }
        );
        console.log("login response user type",res);
      if (res.status === 200) {
        console.log("ressss",res.status)
        if (res.data?.status) {
          //redirect
          updateUser(res.data);
          navigate("/");
          setSignupModal(false);
          setEmail("");
          setPassword("");
          setLoginModal(false);
        } else {
          toast.error("Incorrect password. Please try again.", {
            position: "bottom-right",
            autoClose: 3000, // Adjust as needed
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setInputErrorClass("input-error");
        }
      } else {
        console.error("API Error:", res.data);
      }
    } catch (error) {
      //alert
      console.log(error);
    }
  };
  useEffect(() => {
    const storedData = localStorage.getItem("apiResponseData");
    if (storedData) {
      setUserDataa(JSON.parse(storedData));
    }
  }, []);
  const updateUser = (data) => {
    setUserDataa(data);

    // Update local storage
    localStorage.setItem("apiResponseData", JSON.stringify(data));
  };
  const handleSubmitnew = async (e) => {
    console.log(userType, "userType-2");

    e.preventDefault();
    if (userType === 0) setUserType(0);
    if (userType === 1) getUserType();
    if (userType === 2) loginUser();
  };
  const goback = () => {
    setUserType(1);
  };

  return (
    <>
      <header id="home" className={props.headerbg ? `header-home` : null}>
        <nav className="navbar navbar-default navbar-sticky bootsnav">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <Link className="navbar-brand" to="/">
                    <img width={130} src={Logo} className="logo" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`top-search ${
                    !props.headerbg ? "top-search-inner" : ""
                  }`}
                  style={{ display: "block" }}
                >
                  <div className="input-group">
                    <form action="#">
                      <input
                        onFocus={() => setsearchBox(true)}
                        onKeyPress={(e) => inputSearch(e)}
                        onKeyUp={(e) =>
                          e.target.value.length == 0 ? setsearchData([]) : ""
                        }
                        type="text"
                        name="text"
                        className="find-creators form-control"
                        placeholder="Find creators"
                      />
                      <button type="button" onClick={() => searchInfluencer()}>
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>

                {(tradingTags && tradingTags.length > 0) ||
                (tradingPlatforms && tradingPlatforms.length > 0) ? (
                  <div
                    className="row search-bar"
                    style={{ display: searchBox ? "block" : "none" }}
                  >
                    {searchData && searchData.length > 0 ? (
                      <>
                        <ul className="search-data">
                          {searchData.map((data, key) => {
                            return <li> {key + 1} searchData</li>;
                          })}
                        </ul>
                      </>
                    ) : (
                      <>
                        {/* {console.log(
                          tradingPlatforms,
                          "tradingPlatformstradingPlatforms"
                        )} */}
                        {tradingPlatforms && tradingPlatforms.length > 0 ? (
                          <div className="col-md-12 search-bar-section trending-platforms">
                            <h2 className="search-title">Trending Platforms</h2>
                            <ul>
                              {tradingPlatforms.map((data) => {
                                return (
                                  <li
                                    onClick={() =>
                                      findCreators(data.media_name, "netowrk")
                                    }
                                    className="filter-treding-platform"
                                  >
                                    <AiIcons.AiOutlineInstagram />
                                    {data.media_name}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : null}

                        {tradingCategory && tradingCategory.length > 0 ? (
                          <div className="col-md-12 search-bar-section tranding-cat search-section">
                            <h2 className="search-title">
                              Trending Categories
                            </h2>

                            <ul className="filter-treding-cat">
                              {tradingCategory.map((data) => {
                                return (
                                  <li
                                    onClick={() =>
                                      findCreators(data.tag_title, "categories")
                                    }
                                  >
                                    {" "}
                                    {data.tag_title}{" "}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : null}

                        {/* {tradingTags && tradingTags.length > 0 ? (
                          <div className="col-md-12 search-bar-section search-section">
                            <h2 className="search-title">Trending Tags</h2>
                            <ul>
                              {tradingTags.map((data) => {
                                return (
                                  <li>
                                    <AiIcons.AiOutlineInstagram /> Instagram
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : null} */}
                      </>
                    )}
                  </div>
                ) : null}
              </div>
              {/* {!loginuser.userData ? ( */}
              {!userData ? (
                <>
                  <div className="col-md-4">
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
                              <Dropdown.Item>
                                <a onClick={(e) => setLoginModal(true)} to="/">
                                  <div className="menu-icon">
                                    <img src={menu_1_1} />
                                  </div>
                                  <div className="menu">
                                    Create a listing <p> &nbsp;Start selling</p>
                                  </div>
                                </a>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Link to="/casting-calls">
                                  {" "}
                                  <div className="menu-icon">
                                    <img src={menu_1_2} />
                                  </div>
                                  <div className="menu">
                                    Casting calls
                                    <p>Find and pitch brands</p>
                                  </div>
                                </Link>{" "}
                              </Dropdown.Item>
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
                              <Dropdown.Item>
                                <Link to="/market-place">
                                  <div className="menu-icon">
                                    <img src={menu_2_1} />
                                  </div>

                                  <div className="menu">
                                    the create market place{" "}
                                    <p>Quickly find and hire influencers</p>
                                  </div>
                                </Link>{" "}
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Link to="/managed-service">
                                  {" "}
                                  <div className="menu-icon">
                                    <img src={menu_2_2} />
                                  </div>
                                  <div className="menu">
                                    managed services
                                    <p>
                                      hire a full-service team to take care of
                                      everything
                                    </p>
                                  </div>
                                </Link>{" "}
                              </Dropdown.Item>
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
                              <Dropdown.Item>
                                <Link to="/influencer-marketing-resources">
                                  <div className="menu-icon">
                                    <img src={menu_3_1} />
                                  </div>
                                  <div className="menu">
                                    influencer marketing Resources
                                    <p>Become an influencer marketing expert</p>
                                  </div>
                                </Link>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Link to="/our-work">
                                  <div className="menu-icon">
                                    <img src={menu_3_2} />
                                  </div>
                                  <div className="menu">
                                    our work
                                    <p>Case studies and sample collabs</p>
                                  </div>
                                </Link>{" "}
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Link to="/partners">
                                  {" "}
                                  <div className="menu-icon">
                                    <img src={menu_3_3} />
                                  </div>
                                  <div className="menu">
                                    partners
                                    <p>Take your campaigns to new </p>
                                  </div>
                                </Link>{" "}
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-1">
                    <button className="get-started">Get Started</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-4">
                    <div className="collapse navbar-collapse" id="navbar-menu">
                      <ul
                        className="nav navbar-nav navbar-right"
                        data-in="#"
                        data-out="#"
                      >
                        <li className="menu-register-btn menu-register-btn-after-login dropdown-toggle menu-neviget btn btn-success">
                          <Link to="/">Chat</Link>
                        </li>

                        <li className="menu-register-btn menu-register-btn-after-login dropdown-toggle menu-neviget btn btn-success">
                          <Link to="/dashboard">Collabs</Link>
                        </li>

                        <li className="menu-register-btn menu-register-btn-after-login dropdown-toggle menu-neviget btn btn-success">
                          <Link
                            to={
                              userTypes === 1
                                ? "/casting-call"
                                : "/brand/marketplace"
                            }
                          >
                            Marketplace
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-1 padding-0">
                    <div className="icon-menu">
                      <AiIcons.AiOutlinePlus />
                    </div>
                    <div className="icon-menu">
                      <MdIcons.MdHeadphones />
                    </div>
                  </div>
                </>
              )}

              <div className="col-md-1 top-user-profile">
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    <img src={profileCircle} width={35} />
                  </Dropdown.Toggle>

                  {!userData ? (
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <b
                          className="signup-menu"
                          onClick={(e) => setLoginModal(true)}
                        >
                          Log in
                        </b>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/brand-graph">Brand Graph </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <b
                          onClick={(e) => setSignupModal(true)}
                          className="signup-menu"
                        >
                          Sign Up
                        </b>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/knowledge-base"> Knowledge base </Link>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/contact-support"> Contact Support </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  ) : (
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="/brand-graph">Brand Graph </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/knowledge-base"> Knowledge base </Link>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/contact-support"> Contact Support </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link onClick={logout} to="/">
                          Logout
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  )}
                </Dropdown>
              </div>
            </div>
            <div className="seperator seperator-top col-md-12">
              <span className="border" />
            </div>
          </div>
        </nav>
      </header>

      <Modal show={signupModal} onHide={(e) => setSignupModal(false)}>
        <Modal.Body>
          <WhiteBtn
            onClick={goback}
            sx={{
              width: "100px",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <ArrowBackIosRoundedIcon />
            <Stack alignItems={"center "}>Go back</Stack>
          </WhiteBtn>
          <AiIcons.AiOutlineClose
            className="modal-close"
            onClick={(e) => setSignupModal(false)}
          />
          <div className="row modal-login">
            <img src={LogoFooter} className="logo" alt="Logo" />
            <h2> Log in to The Creator Marketplace® </h2>
            <p> We'll check to see if you have an existing account. </p>

            <div className="input-gmail">
              <img src={gmail} className="logo" alt="gmail" width={20} />
              &nbsp;Continue with Google
            </div>

            <div className="clear"></div>

            <div>
              <div className="modal-login-speratar col-md-6"></div>
              <div className="modal-login-or col-md-1">Or</div>
              <div className="modal-login-speratar col-md-6"></div>
            </div>

            <div className="clear"></div>

            <div className="input-email">
              <form onSubmit={handleSubmitnew}>
                <Stack gap={2} alignItems={"center"}>
                  <input
                    type="email"
                    placeholder="enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {userType === 2 && (
                    <input
                      type="password"
                      placeholder="enter password"
                      value={user_password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={inputErrorClass}
                    />
                  )}
                  <WhiteBtn
                    type="submit"
                    sx={{
                      width: "236px",
                      height: "42px",
                      bgcolor: "#603AFA",
                      color: "white",
                      "&:hover": {
                        bgcolor: "#603AFA",
                      },
                      fontWeight: "bold",
                    }}
                  >
                    Create Account
                  </WhiteBtn>
                </Stack>
                {/* <button type="submit">Submit</button> */}
              </form>
            </div>

            {/* <Link to="/page1">
              <div className=" mb-12 mb-xl-12 login-create-account">
                <button>Create Account</button>
                {""}
              </div>
            </Link> */}
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={loginModal} onHide={(e) => setLoginModal(false)}>
        <Modal.Body>
          <AiIcons.AiOutlineClose
            className="modal-close"
            onClick={(e) => setLoginModal(false)}
          />
          <div className="row modal-login">
            <img src={LogoFooter} className="logo" alt="Logo" />
            {step === 1 && (
              <>
                <h2> Log in to The Creator Marketplace® </h2>
                <p>
                  We'll check to see if you have an existing account.
                  <a
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      setLoginModal(false);
                      setTimeout(() => {
                        setSignupModal(true);
                      }, 100);
                    }}
                  >
                    Create account
                  </a>
                </p>

                <div className="input-gmail">
                  <img src={gmail} className="logo" alt="gmail" width={20} />
                  &nbsp;Continue with Google
                </div>

                <div className="clear"></div>
                <Stack>
                  <div>
                    <div className="modal-login-speratar col-md-6"></div>
                    <div className="modal-login-or col-md-1">Or</div>
                    <div className="modal-login-speratar col-md-6"></div>
                  </div>

                  <form onSubmit={loginUser}>
                    <Stack alignItems={"center"} gap={1}>
                      <div className="input-email">
                        <input
                          type="email"
                          placeholder="enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                          style={{ paddingTop: "8px" }}
                          type="password"
                          placeholder="enter password"
                          value={user_password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <WhiteBtn
                        type="submit"
                        disabled={loading}
                        sx={{
                          width: "136px",
                          height: "42px",
                          backgroundColor: loading ? "#ccc" : "#603AFA",
                          color: "white",
                          "&:hover": {
                            backgroundColor: loading ? "#ccc" : "#603AFA",
                          },
                        }}
                      >
                        {loading ? (
                          <div className="progress-bar"></div>
                        ) : (
                          "Login"
                        )}
                      </WhiteBtn>
                    </Stack>
                  </form>
                </Stack>
                <div className="clear"></div>
              </>
            )}
            {error && <p>{error}</p>}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
