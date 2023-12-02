import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Variants from "./Shimmer";
import ReactPaginate from "react-paginate";
import influencer1 from "../../assets/influencer1.png";
import dp from "../../assets/dp.png";
import InstagramIcon from "@mui/icons-material/Instagram";

const MarketplaceCards = ({
  data,
  handlecardClicks,
  pageCount,
  changePage,
  loading,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Stack>
        <Stack
          direction={"row"}
          gap={"30px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          sx={{ cursor: "pointer" }}
        >
          {loading // Display shimmer loading cards while loading is true
            ? [1, 2, 3, 4].map((index) => <Variants key={index} />)
            : data.map((val, index) => (
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
                  onClick={() => {
                    handlecardClicks(val.user_id);
                  }}
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"} gap={2} p={2}>
                    <Box
                      bgcolor={"grey"}
                      borderRadius={"16px"}
                      width={"42px"}
                      height={"42px"}
                    >
                      <img src={dp} alt="" style={{ borderRadius: "50%" }} />
                    </Box>
                    <Stack>
                      <Typography color={"white"} variant="h6" pl={0.4}>
                        {val.user_name}
                      </Typography>
                      <Stack
                        bgcolor={"#FD1357"}
                        borderRadius={"19px"}
                        direction={"row"}
                        p={0.5}
                        gap={1}
                      >
                        <InstagramIcon sx={{ color: "white" }} />
                        <Typography color={"white"}>20K followers</Typography>
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
                      <Typography color={"white"}>{val.media_name}</Typography>
                      <Typography color={"white"}>
                        ${val.campaign_amount}200
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={changePage}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default MarketplaceCards;
