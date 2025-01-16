import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Button, TextField, Avatar } from "@mui/material";

const AdminUpdateTasksPage: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/manage-users");
  }

  function changePassword() {
    navigate("/admin/change-password");
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
          Update User
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Avatar
          style={{
            width: "100px",
            height: "100px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        ></Avatar>
        <Button
          variant="text"
          style={{
            color: "#5E5E5E",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Change Photo
        </Button>
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
          id="name"
          label="Name"
          multiline
          rows={1}
          defaultValue="Jasper"
          style={{ width: "100%" }}
        />
        <TextField
          id="mobile-number"
          label="Mobile Number"
          multiline
          rows={1}
          defaultValue="9123 4567"
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
          variant="outlined"
          style={{
            color: "red",
            borderColor: "red",
            fontWeight: "bold",
            textTransform: "none",
            width: "100%",
          }}
        >
          Delete User
        </Button>
        <Button
          variant="outlined"
          style={{
            color: "#000",
            borderColor: "#000",
            fontWeight: "bold",
            textTransform: "none",
            width: "100%",
          }}
          onClick={changePassword}
        >
          Reset Password
        </Button>
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
          Update User
        </Button>
      </div>
    </div>
  );
};

export default AdminUpdateTasksPage;
