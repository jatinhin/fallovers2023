import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const ButtonGroup = ({ onCategorySelect }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    { name: "I'm a buyer, brand, or agency" },
    { name: "I'm an influencer or creator" },
  ];
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName)
    // Call the callback to inform the parent component of the category selection
    onCategorySelect(buttonName);
  };
  return (
    <Stack gap={1.5}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          sx={{
            border:
              selectedButton === button.name
                ? `1px solid #603AFA`
                : `1px solid #DFD7FE`,
            bgcolor: "#F8F8FF",
            fontSize:"10px",
            color: "grey",
            width: 320,
            height: 40,
            borderRadius: "16px",
            "&:hover": {},
          }}
          onClick={() => handleButtonClick(button.name)}
        >
          {button.name}
        </Button>
      ))}
    </Stack>
  );
};

export default ButtonGroup;
