import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA, LOGIN } from "../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Dropdown from "react-bootstrap/Dropdown";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
  instagram,
  Team,
  card1,
  card2,
  card3,
} from "../../Constants/Images";
import { useRef } from "react";

function Dashboard(props) {
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

          <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
            <div className="container dashboard-container">
              <div className="row dashboard-heading">
                <div className="col-md-10 padding-0 dashboard-top-left">
                  <b> Calling all creators! </b>Create your public profile today
                  and attract marketers.
                </div>

                <div className="col-md-2 padding-0 dashboard-top-right">
                  updates
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 dashboard-inner">
                  <div className="row dashboard-heading-title">
                    <div className="col-md-10 padding-0">
                      <h1>My Work</h1>
                      <p>
                        We'll help you find the product that's right for you.
                      </p>
                    </div>

                    <div className="col-md-2 padding-0">
                      <div className="create-listing"> Create listing </div>
                    </div>
                  </div>

                  <div className="row ">
                    <Tabs>
                      <TabList>
                        <Tab>Dashboard</Tab>
                        <Tab>Listings</Tab>
                        <Tab>Pitches</Tab>
                        <Tab>Transactions</Tab>
                        <Tab>Social</Tab>
                      </TabList>

                      <div className="col-md-12">
                        <TabPanel>
                          <div className="row dashboard-card-outer">
                            <div className="col-md-4">
                              <div className="row dashboard-card">
                                <div className="col-md-8">
                                  <h3>Attract Brands</h3>
                                  <p className="detail">
                                    Put yourself out there by listing your
                                    services.
                                  </p>
                                  <p className="create-list">Create listing</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card1}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="row  dashboard-card">
                                <div className="col-md-8">
                                  <h3>Find Work</h3>
                                  <p className="detail">
                                    Browse through jobs posted by brands.
                                  </p>
                                  <p className="create-list">Create listing</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card2}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="row dashboard-card">
                                <div className="col-md-8">
                                  <h3>Pending Payout</h3>
                                  <p className="cash-amount">$0</p>
                                  <p className="cash-out">$0 Cashed Out</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card3}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="clear"></div>
                            <div className="card-bottom"></div>

                            <div className="row dashboard-casting">
                              <div className="col-md-12 heading-left">
                                <h2>
                                  Casting Calls You Might Be Interested In
                                </h2>
                              </div>

                              <div className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video trading-video">
                                <div className="col-md-3">
                                  <div className="item">
                                    <div className="info">
                                      <div className="author-info">
                                        <div className="thumb">
                                          <a href="#">
                                            <img src={Team} alt="Thumb" />
                                          </a>
                                        </div>
                                        <div className="others">
                                          <a href="#">
                                            Jonathom Kiyam {/*?php echo $i+1?*/}
                                          </a>
                                          <div className="rating">
                                            <img src={instagram} />
                                            <span> 20k Fallovers</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="product-img" />
                                      <div className="bottom-info">
                                        <div className="col-md-6">
                                          <ul>
                                            <li
                                              style={{
                                                background: "inherit",
                                                color: "#5EA9C6",
                                                fontWeight: "bold",
                                                paddingTop: "0px",
                                              }}
                                            >
                                              Instagram
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-md-6 price">
                                          $506
                                        </div>
                                      </div>
                                      <div className="clear" />
                                      <div className="prodct-detail">
                                        Sponsored Instagram post <br /> from
                                        @sippoftea
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-3">
                                  <div className="item">
                                    <div className="info">
                                      <div className="author-info">
                                        <div className="thumb">
                                          <a href="#">
                                            <img src={Team} alt="Thumb" />
                                          </a>
                                        </div>
                                        <div className="others">
                                          <a href="#">
                                            Jonathom Kiyam {/*?php echo $i+1?*/}
                                          </a>
                                          <div className="rating">
                                            <img src={instagram} />
                                            <span> 20k Fallovers</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="product-img" />
                                      <div className="bottom-info">
                                        <div className="col-md-6">
                                          <ul>
                                            <li
                                              style={{
                                                background: "inherit",
                                                color: "#5EA9C6",
                                                fontWeight: "bold",
                                                paddingTop: "0px",
                                              }}
                                            >
                                              Instagram
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-md-6 price">
                                          $506
                                        </div>
                                      </div>
                                      <div className="clear" />
                                      <div className="prodct-detail">
                                        Sponsored Instagram post <br /> from
                                        @sippoftea
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-3">
                                  <div className="item">
                                    <div className="info">
                                      <div className="author-info">
                                        <div className="thumb">
                                          <a href="#">
                                            <img src={Team} alt="Thumb" />
                                          </a>
                                        </div>
                                        <div className="others">
                                          <a href="#">
                                            Jonathom Kiyam {/*?php echo $i+1?*/}
                                          </a>
                                          <div className="rating">
                                            <img src={instagram} />
                                            <span> 20k Fallovers</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="product-img" />
                                      <div className="bottom-info">
                                        <div className="col-md-6">
                                          <ul>
                                            <li
                                              style={{
                                                background: "inherit",
                                                color: "#5EA9C6",
                                                fontWeight: "bold",
                                                paddingTop: "0px",
                                              }}
                                            >
                                              Instagram
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-md-6 price">
                                          $506
                                        </div>
                                      </div>
                                      <div className="clear" />
                                      <div className="prodct-detail">
                                        Sponsored Instagram post <br /> from
                                        @sippoftea
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-3">
                                  <div className="item">
                                    <div className="info">
                                      <div className="author-info">
                                        <div className="thumb">
                                          <a href="#">
                                            <img src={Team} alt="Thumb" />
                                          </a>
                                        </div>
                                        <div className="others">
                                          <a href="#">
                                            Jonathom Kiyam {/*?php echo $i+1?*/}
                                          </a>
                                          <div className="rating">
                                            <img src={instagram} />
                                            <span> 20k Fallovers</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="product-img" />
                                      <div className="bottom-info">
                                        <div className="col-md-6">
                                          <ul>
                                            <li
                                              style={{
                                                background: "inherit",
                                                color: "#5EA9C6",
                                                fontWeight: "bold",
                                                paddingTop: "0px",
                                              }}
                                            >
                                              Instagram
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-md-6 price">
                                          $506
                                        </div>
                                      </div>
                                      <div className="clear" />
                                      <div className="prodct-detail">
                                        Sponsored Instagram post <br /> from
                                        @sippoftea
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-12">
                                  <div className="create-listing cating-all">
                                    {" "}
                                    View all{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          
                        <div className="row dashboard-card-outer">
                            <div className="col-md-3">
                              <div className="row dashboard-card dashboard-card-new">
                                <div className="col-md-8">
                                  <h3>Active Todos</h3>
                                  <p className="detail">
                                  Put yourself out there by listing your services.
                                  </p>
                                  <p className="create-list">Waiting on Buyer</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card1}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="row dashboard-card dashboard-card-new">
                                <div className="col-md-8">
                                  <h3>New Orders</h3>
                                  <p className="detail">
                                  Browse through jobs posted by brands.
                                  </p>
                                  <p className="create-list">Active Orders</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card1}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="row  dashboard-card dashboard-card-new">
                                <div className="col-md-12">
                                  <h3>Admin Change Requests</h3>
                                  <div className="col-md-9 padding-0">
                                    <p className="detail">
                                        Browse through jobs posted by brands.
                                    </p>
                                  <p className="create-list">in Admin Review</p>
                                </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="row dashboard-card dashboard-card-new">
                                <div className="col-md-8">
                                  <h3>Potential Earnings</h3>
                                  <p className="cash-amount">$0</p>
                                  <p className="cash-out">$0 Cashed Out</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card3}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="clear"></div>
                            <div className="card-bottom"></div>

                            <div className="col-md-12 listing-section">

                                 <div className="transactions-logo">
                                 </div>

                                 <div className="transactions-title">
                                     It appears you don't have any listings
                                 </div>

                                 <div className="transactions-title-2">
                                     Create a listing today and show the world what you can do.
                                 </div>

                                 <div className="transactions-btn">
                                     Ok, Lets do this 
                                 </div>
                            </div>
                          </div>
                        </TabPanel>

                        <TabPanel>
                         <div className="row dashboard-card-outer">
                            <div className="col-md-3">
                              <div className="row dashboard-card dashboard-card-new">
                                <div className="col-md-8">
                                  <h3>All Pitchs</h3>
                                  <p className="detail">
                                    Put yourself out there by listing your
                                    services.
                                  </p>
                                  <p className="create-list">in Admin Review</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card1}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="row dashboard-card dashboard-card-new">
                                <div className="col-md-8">
                                  <h3>Active Pitches</h3>
                                  <p className="detail">
                                    Put yourself out there by listing your
                                    services.
                                  </p>
                                  <p className="create-list">in Draft Mode</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card1}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="row  dashboard-card dashboard-card-new">
                                <div className="col-md-8">
                                  <h3>Outstanding Pitches</h3>
                                  <p className="detail">
                                    Browse through jobs posted by brands.
                                  </p>
                                  <p className="create-list">in Draft Mode</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card2}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="row dashboard-card dashboard-card-new">
                                <div className="col-md-8">
                                  <h3>Potential Earnings</h3>
                                  <p className="cash-amount">$0</p>
                                  <p className="cash-out">Between - Casting Calls</p>
                                </div>
                                <div className="col-md-4 card-icon">
                                  <img
                                    src={card3}
                                    className="logo"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="clear"></div>
                            <div className="card-bottom"></div>

                            <div className="col-md-12 listing-section">

                                 <div className="transactions-logo">
                                 </div>

                                 <div className="transactions-title">
                                     It appears you don't have any listings
                                 </div>

                                 <div className="transactions-title-2">
                                     Create a listing today and show the world what you can do.
                                 </div>

                                 <div className="transactions-btn">
                                     Ok, Lets do this 
                                 </div>
                            </div>

                          </div>                           
                        </TabPanel>

                        <TabPanel>
                            <div className="col-md-12 transactions-section">

                                 <div className="transactions-logo">
                                 </div>

                                 <div className="transactions-title">
                                     It appears you don't have any listings
                                 </div>

                                 <div className="transactions-title-2">
                                     Create a listing today and show the world what you can do.
                                 </div>

                                 <div className="transactions-btn">
                                     Ok, Lets do this 
                                 </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                         
                           <div className="col-md-12 transactions-section">
                             <div className="row">
                                <div className="col-md-9">
                                    <div className="transactions-logo" style={{margin:'0px AUTO 26px auto'}}>
                                    </div>

                                    <div className="transactions-title">
                                        It appears you don't have any listings
                                    </div>

                                    <div className="transactions-title-2">
                                        Create a listing today and show the world what you can do.
                                    </div>

                                    <div className="transactions-btn">
                                        Ok, Lets do this 
                                    </div>
                                    </div>  


                                    <div className="col-md-3">
                                        <div className="social-right-icon"></div>
                                        <div className="social-right-name">Gopal Daiya</div>
                                        <div className="social-right-fallovers">55 Follovers</div>

                                        <ul className="social-list">
                                            <li>About   Add  <span>Add</span></li>
                                            <li>Location Add <span>Add</span></li>
                                        </ul>

                                    </div>

                                </div>               
                            
                            </div>                   

                        </TabPanel>
                      </div>
                    </Tabs>
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

export default Dashboard;
