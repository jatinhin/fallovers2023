import { Box, Stack, Typography} from "@mui/material";
import Slider from "react-slick";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useState } from "react";

// Modify your functional component to accept the socialMediaData prop
const MultipleItems = ({ socialMediaData }) => {
  if (!Array.isArray(socialMediaData)) {
    socialMediaData = [];
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
const [hoveredIndex, setHoveredIndex] = useState(-1);

const handleHover = (index) => {
  setHoveredIndex(index);
};
  return (
    <div>
      <Slider {...settings}>
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
                borderRadius: "20px",
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
      </Slider>
    </div>
  );
};

export default MultipleItems;
