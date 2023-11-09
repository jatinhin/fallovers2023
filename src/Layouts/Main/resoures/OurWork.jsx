import React from "react";
import { useState, useEffect } from "react";
import { GET_HOMEPAGE_DATA } from "../../../actions/authenticationAction";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import * as AiIcons from "react-icons/ai";
import Footer from "../include/Footer";
import { Team, instagram, ourWork } from "../../../Constants/Images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Networks from "../common/Networks";

function OurWork(props) {

  const [work, setWork] = useState([1, 2, 3, 4, 5, 6, 9, 8, 7, 12, 54, 7]);
  const [workCollabs, setworkCollabs] = useState([]);

  useEffect(() => {
    GET_HOMEPAGE_DATA().then((res) => {
      const { data } = res;
      if (res.status == 200) {
        setworkCollabs(data.latestVideo.uploads);
      }
    });
  }, []);

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />
          <div className="about-area default-padding home-top-bg m-bottom-40">
            <div className="container">
              <div className="row">
                <div className="about-info">
                  <div className="home-top">
                    <p>Resources</p>
                    <h1>Our Work</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {work.map(() => {
                return (
                  <div className="col-md-3">
                    <div className="our-work-card">
                      <div className="our-work-card-img"></div>
                      <div className="our-work-card-inner">
                        <div className="our-work-logo">
                          <img src={ourWork} />
                        </div>
                        <p>
                          Industry leading results anD nexteein technology
                          Industry leading results and nexteein technology
                          Industry leading results anD nexteein
                        </p>
                        <span>
                          View Case Study
                          <AiIcons.AiOutlineArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {workCollabs && workCollabs.length > 0 ? (
            <div className="popular-courses circle  carousel-shadow home-today-video influencer-collabs">
              <div className="container">
                <div className="col-md-12 heading-center">
                  <h2>Todays Trading Videos</h2>
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
                    {workCollabs.map((data) => {
                      return (
                        <div
                          className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video"
                          style={{ margin: "auto", width: "95%" }}
                        >
                          <div className="item">
                            <div className="info">
                              <div className="author-info">
                                <div className="thumb">
                                  <a href="#">
                                    <img src={Team} alt="Thumb" />
                                  </a>
                                </div>
                                <div className="others">
                                  <a href="#">{data.deal_network_profile}</a>
                                  <div className="rating">
                                    <img src={instagram} />
                                    <span>
                                      {" "}
                                      {data.deal_uploads_fallowers}k Fallovers
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <video
                                src="https://fallovers.com/home/video/video.mp4"
                                controls
                                muted
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

          <div className="col-12">
            <h2 className="heading-center-netowrk">
              Trusted by Fortune 500 brands and the world’s largest agencies.
            </h2>
            <Networks />
          </div>

          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default OurWork;
