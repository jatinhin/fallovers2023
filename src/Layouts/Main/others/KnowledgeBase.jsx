import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";


import {
  LogoName,
  footer1,
  footer2,
  footerCircle,
  footerbtn1,
  footer3,
  footerBtn2,
  footerRight,
  footer4,
  social,
  LogoFooter, instagram,Team
} from "../../../Constants/Images";
import Header from "../include/Header";

function KnowledgeBase(props) {

  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="popular-courses circle  carousel-shadow default-padding default-padding-20">
            <div className="container">
              <div className="row">
 
              <div className="col-md-2">
                 <ul className="trading-filter">
                     <li>Filter</li>
                     <li>Sort</li>
                 </ul>
              </div>

              <div className="col-md-10">
                 <div className="row">

                  <div className="col-md-12" style={{borderLeft:'2px solid rgb(211 208 212)'}}>
                 <ul className="trading-filter">
                     <li>Influencer Marketing</li>
                     <li>Work for Hire</li>
                     <li>Job Listing</li>
                     <li>Job Listing</li>
                     <li>Job Listing</li>
                     <li>Job Listing</li>
                 </ul>
                 </div>
              </div>
              </div> 

              <div className="col-md-12">
                <div style={{clear:'both'}}></div>
                 <div className="seperator seperator-top col-md-12" style={{marinTop:"22px"}}><span className="border"></span></div>
              </div>

              <div className="col-md-12 heading-left">
                <h2 style={{ color: "#4E76C9", marginTop:"30px", marginBottom: "30px" }}>
                  Todays Trading Videos
                </h2>
              </div>

                
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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
                            <div className="rating">
                              <img src={instagram} />
                              <span> 20k Fallovers</span>
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
                                Instagram
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
                        </div>
                      </div>
                    </div>
                  </div>


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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
                            <div className="rating">
                              <img src={instagram} />
                              <span> 20k Fallovers</span>
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
                                Instagram
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
                        </div>
                      </div>
                    </div>
                  </div>


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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
                            <div className="rating">
                              <img src={instagram} />
                              <span> 20k Fallovers</span>
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
                                Instagram
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
                        </div>
                      </div>
                    </div>
                  </div>


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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
                            <div className="rating">
                              <img src={instagram} />
                              <span> 20k Fallovers</span>
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
                                Instagram
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
                        </div>
                      </div>
                    </div>
                  </div>


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
                            <a href="#">Jonathom Kiyam {/*?php echo $i+1?*/}</a>
                            <div className="rating">
                              <img src={instagram} />
                              <span> 20k Fallovers</span>
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
                                Instagram
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 price">$506</div>
                        </div>
                        <div className="clear" />
                        <div className="prodct-detail">
                          Sponsored Instagram post <br /> from @sippoftea
                        </div>
                      </div>
                    </div>
                  </div>

                 </div>  

               </div>
             </div>
           </div>

          <div
            className="clients-area default-padding"
            style={{ paddingTop: "0px" }}>
            <div className="container footer-new">
              <div className="row">
                <div className="col-md-4 info">
                  <img src={footer1} className="icon-1" alt="Logo" />
                  <a
                    className="navbar-brand"
                    href="#"
                    style={{ padding: "38px 15px" }}
                  >
                    <img src={LogoFooter} className="logo" alt="Logo" />
                    <img src={LogoName} className="logo" alt="Logo" />
                  </a>
                  <img src={footer2} className="icon-2" alt="Logo" />

                  <Parallax speed={-10} scale={[0.75, 1]} easing="easeOutQuint">
                    <img
                      src={footerCircle}
                      className="icon-circle"
                      alt="Logo"
                    />
                  </Parallax>
                </div>
                <div className="col-md-8 clients">
                  <img src={footerbtn1} className="icon-3" alt="Logo" />
                  <ul>
                    <li>
                      <img
                        src={social}
                        className="logo"
                        alt="Logo"
                        style={{ position: "relative", top: "5rem" }}
                      />
                    </li>
                  </ul>
                  <img src={footer3} className="icon-4" alt="Logo" />
                  <img src={footerBtn2} className="icon-5" alt="Logo" />

                  <Parallax
                    style={{ position: "absolute" }}
                    speed={-10}
                    easing="easeInOut"
                  >
                    <img src={footerRight} className="icon-6" alt="Logo" />
                  </Parallax>

                  <Parallax
                    translateX={["-100px", "0px"]}
                    scale={[0.75, 1]}
                    easing="easeOutQuint"
                  >
                    <img src={footer4} className="icon-8" alt="Logo" />
                  </Parallax>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
}

export default KnowledgeBase;
