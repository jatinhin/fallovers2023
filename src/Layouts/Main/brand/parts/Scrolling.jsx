// import React from "react";
// import { Box, Stack } from "@mui/material";

// import WhiteBtn from "../utils/WhiteBtn";
// import { useState } from "react";
// import { useRef } from "react";
// import Filter from "../../common/Filter";

// const buttonData = [
//   "Influencer Marketing",
//   "Work for Hire",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
//   "Job Listing",
// ];

// const Scrolling = () => {
//   const [activeTag, setactiveTag] = useState(null);
//   const [moreTag, setmoreTag] = useState(false);
//   const [sortFilter, setsortFilter] = useState(false);
//   const [filterTags, setfilterTags] = useState([]);
//   const compensationFixed = useRef();
//   const compensationNegotiable = useRef();


//   // const getInfluencer = (data) => {
//   //   getListing(data);
//   // };

//   const sortListFilter = () => {
//     //alert('A')
//   };

//   const clearFilter = () => {};
//   return (
//     <Stack direction={"row"} gap={1}>
      
//       <Filter
//         clearFilter={clearFilter}
//         moreTag={moreTag}
//         setmoreTag={setmoreTag}
//         compensationNegotiable={compensationNegotiable}
//         compensationFixed={compensationFixed}
//         activeTag={activeTag}
//         setactiveTag={setactiveTag}
//         // getInfluencer={getInfluencer}
//         setsortFilter={setsortFilter}
//         sortFilter={sortFilter}
//         filterTags={filterTags}
//         sortListFilter={sortListFilter}
//       />
      
//       <Stack
//         direction="row"
//         gap={1.5}
//         sx={{
//           alignItems: "center",
//           whiteSpace: "nowrap",
//           overflowY: "auto",
//           scrollbarWidth: "thin",
//           scrollbarColor: "#ccc #fff",
//           "&::-webkit-scrollbar": {
//             height: "3px", // Adjust width as needed
//           },
//           "&::-webkit-scrollbar-thumb": {
//             background: "#ccc", // Adjust color as needed
//           },
//         }}
//       >
//         <Stack
//           direction="row"
//           gap={2}
//           sx={{
//             whiteSpace: "nowrap",
//             // Prevent line breaks
//           }}
//         >
//           {buttonData.map((label, index) => (
//             <WhiteBtn
//               key={index}
//               sx={{
//                 bgcolor: "white",
//                 border: "1px solid #BFBFBF",
//                 width: "auto",
//                 height: "35px",
//                 borderRadius: "64px",
//                 color: "#767676",
//               }}
//             >
//               {label}
//             </WhiteBtn>
//           ))}
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };

// export default Scrolling;


import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import WhiteBtn from "../utils/WhiteBtn";
import Filter from "../../common/Filter";



const Scrolling = ({ categories }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [moreTag, setMoreTag] = useState(false);
  const [sortFilter, setSortFilter] = useState(false);
if (!Array.isArray(categories)) {
  categories = [];
}
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilter = () => {
    setSelectedTags([]);
  };
  console.log("categ", categories);
  return (
    <Stack direction={"row"} gap={1}>
      <Filter
        clearFilter={clearFilter}
        moreTag={moreTag}
        setMoreTag={setMoreTag}
        activeTag={selectedTags}
        setactiveTag={setSelectedTags}
        setSortFilter={setSortFilter}
        sortFilter={sortFilter}
      />
      <Stack
        direction="row"
        gap={1.5}
        sx={{
          alignItems: "center",
          whiteSpace: "nowrap",
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#ccc #fff",
          "&::-webkit-scrollbar": {
            height: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#ccc",
          },
        }}
      >
        <Stack
          direction="row"
          gap={2}
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          {categories.map((label, index) => (
            <WhiteBtn
              key={index}
              sx={{
                bgcolor: selectedTags.includes(label.tag_title)
                  ? "#4E76C9"
                  : "white",
                border: "1px solid #BFBFBF",
                width: "auto",
                height: "35px",
                borderRadius: "64px",
                color: selectedTags.includes(label.tag_title)
                  ? "white"
                  : "#767676",
              }}
              onClick={() => toggleTag(label.tag_title)}
            >
              {label.tag_title}
            </WhiteBtn>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Scrolling;
