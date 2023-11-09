import React from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import Footer from "../include/Footer";
import * as AiIcons from "react-icons/ai";

function ProductUpdate(props) {
  const [featuredSectionTwo, setfeaturedSectionTwo] = useState([
    1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
  ]);

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="about-area default-padding-40 home-top-bg blue-section m-bottom-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-info managed-service-top-banner influencer-marketing">
                    <div className="partners-top">
                      <h1>Product Update</h1>
                      <button>
                        Read Article <AiIcons.AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container marketing-feature influencer-marketing-box margin-top-40">
            <div className="row influencer-marketing-box-max">
              {featuredSectionTwo.map(() => {
                return (
                  <div className="col-md-4">
                    <div className="card"></div>
                    <p className="resources">Resources</p>
                    <h2>Plus-Size Influencers you Can Work With Today</h2>
                    <p>
                      Industry leading results anD nexteein technology Industry
                      leading results anD nexteein technology Industry leading
                      results anD nexteein technology Industry leading results
                      anD nexteein technology Industry leading results anD
                      nexteein technology Industry leading results.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default ProductUpdate;
