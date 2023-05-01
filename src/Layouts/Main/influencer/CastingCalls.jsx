import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

import { Team } from "../../../Constants/Images";
import Header from "../include/Header";
import Footer from "../include/Footer";

function CastingCalls(props) {
  const [castingList, setcastingList] = useState(["#FF818D", "#9071FF", "#016918", "#2D2D2D", "#3A87FA", "#FF818D", "#9071FF", "#2D2D2D"]);

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="popular-courses circle carousel-shadow">
            <div className="container">
              <div className="row">
                <div className="col-md-12 filter-section">
                  <div className="row">
                    <div className="col-md-2 filter-col-1">
                      <ul className="trading-filter">
                        <li>
                          {" "}
                          <AiIcons.AiOutlineFilter /> Filter
                        </li>
                        <li>
                          {" "}
                          <AiIcons.AiOutlineMenuUnfold /> Sort
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-10  filter-col-2">
                      <div className="row">
                        <div
                          className="col-md-12 filter"
                          style={{ borderLeft: "2px solid rgb(211 208 212)" }}
                        >
                          <ul className="trading-filter">
                            <li>Influencer Marketing</li>
                            <li>Work for Hire</li>
                            <li>Job Listing</li>
                            <li>Job Listing</li>
                            <li>Job Listing</li>
                            <li>Job Listing sdfsdf</li>
                            <li>Job Listing</li>
                            <li>Job Listing</li>
                            <li>Job Listing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div style={{ clear: "both" }}></div>
                  <div
                    className="seperator seperator-top col-md-12"
                    style={{ marinTop: "22px" }}
                  >
                    <span className="border"></span>
                  </div>
                </div>

                <div className="col-md-12 heading-left">
                  <h2
                    style={{
                      color: "#4E76C9",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    All Casting Calls
                  </h2>
                </div>

                {castingList.map((key) => {
                  return (
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
                                <div className="casting-call-type">
                                  Influencer Marketing
                                </div>
                              </div>
                            </div>
                            <div className="product-img casting-calls" style={{background:key}}>
                                Work with Evolv Technology
                                Work with Evolv Technology
                            </div>
                            <div className="prodct-detail row">
                              <div className="col-md-7">
                                <div className="ongoing">
                                  <MdIcons.MdCalendarMonth /> Ongoing
                                </div>
                              </div>
                              <div className="col-md-5 align-right">
                                <div className="outer-right outer-timer">
                                  <MdIcons.MdOutlineTimer />
                                </div>
                                <div className="outer-right outer-doller">
                                  <AiIcons.AiOutlineDollarCircle />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="row arrow">
                <div className="col-md-6 arrow-left">
                  <span>
                    <MdIcons.MdKeyboardArrowLeft />
                  </span>
                </div>
                <div className="col-md-6 arrow-right">
                  <span>
                    <MdIcons.MdKeyboardArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default CastingCalls;
