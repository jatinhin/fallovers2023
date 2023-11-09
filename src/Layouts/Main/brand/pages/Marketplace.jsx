import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import MarketplaceCards from "../parts/MarketplaceCards";
import Footer from "../../include/Footer";
import Header from "../../include/Header";
import Variants from "../parts/Shimmer";
import Scrolling from "../parts/Scrolling";
import MultipleItems from "../parts/Sliderr";
import SliderShimmer from "../parts/SliderShimmer";
import { GET_MARKET_CARDS } from "../../../../actions/authenticationAction";
import { useNavigate, useParams } from "react-router-dom";
const Marketplace = () => {
  // const usertype = getUserType();
  const [socialMediaData, setSocialMediaData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setcategories] = useState()
const navigate = useNavigate();
const handlecardClicks = (user_id) => {
  navigate(`/brand/marketplace/${user_id}`);
};
   useEffect(() => {
     async function fetchData() {
       try {
         const response = await GET_MARKET_CARDS(); // Use your action here
         console.log("res", response);
         setSocialMediaData(response.data.socialmedia);
         setData(response.data.data);
         setLoading(false);
         setcategories(response.data.filterTags);
       } catch (error) {
         console.error("Error fetching data: ", error);
       }
     }

     fetchData();
   }, []);


  return (
    <>
      <Header />

      <Stack pt={2} alignItems={"center"} justifyContent={"center"}>
        <Stack width={"1290px"} gap={2}>
          <Stack gap={3}>
            <Typography fontSize={"28px"} color={"#4E76C9"} fontWeight={"bold"}>
              New this Week
            </Typography>
            {loading ? (
              <Stack direction={"row"} gap={3}>
                {[1, 2, 3].map((index) => (
                  <SliderShimmer key={index} />
                ))}
              </Stack>
            ) : (
              <MultipleItems socialMediaData={socialMediaData} />
            )}
          </Stack>

          <Scrolling categories={categories} />

          <Stack
            sx={{
              content: "''",
              width: "1290px",
              height: "1px",
              backgroundColor: "#D9D9D9",
            }}
          ></Stack>
          <Stack gap={5}>
            <Typography fontSize="20px" fontWeight={700}>
              All Listing
            </Typography>
            <Stack gap={5}>
              {loading ? (
                <Variants />
              ) : (
                <MarketplaceCards
                  data={data}
                  handlecardClicks={handlecardClicks}
                />
              )}
            </Stack>
            <Stack direction={"row"} gap={2} justifyContent={"center"} pb={5}>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"60px"}
                height={"60px"}
                color={"#603AFA"}
                sx={{ border: "2px solid #603AFA", borderRadius: "15px" }}
              >
                <ArrowBackIosRoundedIcon />
              </Stack>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"60px"}
                height={"60px"}
                color={"#603AFA"}
                sx={{ border: "2px solid #603AFA", borderRadius: "15px" }}
              >
                <ArrowForwardIosRoundedIcon />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Marketplace;
