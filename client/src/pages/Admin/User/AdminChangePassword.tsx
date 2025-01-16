import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Button, TextField, Avatar, Typography } from "@mui/material";

const AdminChangePasswordPage: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/update-user");
  }

  return (
    <div style={{ width: "90%", margin: "0 auto", paddingBottom: "70px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <AiOutlineLeft
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={handleClick}
        />
        <h1 style={{ margin: "0", flexGrow: 1, textAlign: "center" }}>
          Change Password
        </h1>
      </div>
      <Typography
        style={{
          fontSize: "20px",
          color: "#5E5E5E",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Changing password for
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        <Avatar
          style={{
            width: "50px",
            height: "50px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        ></Avatar>
        <Typography style={{ fontWeight: "bold", fontSize: "25px" }}>
          Jasper
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <TextField
          id="new-password"
          label="New Password"
          multiline
          rows={1}
          defaultValue="password123"
          style={{ width: "100%" }}
        />
        <TextField
          id="confirmation"
          label="Re-enter New Password"
          multiline
          rows={1}
          defaultValue="password123"
          style={{ width: "100%" }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "100px",
          left: "50%",
          width: "90%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            width: "100%",
          }}
        >
          Update Password
        </Button>
      </div>
    </div>
  );
};

export default AdminChangePasswordPage;
