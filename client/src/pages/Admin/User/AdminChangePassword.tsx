import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router";
import { Button, TextField, Avatar, Typography } from "@mui/material";
import axios from "../../../utils/axios"; // Assuming axios is in utils folder
import { Account } from "../../../@types";

const AdminChangePasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const account = location.state?.account as Account;

  // State for passwords
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleBack() {
    navigate("/admin/manage-users");
  }
  function handleClick() {
    navigate("/admin/update-user", { state: { account } });
  }

  async function handleUpdatePassword() {
    if (!newPassword || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    setLoading(true);

    try {
      await axios.put(`/account/${account.username}`, {
        password: newPassword,
      });

      alert("Password updated successfully!");
      handleBack();
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Failed to update password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ width: "90%", margin: "0 auto", paddingBottom: "70px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <AiOutlineLeft style={{ marginRight: "10px", cursor: "pointer" }} onClick={handleClick} />
        <h1 style={{ margin: "0", flexGrow: 1, textAlign: "center" }}>Change Password</h1>
      </div>

      <Typography style={{ fontSize: "20px", color: "#5E5E5E", marginBottom: "10px", fontWeight: "bold" }}>
        Changing password for
      </Typography>

      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "10px" }}>
        <Avatar style={{ width: "50px", height: "50px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }} />
        <Typography style={{ fontWeight: "bold", fontSize: "25px" }}>{account?.username || "User"}</Typography>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
        <TextField
          id="new-password"
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ width: "100%" }}
        />
        <TextField
          id="confirmation"
          label="Re-enter New Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ position: "fixed", bottom: "100px", left: "50%", width: "90%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", gap: "10px" }}>
        <Button
          variant="contained"
          onClick={handleUpdatePassword}
          disabled={loading}
          style={{ backgroundColor: "#000", color: "#fff", fontWeight: "bold", textTransform: "none", width: "100%" }}
        >
          {loading ? "Updating..." : "Update Password"}
        </Button>
      </div>
    </div>
  );
};

export default AdminChangePasswordPage;
