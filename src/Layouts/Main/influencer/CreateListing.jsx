import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import {
  instagram,
  Team,
} from "../../../Constants/Images";
import Header from "../include/Header";
import { useState } from "react";
import Footer from "../include/Footer";

function CreateListing(props) {
  const [castingList, setcastingList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

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
                    <div className="col-md-2">
                      <ul className="trading-filter">
                        <li>Filter</li>
                        <li>Sort</li>
                      </ul>
                    </div>

                    <div className="col-md-10">
                      <div className="row">
                        <div
                          className="col-md-12"
                          style={{ borderLeft: "2px solid rgb(211 208 212)" }}
                        >
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
                    Todays Trading Videos
                  </h2>
                </div>

                {castingList.map(() => {
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
                  );
                })}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default CreateListing;
