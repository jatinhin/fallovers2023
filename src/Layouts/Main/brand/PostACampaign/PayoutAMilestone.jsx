import { FormControl, FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import React from 'react'
import Fixed from "./Fixed";
import Barter from "./Barter";
import MileStone from "./MileStone";
const PayoutAMilestone = ({
  selectedOption,
  formErrors,
  formData,
  barterError,
  handleRadioChange,
  setFormErrors,
  setFormData,
}) => {
    const handleChangess = (e) => {
      const { name, number, value } = e.target;
      setFormErrors({
        ...formErrors,
        [name]: "",
        [number]: "",
      });
      setFormData({ ...formData, [name]: value, [number]: value });
    };
  return (
    <Stack>
      <Stack>
        <FormControl component="fieldset">
          <RadioGroup
            name="radio-buttons-group"
            value={selectedOption}
            onChange={handleRadioChange}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControlLabel
              sx={{ width: "15%" }}
              value="option1"
              control={<Radio />}
              label="Barter"
            />
            <FormControlLabel
              sx={{ width: "15%" }}
              value="option2"
              control={<Radio />}
              label="Fixed"
            />
            <FormControlLabel
              sx={{ width: "15%" }}
              value="option3"
              control={<Radio />}
              label="Milestone"
            />
          </RadioGroup>
        </FormControl>
        {formErrors.payout_type && (
          <div className="alert-error" style={{ color: "red" }}>
            {formErrors.payout_type}
          </div>
        )}
        {selectedOption === "option1" && (
          <Barter
            handleChangess={handleChangess}
            formData={formData}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            setFormData={setFormData}
          />
        )}

        {selectedOption === "option2" && (
          <Fixed
            handleChangess={handleChangess}
            formData={formData}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            setFormData={setFormData}
          />
        )}

        {selectedOption === "option3" && (
          <MileStone
            handleChangess={handleChangess}
            formData={formData}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            setFormData={setFormData}
          />
        )}
      </Stack>
      {barterError && <div style={{ color: "red" }}>{barterError}</div>}
    </Stack>
  );
};

export default PayoutAMilestone