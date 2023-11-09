import { Box, Stack, Typography } from "@mui/material";
import React,{useState} from "react";
import Logo from "../../../../Assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handlehomeClick = () => {
    navigate("/brand/marketplace");
  };
  const handleplaceClick = () => {
    navigate("/marketplace");
  };
  const [popoverState, setPopoverState] = useState({});
  const handleMouseEnter = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: true,
    }));
  };
  const handleMouseLeave = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: false,
    }));
  };
  const isPopoverOpen = (linkId) => Boolean(popoverState[linkId]);

const userData = JSON.parse(localStorage.getItem("userData"));
const userType = userData ? userData.user_type : null;
console.log("userType",userType)
  return (
    <Stack alignItems={"center"} justifyContent={"center"} pt={2}>
      <Stack direction={"row"} justifyContent={"space-between"} width={"85%"}>
        <Stack direction={"row"} gap={3}>
          <Stack
            direction={"row"}
            onClick={handlehomeClick}
            sx={{
              cursor: "pointer",
            }}
          >
            <Box>
              <img
                src={Logo}
                alt="logo"
                style={{ width: "202px", height: "45px" }}
              />
            </Box>
          </Stack>
          <Stack alignItems={"center"} direction={"row"} position={"relative"}>
            <Stack p={1} style={{ position: "absolute", color: "grey" }}>
              <SearchIcon />
            </Stack>
            <input
              className="focus"
              type="text"
              placeholder="Find Creator..."
              name="Search"
              style={{
                width: "318px",
                height: "28px",
                paddingLeft: "2.1rem",
                borderRadius: "39px",
                border: "1px solid #C8C8C8",
              }}
            />
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Stack direction={"row"} gap={3}>
            <Stack justifyContent={"center"}>
              <Link to={"/chat"} className="popperLinks">
                
                {/* {userType === "0" && (
                  <Typography color={"grey"} fontSize={"14px"}>
                    Chat
                  </Typography>
                )}
                {userType === "1" && (
                  <Typography color={"grey"} fontSize={"14px"}>
                    about
                  </Typography>
                )} */}
                {userType === "0" ? (
                  <Typography color={"grey"} fontSize={"14px"}>
                    Chat
                  </Typography>
                ) : (
                  <Typography color={"grey"} fontSize={"14px"}>
                    About
                  </Typography>
                )}
              </Link>
            </Stack>

            <Stack justifyContent={"center"}>
              <Link to={"/collabs"} className="popperLinks">
                <Typography color={"grey"} fontSize={"14px"}>
                  Collabs
                </Typography>
              </Link>
            </Stack>
            <Stack
              justifyContent={"center"}
              sx={{ cursor: "pointer" }}
              onClick={handleplaceClick}
            >
              <Typography color={"grey"} fontSize={"14px"}>
                Marketplace
              </Typography>
            </Stack>
          </Stack>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            gap={2}
          >
            <Stack
              width={"38px"}
              height={"38px"}
              sx={{ backgroundColor: "#EEEEEE", borderRadius: "50%" }}
            >
              <Stack
                width={"38px"}
                height={"38px"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{ color: "#838383" }}
              >
                <HeadphonesIcon />
              </Stack>
            </Stack>
            <Stack
              width={"38px"}
              height={"38px"}
              sx={{ backgroundColor: "#603AFA", borderRadius: "50%" }}
            >
              <Stack
                width={"38px"}
                height={"38px"}
                justifyContent={"center"}
                alignItems={"center"}
                style={{ color: "white" }}
              >
                <Typography>+</Typography>
              </Stack>
            </Stack>
            <Stack
              width={"38px"}
              height={"38px"}
              sx={{
                backgroundColor: "#F8F8FF",
                borderRadius: "50%",
                border: "1px solid #DFD7FE",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                <Stack
                  width={"38px"}
                  height={"38px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ color: "#603AFA", cursor: "pointer" }}
                >
                  <Typography>MI</Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  className="nav-link"
                  sx={{
                    height: isPopoverOpen(1) ? 210 : 0,
                    opacity: isPopoverOpen(1) ? 1 : 0,
                    transition: "opacity 0.2s ease-in-out",
                    position: "absolute",
                    top: 55,
                    right: 25,
                    overflow: "hidden",
                    backgroundColor: "#F8F8FF",

                    border: "1px solid #DFD7FE",
                    borderRadius: "15px",
                    zIndex: 1,
                  }}
                >
                  <Stack
                    justifyContent={"center"}
                    gap={1}
                    sx={{ p: 2, width: 130 }}
                  >
                    <Link to="/login" className="popperLinks">
                      <Typography color={"black"} sx={{}} fontWeight={"bold"}>
                        Login
                      </Typography>
                    </Link>
                    <Link to="/" className="popperLinks">
                      <Typography color={"black"} sx={{}}>
                        Brand Graph
                      </Typography>
                    </Link>
                    <Link to="/signup" className="popperLinks">
                      <Typography color={"black"} sx={{}} fontWeight={"bold"}>
                        SignUp
                      </Typography>
                    </Link>
                    <Link
                      to="/our-story/awards-recognitions"
                      className="popperLinks"
                    >
                      <Typography color={"black"} sx={{}}>
                        Knowledge Base
                      </Typography>
                    </Link>
                    <Link
                      to="/our-story/awards-recognitions"
                      className="popperLinks"
                    >
                      <Typography color={"black"} sx={{}}>
                        Contact Support
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>
              </div>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
