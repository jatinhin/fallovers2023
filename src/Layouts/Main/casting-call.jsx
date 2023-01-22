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
  LogoFooter, instagram,Team
} from "../../Constants/Images";
import { useRef } from "react";

function Casting(props) {
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
            <div className="container">
              <div className="row">
 
              <div className="col-md-2">
                 <ul className="trading-filter">
                     <li>Filter</li>
                     <li>Sort</li>
                 </ul>
              </div>


              <div className="col-md-10">
                 <div className="row">

                  <div className="col-md-12" style={{borderLeft:'2px solid rgb(211 208 212)'}}>
                 <ul className="trading-filter">
                     <li>Influencer Marketing</li>
                     <li>Work for Hire</li>
                     <li>Job Listing</li>
                     <li>Job Listing</li>
                     <li>Job Listing</li>
                     <li>Job Listing</li>
                 </ul>
                 </div>
              </div>
              </div> 

              <div className="col-md-12">
                <div style={{clear:'both'}}></div>
                 <div className="seperator seperator-top col-md-12" style={{marinTop:"22px"}}><span className="border"></span></div>
              </div>

              <div className="col-md-12 heading-left">
                <h2 style={{ color: "#4E76C9", marginTop:"30px", marginBottom: "30px" }}>
                  Todays Trading Videos
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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
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
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
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
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
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
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
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
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
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
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
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
            style={{ paddingTop: "0px" }}>
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

export default Casting;
