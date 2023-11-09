// import React from "react";
// import Header from "../include/Header";
// import { Stack } from "@mui/material";
// import Footer from "../include/Footer";

// const Faltu = () => {
//   return (
//     <>
//       <Header />
//       <Stack width={"100%"} direction={"row"}>
//         <Stack width={"20%"}></Stack>
//         <Stack width={"50%"}></Stack>
//         <Stack width={"30%"}></Stack>
//       </Stack>
//     </>
//   );
// };

// export default Faltu;
import React, { useEffect, useState } from "react";
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
import Footer from "../include/Footer";
import axios from "axios";

const Faltu = () => {
  const [data, setdata] = useState([]);
  const userDataa = JSON.parse(localStorage.getItem("apiResponseData"));
  const getUserdata = async () => {
    try {
      const response = await axios.post(
        "https://fallovers.com/fallovers-api/api/v1/get-communication-users",
        {
          user_id: userDataa.user_id,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response);
      setdata(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    getUserdata();
  }, []);

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
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  const handleUserClick = (user) => {
    console.log("user", user);
    setSelectedUser(user);
    getUserChatMessages(user.user_id);
  };
  const [inputvalue, setinputvalue] = useState("");
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
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  return (
    <>
      <Header />
      <Stack width={"100%"} direction={"row"}>
        <Stack
          width={"20%"}
          bgcolor="rgba(255, 255, 255, 0.5)"
          border={"1px solid #DFD7FE "}
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
                  sx={{ borderBottom: "1px solid #DFD7FE" }}
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
                    ></Box>
                    <Stack>
                      <ListItemText>
                        <Typography fontWeight={"bold"} color={"black"}>
                          {user.user_name}
                        </Typography>
                      </ListItemText>
                      <Typography>{user.last}</Typography>
                    </Stack>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </div>
        </Stack>
        <Stack
          width={"50%"}
          borderRight={"1px solid #DFD7FE"}
          justifyContent={"flex-end"}
        >
          {selectedUser && (
            <div>
              {chatMessages.map((message) => (
                <Typography>{message.user_name}</Typography>
                // <div key={message.id}>
                //   {message.type === "incoming" ? (
                //     <OutgoingMessage message={message.text} />
                //   ) : (
                //     <IncomingMessage message={message.text} />
                //   )}
                // </div>
              ))}
            </div>
          )}
          <Stack p={2}>
            <form action="" onSubmit={handleSendMessage}>
              <input
                type="text"
                style={{ padding: "5px" }}
                onChange={(e) => setinputvalue(e.target.value)}
                value={inputvalue}
              />
              <button type="submit">send</button>
            </form>
          </Stack>
        </Stack>
        <Stack width={"30%"}></Stack>
      </Stack>
    </>
  );
};
const IncomingMessage = ({ message }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        backgroundColor: "#E1FFC7",
        padding: "10px",
        margin: "5px",
        maxWidth: "fit-content",
        borderRadius: "10px",
      }}
    >
      {message}
    </Paper>
  );
};

const OutgoingMessage = ({ message }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        backgroundColor: "#DCF8C6",
        padding: "10px",
        margin: "5px",
        maxWidth: "fit-content",
        borderRadius: "10px",
        marginLeft: "auto",
      }}
    >
      {message}
    </Paper>
  );
};
export default Faltu;
