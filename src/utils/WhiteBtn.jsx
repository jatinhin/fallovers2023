import { Button as MuiButton } from '@mui/material'
import { styled } from "@mui/system";

const WhiteBtn = styled(MuiButton)({
  color:"Black",
      backgroundColor:"#F8F8FF",
      width:"145px",
      height:"40px",
      borderRadius:"18px",
      textTransform:"none",
      fontSize:"12px",
      border:"1px solid #E2DBFB",
      "&:hover": {
        bgcolor: "#F8F8FF",
      },
    })
  

export default WhiteBtn