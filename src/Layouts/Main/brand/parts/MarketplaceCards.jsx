import React from "react";
import { Box,  Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const MarketplaceCards = ({ data, handlecardClicks }) => {
  const navigate = useNavigate();
  return (
    <Stack direction={"row"}>
      <Stack
        direction={"row"}
        gap={"30px"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        sx={{ cursor: "pointer" }}
      >
        {data.map((val) => (
          <Stack
            bgcolor={"aliceblue"}
            border={"1px solid grey"}
            width={"190px"}
            height={"300px"}
            borderRadius={"15px"}
            onClick={() => {
              handlecardClicks(val.user_id);
            }}
          >
            <Stack direction={"row"} justifyContent={"space-evenly"}>
              <Box
                bgcolor={"grey"}
                borderRadius={"16px"}
                width={"32px"}
                height={"32px"}
              ></Box>
              <Stack>
                <Typography>{val.user_name}</Typography>
                <Typography>{val.campaign_fallovers}k followers</Typography>
              </Stack>
            </Stack>
            <Stack
              width={"100%"}
              height={"23px"}
              direction={"row"}
              bgcolor={"#FD1357"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={1}
            >
              <Typography color={"white"}>{val.media_name}</Typography>
              <Typography color={"white"}>${val.campaign_amount}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default MarketplaceCards;
