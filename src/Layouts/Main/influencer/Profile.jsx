import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import * as MdIcons from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Header from "../include/Header";
import Footer from "../include/Footer";
import {
  GET_CREATE_PROFILE,
  GET_HOMEPAGE_DATA,
} from "../../../actions/authenticationAction";
import {
  instagram,
  profileCircle,
  profile,
  Team,
} from "../../../Constants/Images";
import { Link, useParams } from "react-router-dom";
import AboutModal from "../common/AboutModal";

function Profile(props) {
  const [connections, setConnections] = useState([1, 2, 3, 4, 5, 6, 8, 7, 9]);
  const [tradingVideo, settradingVideo] = useState([]);
  const getParm = useParams();
  const [work, setWork] = useState(false);


  useEffect(() => {
    GET_CREATE_PROFILE(getParm.id).then((res) => {
      const { details } = res;
      console.log(details, "datadata");
      // setInfluencer(data.influencer);
    });
  }, []);

  // setisLoading(true);
  GET_HOMEPAGE_DATA().then((res) => {
    const { data } = res;
    if (res.status == 200) {
      settradingVideo(data.latestVideo.uploads);
    }
  });

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
            <div className="container i-profile">
              <div className="row i-profile-section">
                <div className="col-md-12 heading-left">
                  <h1>Social</h1>
                </div>

                <div className="col-md-3 i-profile-left">
                  <div className="i-profile-pic align-center">
                    <img src={profile} />
                    <h2 className="margin-bottom-0">Deepak Pareek</h2>
                  </div>

                  <div className="i-profile-fallovers align-center">
                    20k -- Followers
                  </div>
                  <div className="i-profile-networks align-center">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <ul className="social-list i-profile-list">
                    <li onClick={() => setWork(3)}>
                      About <span>Add</span>
                    </li>
                    <li onClick={() => setWork(4)}>
                      Location <span>Add</span>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 i-profile-bio">
                  <div className="row">
                    <div className="col-md-6 padding-left-0">
                      <h2>Demographics</h2>
                    </div>
                    <div className="col-md-6 i-bio-edit">
                      <span>
                        <Link to={"/edit-profile"}>
                          {" "}
                          <MdIcons.MdEdit /> Edit{" "}
                        </Link>
                      </span>
                    </div>

                    <div className="clear"></div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="title">GENDER</div>
                        <div className="title-info">Prefer not to say</div>
                      </div>

                      <div className="col-md-6">
                        <div className="title">AGE</div>
                        <div className="title-info">25</div>
                      </div>

                      <div className="col-md-6">
                        <div className="title">ETHNICITY</div>
                        <div className="title-info">Black/Indian</div>
                      </div>

                      <div className="col-md-6">
                        <div className="title">RELATIONSHIP STATUS</div>
                        <div className="title-info">Single</div>
                      </div>

                      <div className="col-md-6">
                        <div className="title">EDUCATION</div>
                        <div className="title-info">Some High School</div>
                      </div>

                      <div className="col-md-6">
                        <div className="title">LANGUAGE</div>
                        <div className="title-info">English, Hindi</div>
                      </div>

                      <div className="col-md-6">
                        <div className="title">PETS</div>
                        <div className="title-info">Cat, Dog</div>
                      </div>

                      <div className="col-md-6">
                        <div className="title">CHILDREN</div>
                        <div className="title-info">--</div>
                      </div>

                      <div className="col-md-12 i-proile-devied"></div>
                    </div>

                    <div className="col-md-12 padding-left-0 i-profile-analytics">
                      <h2>Analytics</h2>

                      <div className="col-md-6 padding-0">
                        <div className="analytics-info">
                          <h2>eng. Rate</h2>
                          <p>--</p>
                        </div>
                      </div>
                      <div className="col-md-6 padding-0">
                        <div className="analytics-info">
                          <h2>eng. Rate</h2>
                          <p>--</p>
                        </div>
                      </div>
                    </div>


                    <div className="col-md-12 padding-left-0 i-profile-analytics" style={{border:'0px'}}>
                      <h2>Audience Demographics</h2>
                      <div className="analytics-info analytics-data"></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 i-profile-connections">
                  {console.log(connections, "connections")}
                  <h2>View Connections</h2>
                  <ul>
                    {connections &&
                      connections.length > 0 &&
                      connections.map(() => {
                        return (
                          <li>
                            <div style={{ float: "left" }}>
                              <img src={profileCircle} />
                              <span>
                                <img className="network" src={instagram} />
                              </span>
                            </div>

                            <div
                              className="con-name"
                              style={{ display: "inline" }}
                            >
                              user className
                            </div>
                            <p className="con-foll">64.9K Followers</p>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>

              {tradingVideo && tradingVideo.length > 0 ? (
                <div className="popular-courses circle  carousel-shadow">
                  <div>
                      <h2 style={{ marginBottom: "30px" }}>
                        Listings
                      </h2>

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
                              max: 2000,
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
                                <div className="info">
                                  <div className="author-info">
                                    <div className="thumb">
                                      <a href="#">
                                        <img src={Team} alt="Thumb" />
                                      </a>
                                    </div>
                                    <div className="others">
                                      <a href="#">
                                        {data.deal_network_profile}
                                      </a>
                                      <div className="rating">
                                        <img src={instagram} />
                                        <span>
                                          {" "}
                                          {data.deal_uploads_fallowers}k
                                          Fallovers
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <video
                                    src="https://fallovers.com/home/video/video.mp4"
                                    controls
                                    muted
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
            </div>
          </div>

          {work ? (
            <AboutModal work={work} setWork={setWork}/>
            ) : null}
            
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default Profile;
