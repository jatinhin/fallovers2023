import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { c1, instagram, Team } from "../../../Constants/Images";
import Header from "../include/Header";
import { GET_MARKET_PLACE } from "../../../actions/authenticationAction";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../include/Footer";
import Networks from "../common/Networks";

function CreatemarketPlace(props) {
  const [filterTags, setfilterTags] = useState([]);
  const [influencer, setInfluencer] = useState([]);
  const [activeTag, setactiveTag] = useState(null);
  const [filterWork, setfilterWork] = useState(null);

  const getMarketPlace = (data = "") => {
    GET_MARKET_PLACE(data).then((res) => {
      const { data } = res;
      if (res.status == 200) {
        setInfluencer(data.influencer);
        // if (!data) {
        setfilterTags(data.filterTags);
      }
      //}
    });
  };

  useEffect(() => {
    getMarketPlace();
  }, []);

  const getInfluencerData = (data, type) => {
    getMarketPlace(data);
  };

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />
          <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
            <div className="container">
              <div className="row">
                <div className="market-place">
                  <h1> We Are Influencer Marketing. </h1>
                  <div className="clear"></div>
                  <div className="top-search top-search-inner">
                    <div className="input-group">
                      <form action="#">
                        <input
                          type="text"
                          name="text"
                          onBlur={(e) => setfilterWork(e.target.value)}
                          className="form-control find-work find-work"
                          placeholder="Find Work"
                        />
                        <button
                          onClick={() => getInfluencerData(filterWork, 0)}
                          type="button"
                        >
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="clear"></div>

                  {console.log(filterTags, "filterTags")}

                  {filterTags && filterTags.length > 0 ? (
                    <ul>
                      {filterTags.map((data) => {
                        return (
                          <li
                            className={
                              activeTag == data.tag_category_id
                                ? "active-filter-tag"
                                : ""
                            }
                            onClick={() => {
                              setactiveTag(data.tag_category_id);
                              getInfluencerData(data.tag_title, 1);
                            }}
                          >
                            {data.tag_title}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>

                {influencer && influencer.length > 0 ? (
                  <div className="popular-courses circle  carousel-shadow home-today-video influencer-list">
                    <div className="container">
                      <div className="col-md-10 heading-left">
                        <h2 className="influencer-list-left">
                          Influencer Detail
                        </h2>
                      </div>
                      <div className="col-md-2 view-all-right">
                        <Link to="/create-listing">View All</Link>
                      </div>

                      <div className="clear" />
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
                          {influencer.map((data) => {
                            return (
                              <Link to={`/market-place-detail/${data.user_id}`}>
                                <div
                                  className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video"
                                  style={{ margin: "auto", width: "95%" }}
                                >
                                  <div className="item">
                                    <div className="info">
                                      <div className="author-info">
                                        <div className="thumb">
                                          <a href="#">
                                            <img src={Team} alt="Thumb" />
                                          </a>
                                        </div>
                                        <div className="others">
                                          <a href="#">{data.user_name}</a>
                                          <div className="rating">
                                            <img src={instagram} />
                                            <span>
                                              {" "}
                                              {data.user_fallovers} Fallovers
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="product-img" />
                                      <div className="clear" />
                                      <div className="prodct-detail">
                                        Sponsored {data.media_name} post <br />{" "}
                                        from @
                                        {data.deal_network_profile.toLowerCase()}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </Carousel>
                      </div>
                    </div>
                  </div>
                ) : null}

                <Networks title={`Collab by Platform`} />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default CreatemarketPlace;
