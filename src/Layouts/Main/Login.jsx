import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GET_HOMEPAGE_DATA, LOGIN } from "../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "./include/Header";

import {
  Logo,
  LogoName,
  profileCircle,
  MobileTop,
  rightMobile,
  MobileTwo,
  SearchIcon,
  rating,
  createStart,
  acceptIncoming,
  yourMagic,
  sideImage,
  c1,
  c2,
  twitter,
  tiktok,
  facebook,
  pinterest,
  footer1,
  footer2,
  footerCircle,
  footerbtn1,
  footer3,
  footerBtn2,
  footerRight,
  footer4,
  social,
  instagram,
  Team,
  gmail,
  LogoFooter,
} from "../../Constants/Images";
import { useRef } from "react";

function Login(props) {
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
  const [isLoading, setisLoading] = useState(false);

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
          <Header />

          <div className="about-area default-padding">
            <div className="container">
              <div className="row">
                <div className="about-info">
                  {" "}
                  <div className="col-md-5 col-md-offset-1 thumb banner-left">
                    <h1>All your design tools in one place</h1>
                    <p>
                      Start growing your business by creating stunning Videos,
                      animations, branding, mockups, presentations,graphics, and
                      professional websites!
                    </p>
                    <div className="search-course">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="Enter your Email"
                          className="form-control"
                          name="text"
                        />
                        <button type="submit" className="search-submit">
                          <img src={SearchIcon} width={52} />
                        </button>
                      </form>
                    </div>
                    <div className="col-md-12 pading-left-0">
                      <button className="start-now"> Start Now</button>
                    </div>
                    <div className="col-md-12 pading-left-0">
                      <img src={rating} className="rating" />
                    </div>
                  </div>
                  <div className="col-md-4 col-md-offset-2 info">
                    <Parallax
                      speed={-1}
                      scale={[0.75, 1]}
                      easing="easeOutQuint"
                    >

                      <div className="mobile-video right-mobile-bg">
                      <div className="mobile-top"></div>
                        <video
                          src="https://fallovers.com/home/video/video.mp4"
                          controls
                          muted
                          autoPlay={"autoplay"}
                          preLoad="auto"
                          loop
                        >
                        </video>
                      </div>

                      {/* https://fallovers.com/home/video/video.mp4 */}

                      {/* <img
                        src={MobileTop}
                        className="logo right-mobile-top-icon"
                        alt="Logo"
                      /> */}
                    </Parallax>
                    {/* <div className="right-mob">
                      <img src={rightMobile} />
                    </div> */}
                    <Parallax
                      translateX={["-100px", "0px"]}
                      scale={[0.75, 1]}
                      easing="easeOutQuint"
                    >
                      <img
                        src={MobileTwo}
                        className="logo right-mobile-bottom-icon"
                        alt="Logo"
                      />
                    </Parallax>
                  </div>
                </div>
                <div className="col-md-12 heading-left">
                  <h2>3 Step Process</h2>
                </div>

                <Parallax speed={-1} scale={[0.75, 1]} easing="easeOutQuint">
                  <div className="our-features">
                    <div className="col-md-4 col-sm-4">
                      <div className="item mariner about-card">
                        <div className="icon">
                          <img src={createStart} />
                        </div>
                        <div className="info">
                          <h4>Create a Star</h4>
                          <a href="#">
                            Start growing your business by creating stunning
                            Videos, animations, branding, mockups,
                            presentations, graphics, and professional websites!
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="item java about-card">
                        <div className="icon">
                          <img src={acceptIncoming} />
                        </div>
                        <div className="info">
                          <h4>Accept Incoming Orders</h4>
                          <a href="#">
                            Start growing your business by creating stunning
                            Videos, animations, branding, mockups,
                            presentations, graphics, and professional websites!
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="item malachite about-card">
                        <div className="icon">
                          <img src={yourMagic} />
                        </div>
                        <div className="info">
                          <h4>Work your Magic</h4>
                          <a href="#">
                            Start growing your business by creating stunning
                            Videos, animations, branding, mockups,
                            presentations, graphics, and professional websites!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
          {/* End About */}
          <div className="seles">
            <div className="container">
              <div className="row margin-0">
                <div className="col-md-12 heading-left">
                  <h2 style={{ color: "#4E76C9", marginBottom: "30px" }}>
                    Seles
                  </h2>
                </div>
                <div className="col-md-5  thumb banner-left">
                  <h2
                    className="seles-left-card-heading"
                    style={{ marginBottom: "0px" }}
                  >
                    Showcase your skills and earn money for your talents.
                  </h2>
                  <p>
                    Take control of your creative partnerships. Offer a digital
                    creative service, display your talents, name your price and
                    gain visibility with buyers looking to collaborate.
                  </p>
                  <div className="col-md-12 pading-left-0">
                    <button className="start-now"> Start Now</button>
                  </div>
                </div>
                <div className="col-md-6 col-md-offset-1 info">
                  <div
                    className="seles-right-img"
                    style={{ textAlign: "right" }}
                  >
                    <Parallax
                      translateX={["-100px", "0px"]}
                      scale={[0.75, 1]}
                      easing="easeOutQuint"
                    >
                      <img src={sideImage} />
                    </Parallax>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collab-by-platform section-margin">
            <div className="container">
              <div className="col-md-10 heading-left">
                <h2 style={{ color: "#4E76C9", marginBottom: "30px" }}>
                  Collab by Platform
                </h2>
              </div>
              <div className="col-md-2 view-all-right">
                <a href="#">View All</a>
              </div>
              <div className="clear" />

              <div
                className="row callab-platform margin-0"
                style={{ padding: "18px" }}
              >
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className=""
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024,
                      },
                      items: 5,
                      partialVisibilityGutter: 40,
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0,
                      },
                      items: 1,
                      partialVisibilityGutter: 30,
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464,
                      },
                      items: 2,
                      partialVisibilityGutter: 30,
                    },
                  }}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={false}
                  shouldResetAutoplay
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  <div
                    className="col-md-12 icon carousel-item"
                    style={{ padding: "0px", border: "0px" }}
                  >
                    <img src={c1} />
                  </div>
                  <div
                    className="col-md-12 icon carousel-item"
                    style={{ padding: "0px", border: "0px" }}
                  >
                    <img src={c2} width="180px" />
                  </div>
                  <div className="col-md-12 icon carousel-item">
                    <img src={twitter} />
                  </div>
                  <div className="col-md-12 icon carousel-item">
                    <img src={tiktok} />
                  </div>
                  <div className="col-md-12 icon carousel-item">
                    <img src={facebook} />
                  </div>
                  <div className="col-md-12 icon carousel-item">
                    <img src={pinterest} />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          {/* Start Popular Courses 
    ============================================= */}
          <div className="popular-courses circle  carousel-shadow default-padding">
            <div className="container">
              <div className="col-md-10 heading-left">
                <h2 style={{ color: "#4E76C9", marginBottom: "50px" }}>
                  Todays Trading Videos
                </h2>
              </div>
              <div className="col-md-2 view-all-right">
                <Link to="/casting-call">View All</Link>
              </div>

              <div className="clear" />
              <div className="row">
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className=""
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={{
                    desktop: {
                      breakpoint: {
                        max: 3000,
                        min: 1024,
                      },
                      items: 4,
                      partialVisibilityGutter: 40,
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0,
                      },
                      items: 1,
                      partialVisibilityGutter: 30,
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464,
                      },
                      items: 2,
                      partialVisibilityGutter: 30,
                    },
                  }}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={false}
                  shouldResetAutoplay
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  <div
                    className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video"
                    style={{ margin: "auto", width: "95%" }}
                  >
                    {/*?php for ($i=0; $i < 9; $i++) { ?*/}
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
                              <span>20k Fallovers</span>
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

                  <div
                    className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video"
                    style={{ margin: "auto", width: "95%" }}
                  >
                    {/*?php for ($i=0; $i < 9; $i++) { ?*/}
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
                              <span>20k Fallovers</span>
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

                  <div
                    className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video"
                    style={{ margin: "auto", width: "95%" }}
                  >
                    {/*?php for ($i=0; $i < 9; $i++) { ?*/}
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
                              <span>20k Fallovers</span>
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

                  <div
                    className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video"
                    style={{ margin: "auto", width: "95%" }}
                  >
                    {/*?php for ($i=0; $i < 9; $i++) { ?*/}
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
                              <span>20k Fallovers</span>
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

                  <div
                    className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video"
                    style={{ margin: "auto", width: "95%" }}
                  >
                    {/*?php for ($i=0; $i < 9; $i++) { ?*/}
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
                              <span>20k Fallovers</span>
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
                </Carousel>
              </div>
            </div>
          </div>
          {/* End Popular Courses */}
          {/* Start Clients Area 
    ============================================= */}
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

export default Login;
