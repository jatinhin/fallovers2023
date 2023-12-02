import { Box, Stack, Typography} from "@mui/material";
import Slider from "react-slick";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useState } from "react";
import tagspic from "../../assets/tagspic.png";
import WhiteBtn from "../utils/WhiteBtn";

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
            <Stack
            justifyContent={"end"}
              sx={{
                backgroundImage: `url(${tagspic})`,
                backgroundSize: "cover",
                minWidth: "300px",
                height: "270px",
                borderRadius: "20px",
                zIndex: "0",
                
              }}
            >
              
                <Stack p={"32px 32px 16px 32px"} position={"absolute"}>
                    <Stack direction={"row"} width={"340px"} justifyContent={"space-between"}>
                      <Stack>
                        <Typography color={"white"} fontSize={"13px"}>Collection</Typography>
                        <Typography
                          fontSize={"15px"}
                          fontWeight={"bold"}
                          color={"white"}
                        >
                          {val.media_name}
                        </Typography>
                      </Stack>
                      <WhiteBtn sx={{width:"88px", borderRadius:"10px"}}>View All</WhiteBtn>
                    </Stack>
                </Stack>
            </Stack>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItems;
