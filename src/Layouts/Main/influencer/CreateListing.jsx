import React, { useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import { instagram, Team } from "../../../Constants/Images";
import Header from "../include/Header";
import { useState } from "react";
import Footer from "../include/Footer";
import { GET_CREATE_LISTING } from "../../../actions/authenticationAction";
import { Link, useParams } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import Filter from "../common/Filter";

function CreateListing(props) {
  const [tradingVideo, settradingVideo] = useState([]);
  const [filterTags, setfilterTags] = useState([]);
  const [activeTag, setactiveTag] = useState(null);
  const [sortFilter, setsortFilter] = useState(false);
  const [moreTag, setmoreTag] = useState(false);

  const parms = useParams();
  const compensationFixed = useRef();
  const compensationNegotiable = useRef();

  const getListing = (data = "") => {
    GET_CREATE_LISTING(data).then((res) => {
      const { data } = res;
      if (res.status == 200) {
        setfilterTags(data.filter);
        settradingVideo(data.campaign);
      }
    });
  };

  useEffect(() => {
    const flag = { type: parms.type, parm: parms.parm };
    getListing();
  }, []);

  const getInfluencer = (data) => {
    getListing(data);
  };

  const sortListFilter = () => {
    //alert('A')
  };

  const clearFilter = () => {};

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />
          <div className="popular-courses circle carousel-shadow">
            <div className="container">
              <Filter
                clearFilter={clearFilter}
                moreTag={moreTag}
                setmoreTag={setmoreTag}
                compensationNegotiable={compensationNegotiable}
                compensationFixed={compensationFixed}
                tradingVideo={tradingVideo}
                activeTag={activeTag}
                setactiveTag={setactiveTag}
                getInfluencer={getInfluencer}
                setsortFilter={setsortFilter}
                sortFilter={sortFilter}
                filterTags={filterTags}
                sortListFilter={sortListFilter}
              />

              <div className="col-md-12">
                <div style={{ clear: "both" }}></div>
                <div
                  className="seperator seperator-top col-md-12"
                  style={{ marinTop: "22px" }}
                >
                  <span className="border"></span>
                </div>
              </div>

              {tradingVideo ? (
                <>
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

                  {tradingVideo.map((data) => {
                    return (
                      <Link to={`/market-place-detail/${data.user_id}`}>
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
                                        {data.media_name}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-6 price">
                                    {data.deal_amount}
                                  </div>
                                </div>
                                <div className="clear" />
                                <div className="prodct-detail">
                                  Sponsored {data.name} post <br /> from @
                                  {data.deal_network_profile.toLowerCase()}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </>
              ) : null}
            </div>

            {(tradingVideo && tradingVideo.length > 0) || 5 == 5 ? (
              <div className="row arrow">
                <div className="col-md-6 arrow-left">
                  <span>
                    <MdIcons.MdKeyboardArrowLeft />
                  </span>
                </div>
                <div className="col-md-6 arrow-right">
                  <span>
                    <MdIcons.MdKeyboardArrowRight />
                  </span>
                </div>
              </div>
            ) : null}
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default CreateListing;
