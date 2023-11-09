import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import WhiteBtn from '../utils/WhiteBtn';
import { useNavigate } from 'react-router-dom';

const Appears = () => {
  const navigate = useNavigate()
  const handleMarketPlace=()=>{
    navigate("/brand/marketplace");
    window.scrollTo(0,0)
  }
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Stack
        width={"418px"}
        height={"228px"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
      >
        <Box
          width={"107px"}
          height={"107px"}
          bgcolor={"#F8F8FF"}
          borderRadius={"50%"}
          border={"1px solid #E2DBFB"}
        ></Box>
        <Typography fontWeight={"bold"} color={"black"} fontSize={"15px"}>
          You don't have any orders
        </Typography>
        <Typography color={"grey"} fontSize={"15px"}>
          Find creators to work with you and purchase their listings!
        </Typography>
        <WhiteBtn onClick={handleMarketPlace}>Go to Marketplace</WhiteBtn>
      </Stack>
    </Stack>
  );
}

export default Appears

