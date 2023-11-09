import React, { useState } from "react";
import "./Buttons.css"; 
import { Stack } from "@mui/material";

function Buttons() {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (value) => {
    setSelectedButton(value);
    console.log(`API Value: ${value}`);
  };

  return (
    <Stack gap={1.2}>
      <div>
        <input
          className={`button ${
            selectedButton === "View and buy listings" ? "active" : ""
          }`}
          type="button"
          value="View and buy listings"
          onClick={() => handleButtonClick("View and buy listings")}
          required
        />
      </div>
      <div>
        <input
          className={`button ${
            selectedButton === "Post a casting call and have creators pitch you"
              ? "active"
              : ""
          }`}
          type="button"
          value="Post a casting call and have creators pitch you"
          onClick={() =>
            handleButtonClick("Post a casting call and have creators pitch you")
          }
        />
      </div>
    </Stack>
  );
}

export default Buttons;
