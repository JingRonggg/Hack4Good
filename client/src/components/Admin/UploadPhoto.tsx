import React from "react";
import { Box, Typography } from "@mui/material";

const UploadPhoto: React.FC = () => {
  // const [file, setFile] = useState();

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
      <Typography style={{ fontSize: 30, color: "#000" }}> + </Typography>
      <Typography style={{ fontSize: 30, color: "#000" }}>
        {" "}
        Upload Product Photo{" "}
      </Typography>
      <input
        id="file-input"
        type="file"
        style={{ display: "none" }}
        // onClick={(e) => setFile(e.target.files[0])}
        accept="image/*"
      />
    </Box>
  );
};

export default UploadPhoto;
