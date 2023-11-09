import { Stack, Typography } from '@mui/material'
import React from 'react'

const TransactionPage = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={"50vh"} >
      <Stack width={"348px"} height={"104px"}>
        <Typography fontSize={"42px"} color={"grey"} textAlign={"center"} fontWeight={"bold"}>Send to Transation page </Typography>
      </Stack>
    </Stack>
  );
}

export default TransactionPage