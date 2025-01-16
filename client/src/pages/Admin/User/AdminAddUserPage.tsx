import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { Avatar } from "@mui/material";
import axios from "../../../utils/axios";

const AdminAddUserPage: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    navigate("/admin/manage-users");
  }

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/auth/register', {
        username,
        password,
        role,
      });
      console.log('User registered successfully:', response.data);
      navigate("/admin/manage-users");
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

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
          Add User
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%" }}
        />
        <TextField
          id="password"
          label="New Password"
          multiline
          rows={1}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%" }}
        />
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Role"
            value={role}
            onChange={handleChange}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div
        style={{
          margin: "20px 0px",
          width: "100%",
          paddingBottom: "50px",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            fontWeight: "bold",
            width: "100%",
          }}
          onClick={handleSubmit}
        >
          Add User
        </Button>
      </div>
    </div>
  );
};

export default AdminAddUserPage;
