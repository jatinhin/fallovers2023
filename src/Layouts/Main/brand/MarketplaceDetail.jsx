import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import Faq from "react-faq-component";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  LogoFooter,
  instagram,
  Team,
} from "../../../Constants/Images";
import Header from "../include/Header";
import { GET_CREATE_DETAIL } from "../../../actions/authenticationAction";
import axios from "axios";
import Gallery from "./Gallery";
import WhiteBtn from "./utils/WhiteBtn";
import { Box, Stack, Typography } from "@mui/material";
import dp from "../assets/dp.png";
import influencer1 from "../assets/influencer1.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import {storeDemoData} from "../../../actions/authenticationAction"
const data = {
  //title: "FAQ (How it works)",
  rows: [
    {
      arrowIcon: "V",
      title: `1. Are there any relevant hashtags you want me to include?`,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "2. Is there anything you want me to avoid mentioning?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "3. Tell me a little more about the product/brand.",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "4. Is there anything specific you want me to mention?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#333",
  rowTitleColor: "#333",
  fontWeight: "bold",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

function MarketplaceDetail(props) {
  const navigate = useNavigate();
 const dispatch = useDispatch();
  const [details, setDetails] = useState([]);
  const [tradingVideo, setTradingVideo] = useState([]);
    const MarketplaceDetail= async(user_id)=> {
      try {
        const response = await axios.post(
          "https://fallovers.com/fallovers-api/api/v1/get-market-place-detail/id",
          {
            user_id: user_id,
          },
        
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setDetails(response.data.details);
        setTradingVideo(response.data.tradingVideo);
        storeDemoData(dispatch,"Jatin")
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    useEffect(() => {
      // Detailsfetch();
      if (location.pathname.split("brand/marketplace/")[1]) {
        MarketplaceDetail(location.pathname.split("brand/marketplace/")[1]);
      }
    }, []);
    const location = useLocation();
    // GET_CREATE_DETAIL(getParm.parm).then((res) => {
    //   const { data } = res;
    //   setSimilarListing(data.tradingVideo);
    //   setDetail(data.details);
    // });

const images = details.flatMap((val) => val.attachments);
  console.log("images", images)
console.log("details", details)
  return (
    <>
      <ParallaxProvider>
        <div className="background">
          <Header />

          <div className="popular-courses circle carousel-shadow default-padding default-padding-20">
            <div className="container">
              <div className="row">
                <div className="col-md-12 photo-gallary">
                  <Gallery images={images} />
                </div>
                {details.map((val) => (
                  <>
                    <div className="col-md-8 market-place-left-side">
                      <h1>Creative Full produced video by {val.user_name} </h1>
                      <h6 className="market-place-type">
                        Video | Full Video Production
                      </h6>
                      <p>
                        I’ll create a full produced video as seen in the work on
                        my instagramaccount @{val.user_name}
                      </p>

                      <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-md-6">
                          <h2> About @{val.user_name}</h2>
                        </div>

                        <div className="col-md-6 see-more">
                          About @{val.user_name}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4">
                          <div className="card">
                            <div className="card-title">FOLLOWERS</div>
                            <div className="card-detail">
                              <AiIcons.AiFillInstagram /> {val.user_fallovers}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card">
                            <div className="card-title">AVG. ENG. PER POST</div>
                            <div className="card-detail">-</div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="card">
                            <div className="card-title">ENG. RATE</div>
                            <div className="card-detail">-</div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 heading">
                          <h2 style={{ color: "#4e76c9", fontSize:"18px" }}>Deals</h2>
                          <p>
                            The scecific deliverables available from this
                            Seller. Choose ene
                          </p>
                        </div>

                        <div className="col-md-12">
                          <div className="deals">
                            <h2>High Quality video Procuction - 1-3 Minutes</h2>

                            <ul className="deals-info">
                              <li>
                                <MdIcons.MdCached />1 Revisions
                              </li>
                              <li>
                                <MdIcons.MdOutlineCalendarMonth />2 Days
                                Delivery
                              </li>
                              <li>
                                <MdIcons.MdOutlineLockClock />
                                Sponsored Social Content
                              </li>
                            </ul>
                            <p>
                              Have your product photography with a professional
                              model by a professional photographer! This Shake
                              includes model of your choice (we will send you
                              three potential models to choose from) and Eight
                              high resolution retouched images with reproduction
                              rights.
                            </p>
                            <h2>Features</h2>
                            <ul className="features">
                              <li>
                                <MdIcons.MdCheckCircle /> 1 Model
                              </li>
                              <li>
                                <MdIcons.MdCheckCircle /> 1 Model
                              </li>
                              <li>
                                <MdIcons.MdCheckCircle /> 1 Model
                              </li>
                              <li>
                                <MdIcons.MdCheckCircle /> 1 Model
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 heading">
                          <h2 className="influencer-list-left smilar-listing">
                            Information Requests
                          </h2>
                          <p>
                            Additional questions from the Buyer so they can
                            determine if you're the right fit.
                          </p>
                        </div>

                        <div className="col-md-12 faq">
                          <div>
                            <Faq data={data} styles={styles} config={config} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 right-side">
                      <div className="row margin-0">
                        <div className="col-10 message-box">
                          <img src={val.user_profile_pic} alt="Thumb" />
                          <h2>{val.user_name}</h2>

                          <div className="col-md-12 box">
                            <p>
                              Thanks for checking out my listing. Have any
                              questions?
                            </p>
                            <div className="col-md-6">
                              <WhiteBtn
                                onClick={() => {
                                  // navigate(
                                  //   `/casting-call/${
                                  //     location.pathname.split("casting-call/")[1]
                                  //   }/chat`
                                  // );
                                  const castingId =
                                    location.pathname.split(
                                      "brand/marketplace/"
                                    )[1];

                                  // Navigate to the chat page with the casting ID as a parameter
                                  navigate(
                                    `/brand/marketplace/chat?influencer-id=${castingId}`
                                  );
                                }}
                              >
                                <button className="btn-1">Message Me</button>
                              </WhiteBtn>
                            </div>
                            <div className="col-md-6">
                              <Link to="/influencer-profile/1">
                                <button className="btn-2">
                                  Public Profile
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row listing" style={{ magin: "0px" }}>
                        <div className="col-md-12">
                          <h2>Listing Overview</h2>
                        </div>

                        <div className="col-md-12 listing-info">
                          <div className="row margin-0">
                            <div className="col-md-12">
                              <h3>Deal</h3>
                            </div>

                            <div className="col-md-6">
                              <span className="text-b">Sponsored Post</span>
                            </div>
                            <div className="col-md-6">
                              <span className="text-b">Rs. 1,200</span>
                            </div>

                            <div className="col-md-12">
                              <ul>
                                <li>
                                  <MdIcons.MdCached />1 Revisions
                                </li>
                                <li>
                                  <MdIcons.MdOutlineCalendarMonth />2 Days
                                  Delivery
                                </li>
                                <li>
                                  <MdIcons.MdOutlineLockClock />
                                  Sponsored Social Content
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <span className="text-b">Subtotal</span>
                        </div>
                        <div className="col-md-6">
                          <span className="text-b">Rs. 1,200 </span>
                        </div>
                        <div className="col-md-6">
                          <span className="text-b">Total Delivery Time </span>
                        </div>
                        <div className="col-md-6">
                          <span className="text-b">
                            <MdIcons.MdOutlineCalendarMonth /> Total Delivery
                            Time{" "}
                          </span>
                        </div>

                        <div className="col-md-12 listing-btn">
                          <button>Request Pricing </button>
                        </div>

                        <div className="col-md-12 listing-bottom">
                          <p className="text-b">
                            You won't be charged until after you click 'Buy
                            Now'.
                          </p>
                          <p>
                            If the seller doesn't respond in 7 days, the order
                            will be automatically cancelled and your payment
                            will be refunded.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}

                {tradingVideo && tradingVideo.length > 0 ? (
                  <div className="popular-courses circle  carousel-shadow home-today-video influencer-list">
                    <div className="container">
                      <div className="col-md-12 heading-left">
                        <h2 className="influencer-list-left smilar-listing">
                          Similar Listings
                        </h2>
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
                          
                          {tradingVideo.map((key, index) => {
                            return (
                              <Stack
                                key={index}
                                sx={{
                                  backgroundImage: `url(${influencer1})`,
                                  backgroundSize: "cover",
                                }}
                                border={"1px solid grey"}
                                width={"230px"}
                                height={"300px"}
                                borderRadius={"15px"}
                                // onClick={() => {
                                //   handlecardClicks(val.user_id);
                                // }}
                                justifyContent={"space-between"}
                              >
                                <Stack direction={"row"} gap={2} p={2}>
                                  <Box
                                    bgcolor={"grey"}
                                    borderRadius={"16px"}
                                    width={"42px"}
                                    height={"42px"}
                                  >
                                    <img
                                      src={dp}
                                      alt=""
                                      style={{ borderRadius: "50%" }}
                                    />
                                  </Box>
                                  <Stack>
                                    <Typography
                                      color={"white"}
                                      variant="h6"
                                      pl={0.4}
                                    >
                                      {key.user_name}
                                    </Typography>
                                    <Stack
                                      bgcolor={"#FD1357"}
                                      borderRadius={"19px"}
                                      direction={"row"}
                                      p={0.5}
                                      gap={1}
                                    >
                                      <InstagramIcon sx={{ color: "white" }} />
                                      <Typography color={"white"}>
                                        20K followers
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                </Stack>
                                <Stack
                                  width={"100%"}
                                  height={"23px"}
                                  bgcolor={"#FD1357"}
                                  alignItems={"center"}
                                  mb={5}
                                >
                                  <Stack
                                    width={"80%"}
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    p={0.5}
                                  >
                                    <Typography color={"white"}>
                                      {key.media_name}
                                    </Typography>
                                    <Typography color={"white"}>
                                      ${key.info_reg_deal_fallowers}
                                    </Typography>
                                  </Stack>
                                </Stack>
                              </Stack>
                            );
                          })}
                        </Carousel>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div
            className="clients-area default-padding"
            style={{ paddingTop: "0px" }}
          >
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

export default MarketplaceDetail;
