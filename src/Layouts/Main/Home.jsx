import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_HOMEPAGE_DATA } from "../../actions/authenticationAction";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "./include/Header";

import {
  about,
  sideImage,
  c1,
  c2,
  twitter,
  tiktok,
  facebook,
  pinterest,
  instagram,
  Team,
  cookie,
} from "../../Constants/Images";
import { useRef } from "react";
import Footer from "./include/Footer";
import Networks from "./common/Networks";
import axios from "axios";

function Home(props) {
  const [Image, setImage] = useState([])
  const {
    formState: { errors },
  } = useForm();

  const [socialMedia, setsocialMedia] = useState([]);
  const [tradingVideo, settradingVideo] = useState([]);

  const videoRef = useRef();
  const [stop, setStop] = useState(false);

//  const NewPage = async () => {
//    try {
//      const response = await axios.get(
//        "https://seopods.com/php-api/Pods%20Details/read",
//        {
//        },

//        {
//          headers: {
//            "Content-Type": "application/json",
//          },
//        }
//      );
//      setImage(response.data.data)
//      console.log("response", response);
//      console.log("ahsdhkkasj", Image)
//    } catch (error) {
//      console.error("Error fetching data: ", error);
//    }
//  };

  useEffect(() => {

    // setisLoading(true);
    GET_HOMEPAGE_DATA().then((res) => {
      const { data } = res;
      if (res.status == 200) {
        console.log(data);
        settradingVideo(data.latestVideo.uploads);
        setsocialMedia(data.socialmedia);
      }
    });
    // NewPage();
  }, []);

// const imagess = Image.map((image) => ({
//   src: `https://seopods.com${image.image}`,
// }));
// console.log("images", Image);
// console.log("imagess", imagess);
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

  
    
  const handleVideo = () => { alert('Aa')
    console.log(videoRef.current,'videoRef')
    videoRef.current.autoplay(true);
    videoRef.current.src('');
};


  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header headerbg={1} />

          <div className="about-area default-padding home-top-bg">
            <div className="container">
              <div className="row">
                <div className="about-info" style={{ height: "100px" }}>
                  <div className="home-top">
                    <h1>All your design tools in one place</h1>
                    <p>
                      Start growing your business by creating stunning Videos,
                      animations, branding, mockups, presentations,graphics, and
                      professional websites!
                    </p>

                    <button className="start-now"> Start Now</button>
                  </div>
                </div>

                <div className="mobile-video right-mobile-bg">
                  <video
                    ref={videoRef}
                    src={cookie}
                    controls
                    muted
                    autoPlay={true}
                    preLoad="auto"
                    loop
                  ></video>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row step-3">
              <div className="col-md-12 heading-center">
                <h2>3 Step Process</h2>
              </div>

              <Parallax speed={-1} scale={[0.75, 1]} easing="easeOutQuint">
                <div className="our-features">
                  <div className="col-md-4 col-sm-4">
                    <div className="item item-about mariner">
                      <img src={about} />
                      <div className="info about-card">
                        <h4>Create a Star</h4>
                        <p>
                          Start growing your business by creating stunning
                          Videos, animations, branding, mockups, presentations,
                          graphics, and professional websites!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="item item-about java">
                      <img src={about} />
                      <div className="info about-card">
                        <h4>Accept Incoming Orders</h4>
                        <p>
                          Start growing your business by creating stunning
                          Videos, animations, branding, mockups, presentations,
                          graphics, and professional websites!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="item item-about malachite">
                      <img src={about} />
                      <div className="info about-card">
                        <h4>Work your Magic</h4>
                        <p>
                          Start growing your business by creating stunning
                          Videos, animations, branding, mockups, presentations,
                          graphics, and professional websites!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
          {/* <h1>dsfghjkl</h1>
          {imagess.map((img, i) => (
            <>
            <img
            src={img.src}
            alt=""
            key={i}
            style={{ width: "100%", display: "block", cursor: "pointer" }}
            />
            {console.log("things",imagess)}
            </>
            ))} */}
          {/* End About */}
          <div className="seles home-top-bg seles-info">
            <div className="container">
              <div className="row margin-0">
                <div className="col-md-12 heading-left">
                  <h2 className="seles-title">Seles</h2>
                </div>
                <div className="col-md-5 thumb">
                  <h2 className="seles-left-card-heading">
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

          <Networks title={`COLLAB BY PLATFORM`} />

          {/* Start Popular Courses 
    ============================================= */}

          {tradingVideo && tradingVideo.length > 0 ? (
            <div className="popular-courses circle  carousel-shadow home-today-video">
              <div className="container">
                <div className="col-md-10 heading-left">
                  <h2 style={{ color: "#4E76C9", marginBottom: "50px" }}>
                    Todays Trading Videos
                  </h2>
                </div>
                <div className="col-md-2 view-all-right">
                  <Link to="/trading-video">View All</Link>
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
                    {tradingVideo.map((data) => {
                      console.log(tradingVideo, "tradingVideo");
                      return (
                        <div
                          className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video"
                          style={{ margin: "auto", width: "95%" }}
                        >
                          <div className="item">
                            <div className="info" onClick={() => handleVideo()}>
                              <div className="author-info author-info-video">
                                <div className="thumb">
                                  <a href="#">
                                    <img src={Team} alt="Thumb" />
                                  </a>
                                </div>
                                <div className="others">
                                  <a
                                    className="author-info-video-name"
                                    href="#"
                                  >
                                    {data.deal_network_profile}
                                  </a>
                                  <div className="rating author-info-video-netowrk">
                                    <img src={instagram} />
                                    <span>
                                      {data.deal_uploads_fallowers}k Fallovers
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <video
                                src="https://fallovers.com/home/video/video.mp4"
                                controls
                                muted
                                ref={videoRef}
                                autoPlay={false}
                                preLoad="auto"
                                loop
                              ></video>
                              <div className="clear"></div>
                              <div className="prodct-detail">
                                Sponsored {data.media_name} post
                                <br /> from @
                                <a href={data.deal_uploads_link}>
                                  {data.deal_network_profile.toLowerCase()}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </div>
          ) : null}

          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default Home;
