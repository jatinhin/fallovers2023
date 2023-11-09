import { Stack, Typography, TextField, Box } from '@mui/material';
import React, { useState } from 'react'
import FileUploader from './UploadAFile';
 
const InformationRequests = () => {
    // const [fourbutton, setFourbutton] = useState(false);

    // const handlefourClick = (btnno) => {
    //   setFourbutton(btnno);
    // };
    const [textFieldValue, setTextFieldValue] = useState("");

   
    const [fourbutton, setFourbutton] = useState(""); // Initialize with button 1
    const [inputValues, setInputValues] = useState({
      1: "",
      2: "",
      3: { title: "", description: "" },
      4: "",
    });

    const handlefourClick = (btnno) => {
      setFourbutton(btnno);
    };

    const handleTextFieldChange = (event) => {
      const newValue = event.target.value;
      setTextFieldValue(newValue);
      setInputValues({ ...inputValues, [fourbutton]: newValue });
    };

    const handleTitleChange = (event) => {
      const newTitle = event.target.value;
      setInputValues({
        ...inputValues,
        [fourbutton]: { ...inputValues[fourbutton], title: newTitle },
      });
    };

    const handleDescriptionChange = (event) => {
      const newDescription = event.target.value;
      setInputValues({
        ...inputValues,
        [fourbutton]: {
          ...inputValues[fourbutton],
          description: newDescription,
        },
      });
    };
     const fillColor =
       textFieldValue.trim() !== ""
         ? "green"
         : fourbutton === 1
         ? "#603AFA"
         : "#F8F8FF";
     const fillStroke =
       textFieldValue.trim() !== ""
         ? "white"
         : fourbutton === 1
         ? "white"
         : "#886AFF";

  return (
    <Stack gap={2}>
      <Typography fontSize={"22px"} fontWeight={"bold"}>
        Information Requests
      </Typography>
      <Stack direction={"row"} gap={5}>
        <Stack
          direction={"row"}
          gap={1}
          onClick={() => handlefourClick(1)}
          sx={{ cursor: "pointer" }}
        >
          <Stack justifyContent={"center"}>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.397972"
                y="0.747581"
                width="17.9815"
                height="17.9815"
                rx="8.99077"
                fill={fillColor}
                stroke="#C4B6FF"
                strokeWidth="0.795944"
              />
              <path
                d="M6.15392 9.58241H12.3114"
                stroke={fillStroke}
                strokeWidth="1.15389"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.23267 12.6612V6.50366"
                stroke={fillStroke}
                strokeWidth="1.15389"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Stack>
          <Stack justifyContent={"center"} alignItems={"Center"}>
            <Typography
              className="material-icons"
              fontSize={"10px"}
              fontWeight={"bold"}
              color={"#5C5C5C"}
            >
              Add a Note
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          gap={1}
          onClick={() => handlefourClick(2)}
          sx={{ cursor: "pointer" }}
        >
          <Stack justifyContent={"center"}>
            <svg
            W="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.397972"
                y="0.747581"
                width="17.9815"
                height="17.9815"
                rx="8.99077"
                fill={fourbutton === 2 ? "#603AFA" : "#F8F8FF"}
                stroke="#C4B6FF"
                strokeWidth="0.795944"
              />
              <path
                d="M6.15392 9.58241H12.3114"
                stroke={fourbutton === 2 ? "white" : "#886AFF"}
                strokeWidth="1.15389"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.23267 12.6612V6.50366"
                stroke={fourbutton === 2 ? "white" : "#886AFF"}
                strokeWidth="1.15389"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Stack>
          <Stack
            justifyContent={"center"}
            alignItems={"Center"}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              className="material-icons"
              fontSize={"10px"}
              fontWeight={"bold"}
              color={"#5C5C5C"}
            >
              Add a Question
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          gap={1}
          onClick={() => handlefourClick(3)}
          sx={{ cursor: "pointer" }}
        >
          <Stack justifyContent={"center"}>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.397972"
                y="0.747581"
                width="17.9815"
                height="17.9815"
                rx="8.99077"
                fill={fourbutton === 3 ? "#603AFA" : "#F8F8FF"}
                stroke="#C4B6FF"
                strokeWidth="0.795944"
              />
              <path
                d="M6.15392 9.58241H12.3114"
                stroke={fourbutton === 3 ? "white" : "#886AFF"}
                strokeWidth="1.15389"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.23267 12.6612V6.50366"
                stroke={fourbutton === 3 ? "white" : "#886AFF"}
                strokeWidth="1.15389"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Stack>
          <Stack justifyContent={"center"} alignItems={"Center"}>
            <Typography
              className="material-icons"
              fontSize={"10px"}
              fontWeight={"bold"}
              color={"#5C5C5C"}
            >
              Add a Title and Description
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          gap={1}
          onClick={() => handlefourClick(4)}
          sx={{ cursor: "pointer" }}
        >
          <Stack justifyContent={"center"}>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.397972"
                y="0.747581"
                width="17.9815"
                height="17.9815"
                rx="8.99077"
                fill={fourbutton === 4 ? "#603AFA" : "#F8F8FF"}
                stroke="#C4B6FF"
                strokeWidth="0.795944"
              />
              <path
                d="M6.15392 9.58241H12.3114"
                stroke={fourbutton === 4 ? "white" : "#886AFF"}
                strokeWidth="1.15389"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.23267 12.6612V6.50366"
                stroke={fourbutton === 4 ? "white" : "#886AFF"}
                strokeWidth="1.15389"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Stack>
          <Stack justifyContent={"center"} alignItems={"Center"}>
            <Typography
              className="material-icons"
              fontSize={"10px"}
              fontWeight={"bold"}
              color={"#5C5C5C"}
            >
              Upload a File
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack pt={1} gap={4}>
        {fourbutton === 1 && (
          <input
            className="form-control"
            type="text"
            id="Add a Note"
            placeholder="Add a Note"
            name="Add a Note"
            value={inputValues[1]}
            onChange={handleTextFieldChange}
          />
        )}
        {fourbutton === 2 && (
          <input
            className="form-control"
            type="text"
            id="Add One line Question"
            placeholder="Add One line Question"
            name="Add One line Question"
            value={inputValues[2]}
            onChange={handleTextFieldChange}
          />
        )}
        {fourbutton === 3 && (
          <Stack gap={2}>
            <input
              className="form-control"
              type="text"
              id="Title"
              placeholder="Title"
              name="Title"
              value={inputValues[3].title}
              onChange={handleTitleChange}
            />
            <textarea
              className="form-control"
              style={{
                height: "100%",
                padding: "10px",
              }}
              name="Description"
              rows="10"
              cols="50"
              placeholder="Description"
              value={inputValues[3].description}
              onChange={handleDescriptionChange}
            ></textarea>
          </Stack>
        )}
        {fourbutton === 4 && <FileUploader />}
      </Stack>
    </Stack>
  );
}

export default InformationRequests