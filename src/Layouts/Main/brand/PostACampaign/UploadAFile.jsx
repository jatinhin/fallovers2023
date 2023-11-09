// FileUploader.js
import React, { useState } from "react";
import "./CustomStepper.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { Stack } from "@mui/material";

const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (selectedFiles.length + files.length > 10) {
      alert("You can only add up to 10 files.");
      return;
    }
    setSelectedFiles([...selectedFiles, ...Array.from(files)]);
  };

  const isUploadDisabled = selectedFiles.length >= 10;
  const removeFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };
  return (
    <Stack gap={2}>
      <input
        type="file"
        multiple
        accept=".pdf, .png, .jpg, .jpeg"
        onChange={handleFileChange}
        disabled={isUploadDisabled} // Disable the input when 10 files are selected
      />
      <div className="file-box">
        {selectedFiles.map((file, index) => (
          <div key={index} className="file-item">
            {file.name}
            <CancelIcon
              onClick={() => removeFile(index)}
              style={{ color: "red", top:"0px", right:"0px",margin:"-14px", fontSize: 30, position: "absolute" }}
            />
          </div>
        ))}
      </div>
    </Stack>
  );
};

export default FileUploader;
