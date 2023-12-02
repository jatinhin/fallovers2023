import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const PrivatePublic = ({ onTypeChange, formErrors }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedType(newSelectedOption);

    // Convert the selectedOption to the corresponding type (0 for public, 1 for private)
    const type = newSelectedOption === "option1" ? 0 : 1;

    // Call the onTypeChange callback to update the type in the parent component
    onTypeChange(type);
  };

  return (
    <>
      <Stack direction={"row"} gap={5}>
        <Stack>
          <Stack direction={"row"} gap={1}>
            <input
              type="radio"
              id="option1"
              name="radioOption"
              value="option1"
              checked={selectedType === "option1"}
              onChange={handleOptionChange}
            />
            <Stack justifyContent={"center"} gap={1}>
              <label
                htmlFor="option1"
                style={{ paddingTop: "4px", fontWeight: "bold" }}
              >
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
              checked={selectedType === "option2"}
              onChange={handleOptionChange}
            />
            <Stack justifyContent={"center"}>
              <label
                htmlFor="option2"
                style={{ paddingTop: "4px", fontWeight: "bold" }}
              >
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
      <div className="alert-error" style={{ color: "red" }}>
        {formErrors && formErrors.type}
      </div>
    </>
  );
};

export default PrivatePublic;
