import React, { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import { instagram, Team } from "../../Constants/Images";
import Header from "./include/Header";
import { GET_MARKET_PLACE } from "../../actions/authenticationAction";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./include/Footer";

function Todaystrading(props) {
  const [influencer, setInfluencer] = useState([]);
  const videoRef = useRef();

  const getMarketPlace = (data = "") => {
    GET_MARKET_PLACE(data).then((res) => {
      const { data } = res;
      if (res.status == 200) {
        setInfluencer(data.influencer);
      }
      //}
    });
  };

  useEffect(() => {
    getMarketPlace();
  }, []);

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />
          <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
            <div className="about-area default-padding home-top-bg margin-bottom-0">
              <div className="row">
                <div className="about-info">
                  <div className="home-top">
                    <h1>Trading Video</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row margin-top-40">
                {influencer && influencer.length > 0 ? (
                  <div className="influencer-list">
                    {influencer.map((data) => {
                      return (
                        <Link to={`/market-place-detail/${data.user_id}`}>
                          <div className="col-md-3">
                            <div className="popular-courses-items popular-courses-carousel owl-carousel owl-theme trading-video">
                              <div className="item">
                                <div className="info">
                                  <div className="author-info author-info-video">
                                    <div className="thumb">
                                      <a href="#">
                                        <img src={Team} alt="Thumb" />
                                      </a>
                                    </div>
                                    <div className="others">
                                      <a className="author-info-video-name" href="#">{data.user_name}</a>
                                      <div className="rating author-info-video-netowrk">
                                        <img src={instagram} />
                                        <span>
                                          {" "}
                                          {data.user_fallovers} Fallovers
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <video
                                    src="https://fallovers.com/home/video/video.mp4"
                                    controls
                                    muted
                                    ref={videoRef}
                                    autoPlay={false}
                                    preLoad="auto"
                                    loop
                                  ></video>
                                  <div className="clear" />
                                  <div className="prodct-detail">
                                    Sponsored {data.media_name} post <br /> from
                                    @{data.deal_network_profile.toLowerCase()}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default Todaystrading;
