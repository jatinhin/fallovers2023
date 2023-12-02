import { Stack } from "@mui/material";
import React from "react";
import Adduptoattachment from "./Adduptoattachment";
import InformationRequests from "./InformationRequests";

const Requirement = ({
  formData,
  formErrors,
  handleChange,
}) => {
  return (
    <Stack gap={2}>
      <Stack>
        <input
          className="form-control"
          type="text"
          id="goal"
          placeholder="goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
        />
        <div className="alert-error" style={{ color: "red" }}>
          {formErrors.goal}
        </div>
        <textarea
          className="form-control"
          style={{
            height: "100%",
            padding: "10px",
          }}
          name="brief_description"
          rows="10"
          cols="50"
          value={formData.brief_description}
          onChange={handleChange}
          placeholder="Campaign Brief* 1246 characters remaining"
        ></textarea>
        <div className="alert-error" style={{ color: "red" }}>
          {formErrors.brief_description}
        </div>
        <Adduptoattachment />
      </Stack>
      <InformationRequests />
    </Stack>
  );
};

export default Requirement;
