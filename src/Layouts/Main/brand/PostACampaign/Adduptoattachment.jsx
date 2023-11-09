// import { Box, Stack, Typography } from "@mui/material";
// import React, { useState, useRef } from "react";

// const Adduptoattachment = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [buttonDisabled, setButtonDisabled] = useState(false);

//   const inputRef = useRef(null);

//   const handleImageChange = (e) => {
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files).map((file) =>
//         URL.createObjectURL(file)
//       );

//       if (selectedFiles.length + filesArray.length <= 4) {
//         setSelectedFiles((prevImages) => prevImages.concat(filesArray));
//       } else {
//         alert("You can select a maximum of 4 images.");
//       }
//       if (selectedFiles.length + filesArray.length === 4) {
//         setButtonDisabled(true);
//       }
//       Array.from(e.target.files).forEach(
//         (file) => URL.revokeObjectURL(file) // avoid memory leak
//       );
//     }
//   };

//   const handleButtonClick = () => {
//     // Trigger the hidden input field
//     if (inputRef.current) {
//       inputRef.current.click();
//     }
//   };

//   const renderPhotos = (source) => {
//     return source.map((photo) => (
//       <img
//         src={photo}
//         alt=""
//         key={photo}
//         style={{
//           width: "120px",
//           height: "90px",
//           objectFit: "cover",
//           padding: "0.75rem",
//         }}
//       />
//     ));
//   };

//   return (
//     <Stack direction={"row"} gap={2}>
//       <Box>
//         <input
//           type="file"
//           id="file"
//           multiple
//           onChange={handleImageChange}
//           disabled={buttonDisabled}
//           style={{ display: "none" }}
//           ref={inputRef}
//         />
//         <Box
//           sx={{
//             width: "100%",
//             height: "50px",
//             display: "grid",
//             placeItems: "center",
//           }}
//         >
//           <label htmlFor="file" className="label" onClick={handleButtonClick}>
//             <Stack direction={"row"} gap={2}>
//               <Stack justifyContent={"center"}>
//                 <svg
//                   width="42"
//                   height="42"
//                   viewBox="0 0 42 42"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect
//                     width="42"
//                     height="41.5916"
//                     rx="20.7958"
//                     fill="#DFD7FE"
//                   />
//                   <path
//                     d="M15 21.1259H27"
//                     stroke="#898989"
//                     strokeWidth={1.5} // Use strokeWidth instead of stroke-width
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M21 28.3879V13.8639"
//                     stroke="#898989"
//                     strokeWidth={1.5} // Use strokeWidth instead of stroke-width
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </Stack>
//               <Stack justifyContent={"center"} alignItems={"Center"}>
//                 <Typography
//                   className="material-icons"
//                   fontSize={"18px"}
//                   fontWeight={"bold"}
//                   color={"Lightgrey"}
//                 >
//                   Add up to 4 Attachments
//                 </Typography>
//               </Stack>
//             </Stack>
//           </label>
//         </Box>
//         <Stack
//           direction={"row"}
//           maxHeight={"auto"}
//           width={"100%"}
//           display={"flex"}
//           flexWrap={"wrap"}
//           alignItems={"center"}
//           justifyContent={"left"}
//         >
//           {renderPhotos(selectedFiles)}
//         </Stack>
//       </Box>
//     </Stack>
//   );
// };

// export default Adduptoattachment;

// import React, { useState, useRef } from "react";
// import { Box, Stack, Typography } from "@mui/material";

// const Adduptoattachment = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [buttonDisabled, setButtonDisabled] = useState(false);

//   const fileInputRef = useRef(null);

//   const handleImageChange = (e) => {
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files).map((file) =>
//         URL.createObjectURL(file)
//       );

//       if (selectedFiles.length + filesArray.length <= 4) {
//         setSelectedFiles((prevImages) => prevImages.concat(filesArray));
//       } else {
//         alert("You can select a maximum of 4 images.");
//       }
//       if (selectedFiles.length + filesArray.length === 4) {
//         setButtonDisabled(true);
//       }
//       fileInputRef.current.value = "";
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const updatedImages = [...selectedFiles];
//     updatedImages.splice(index, 1);
//     setSelectedFiles(updatedImages);
//     setButtonDisabled(false);
//   };

//   const renderPhotos = (source) => {
//     return source.map((photo, index) => (
//       <div key={index} style={{ position: "relative" }}>
//         <img
//           src={photo}
//           alt=""
//           style={{
//             width: "120px",
//             height: "90px",
//             objectFit: "cover",
//             padding: "0.75rem",
//           }}
//         />
//         {/* <button
//           onClick={() => handleRemoveImage(index)}
//           className="remove-button"
//         >
//           &#10006;
//         </button> */}
//       </div>
//     ));
//   };

//   return (
//     <Stack direction="row" gap={2}>
//       <Box>
//         <input
//           type="file"
//           id="file"
//           multiple
//           ref={fileInputRef}
//           onChange={handleImageChange}
//           disabled={buttonDisabled}
//         />
//         <Box
//           sx={{
//             width: "100%",
//             height: "50px",
//             display: "grid",
//             placeItems: "center",
//           }}
//         >
//           <label htmlFor="file" className="label">
//             <Stack direction="row" gap={2}>
//               <Stack justifyContent="center">
//                 <svg
//                   width="42"
//                   height="42"
//                   viewBox="0 0 42 42"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect
//                     width="42"
//                     height="41.5916"
//                     rx="20.7958"
//                     fill="#DFD7FE"
//                   />
//                   <path
//                     d="M15 21.1259H27"
//                     stroke="#898989"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M21 28.3879V13.8639"
//                     stroke="#898989"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </Stack>
//               <Stack justifyContent="center" alignItems="center">
//                 <Typography
//                   className="material-icons"
//                   fontSize="18px"
//                   fontWeight="bold"
//                   color="Lightgrey"
//                 >
//                   Add up to 4 Attachments
//                 </Typography>
//               </Stack>
//             </Stack>
//           </label>
//         </Box>
//         <Stack
//           direction="row"
//           maxHeight="auto"
//           width="100%"
//           display="flex"
//           flexWrap="wrap"
//           alignItems="center"
//           justifyContent="left"
//         >
//           {renderPhotos(selectedFiles)}
//         </Stack>
//       </Box>
//     </Stack>
//   );
// };

// export default Adduptoattachment;

import React, { useState, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const Adduptoattachment = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      if (selectedFiles.length + filesArray.length <= 4) {
        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      } else {
        alert("You can select a maximum of 4 images.");
      }
      if (selectedFiles.length + filesArray.length === 4) {
        setButtonDisabled(true);
      }
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedFiles];
    updatedImages.splice(index, 1);
    setSelectedFiles(updatedImages);
    setButtonDisabled(false);
  };

  const renderPhotos = (source) => {
    return source.map((photo, index) => (
      <div key={index} style={{ display: "flex" }}>
        <img
          src={photo}
          alt=""
          style={{
            width: "120px",
            height: "90px",
            objectFit: "cover",
            padding: "0.75rem",
          }}
        />
        <CancelIcon
          onClick={() => handleRemoveImage(index)}
          style={{ color: "red", fontSize: 30, position: "absolute" }}
        />
      </div>
    ));
  };

  const openFileInput = () => {
    // Trigger the file input when the button is clicked
    fileInputRef.current.click();
  };

  return (
    <Stack direction="row" gap={2}>
      <Box>
        {/* Hidden file input */}
        <input
          type="file"
          id="file"
          multiple
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
          disabled={buttonDisabled}
        />
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div onClick={openFileInput} className="label">
            {/* Add up to 4 Attachments button */}
            <Stack direction="row" gap={2}>
              <Stack justifyContent="center">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="42"
                    height="41.5916"
                    rx="20.7958"
                    fill="#DFD7FE"
                  />
                  <path
                    d="M15 21.1259H27"
                    stroke="#898989"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 28.3879V13.8639"
                    stroke="#898989"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Stack>
              <Stack justifyContent="center" alignItems="center">
                <Typography
                  className="material-icons"
                  fontSize="18px"
                  fontWeight="bold"
                  color="Lightgrey"
                >
                  Add up to 4 Attachments
                </Typography>
              </Stack>
            </Stack>
          </div>
        </Box>
        <Stack
          direction="row"
          maxHeight="auto"
          width="100%"
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="left"
        >
          {renderPhotos(selectedFiles)}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Adduptoattachment;
