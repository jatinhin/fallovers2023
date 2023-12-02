import React, { useEffect, useState, useRef } from "react";
import Header from "../include/Header";
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import dp from "../assets/dp.png";
import DeleteIcon from "@mui/icons-material/Delete";
const Faltu = () => {
  const [data, setdata] = useState([]);
  const userDataa = JSON.parse(localStorage.getItem("apiResponseData"));
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [otherInfo, setotherInfo] = useState();
  const [inputvalue, setinputvalue] = useState("");
  const chatContainerRef = useRef(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [selectedDealPrice, setSelectedDealPrice] = useState(null);
  const [selectedDealId, setSelectedDealId] = useState(1);
  const getUserdata = async (id = null) => {
    try {
      let payload = {
        user_id: userDataa.user_id,
      };
      if (id) {
        payload.id = id;
      }
      const response = await axios.post(
        "https://fallovers.com/fallovers-api/api/v1/get-communication-users",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      setdata(response.data.data);
      let isUser = "";
      response.data.data.forEach((item) => {
        if (item.active === "1") {
          isUser = item.user_id;
        }
      });
      if (isUser) {
        setSelectedUser(isUser);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
console.log("sajkfhd",userDataa.user_type)
  const getUserChatMessages = async (id) => {
    try {
      const response = await axios.post(
        "https://fallovers.com/fallovers-api/api/v1/get-communication",
        {
          user_id: userDataa.user_id,
          id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      setChatMessages(response.data.data);
      setotherInfo(response.data.otherInfo);
      console.log("otherInfo", otherInfo);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleUserClick = (user) => {
    console.log("user", user);
    setSelectedUser(user);
    setSelectedUserId(user.user_id);
    getUserChatMessages(user.user_id);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fallovers.com/fallovers-api/api/v1/communication",
        {
          from: userDataa.user_id,
          to: selectedUser.user_id,
          type: 0,
          msg: inputvalue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      getUserChatMessages(selectedUser.user_id);
      setinputvalue("");
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const handledeletebutton = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fallovers.com/fallovers-api/api/v1/delete-communication",
        {
          user_id: userDataa.user_id,
          id: 5,
          status: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("deleteresponse", response);
      getUserChatMessages(selectedUser.user_id);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    const brandidExist = location.search.includes("brand-id");
    const influenceridExist = location.search.includes("influencer-id");

    if (brandidExist || influenceridExist) {
      const id = brandidExist
        ? location.search.split("brand-id=")[1]
        : location.search.split("influencer-id=")[1];

      getUserdata(id);
      setSelectedUser(id);
      getUserChatMessages(id);
    } else {
      getUserdata();
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedUser) {
        getUserChatMessages(selectedUser.user_id);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [selectedUser]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);
  const handleDealClick = (dealId, price) => {
    setSelectedDealPrice(price);
    setSelectedDealId(dealId);
  };
  const location = useLocation();
  console.log("jatin", location);
  console.log("lasfa", location.search.split("brand-id=")[1]);
  console.log("newewe", location.search.includes("brand-id"));
  // const hardcodedDeals = [
  //   { id: 1, name: "Deal 1", price: 100, description: "Description 1" },
  //   { id: 2, name: "Deal 2", price: 200, description: "Description 2" },
  //   // Add more deals as needed
  // ];
  return (
    <div>
      <Header />
      <Stack width={"100%"} direction={"row"}>
        <Stack
          width={"20%"}
          bgcolor="rgba(255, 255, 255, 0.5)"
          border={"1px solid #D9D9D9"}
          borderTop={"0px"}
          sx={{
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" fontWeight={"bold"} p={"15px 0px 0px 40px"}>
            All Conversations
          </Typography>
          <div
            style={{
              overflow: "auto",
              height: "83vh",
            }}
          >
            <List>
              {data?.map((user) => (
                <ListItem
                  key={user.id}
                  sx={{
                    borderBottom: "1px solid #DFD7FE",
                    // backgroundColor:
                    //   user.user_id === selectedUserId
                    //     ? "#DFD7FE"
                    //     : "transparent",
                    backgroundColor:
                      user.user_id === selectedUserId
                        ? "#DFD7FE"
                        : user.active === "1"
                        ? "#DFD7FE" // Set the color you want for active users
                        : "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => handleUserClick(user)}
                >
                  <Stack
                    p={"10px 0px 0px 35px"}
                    direction={"row"}
                    gap={2}
                    sx={{ cursor: "pointer" }}
                  >
                    <Box
                      width={"40px"}
                      height={"40px"}
                      borderRadius={"50%"}
                      bgcolor={"grey"}
                      position={"relative"}
                    >
                      <img src={dp} alt="" style={{ borderRadius: "50%" }} />
                      <Box
                        width={"10px"}
                        height={"10px"}
                        borderRadius={"50%"}
                        bgcolor={"grey"}
                        position={"relative"}
                        left={"32px"}
                        bottom={"10px"}
                      ></Box>
                    </Box>
                    <Stack>
                      <ListItemText>
                        <Typography fontWeight={"bold"} color={"black"}>
                          {user.user_name}
                        </Typography>
                      </ListItemText>
                      <Typography>{user.created_at}</Typography>
                    </Stack>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </div>
        </Stack>
        <Stack
          height={"87vh"}
          width={"50%"}
          borderRight={"1px solid #DFD7FE"}
          justifyContent={"space-between"}
        >
          {selectedUser && (
            <>
              <Stack
                bgcolor={"#E2DBFB9D"}
                direction={"row"}
                p={2}
                gap={1}
                boxShadow={"0px 1px 3px 0px lightgrey"}
                borderRadius={1}
                justifyContent={"space-between"}
              >
                {otherInfo && (
                  <Stack>
                    <Typography variant="h5" fontWeight={"bold"}>
                      Chatting with {otherInfo.user_name}
                    </Typography>
                    <Typography pt={"4px"}>id name</Typography>
                  </Stack>
                )}
                <DeleteIcon
                  sx={{ fontSize: "30px" }}
                  onClick={handledeletebutton}
                />
              </Stack>
              <div
                ref={chatContainerRef}
                style={{
                  overflowY: "auto",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {chatMessages
                  .slice()
                  .reverse()
                  .map((message) => (
                    <>
                      <div key={message.id}>
                        {message.send_message === 0 ? (
                          <OutgoingMessage
                            message={message.communication_message}
                          />
                        ) : (
                          <IncomingMessage
                            message={message.communication_message}
                          />
                        )}
                      </div>
                    </>
                  ))}
              </div>
              <Stack p={2}>
                <form action="" onSubmit={handleSendMessage}>
                  <div style={{ position: "relative" }}>
                    <input
                      className="form-control"
                      type="text"
                      style={{ padding: "5px", height: "44px" }}
                      onChange={(e) => setinputvalue(e.target.value)}
                      value={inputvalue}
                    />
                    <svg
                      type="submit"
                      onClick={handleSendMessage}
                      style={{
                        position: "absolute",
                        top: "10%",
                        right: "1%",
                        cursor: "pointer",
                      }}
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_233_39615)">
                        <rect
                          x="4"
                          width="36"
                          height="36"
                          rx="18"
                          fill="#8A6FF9"
                        />
                      </g>
                      <path
                        d="M17.1667 14.2668L24.2417 11.9085C27.4167 10.8501 29.1417 12.5835 28.0917 15.7585L25.7333 22.8335C24.15 27.5918 21.55 27.5918 19.9667 22.8335L19.2667 20.7335L17.1667 20.0335C12.4083 18.4501 12.4083 15.8585 17.1667 14.2668Z"
                        stroke="white"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.425 20.375L22.4084 17.3833"
                        stroke="white"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <filter
                          id="filter0_d_233_39615"
                          x="0"
                          y="0"
                          width="44"
                          height="44"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_233_39615"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_233_39615"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  {/* <button type="submit">send</button> */}
                </form>
              </Stack>
            </>
          )}
        </Stack>
        <Stack
          width={"30%"}
          position={"relative"}
          style={{ overflowY: "auto", maxHeight: "83vh" }}
        >
          {selectedUser && (
            <>
              {otherInfo && (
                <Box
                  p={1}
                  style={{
                    position: "fixed",
                    width: "30%",
                    backgroundColor: "#ffffff",
                    zIndex: 1,
                  }}
                >
                  <Stack
                    bgcolor={"#E2DBFB9D"}
                    direction={"row"}
                    p={2}
                    gap={1}
                    boxShadow={"0px 1px 3px 0px lightgrey"}
                    borderRadius={1}
                  >
                    <Box
                      width={"40px"}
                      height={"40px"}
                      borderRadius={"50%"}
                      bgcolor={"grey"}
                      // Add an image source based on the user's profile picture URL
                      // style={{
                      //   backgroundImage: `url(${user.profile_picture_url})`,
                      //   backgroundSize: "cover",
                      // }}
                    >
                      <img src={dp} alt="" style={{ borderRadius: "50%" }} />
                    </Box>
                    <Stack>
                      <Typography variant="h5" fontWeight={"bold"}>
                        {otherInfo.user_name}
                      </Typography>
                      <Typography pt={"4px"}>id name</Typography>
                      <Stack direction={"row"} gap={1} pt={0.5}>
                        <Typography fontSize={"11px"} color={"#977DFF"}>
                          Influencer Marketing
                        </Typography>
                        <Typography fontSize={"11px"} color={"#977DFF"}>
                          Instagram Reels
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <div
                    style={{
                      overflowY: "auto",
                      maxHeight: "calc(90vh - 190px)",
                    }}
                  >
                    <Box>
                      <Typography fontSize={"15px"} color={"#737B83"} p={1.5}>
                        I would love to create and Instagram Reel from
                        @thefairbanksfam. I am a Utah mom of 5 kids, including
                        toddler TRIPLETS! I share about family fun, bonding, and
                        especially how to make the most of live through the
                        different holidays and seasons! I love doing festive and
                        extra things! My audience is made up of mostly females
                        in the 25-34 year old range. I would absolutely love to
                        partner and create some exciting content for your brand!
                      </Typography>
                      <Box p={1.5}>
                        <Typography fontWeight={"bold"} variant="h5">
                          Deals
                        </Typography>
                        <Typography
                          color={"#737B83"}
                          fontSize={"14px"}
                          pt={0.5}
                        >
                          The specific deliverables available from this Seller.
                          Choose one
                        </Typography>
                      </Box>
                      <Stack gap={2} pb={2}>
                        {otherInfo.workInformation.map((deal) => (
                          <Stack
                            key={deal.info_reg_deal_id}
                            boxShadow={
                              selectedDealId === deal.info_reg_deal_id
                                ? "0px 1px 3px 0px #603AFA"
                                : ""
                            }
                            border={
                              selectedDealId === deal.info_reg_deal_id
                                ? "1px solid #603AFA"
                                : ""
                            }
                            // boxShadow={"0px 1px 3px 0px #603AFA"}
                            borderRadius={1}
                            p={1}
                            sx={{ cursor: "pointer" }}
                            onClick={() =>
                              handleDealClick(
                                deal.info_reg_deal_id,
                                deal.info_reg_deal_price
                              )
                            }
                          >
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                            >
                              <Stack direction={"row"} gap={2}>
                                <Stack
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                >
                                  <Typography fontWeight={"bold"} variant="h5">
                                    {userDataa.user_type === 0
                                      ? deal.campaign_name
                                      : deal.info_reg_deal_title}
                                  </Typography>
                                </Stack>
                                <Stack
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                >
                                  <Stack
                                    sx={{
                                      content: "''",
                                      width: "91px",
                                      height: "1px",
                                      bgcolor: "#2D2D2D",
                                      opacity: "20%",
                                    }}
                                  ></Stack>
                                </Stack>
                              </Stack>
                              <Stack
                                direction={"row"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                gap={1}
                              >
                                <Typography
                                  color={"#603AFA"}
                                  sx={{ opacity: "40%" }}
                                >
                                  INR
                                </Typography>
                                <Typography color={"#603AFA"} variant="h3">
                                  {deal.info_reg_deal_price}
                                </Typography>
                              </Stack>
                            </Stack>
                            <Stack direction={"row"} gap={2}>
                              <Stack direction={"row"} gap={0.5}>
                                <Box>
                                  <svg
                                    width="11"
                                    height="11"
                                    viewBox="0 0 11 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.0525 5.49986C10.0525 7.99834 8.02471 10.0261 5.52623 10.0261C3.02775 10.0261 1.50241 7.50951 1.50241 7.50951M1.50241 7.50951H3.54827M1.50241 7.50951V9.77262M1 5.49986C1 3.00138 3.00965 0.973633 5.52623 0.973633C8.54522 0.973633 10.0525 3.49022 10.0525 3.49022M10.0525 3.49022V1.2271M10.0525 3.49022H8.04281"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </Box>
                                <Stack
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                >
                                  <Typography>1 Revisions</Typography>
                                </Stack>
                              </Stack>
                              <Stack direction={"row"} gap={0.5}>
                                <Box>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4.26123 1.28809V2.72825"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-miterlimit="10"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M8.09937 1.28809V2.72825"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-miterlimit="10"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M2.10083 4.69189H10.2618"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-miterlimit="10"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M10.5008 4.40857V8.48904C10.5008 9.9292 9.78076 10.8893 8.10057 10.8893H4.26014C2.57995 10.8893 1.85986 9.9292 1.85986 8.48904V4.40857C1.85986 2.96841 2.57995 2.0083 4.26014 2.0083H8.10057C9.78076 2.0083 10.5008 2.96841 10.5008 4.40857Z"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-miterlimit="10"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M7.95443 6.90458H7.95874"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M7.95443 8.34501H7.95874"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M6.1766 6.90458H6.18091"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M6.1766 8.34501H6.18091"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M4.40219 6.90458H4.4065"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M4.40219 8.34501H4.4065"
                                      stroke="#292D32"
                                      stroke-width="0.822951"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </Box>
                                <Stack
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                >
                                  <Typography>
                                    {deal.info_reg_deal_delivery_time} Days
                                    Delivery
                                  </Typography>
                                </Stack>
                              </Stack>
                            </Stack>
                            <Stack direction={"row"} gap={0.5}>
                              <Box>
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.03502 1.0706L2.63954 1.9731C2.08748 2.17952 1.63623 2.8324 1.63623 3.41806V6.98487C1.63623 7.55133 2.01067 8.29542 2.46672 8.63626L4.53096 10.1772C5.20784 10.6861 6.32156 10.6861 6.99844 10.1772L9.06268 8.63626C9.51873 8.29542 9.89317 7.55133 9.89317 6.98487V3.41806C9.89317 2.8276 9.44192 2.17472 8.88986 1.9683L6.49438 1.0706C6.08634 0.92178 5.43346 0.92178 5.03502 1.0706Z"
                                    stroke="#292D32"
                                    stroke-width="0.822951"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M4.34473 5.69857L5.11761 6.47146L7.18185 4.40723"
                                    stroke="#292D32"
                                    stroke-width="0.822951"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </Box>
                              <Stack
                                justifyContent={"center"}
                                alignItems={"center"}
                              >
                                <Typography>Full commercial use</Typography>
                              </Stack>
                            </Stack>
                            <Typography fontSize={"14px"} pt={0.5}>
                              {deal.info_reg_deal_description}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>
                  </div>
                  <Stack
                    direction={"row"}
                    p={2}
                    justifyContent={"space-between"}
                    boxShadow={"1px -1px 2px 0px lightgrey"}
                    position="fixed"
                    bottom="0"
                    width="30%"
                    backgroundColor="#ffffff"
                    zIndex="1"
                  >
                    <Stack
                      bgcolor={"white"}
                      direction={"row"}
                      border={"1px solid #603AFA"}
                      borderRadius={"5px"}
                      sx={{ cursor: "pointer" }}
                    >
                      <Stack p={1.5}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5.11334V4.46667C5 2.96667 6.20667 1.49334 7.70667 1.35334C9.49333 1.18001 11 2.58667 11 4.34001V5.26001"
                            stroke="#666666"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.00013 14.6668H10.0001C12.6801 14.6668 13.1601 13.5935 13.3001 12.2868L13.8001 8.28683C13.9801 6.66016 13.5135 5.3335 10.6668 5.3335H5.33346C2.4868 5.3335 2.02013 6.66016 2.20013 8.28683L2.70013 12.2868C2.84013 13.5935 3.32013 14.6668 6.00013 14.6668Z"
                            stroke="#666666"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.3304 7.99984H10.3364"
                            stroke="#666666"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.66292 7.99984H5.66891"
                            stroke="#666666"
                            stroke-width="1.33333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Stack>
                      <Stack justifyContent={"center"} pr={1}>
                        <Typography color={"#888686"}>Order Summary</Typography>
                        <Typography>
                          {" "}
                          <span style={{ color: "#C0B0FD" }}>INR</span>{" "}
                          <span style={{ color: "#603AFA", fontSize: "12px" }}>
                            {selectedDealPrice !== null
                              ? selectedDealPrice
                              : "0"}
                          </span>{" "}
                          3 days
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack
                      justifyContent={"center"}
                      alignItems={"center"}
                      bgcolor={"#2D9D76"}
                      width={"104px"}
                      height={"40px"}
                      color={"white"}
                      sx={{ cursor: "pointer" }}
                    >
                      Buy Now
                    </Stack>
                  </Stack>
                </Box>
              )}
            </>
          )}
        </Stack>
      </Stack>
    </div>
  );
};

const IncomingMessage = ({ message, user }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "5px 16px" }}>
      <Box
        width={"20px"}
        height={"20px"}
        borderRadius={"50%"}
        bgcolor={"grey"}
        // Add an image source based on the user's profile picture URL
        // style={{
        //   backgroundImage: `url(${user.profile_picture_url})`,
        //   backgroundSize: "cover",
        // }}
      ></Box>
      <Paper
        variant="outlined"
        sx={{
          backgroundColor: "#FFFFFF",
          padding: "10px",
          margin: "5px",
          maxWidth: "fit-content",
          borderRadius: "10px",
          marginLeft: "8px",
        }}
      >
        {message}
      </Paper>
    </div>
  );
};

const OutgoingMessage = ({ message, user }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: "5px 16px",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          backgroundColor: "#DFD7FE",
          padding: "10px",
          margin: "5px",
          maxWidth: "fit-content",
          borderRadius: "10px",
          marginRight: "8px",
        }}
      >
        {message}
      </Paper>
      <Box
        width={"20px"}
        height={"20px"}
        borderRadius={"50%"}
        bgcolor={"grey"}
        // Add an image source based on the user's profile picture URL
        // style={{
        //   backgroundImage: `url(${user.profile_picture_url})`,
        //   backgroundSize: "cover",
        // }}
      ></Box>
    </div>
  );
};

export default Faltu;
