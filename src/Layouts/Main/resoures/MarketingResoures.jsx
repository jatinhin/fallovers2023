import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import Header from "../include/Header";
import Footer from "../include/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as AiIcons from "react-icons/ai";

function MarketingResoures(props) {
  const {
    formState: {errors},
  } = useForm();

  const [featuredSectionOne, setfeaturedSectionOne] = useState([1, 2, 3, 4]);
  const [featuredSectionTwo, setfeaturedSectionTwo] = useState([1, 2, 3]);
  const [featuredSectionVideo, setfeaturedSectionVideo] = useState([
    1, 2, 3, 4,
  ]);
  const [featuredSectionThird, setfeaturedSectionThird] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const [productUpdate, setproductUpdate] = useState([
    1, 1, 2, 3, 4, 5, 2, 3, 4, 5,
  ]);
  const [guides, setGuides] = useState([1, 2, 3, 4, 5, 6]);

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
                      <h1>Why Join an Influencer Marketplace?</h1>
                      <Link to="/articles">
                        <button>
                          Read Article <AiIcons.AiOutlineArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="influencer-marketing-feature-section marketing-feature influencer-marketing-box">
            <div className="container">
              <div className="row">
                <div className="col-md-6 influencer-marketing-heading-left">
                  <h2>Featured Articles</h2>
                </div>

                <div className="col-md-6 influencer-marketing-heading-right">
                  <p>
                    <Link to={"/articles-featured"}>
                      View All Insights <AiIcons.AiOutlineArrowRight />{" "}
                    </Link>
                  </p>
                </div>
              </div>

              <div className="row">
                {featuredSectionOne.map(() => {
                  return (
                    <div className="col-md-3">
                      <div className="card"></div>
                      <p>Plus-Size Influencers you Can Work With Today</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="container marketing-feature influencer-marketing-box">
            <div className="row">
              <div className="col-md-6 influencer-marketing-heading-left">
                <h2>Featured Articles</h2>
              </div>

              <div className="col-md-6 influencer-marketing-heading-right">
                <p>
                  <Link to={"/articles-featured"}>
                    View All Insights <AiIcons.AiOutlineArrowRight />{" "}
                  </Link>
                </p>
              </div>
            </div>

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

            <div className="row influencer-marketing-box-small">
              {featuredSectionThird.map((data) => {
                return (
                  <div className="col-md-4">
                    <div className="outer-card">
                      <div className="card"></div>
                      <div className="card-content">
                        Plus-Size Influencers you Can Work With Today
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="influencer-marketing-feature-video-section influencer-marketing-box">
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
                      max: 3000,
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
                {featuredSectionVideo.map((data) => {
                  return (
                    <div className="col-md-12 card-outer">
                      <div className="card"></div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>

          <div className="container marketing-feature featured-guides influencer-marketing-box">
            <div className="row">
              <div className="col-md-8">
                <h2>Guides</h2>
                <div className="row">
                  {guides.map((data) => {
                    return (
                      <div className="col-md-6 marketing-guides-section">
                        <div className="card"></div>
                        <p>Plus-Size Influencers you Can Work With Today</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="col-md-4 influencer-marketing-heading-right">
                <div className="product-update">
                  <h2>Product Updates</h2>
                  <ul>
                    {productUpdate.map((data) => {
                      return <li>Follovers product Update: January 2023</li>;
                    })}
                  </ul>
                </div>
                <p style={{ textAlign: "left" }}>
                  <Link to={"/product-update"}>
                    View All Product Updates <AiIcons.AiOutlineArrowRight />{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="container marketing-feature influencer-marketing-box ">
            <div className="row">
              <div className="col-md-12 manag-service-col blue-section partners-form-section bg-gradient">
                <div className="row">
                  <div className="col-md-6 partners-form-sidebar-left">
                    <div className="marketing-form-title">
                      News
                      <div className="marketing-form-title-arrow">
                        <AiIcons.AiOutlineArrowRight />
                      </div>
                    </div>
                    <h2 className="marketing-form-title-2">
                      Get the latest influencer marketing news
                    </h2>
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
                          <input type="checkbox"/>
                          Yes, I would like to receive email marketing
                          communication from Followers. I understand that I can
                          unsubscribe at any time.
                        </label>
                      </div>

                      <Link to="/inquiry-thanks">
                        <button> Submit</button>
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

export default MarketingResoures;
