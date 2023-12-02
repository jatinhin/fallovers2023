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
  const [categories, setcategories] = useState("")
  const itemsPerPage = 20;
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [total, setTotal] = useState();
const navigate = useNavigate();
const handlecardClicks = (user_id) => {
  navigate(`/brand/marketplace/${user_id}`);
};
const changePage = ({ selected }) => {
  setPage(selected + 1);
  fetchData(selected+1);
  window.scrollTo(500, 500);
};
console.log("pageData", data);
console.log("page", page);
console.log("pageCount", pageCount);
   const fetchData = async (PageNumber = null) => {
     try {
       const response = await GET_MARKET_CARDS(PageNumber || page); // Use your action here
       console.log("res", response);
       setSocialMediaData(response.data.socialmedia);
       setData(response.data.data);
       setLoading(false);
       setTotal(response.data.total);
       setcategories(response.data.filterTags);
     } catch (error) {
       console.error("Error fetching data: ", error);
     }
   };

     
useEffect(() => {
  const pagedatacount = Math.ceil(total / itemsPerPage);
  setPageCount(pagedatacount);
}, [total]);

useEffect(() => {
  // Only call getdata when the page or category changes
  fetchData();
}, []);
  return (
    <div className="background">
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
                  loading={loading}
                  pageCount={pageCount}
                  changePage={changePage}
                  handlecardClicks={handlecardClicks}
                />
              )}
            </Stack>
          </Stack>
          <Footer />
        </Stack>
      </Stack>
    </div>
  );
};

export default Marketplace;
