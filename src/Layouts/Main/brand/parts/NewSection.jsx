import React, { useEffect, useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import NewsSlider from "./NewsSlider";
import Button from "../utils/WhiteBtn";
import { IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
const NewSection = ({ socialMediaData }) => {
  const [slider, setslider] = useState(0);
  const [windowLength, setWindowLength] = useState("");
  useEffect(() => {
    function handleResize() {
      setWindowLength(window.outerWidth);
    }

    window.addEventListener("resize", handleResize);
    setslider(0);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.outerWidth]);
  const handleSlider = (index) => {
    setslider(index);
    const windowWidthWithScrollbars = window.outerWidth;
    console.log(windowWidthWithScrollbars, "widthhhh");
  };
  return (
    <Stack >
      <Stack sx={{ overflowX: "hidden"}} width={"100%"}>
        <Stack

          direction={"row"}
          width={{ xs: "600vw", sm: "300vw", md: "200vw" }}
          sx={{
            transform: `translateX(-${slider * window.outerWidth}px)`,
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Stack direction={"row"} width={"100%"}>
            <NewsSlider socialMediaData={socialMediaData} />
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          width={"100%"}
          gap={2}
          pt={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton onClick={() => handleSlider(0)}>
            <CircleIcon
              sx={{
                color: slider === 0 ? "#ffcc00" : "grey",
                outline: "0px solid grey",
                outlineOffset: 2,
                borderRadius: "50%",
                outlineWidth: slider === 0 ? 2 : 0,
              }}
            />
          </IconButton>
          <IconButton onClick={() => handleSlider(1)}>
            <CircleIcon
              sx={{
                color: slider === 1 ? "#ffcc00" : "grey",
                outline: "0px solid grey",
                outlineOffset: 2,
                borderRadius: "50%",
                outlineWidth: slider === 1 ? 2 : 0,
              }}
            />
          </IconButton>
          {parseInt(windowLength) < 900 && (
            <IconButton onClick={() => handleSlider(2)}>
              <CircleIcon
                sx={{
                  color: slider === 2 ? "#ffcc00" : "grey",
                  outline: "0px solid grey",
                  outlineOffset: 2,
                  borderRadius: "50%",
                  outlineWidth: slider === 2 ? 2 : 0,
                }}
              />
            </IconButton>
          )}
          {parseInt(windowLength) < 600 && (
            <>
              <IconButton onClick={() => handleSlider(3)}>
                <CircleIcon
                  sx={{
                    color: slider === 3 ? "#ffcc00" : "grey",
                    outline: "0px solid grey",
                    outlineOffset: 2,
                    borderRadius: "50%",
                    outlineWidth: slider === 3 ? 2 : 0,
                  }}
                />
              </IconButton>
              <IconButton onClick={() => handleSlider(4)}>
                <CircleIcon
                  sx={{
                    color: slider === 4 ? "#ffcc00" : "grey",
                    outline: "0px solid grey",
                    outlineOffset: 2,
                    borderRadius: "50%",
                    outlineWidth: slider === 4 ? 2 : 0,
                  }}
                />
              </IconButton>
              <IconButton onClick={() => handleSlider(5)}>
                <CircleIcon
                  sx={{
                    color: slider === 5 ? "#ffcc00" : "grey",
                    outline: "0px solid grey",
                    outlineOffset: 2,
                    borderRadius: "50%",
                    outlineWidth: slider === 5 ? 2 : 0,
                  }}
                />
              </IconButton>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewSection;
