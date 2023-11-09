import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import WhiteBtn from "../utils/WhiteBtn";
import mag from "../../assets/mag.png";
import sea from "../../assets/sea.png";
import Rup from "../../assets/Rup.png";
import cal from "../../assets/cal.png";
import money from "../../assets/money.png";
import note from "../../assets/note.png";
import phone from "../../assets/phone.png";
import fig from "../../assets/fig.png";
import dep from "../../assets/dep.png";
import { useNavigate } from "react-router-dom";
import ListingCards from "./ListingCards";
import Appears from "./Appears";
import Navbar from "./NavBar";
import Reacttable from "./Reacttable";
import TransactionPage from "./TransactionPage";
import ReactTable2 from "./ReactTable2";
import { useStore } from "react-redux";

const Dashboard = () => {
  const [activebtn, setActivebtn] = useState(1);
  const handleBtnClick = (btnNumber) => {
    setActivebtn(btnNumber);
  };
  const [selected, setselected] = useState(1);
//   const userInfo=useStore(lasjdfklj)
   
// checkuser()
  const handlebtnClick = (btn) => {
    setselected(btn);
  };
  const [selectedcast, setselectedcast] = useState(1);
  const handlebtnClickcast = (btn) => {
    setselectedcast(btn);
  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
    activebtn === 1 ? navigate("/Createcampaign") : navigate("/FindCreator");
  };
  const handlecardClick = () => {
    navigate("/FindCreator");
  };

  

  const data1 = [
    {
      id: 1,
      name: "jatin",
      Status: "Active",
      color: "#008000",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
    {
      id: 2,
      name: "rumit",
      color: "#008000",
      Status: "paused",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
    {
      id: 3,
      name: "harsh",
      color: "#3D3D3D",
      Status: "queued",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
    {
      id: 4,
      name: "vijay",
      color: "#d23536",
      Status: "inactive",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
    {
      id: 5,
      name: "sanjana",
      color: "#4E76C9",
      Status: "pending",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
  ];

  const data2 = [
    {
      id: 1,
      name: "jatin",
      Status: "Active",
      color: "#008000",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
    {
      id: 2,
      name: "rumit",
      Status: "Active",
      color: "#008000",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
    {
      id: 3,
      name: "harsh",
      Status: "Active",
      color: "#008000",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
    {
      id: 4,
      name: "vijay",
      Status: "Active",
      color: "#008000",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
    {
      id: 5,
      name: "sanjana",
      Status: "Active",
      color: "#008000",
      Find: "26",
      cc: "ajksfa",
      proposal: "afaf",
      investment: "zsfasfa",
    },
  ];
  const data3 = [
    {
      id: 1,
      name: "kapil",
      Status: "Active",
      StatusG1: "Connected",
      color: "#008000",
      Find: "26 M",
      Pack: "Custom",
      Due: "30",
      Invest: "$20,000",
      last: "20/05/2020 - 11am",
      proposal: "Kapil Thakkar ",
      content: "Kapil Thakkar",
      date: "30-12-2023",
      detail: "Changes in Campaign Br",
      invoice: "#70707gh60",
    },
    {
      id: 2,
      name: "Gouttam",
      Status: "Active",
      StatusG1: "Connected",
      color: "#008000",
      Find: "26 M",
      Pack: "Custom",
      Due: "30",
      Invest: "$20,000",
      last: "20/05/2020 - 11am",
      proposal: "Kapil Thakkar ",
      content: "Kapil Thakkar",
      date: "30-12-2023",
      detail: "Changes in Campaign Br",
      invoice: "#70707gh60",
    },
    {
      id: 3,
      name: "jatin",
      Status: "Active",
      StatusG1: "Connected",
      StatusB: "In-Progress",
      color: "#008000",
      Find: "26 M",
      Pack: "Custom",
      Due: "30",
      Invest: "$20,000",
      last: "20/05/2020 - 11am",
      proposal: "Kapil Thakkar ",
      content: "Kapil Thakkar",
      date: "30-12-2023",
      detail: "Changes in Campaign Br",
      invoice: "#70707gh60",
    },
    {
      id: 4,
      name: "mohit",
      Status: "Active",
      StatusR: "Not-close",
      StatusB: "In-Progress",
      color: "#008000",
      Find: "26 M",
      Pack: "Custom",
      Due: "30",
      Invest: "$20,000",
      last: "20/05/2020 - 11am",
      proposal: "Kapil Thakkar ",
      content: "Kapil Thakkar",
      date: "30-12-2023",
      detail: "Changes in Campaign Br",
      invoice: "#70707gh60",
    },
    {
      id: 5,
      name: "vikas",
      Status: "Active",
      StatusB: "In-Progress",
      color: "#008000",
      Find: "26 M",
      Pack: "Custom",
      Due: "30",
      Invest: "$20,000",
      last: "20/05/2020 - 11am",
      proposal: "Kapil Thakkar ",
      content: "Kapil Thakkar",
      date: "30-12-2023",
      detail: "Changes in Campaign Br",
      invoice: "#70707gh60",
    },
  ];
  return (
    <>
      <Navbar />
      <Stack width={"100%"} height={"800px"} alignItems={"center"} pt={5}>
        <Stack
          width={"1045px"}
          height={"47px"}
          bgcolor={"black"}
          borderRadius={"20px 20px 0px 0px"}
        >
          <Stack direction={"row"} justifyContent={"space-between"} p={1}>
            <Typography color={"white"} pl={8} pt={0.5} fontSize={"16px"}>
              <span style={{ fontWeight: "bold" }}>Calling all creators!</span>{" "}
              Create your public profile today and attract marketers.
            </Typography>
            <Typography color={"white"} fontSize={"15px"} p={1}>
              Updates
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} height={"700px"}>
          <Stack
            bgcolor={"#e2dbfb"}
            sx={{ width: activebtn === 1 ? "291px" : "0px" }}
          >
            <Stack
              height={"550px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h1"
                color={"#D4C8FF"}
                sx={{
                  textOrientation: "sideways",
                  writingMode: "vertical-rl",
                  textAlign: "center",
                  display: activebtn === 1 ? "block" : "none",
                }}
              >
                Social media networks
              </Typography>
            </Stack>
          </Stack>
          <Stack
            justify
            width={"754px"}
            bgcolor={"white"}
            sx={{
              width: activebtn === 1 ? "754px" : "1045px",
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              {activebtn === 1 && (
                <Typography
                  fontWeight={"bold"}
                  pt={4.5}
                  pl={6}
                  fontSize={"24px"}
                  color={"black"}
                >
                  Dashboard
                </Typography>
              )}
              {activebtn === 2 && (
                <Typography
                  fontWeight={"bold"}
                  pt={4.5}
                  pl={6}
                  fontSize={"24px"}
                  color={"black"}
                >
                  Orders
                </Typography>
              )}
              {activebtn === 3 && (
                <Typography
                  fontWeight={"bold"}
                  pt={4.5}
                  pl={6}
                  fontSize={"24px"}
                  color={"black"}
                >
                  Collabs
                </Typography>
              )}
              <Box p={4}>
                <WhiteBtn onClick={handleButtonClick}>
                  {" "}
                  {activebtn === 1 ? "Post A Campaign" : "Find Creator"}
                </WhiteBtn>
              </Box>
            </Stack>

            <Stack pl={5} pr={5} gap={1}>
              <Stack
                direction={"row"}
                gap={3}
                sx={{
                  borderBottom: "2px solid #E2DBFB",
                }}
              >
                <Button
                  sx={{
                    width: "120px",
                    textTransform: "none",
                    borderTop: activebtn === 1 ? "0px solid #E2DBFB" : "none",
                    borderTopWidth: activebtn === 1 ? 2 : 0,
                    borderRight: activebtn === 1 ? "0px solid #E2DBFB" : "none",
                    borderRightWidth: activebtn === 1 ? 2 : 0,
                    borderLeft: activebtn === 1 ? "0px solid #E2DBFB" : "none",
                    borderLeftWidth: activebtn === 1 ? 2 : 0,
                    backgroundColor: activebtn === 1 ? "#F8F8FF" : "white",
                    color: activebtn === 1 ? "#603AFA" : "black",
                    borderRadius: "12px 12px 0 0",
                    "&:hover": {
                      color: activebtn === 1 ? "#603AFA" : "black",
                      backgroundColor: activebtn === 1 ? "#F8F8FF" : "white",
                      transition: "none",
                    },
                    transition: "none",
                    fontSize: "16px",
                    fontWeight: activebtn === 1 ? 600 : 400,
                  }}
                  onClick={() => handleBtnClick(1)}
                >
                  Overview
                </Button>
                <Button
                  sx={{
                    width: "120px",
                    borderRadius: "12px 12px 0 0",
                    textTransform: "none",
                    borderTop: activebtn === 2 ? "0px solid #E2DBFB" : "none",
                    borderTopWidth: activebtn === 2 ? 2 : 0,
                    borderRight: activebtn === 2 ? "0px solid #E2DBFB" : "none",
                    borderRightWidth: activebtn === 2 ? 2 : 0,
                    borderLeft: activebtn === 2 ? "0px solid #E2DBFB" : "none",
                    borderLeftWidth: activebtn === 2 ? 2 : 0,
                    backgroundColor: activebtn === 2 ? "#F8F8FF" : "white",
                    color: activebtn === 2 ? "#603AFA" : "black",
                    fontWeight: activebtn === 2 ? 600 : 400,
                    "&:hover": {
                      color: activebtn === 2 ? "#603AFA" : "black",
                      backgroundColor: activebtn === 2 ? "#F8F8FF" : "white",
                      transition: "none",
                    },
                    transition: "none",
                    fontSize: "16px",
                  }}
                  onClick={() => handleBtnClick(2)}
                >
                  Orders
                </Button>
                <Button
                  sx={{
                    width: "130px",
                    borderRadius: "12px 12px 0 0",
                    textTransform: "none",
                    borderTop: activebtn === 3 ? "0px solid #E2DBFB" : "none",
                    borderTopWidth: activebtn === 3 ? 2 : 0,
                    borderRight: activebtn === 3 ? "0px solid #E2DBFB" : "none",
                    borderRightWidth: activebtn === 3 ? 2 : 0,
                    borderLeft: activebtn === 3 ? "0px solid #E2DBFB" : "none",
                    borderLeftWidth: activebtn === 3 ? 2 : 0,
                    outline: "none",
                    backgroundColor: activebtn === 3 ? "#F8F8FF" : "white",
                    color: activebtn === 3 ? "#603AFA" : "black",
                    fontWeight: activebtn === 3 ? 600 : 400,
                    transition: "none",
                    fontSize: "16px",
                    "&:hover": {
                      color: activebtn === 3 ? "#603AFA" : "black",
                      backgroundColor: activebtn === 3 ? "#F8F8FF" : "white",
                      transition: "none",
                    },
                  }}
                  onClick={() => handleBtnClick(3)}
                >
                  Casting Calls
                </Button>
              </Stack>

              <Stack pt={2}>
                {activebtn === 1 && (
                  <Stack direction={"row"} gap={3}>
                    <Stack
                      direction={"row"}
                      sx={{
                        backgroundColor: "#F8F8FF",
                        width: "450px",
                        borderRadius: "18px",
                        border: "2px solid #E2DBFB",
                        p: 3,
                      }}
                    >
                      <Stack gap={1.5}>
                        <Typography
                          fontSize={"14px"}
                          fontWeight={"bold"}
                          color={"black"}
                        >
                          Attract Creators
                        </Typography>
                        <Typography fontSize={"11px"} color={"black"}>
                          Post a job to find exactly who you're looking for.
                        </Typography>
                        <Typography
                          fontSize={"11px"}
                          fontWeight={"bold"}
                          color={"black"}
                        >
                          Create Casting Call
                        </Typography>
                      </Stack>
                      <Box>
                        <img
                          src={mag}
                          alt=""
                          style={{ width: "80px", height: "52px" }}
                        />
                      </Box>
                    </Stack>
                    <Stack
                      onClick={handlecardClick}
                      direction={"row"}
                      sx={{
                        backgroundColor: "#F8F8FF",
                        width: "450px",
                        borderRadius: "18px",
                        border: "2px solid #E2DBFB",
                        p: 2,
                        cursor: "pointer",
                      }}
                    >
                      <Stack gap={1}>
                        <Typography
                          fontSize={"14px"}
                          fontWeight={"bold"}
                          color={"black"}
                        >
                          Find Creators
                        </Typography>
                        <Typography fontSize={"11px"} color={"black"}>
                          See what skills and talents are available for hire.
                        </Typography>
                        <Typography
                          fontSize={"11px"}
                          fontWeight={"bold"}
                          color={"black"}
                        >
                          View Listing
                        </Typography>
                      </Stack>
                      <Box>
                        <img
                          src={sea}
                          alt=""
                          style={{ width: "82px", height: "52px" }}
                        />
                      </Box>
                    </Stack>
                    <Stack
                    
                      direction={"row"}
                      sx={{
                        backgroundColor: "#F8F8FF",
                        width: "450px",
                        borderRadius: "18px",
                        border: "2px solid #E2DBFB",
                        p: 2,
                        gap: 2,
                      }}
                    >
                      <Stack>
                        <Typography
                          fontSize={"14px"}
                          fontWeight={"bold"}
                          color={"black"}
                        >
                          Deposited Money
                        </Typography>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          gap={1}
                          color={"black"}
                        >
                          <Stack>
                            <Typography
                              sx={{ fontSize: "13px", color: "#9d86fc" }}
                            >
                              INR
                            </Typography>
                          </Stack>

                          <Typography
                            sx={{ fontSize: "38px", fontWeight: 700 }}
                          >
                            0
                          </Typography>
                        </Stack>
                        <Typography fontSize={"11px"} color={"grey"}>
                          INR 0 Cashed Out
                        </Typography>
                      </Stack>
                      <Box>
                        <img
                          src={Rup}
                          alt=""
                          style={{ width: "42px", height: "42px" }}
                        />
                      </Box>
                    </Stack>
                  </Stack>
                )}
                {activebtn === 2 && (
                  <Stack gap={4}>
                    <Stack direction={"row"} gap={4}>
                      <Stack
                        direction={"row"}
                        sx={{
                          backgroundColor: "#F8F8FF",
                          width: "281px",
                          height: "135px",
                          borderRadius: "18px",
                          border:
                            selected === 1
                              ? "2px solid #603AFA"
                              : "2px solid #E2DBFB",
                          p: 2,
                          cursor: "pointer",
                        }}
                        onClick={() => handlebtnClick(1)}
                      >
                        <Stack gap={2}>
                          <Typography fontSize={"14px"} fontWeight={"bold"}>
                            ACTIVE TODOS
                          </Typography>
                          <Typography fontSize={"11px"}>
                            Post a job to find exactly who you're looking for.
                          </Typography>
                          <Typography fontSize={"11px"} fontWeight={"bold"}>
                            Create Casting Call
                          </Typography>
                        </Stack>
                        <Box>
                          <img
                            src={cal}
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Box>
                      </Stack>
                      <Stack
                        direction={"row"}
                        sx={{
                          backgroundColor: "#F8F8FF",
                          width: "301px",
                          height: "135px",
                          borderRadius: "18px",
                          border:
                            selected === 2
                              ? "2px solid #603AFA"
                              : "2px solid #E2DBFB",
                          p: 2,
                        }}
                        onClick={() => handlebtnClick(2)}
                      >
                        <Stack gap={2}>
                          <Typography fontSize={"14px"} fontWeight={"bold"}>
                            ACTIVE ORDERS
                          </Typography>
                          <Typography fontSize={"11px"}>
                            See what skills and talents are available for hire.
                          </Typography>
                          <Typography fontSize={"11px"} fontWeight={"bold"}>
                            View Listings
                          </Typography>
                        </Stack>
                        <Box>
                          <img
                            src={sea}
                            alt=""
                            style={{ width: "45px", height: "40px" }}
                          />
                        </Box>
                      </Stack>
                      <Stack
                        direction={"row"}
                        sx={{
                          backgroundColor: "#F8F8FF",
                          width: "301px",
                          height: "135px",
                          borderRadius: "18px",
                          border:
                            selected === 3
                              ? "2px solid #603AFA"
                              : "2px solid #E2DBFB",
                          p: 2,
                        }}
                        onClick={() => handlebtnClick(3)}
                      >
                        <Stack width={"80%"} gap={0.5}>
                          <Typography fontSize={"14px"} fontWeight={"bold"}>
                            Current Budget
                          </Typography>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={1}
                          >
                            <Stack>
                              <Typography
                                sx={{ fontSize: "13px", color: "#9d86fc" }}
                              >
                                INR
                              </Typography>
                            </Stack>

                            <Typography
                              sx={{ fontSize: "38px", fontWeight: 700 }}
                            >
                              0
                            </Typography>
                          </Stack>
                          <Typography fontSize={"11px"} color={"grey"}>
                            INR 0 Cashed Out
                          </Typography>
                        </Stack>
                        <Box>
                          <img
                            src={money}
                            alt=""
                            style={{ width: "42px", height: "42px" }}
                          />
                        </Box>
                      </Stack>
                    </Stack>
                    <Stack>
                      {selected === 1 && <Reacttable data={data1} />}
                      {selected === 2 && <Reacttable data={data2} />}
                      {selected === 3 && <TransactionPage />}
                    </Stack>
                  </Stack>
                )}
                {activebtn === 3 && (
                  <Stack gap={4}>
                    <Stack direction={"row"} gap={2}>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        sx={{
                          backgroundColor: "#F8F8FF",
                          width: "251px",
                          height: "135px",
                          borderRadius: "18px",
                          border:
                            selectedcast === 1
                              ? "2px solid #603AFA"
                              : "2px solid #E2DBFB",
                          p: 2,
                        }}
                        onClick={() => handlebtnClickcast(1)}
                      >
                        <Stack gap={2}>
                          <Typography fontSize={"14px"} fontWeight={"bold"}>
                            CHANGE REQUESTS
                          </Typography>
                          <Typography fontSize={"11px"} fontWeight={"bold"}>
                            --
                          </Typography>
                          <Typography fontSize={"11px"} fontWeight={"bold"}>
                            -- In admin Review
                          </Typography>
                        </Stack>
                        <Box>
                          <img
                            src={note}
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Box>
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        sx={{
                          backgroundColor: "#F8F8FF",
                          width: "251px",
                          height: "135px",
                          borderRadius: "18px",
                          border:
                            selectedcast === 2
                              ? "2px solid #603AFA"
                              : "2px solid #E2DBFB",
                          p: 2,
                        }}
                        onClick={() => handlebtnClickcast(2)}
                      >
                        <Stack gap={2}>
                          <Typography fontSize={"14px"} fontWeight={"bold"}>
                            ACTIVE CASTING CALLS
                          </Typography>
                          <Typography fontSize={"11px"} fontWeight={"bold"}>
                            --
                          </Typography>
                          <Typography fontSize={"11px"} fontWeight={"bold"}>
                            -- In Draft Mode
                          </Typography>
                        </Stack>
                        <Box>
                          <img
                            src={phone}
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Box>
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        sx={{
                          backgroundColor: "#F8F8FF",
                          width: "251px",
                          height: "135px",
                          borderRadius: "18px",
                          border:
                            selectedcast === 3
                              ? "2px solid #603AFA"
                              : "2px solid #E2DBFB",
                          p: 2,
                        }}
                        onClick={() => handlebtnClickcast(3)}
                      >
                        <Stack gap={2}>
                          <Typography fontSize={"14px"} fontWeight={"bold"}>
                            OUTSTANDING PITCHES
                          </Typography>
                          <Typography fontSize={"11px"} fontWeight={"bold"}>
                            --
                          </Typography>
                          <Typography fontSize={"11px"} color={"grey"}>
                            Working with -- Creators
                          </Typography>
                        </Stack>
                        <Box>
                          <img
                            src={fig}
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Box>
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        sx={{
                          backgroundColor: "#F8F8FF",
                          width: "251px",
                          height: "135px",
                          borderRadius: "18px",
                          border:
                            selectedcast === 4
                              ? "2px solid #603AFA"
                              : "2px solid #E2DBFB",
                          p: 2,
                        }}
                        onClick={() => handlebtnClickcast(4)}
                      >
                        <Stack gap={0.8}>
                          <Typography fontSize={"14px"} fontWeight={"bold"}>
                            DEPOSITED MONEY
                          </Typography>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={1}
                          >
                            <Stack>
                              <Typography
                                sx={{ fontSize: "13px", color: "#9d86fc" }}
                              >
                                INR
                              </Typography>
                            </Stack>

                            <Typography
                              sx={{ fontSize: "38px", fontWeight: 700 }}
                            >
                              0
                            </Typography>
                          </Stack>
                          <Typography fontSize={"11px"} color={"grey"}>
                            Between -- Casting Calls
                          </Typography>
                        </Stack>
                        <Box>
                          <img
                            src={dep}
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Box>
                      </Stack>
                    </Stack>
                    <Stack>
                      {selectedcast === 1 && (
                        <ReactTable2 data={data3} condition="value3" />
                      )}
                      {selectedcast === 2 && (
                        <ReactTable2 data={data3} condition="value4" />
                      )}
                      {selectedcast === 3 && ( 
                        <ReactTable2 data={data3} condition="value5" />
                      )}
                      {selectedcast === 4 && (
                        <TransactionPage/>
                      )}
                    </Stack>
                  </Stack>
                )}
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              {activebtn === 1 && (
                <>
                  <Stack>
                    <Typography
                      fontWeight={"bold"}
                      fontSize={"18px"}
                      pt={4.5}
                      pl={6}
                      variant="h5"
                    >
                      Casting Calls You Might Be Interested In
                    </Typography>
                  </Stack>
                  <Box p={4}>
                    <WhiteBtn>View All</WhiteBtn>
                  </Box>
                </>
              )}
            </Stack>

            {activebtn === 1 ? <ListingCards /> : ""}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;
