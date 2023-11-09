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
            id="promotionGoals"
            placeholder="Promotion Goals"
            name="promotionGoals"
            value={formData.promotionGoals}
            onChange={handleChange}
          />
          <div className="alert-error" style={{ color: "red" }}>
            {formErrors.promotionGoals}
          </div>
          <textarea
            className="form-control"
            style={{
              height: "100%",
              padding: "10px",
            }}
            name="campaignBrief"
            rows="10"
            cols="50"
            value={formData.campaignBrief}
            onChange={handleChange}
            placeholder="Campaign Brief* 1246 characters remaining"
          ></textarea>
          <div className="alert-error" style={{ color: "red" }}>
            {formErrors.campaignBrief}
          </div>
          <Adduptoattachment />
        </Stack>
        <InformationRequests />
      </Stack>
  );
};

export default Requirement;
