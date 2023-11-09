import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../include/Header";
import WhiteBtn from "../utils/WhiteBtn";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo2 } from "../../../../Constants/Images";
import Faq from "react-faq-component";
import axios from "axios";
import { useEffect } from "react";

const Castingdetail = () => {
  const [CastingDetails, setCastingDetails] = useState(null);
  const navigate = useNavigate();

  const getCastingCallsdetails = async (id) => {
    await axios
      .post(
        "https://fallovers.com/fallovers-api/api/v1/get-casting-detail/id",
        {
          casting_id: id,
        }
      )
      .then((response) => {
        setCastingDetails(response.data.data);
      });
    console.log("CastingDetails", CastingDetails);
  };
  useEffect(() => {
    // Detailsfetch();
    if (location.pathname.split("casting-call/")[1]) {
      getCastingCallsdetails(location.pathname.split("casting-call/")[1]);
    }
  }, []);
  const linearGradient =
    "linear-gradient(82.87deg, #221E1F 30.55%, #4E4E4E 71.44%)";
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
  const location = useLocation();
  console.log("jatin", location);

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

  return (
    <Stack>
      <Header />
      <Stack pl={20}>
        <Box pt={2}>
          <WhiteBtn
            sx={{
              width: "100px",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <ArrowBackIosRoundedIcon />
            <Stack alignItems={"center "}>Go back</Stack>
          </WhiteBtn>
        </Box>
        {CastingDetails && (
          <Stack direction={"row"} gap={5}>
            <Stack width={"812px"}>
              <Box
                position={"relative"}
                borderRadius={"20px"}
                sx={{
                  width: "100%", // Adjust the width and height as needed
                  height: "380px",
                  bgcolor: "white",
                }}
              >
                <Box
                  position={"absolute"}
                  borderRadius={"20px"}
                  sx={{
                    width: "812px", // Adjust the width and height as needed
                    height: "250px",
                    backgroundImage: linearGradient,
                  }}
                >
                  <Typography
                    sx={{ position: "absolute" }}
                    variant="h3"
                    color={"white"}
                    p={2}
                    textAlign={"left"}
                  >
                    Seeking Experienced Writers abc.com Seeking Experienced
                    Writers abc.com Seeking Experi Writers abc.com{" "}
                  </Typography>
                  <Typography
                    color={"white"}
                    sx={{ position: "absolute" }}
                    bottom={0}
                    pl={8}
                    pb={3}
                  >
                    www.homedecore.com
                  </Typography>
                </Box>
                <Stack
                  width={"100%"}
                  position={"absolute"}
                  bottom={0}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"Center"}
                >
                  <Stack p={4} direction={"row"} gap={2}>
                    <Box
                      width={"60px"}
                      height={"60px"}
                      bgcolor={"grey"}
                      borderRadius={"50%"}
                    ></Box>
                    <Stack justifyContent={"center"}>
                      <Typography variant="h4" color={"grey"}>
                        {CastingDetails.campaign_name}
                      </Typography>
                      <Typography color={"#2E8EE0"} variant="h6">
                        Work for Hire
                      </Typography>
                    </Stack>
                  </Stack>
                  <WhiteBtn
                    onClick={() => {
                      navigate(
                        `/casting-call/${
                          location.pathname.split("casting-call/")[1]
                        }/chat`
                      );
                    }}
                    sx={{
                      width: "236px",
                      height: "42px",
                      bgcolor: "#603AFA",
                      color: "white",
                      "&:hover": {
                        bgcolor: "#603AFA",
                      },
                      fontWeight: "bold",
                    }}
                  >
                    I’d like To Submit a Pitch
                  </WhiteBtn>
                </Stack>
              </Box>
              <Box>
                <Typography fontSize={"18px"} color={"grey"} sx={{ p: "20px" }}>
                  If you are an experienced content writer with a passion for
                  creating impactful content, we want YOU! We are actively
                  seeking experienced writers to produce meaningful content for
                  some of the world's leading brands.<br></br> We are
                  specifically looking for writers experienced in e-commerce,
                  insurance, travel, and lifestyle topics. If hired, you will
                  create anything from website and article content to product
                  descriptions and how-tos.
                </Typography>
              </Box>
              <Stack>
                <Box
                  sx={{
                    content: "''",
                    width: "100%",
                    height: "1px",
                    bgcolor: "grey",
                  }}
                ></Box>
                <Stack justifyContent={"space-around"} direction={"row"} pt={2}>
                  <Stack
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"} textAlign={"center"}>
                      Required Platforms
                    </Typography>
                    <WhiteBtn
                      sx={{
                        width: "fit-content",
                        height: "33px",
                      }}
                    >
                      {" "}
                      Youtube{" "}
                    </WhiteBtn>
                  </Stack>
                  <Stack
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"} textAlign={"center"}>
                      {" "}
                      Deliverables
                    </Typography>
                    <WhiteBtn
                      sx={{
                        width: "fit-content",
                        height: "33px",
                      }}
                    >
                      {" "}
                      Shorts{" "}
                    </WhiteBtn>
                  </Stack>
                  <Stack
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"}>Catagory </Typography>
                    <WhiteBtn
                      sx={{
                        width: "fit-content",
                        height: "33px",
                      }}
                    >
                      {" "}
                      Comedy-Humour{" "}
                    </WhiteBtn>
                  </Stack>
                </Stack>
                <Stack justifyContent={"space-around"} direction={"row"} pt={2}>
                  <Stack
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"} textAlign={"center"}>
                      Followers Range{" "}
                    </Typography>
                    <WhiteBtn
                      sx={{
                        width: "fit-content",
                        height: "33px",
                      }}
                    >
                      {" "}
                      Macro Influencers ( 50K - 1M ){" "}
                    </WhiteBtn>
                  </Stack>
                  <Stack
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"} textAlign={"center"}>
                      {" "}
                      Compensation
                    </Typography>
                    <WhiteBtn
                      sx={{
                        width: "fit-content",
                        height: "33px",
                      }}
                    >
                      {" "}
                      Fixed{" "}
                    </WhiteBtn>
                  </Stack>
                  <Stack
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"}>Due By </Typography>
                    <WhiteBtn
                      sx={{
                        width: "fit-content",
                        height: "33px",
                      }}
                    >
                      04/29/2023 - 08:30 am
                    </WhiteBtn>
                  </Stack>
                </Stack>
                <Stack
                  justifyContent={"space-around"}
                  direction={"row"}
                  pt={2}
                  pb={2}
                  gap={2}
                >
                  <Stack
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"} textAlign={"center"}>
                      Number of Influencers{" "}
                    </Typography>
                    <WhiteBtn
                      sx={{
                        width: "fit-content",
                        height: "33px",
                      }}
                    >
                      Required
                    </WhiteBtn>
                  </Stack>
                  <Stack
                    gap={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"} textAlign={"center"}>
                      Interested Influencers
                    </Typography>
                    <WhiteBtn
                      sx={{
                        width: "fit-content",
                        height: "33px",
                      }}
                    >
                      Pitches in que
                    </WhiteBtn>
                  </Stack>
                </Stack>
                <Box
                  sx={{
                    content: "''",
                    width: "100%",
                    height: "0.8px",
                    bgcolor: "grey",
                  }}
                ></Box>
              </Stack>
              <div className="row">
                <div className="col-md-12 heading">
                  <h2 className="h2-margin">Information Requests</h2>
                  <p style={{ paddingLeft: "20px" }}>
                    Additional questions from the Buyer so they can determine if
                    you're the right fit.
                  </p>
                </div>

                <div className="col-md-12 faq">
                  <div className="info-request">
                    <Faq data={data} styles={styles} config={config} />
                  </div>
                </div>
              </div>
              <Stack></Stack>
            </Stack>
            <Stack gap={3}>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"20px"}
                bgcolor={"black"}
                sx={{
                  width: "384px", // Adjust the width and height as needed
                  height: "250px",
                }}
              >
                <img src={Logo2} alt="" width={"135px"} height={"140px"} />
              </Stack>
              <div className="col-md-11 message-boxes">
                <div className="col-md-12 box">
                  <p>Tstions?</p>
                  <div className="col-md-12">
                    <button className="btn-1">
                      I’d like To Submit a Pitch
                    </button>
                  </div>
                </div>
              </div>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Castingdetail;
