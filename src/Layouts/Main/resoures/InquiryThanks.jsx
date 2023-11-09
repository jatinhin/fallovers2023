import React from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import "react-multi-carousel/lib/styles.css";

function InquiryThanks(props) {
  const [featuredSectionTwo, setfeaturedSectionTwo] = useState([1, 2, 3, 4]);

  return (
    <>
      <ParallaxProvider>
        <div className={`background-thanks`}>
          <Header />

          <div className="about-area default-padding-40  m-bottom-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-info managed-service-top-banner influencer-marketing">
                    <div className="partners-top thanks-section">
                      <h1>Thank You!</h1>
                      <p>
                        An IZEAn will be in touch shortly. Should you wish to
                        speak to us sooner, Please call us at (877) 525-4932
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" marketing-feature influencer-marketing-box inquiry-thanks">
            <div className="container">
              <div className="row">
                <div className="col-md-12 influencer-marketing-heading-left">
                  <h2 className="thanks-title">You May Enjoy</h2>
                </div>
              </div>

              <div className="row influencer-marketing-box-max">
                {featuredSectionTwo.map(() => {
                  return (
                    <div className="col-md-3">
                      <div className="card"></div>
                      <p className="resources">Resources</p>
                      <h2>Plus-Size Influencers you Can Work With Today</h2>
                      <p>
                        Industry leading results anD nexteein technology
                        Industry leading results anD nexteein technology
                        Industry leading results anD nexteein technology
                        Industry leading results anD nexteein technology
                        Industry leading results anD nexteein technology
                        Industry leading results.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
}

export default InquiryThanks;
