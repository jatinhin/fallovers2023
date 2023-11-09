import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { partners } from "../../../Constants/Images";
import * as AiIcons from "react-icons/ai";

function PartnersTalent(props) {
  const [partner, setpartner] = useState([1, 2, 1, 5, 4]);

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="about-area default-padding-40 home-top-bg blue-section m-bottom-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-info managed-service-top-banner">
                    <div className="partners-top">
                      <p className="partners-resources">follovers PARTNERS</p>
                      <h1>Talent</h1>
                      <p>
                        Our Talent Partner Program brings together best-in-class
                        influencer representation agencies that share a vision
                        to unite the broader creator economy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <img src={partners} />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row margin-top-40">
              <div className="col-md-8 manage-service-info partners-heading">
                <h2>
                  Get access to top influencer talent across existing and
                  emerging social media platforms, bolstering industry thought
                  leadership, and aligning strategies to trending consumer
                  interests.
                </h2>
                <p>Interested in becoming a Partner? Apply Now</p>
              </div>
              <div className="col-md-4"></div>
            </div>

            <div className="row">
              <div className="col-md-12 section-w">
                <h2>Talent Partners</h2>

                {partner.map(() => {
                  return (
                    <div className="row partners-talent">
                      <div className="col-md-6 p-0">
                        <div className="partners-talent-img">
                          <img src={partners} />
                        </div>
                      </div>

                      <div className="col-md-6 p-l-0">
                        <div className="partners-talent-content">
                          <h2 className="t-upper">Vampped</h2>
                          <p>
                            From advanced sales lift studies that measure
                            campaign ROI and impact to creative custom branded
                            music and video production.
                          </p>

                          <span>
                            <Link to="/partners-information-solutions">
                              View Partners
                              <AiIcons.AiOutlineArrowRight />
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="col-md-12 manag-service-col talent-partner">
                <div className="row">
                  <div className="col-md-6">
                    <div className="manag-service-col-img"></div>
                  </div>

                  <div className="col-md-6 p-top-20">
                    <h2>Become an Follovers Talent Partner</h2>
                    <p>
                      Industry leading results anD nexteein technology Industry
                      leading results anD nexteein technology Industry leading
                      results anD nexteein technology Industry leading results
                      anD nexteein technology Industry leading results anD
                      nexteein technology Industry leading results anD nexteein
                      technology Industry leading results anD nexteein
                      technology Industry leading results anD nexteein
                      technology
                    </p>
                    <Link to={"/partners"}>
                      <button className="btn-blue t-upper">Get Started</button>
                    </Link>
                  </div>
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

export default PartnersTalent;
