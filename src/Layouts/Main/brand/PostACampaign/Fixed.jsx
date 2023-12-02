import {
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteSweepSharp";

const Fixed = ({
  formData,
  formErrors,
  setFormData,
  setFormErrors,
  handleChangess,
}) => {
  const [cards, setCards] = useState([
    { id: 1, content: "", days: "", payout: "" },
    { id: 2, content: "", days: "", payout: "" },
  ]);
  const [nextId, setNextId] = useState(3);

  const handleAddCard = () => {
     if (cards.length >= 6) {
       alert("You can't add more than 6 cards.");
       return;
     }
     const newCard={ id: nextId, content: "", days: "", payout: "" }
    setCards([...cards, newCard ]);
    setNextId(nextId + 1);
  };

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  // const handleInputChange = (id, field, value) => {
  //   const updatedCards = cards.map((card) =>
  //     card.id === id ? { ...card, [field]: value } : card
  //   );
  //   setCards(updatedCards);
  // };

  const handleInputChange = (id, field, value) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, [field]: value } : card
    );

    setCards(updatedCards);

    // Extract milestone data from the cards and update formData
    const milestoneData = updatedCards.map((card) => ({
      milestone_deliver: card.content,
      milestone_payout: card.payout,
      milestone_Days: card.days,
    }));

    setFormData((prevData) => ({
      ...prevData,
      milestone: {
        milestone_deliver: milestoneData.map(
          (milestone) => milestone.milestone_deliver
        ),
        milestone_payout: milestoneData.map(
          (milestone) => milestone.milestone_payout
        ),
        milestone_Days:milestoneData.map(
          (milestone) => milestone.milestone_Days
        ),
      },
    }));
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
          Cash Payout*
        </Typography>
        <Stack direction={"row"} gap={3}>
          <select
            className="form-control"
            style={{ width: "20%" }}
            name="max_payout_from"
            value={formData.max_payout_from}
            onChange={handleChangess}
          >
            <option value="">Select Payout type</option>
            <option value="1">INR</option>
            <option value="2">USD</option>
          </select>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <input
              className="form-control"
              type="number"
              id="max_payout"
              placeholder="Type number of influencers required"
              name="max_payout"
              value={formData.max_payout}
              onChange={handleChangess}
            />
          </Stack>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Typography>Per Influencer</Typography>
          </Stack>
        </Stack>
        <Stack>
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
              <Stack direction="row" gap={10} pl={1}>
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
                <Stack direction="row" gap={7}>
                  <Typography fontSize="15px" fontWeight="bold">
                    Cash Payout*
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={3}>
                <Stack direction="row" gap={4}>
                  <input
                    style={{ width: "210px" }}
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
                    style={{ width: "155px" }}
                    className="form-control"
                    type="number"
                    id="numberinfluencer"
                    placeholder="Days in deliver"
                    name="promotionGoals"
                    onChange={(e) =>
                      handleInputChange(card.id, "days", e.target.value)
                    }
                  />
                  <input
                    style={{ width: "120px" }}
                    className="form-control"
                    type="number"
                    id="numberinfluencer"
                    placeholder="Days in deliver"
                    name="promotionGoals"
                    onChange={(e) =>
                      handleInputChange(card.id, "payout", e.target.value)
                    }
                  />
                </Stack>
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
                stroke-width="1.03469"
              />
              <path
                d="M7.99973 12.0022H16.0042"
                stroke="#886AFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.002 16.0044V8"
                stroke="#886AFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
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

export default Fixed;
