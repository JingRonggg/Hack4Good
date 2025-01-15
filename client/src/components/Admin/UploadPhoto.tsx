import React from "react";
import { Box } from "@mui/material";

const UploadPhoto: React.FC = () => {

  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        border: "2px solid #",
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
      <text style={{ fontSize: 30, color: "#000" }} /> + <text/>
      <text style={{ fontSize: 30, color: "#000" }} /> Upload Product Photo <text/>
      <input
        id="file-input"
        type="file"
        style={{ display: "none" }}
        accept="image/*"
      />
    </Box>
  );
};

export default UploadPhoto;
