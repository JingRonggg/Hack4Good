import React from "react";
import { Box, Typography } from "@mui/material";

interface UploadPhotoProps {
  onFileChange: (file: File | null) => void;
}

const UploadPhoto: React.FC<UploadPhotoProps> = ({ onFileChange }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0E0E0",
        cursor: "pointer",
        position: "relative",
        textAlign: "center",
      }}
      onClick={() => document.getElementById("file-input")?.click()}
    >
      <Typography style={{ fontSize: 30, color: "#000" }}>+</Typography>
      <Typography style={{ fontSize: 30, color: "#000" }}>
        Upload Product Photo
      </Typography>
      <input
        id="file-input"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/*"
      />
    </Box>
  );
};

export default UploadPhoto;
