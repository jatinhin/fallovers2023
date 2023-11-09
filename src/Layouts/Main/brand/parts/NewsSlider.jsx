import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../utils/WhiteBtn";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const NewsSlider = ({ socialMediaData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <>
      {socialMediaData.map((val, index) => (
        <Box
          key={val.id}
          sx={{
            width: { xs: "95vw", sm: "45vw", md: "27vw" },
          }}
          px={{ xs: 1, md: 2 }}
        >
          <Box
            sx={{
              minWidth: "300px",
              height: "270px",
              borderRadius:"20px",
              zIndex: "0",
              border: "1px solid red",
              "&:hover": {
                border: "1px solid #ffcd00",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "200px",
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(-1)}
            >
              {/* Your image and hover logic here */}

              <Stack p={4}>
                <Box display="flex" flexDirection="column" rowGap="19px">
                  <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                    <Box display={"flex"} flexDirection={"row"} gap={"5px"}>
                      <CalendarMonthOutlinedIcon sx={{ color: "#ffcc00" }} />
                      <Typography
                        fontSize={"15px"}
                        fontWeight={"bold"}
                        color={"black"}
                      >
                        {val.media_name}
                      </Typography>
                    </Box>
                    <Typography fontWeight="bold" fontSize={"18px"}>
                      {val.Title}
                    </Typography>
                    <Typography
                      fontSize={"14.5px"}
                      color={"grey"}
                      // lineHeight={1.5}
                      letterSpacing={"0.3px"}
                    >
                      {val.des}
                    </Typography>
                    
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default NewsSlider;
