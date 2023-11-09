import { Paper, Box, Stack, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteSweepSharp";

const Barter = ({
  formData,
  formErrors,
  setFormData,
  setFormErrors,
  handleChangess,
}) => {
  const [cards, setCards] = useState([
    { id: 1, content: "", days: "" },
    { id: 2, content: "", days: "" },
  ]);
  const [nextId, setNextId] = useState(3);

  const handleAddCard = () => {
    if (cards.length >= 6) {
      alert("You can't add more than 6 cards.");
      return;
    }
    const newCard = { id: nextId, content: "", days: "" };
    setCards([...cards, newCard]);
    setNextId(nextId + 1);
  };

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const handleInputChange = (id, field, value) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, [field]: value } : card
    );

    setCards(updatedCards);
  };

  return (
    <Paper
      elevation={3}
      style={{
        marginTop: "16px",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Stack gap={2}>
        <Typography fontSize={"13px"} fontWeight={"bold"}>
          Product Information
        </Typography>

        <Stack>
          <input
            className="form-control"
            style={{ width: "90%" }}
            type="text"
            id="payout_product"
            placeholder="Add Product (Link press enter to add another link)"
            value={formData.payout_product}
            name="payout_product"
            onChange={handleChangess}
          />
          <div className="alert-error" style={{ color: "red" }}>
            {formErrors.payout_product}
          </div>
          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            width={"576px"}
          >
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography
                fontWeight={"bold"}
                fontSize={"16px"}
                color={"#555555"}
              >
                Product Per Influencer
              </Typography>
            </Stack>
            <input
              className="form-control"
              style={{ width: "50%" }}
              type="number"
              id="payout_influencer"
              placeholder="payout_influencer"
              name="payout_influencer"
              value={formData.payout_influencer}
              onChange={handleChangess}
            />
          </Stack>
        </Stack>
        <Stack
          sx={{
            content: "''",
            width: "588px",
            height: "1px",
            bgcolor: "lightgrey",
          }}
        ></Stack>
        <Stack gap={"11px"}>
          <Typography fontSize={"15px"} fontWeight={"bold"}>
            Create Milestone
          </Typography>
          <Typography fontSize={"15px"} color={"#2D2D2D"}>
            Add or edit upto 6 milestones to your campaign and pay in
            instalments as each milestone is complete.
          </Typography>
        </Stack>
        <Stack gap={2}>
          {cards.map((card) => (
            <Stack gap={1} key={card.id}>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                width={"450px"}
                pl={1}
              >
                <Box>
                  <Typography fontSize="15px" fontWeight="bold">
                    Milestone Description*
                  </Typography>
                </Box>
                <Stack direction="row" gap={7}>
                  <Typography fontSize="15px" fontWeight="bold">
                    Time To Deliver*
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" gap={10}>
                <input
                  style={{ width: "239px" }}
                  className="form-control"
                  type="text"
                  id="campaign-name"
                  placeholder="Milestone Description"
                  name="campaign-name"
                  value={card.content}
                  onChange={(e) =>
                    handleInputChange(card.id, "content", e.target.value)
                  }
                />

                <input
                  style={{ width: "150px" }}
                  className="form-control"
                  type="number"
                  id="numberinfluencer"
                  placeholder="Days in deliver"
                  name="promotionGoals"
                  onChange={(e) =>
                    handleInputChange(card.id, "days", e.target.value)
                  }
                />

                {/* <div className="alert-error" style={{ color: "red" }}>
                  {formErrors.campaign_social_media_id}
                </div> */}
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Stack
                    sx={{
                      color: "#ec2b2b",
                      border: "2px solid #f59595",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      p: 0.5,
                      cursor: "pointer",
                    }}
                    onClick={() => handleDeleteCard(card.id)}
                  >
                    <DeleteForeverRoundedIcon />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ))}
          <Stack
            onClick={handleAddCard}
            direction={"row"}
            gap={1}
            pt={2}
            sx={{
              cursor: "pointer",
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.517344"
                y="0.517344"
                width="23.3751"
                height="23.3751"
                rx="11.6876"
                fill="#F8F8FF"
                stroke="#C4B6FF"
                strokeWidth="1.03469"
              />
              <path
                d="M7.99973 12.0022H16.0042"
                stroke="#886AFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.002 16.0044V8"
                stroke="#886AFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Stack justifyContent={"center"}>
              <Typography
                color={"#603AFA"}
                fontSize={"14px"}
                fontWeight={"bold"}
              >
                Create Additional Milestone
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Barter