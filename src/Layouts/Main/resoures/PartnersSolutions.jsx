import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { partners } from "../../../Constants/Images";

function PartnersSolutions(props) {
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
                      <h1>Solutions</h1>
                      <p>
                        From advanced sales lift studies that measure campaign
                        ROI and impact to creative custom branded music and
                        video production.
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
                  Our solution partners represent a range of technical and
                  creative specialties. Depending on your goals, you might want
                  to work with multiple partners at once.
                </h2>
                <p>Interested in becoming a Partner? Apply Now</p>
              </div>
              <div className="col-md-4"></div>
            </div>

            <div className="row">
              <div className="col-md-12">
                {partner.map(() => {
                  return (
                    <div className="row partners-talent-solutions">
                      <h2> Retail Sales Lift </h2>

                      <div className="col-md-12 partners-form-section-inner">
                        <div className="row">
                          <div className="col-md-10 p-0">
                            <div className="partners-talent-section">
                              <h2 className="influencer-impact-heading">
                                Influencelmpact
                              </h2>
                              <p className="influencer-impact-type">
                                Idea Client Type
                              </p>
                              <span>cpg</span>
                              <span>cpg:food</span>
                              <span>cpg:tech</span>
                              <h6>
                                From advanced sales lift studies that measure
                                campaign ROI and impact to creative custom
                                branded music and video production.
                              </h6>
                            </div>
                          </div>

                          <div className="col-md-2 p-l-0">
                            <div className="partners-talent-section-img">
                              <div>
                                <img width={90} src={partners} />
                              </div>
                              <button className="btn-blue partners-talent-section-btn">
                                Get Pricing
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 partners-talent-solutions-bottom">
                        <h3>In-Store Sale Tracking and Attibution</h3>
                      </div>
                    </div>
                  );
                })}

                <div className="col-md-12 manag-service-col blue-section partners-form-section margin-top-20">
                  <div className="row">
                    <div className="col-md-6 partners-form-sidebar-left partner-form">
                      <h2>Let's Get Startd</h2>
                      <p>
                        Fill out the form and one of our team members will help
                        you determine which solution is the best fit for your
                        next influencer marketing campaign.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <form>
                        <h2>Request a Proposal</h2>
                        <div className="form-group">
                          <label>First Name*</label>
                          <input type="text"></input>
                        </div>

                        <div className="form-group">
                          <label>Last Name*</label>
                          <input type="text"></input>
                        </div>

                        <div className="form-group">
                          <label>Business Email*</label>
                          <input type="text"></input>
                        </div>

                        <div className="form-group">
                          <label>Which Best Describes you?*</label>
                          <input type="text"></input>
                        </div>

                        <div className="form-group">
                          <label>
                            <input type="checkbox" />
                            Yes, I would like to receive email marketing
                            communication from Followers. I understand that I
                            can unsubscribe at any time.
                          </label>
                        </div>

                        <Link to="/inquiry-thanks">
                          <button>Submit</button>
                        </Link>
                      </form>
                    </div>
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

export default PartnersSolutions;
