import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const PrivatePublic = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Stack direction={"row"} gap={5}>
      <Stack>
        <Stack direction={"row"} gap={1}>
          <input
            type="radio"
            id="option1"
            name="radioOption"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          <Stack justifyContent={"center"} gap={1}>
            <label htmlFor="option1" style={{ paddingTop: "4px", fontWeight:"bold" }}>
              Public
            </label>
          </Stack>
        </Stack>
        <Box width={"199px"}>
          <Typography pl={"20px"}>
            public campaigns get more visibility and more bidding on platform.
          </Typography>
        </Box>
      </Stack>
      <Stack>
        <Stack direction={"row"} gap={1}>
          <input
            type="radio"
            id="option2"
            name="radioOption"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          <Stack justifyContent={"center"}>
            <label htmlFor="option2" style={{ paddingTop: "4px", fontWeight:"bold" }}>
              Private
            </label>
          </Stack>
        </Stack>
        <Box width={"199px"}>
          <Typography pl={"20px"}>
            public campaigns get more visibility and more bidding on platform.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default PrivatePublic;
