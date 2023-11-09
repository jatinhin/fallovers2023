import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import Footer from "../include/Footer";
import { partners } from "../../../Constants/Images";
import * as AiIcons from "react-icons/ai";

function Partners(props) {
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
                      <p className="partners-resources">Resources</p>
                      <h1>Partners</h1>
                      <p>
                        Take your campaigns to new heights with exclusive
                        opportunities for innovative measurement, talent
                        collaboration, and direct alignment to commerce.
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
              <div className="col-md-6 manage-service-info partners-heading">
                <h2>
                  Best in class solutions and talent that seamlessly integrate
                  with our services and software platforms.
                </h2>
                <p>Interested in becoming a Partner? Apply Now</p>
              </div>
              <div className="col-md-6"></div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="partners-box">
                  <p>
                    Our alliance of leading talent agencies gives you access to
                    some of the best influencer talent in the industry
                  </p>

                  <span>
                    <Link to="/partners-information-talent">
                      {" "}
                      View Partners <AiIcons.AiOutlineArrowRight />{" "}
                    </Link>
                  </span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="partners-box">
                  <p>
                    From advanced sales lift studies that measure campaign ROI
                    and impact to creative custom branded music and video
                    production.
                  </p>

                  <span>
                    <Link to="/partners-information-solutions">
                      View Partners
                      <AiIcons.AiOutlineArrowRight />
                    </Link>
                  </span>
                </div>
              </div>

              <div
                className="col-md-12 manag-service-col blue-section partners-form-section"
                style={{ marginTop: "50px" }}
              >
                <div className="row">
                  <div className="col-md-6 partners-form-sidebar-left">
                    <h2>Become a Partner</h2>
                    <p>
                      Thanks for your interest in the IZEA Partners program. We
                      read every submission, and will reach out if your company
                      qualifies for this program.*
                    </p>

                    <p className="partners-form-section-2">
                      *Applying for this program means you agree to be contacted
                      by IZEA about this program, and acknowledge IZEA’s Privacy
                      Policy.
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
                          communication from Followers. I understand that I can
                          unsubscribe at any time.
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

          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default Partners;
