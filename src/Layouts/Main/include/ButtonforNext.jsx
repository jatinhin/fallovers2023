import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const ButtonforNext = styled(MuiButton)({
  width: 97,
  height: 45,
  color: "white",
  backgroundColor: "#603AFA",
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: "12px",
  textTransform: "none",
  fontSize:"15px",

  "&:hover": {
    backgroundColor: "#603AFA",
    
  },
});

export default ButtonforNext;
