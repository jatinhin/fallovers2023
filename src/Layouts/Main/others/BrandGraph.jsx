import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { partners } from "../../../Constants/Images";

function BrandGraph(props) {
  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="about-area default-padding home-top-bg m-bottom-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-info managed-service-top-banner">
                    <div className="partners-top">
                      <h1>Social Media Intelligence Plateform</h1>
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

          <div className="container width-1000">
            <div className="row">
              <div className="col-md-12 manag-service-col">
                <div className="row">
                  <div className="col-md-6">
                    <div className="manag-service-col-img"></div>
                  </div>

                  <div className="col-md-6">
                    <h3>Industry leading results and next-gen technology</h3>
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
                  </div>
                </div>
              </div>

              <div
                className="col-md-12 manag-service-col"
                style={{ marginTop: "50px" }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <h3>Industry leading results and next-gen technology</h3>
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
                  </div>

                  <div className="col-md-6">
                    <div className="manag-service-col-img"></div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 manag-service-col">
                <div className="row">
                  <div className="col-md-6">
                    <div className="manag-service-col-img"></div>
                  </div>

                  <div className="col-md-6">
                    <h3>Industry leading results and next-gen technology</h3>
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
                  </div>
                </div>
              </div>

              <div className="col-md-12 manag-service-col">
                <div className="row">
                  <div className="col-md-12">
                    <h3>Industry leading results and next-gen technology</h3>
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
                  </div>
                </div>
              </div>

              <div className="col-md-12 manag-service-col">
                <div className="row">
                  <div className="col-md-6">
                    <div className="manag-service-col-img"></div>
                  </div>

                  <div className="col-md-6">
                    <h3>Industry leading results and next-gen technology</h3>
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
                  </div>
                </div>
              </div>

              <div
                className="col-md-12 manag-service-col"
                style={{ marginTop: "50px" }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <h3>Industry leading results and next-gen technology</h3>
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
                  </div>

                  <div className="col-md-6">
                    <div className="manag-service-col-img"></div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 manag-service-col">
                <div className="row">
                  <div className="col-md-6">
                    <div className="manag-service-col-img"></div>
                  </div>

                  <div className="col-md-6">
                    <h3>Industry leading results and next-gen technology</h3>
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
                  </div>
                </div>
              </div>

              <div
                className="col-md-12 manag-service-col"
                style={{ marginTop: "50px" }}
              >
                <div className="row">
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
                        <label>Comments*</label>
                        <input type="text"></input>
                      </div>

                      <div className="form-group">
                        <label>I Consent To Receive Emails from IZEA</label>
                        <input type="text"></input>
                      </div>

                      <Link to="/inquiry-thanks">
                        {" "}
                        <button>Submit</button>
                      </Link>
                    </form>
                  </div>

                  <div className="col-md-6">
                    <h2>Dedicated Team</h2>
                    <h3>Industry leading results and next-gen technology</h3>
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />

          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default BrandGraph;
