import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import Footer from "../include/Footer";

function ManagedServices(props) {
  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="about-area default-padding home-top-bg m-bottom-0">
            <div className="container">
              <div className="row">
                <div className="about-info managed-service-top-banner">
                  <div className="home-top">
                    <h1>Manage Services</h1>
                    <p>
                      Start growing your business by creating stunning Videos,
                      animations, branding, mockups, presentations,graphics, and
                      professional websites!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container width-1000">
            <div className="row">
              <div
                className="col-md-12 manage-service-info"
                style={{ marginTop: "35px" }}
              >
                <h2>16+ years of experience. 3.9m+ collabs.</h2>
                <p>
                  Trusted by the world’s largest agencies and half of the
                  Fortune 50.
                </p>

                <div className="manage-service-info-img"></div>
              </div>

              <div className="col-md-12 manag-service-col">
                <div className="row">
                  <div className="col-md-6">
                    <h2>Unmatched Experience</h2>
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

              <div className="col-md-12 manage-service-info">
                <div className="manage-service-info-img manage-service-info-img-2"></div>

                <h2>16+ years of experience. 3.9m+ collabs.</h2>
                <p>
                  Trusted by the world’s largest agencies and half of the
                  Fortune 50.
                </p>

                <button>Go Behind the scenes with Follovers</button>
              </div>

              <div className="col-md-12 manag-service-col">
                <div className="row">
                  <div className="col-md-6">
                    <div className="manag-service-col-img"></div>
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

              <div
                className="col-md-12 manag-service-col"
                style={{ marginTop: "50px" }}
              >
                <div className="row">
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

                  <div className="col-md-6">
                    <div className="manag-service-col-img"></div>
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

export default ManagedServices;
