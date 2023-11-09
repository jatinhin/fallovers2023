// import React, { useState } from "react";
// import { Box, Button, Stack, Typography } from "@mui/material";
// import { Card1 } from "../DummyData";
// const ListingCards = () => {
//   const [slide, setslide] = useState(0);
// //   const [HoverIndex, setHoverIndex] = useState(-1);

// //   const handelHover = (index) => {
// //     setHoverIndex(index);
// //   };
//   const NextSlide = () => {
//     setslide((prevPosition) => prevPosition - 1);
//   };
//   const PrevSlide = () => {
//     setslide((prevPosition) => prevPosition + 1);
//   };
//   return (
//     <Stack direction={"row"}>
//       <Button onClick={NextSlide}>Prev</Button>
//       <Stack
//         direction={"row"}
//         alignItems={"center"}
//         gap={2}
//         sx={{
//           transform: `translateX(-${slide * 500}px)`,
//           transition: "all 0.5 ease-in-out",
//           overflowX: "hidden",
//         }}
//       >
//         {Card1.map((index) => (

//             <Stack
//               bgcolor={"aliceblue"}
//               width={"150px"}
//               height={"250px"}
//             ></Stack>
//         ))}
//       </Stack>
//       <Button onClick={PrevSlide}>Next</Button>
//     </Stack>
//   );
// };

// export default ListingCards;
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card1 } from "../DummyData";
const ListingCards = () => {
  const navigate = useNavigate();
  const handlecardClick = () => {
    window.scrollTo(0, 0);
    navigate("/brand/marketplace");
  };
  return (
    <Stack direction={"row"} overflow={"hidden"} ml={6}>
      <Stack direction={"row"} gap={2} onClick={handlecardClick}>
        {Card1.map(() => (
          <Stack
            bgcolor={"aliceblue"}
            width={"150px"}
            height={"250px"}
            borderRadius={"15px"}
          ></Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ListingCards;
