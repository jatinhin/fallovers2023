import React, { useRef } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { threeCards } from "../DummyData";
import WhiteBtn from "../utils/WhiteBtn";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
const ThreeCards = ({socialMediaData}) => {
  const handleVideo = () => {
    alert("Aa");
    console.log(videoRef.current, "videoRef");
    videoRef.current.autoplay(true);
    videoRef.current.src("");
  };
  const videoRef = useRef();
  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <Stack
        direction={"row"}
        gap={2}
        flexWrap={"wrap"}
        sx={{ cursor: "pointer" }}
      >
        {socialMediaData.map((val) => (
          <Stack
            border={`1px solid ${val.BorderColor}`}
            bgcolor={"aliceblue"}
            width={"415px"}
            height={"320px"}
            borderRadius={"15px"}
            justifyContent={"flex-end"}
          >
            <Stack direction={"row"} justifyContent={"space-between"} p={2}>
              <Stack>
                <Typography fontWeight={"bold"} fontSize={"14px"}>
                  Collection
                </Typography>
                <Typography fontSize={"18px"}>{val.media_name}</Typography>
              </Stack>
              <Box>
                <WhiteBtn sx={{ fontSize: "15px", color: "grey" }}>
                  View All
                </WhiteBtn>
              </Box>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
    
    
  );
};

export default ThreeCards;
