import React from "react";
import icon from "../../assets/Avatar.jpg";
import { Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

const TaskCard = () => {
  const { account } = useAuth();

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={icon} alt="User Avatar" style={styles.icon} />
        <div style={styles.content}>
          <Typography style={styles.title}>
            {account?.username || "Guest"}
          </Typography>
          <Typography style={styles.subtitle}>
            Role: {account?.role || "Role not found"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "column",
    backgroundColor: "#fff",
  },
  content: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
    padding: "5",
  },
  subtitle: {
    fontSize: "15px",
    color: "#777",
    gap: "10px",
  },
  icon: {
    width: "40",
    height: "40",
    marginRight: "10px",
  },
};

export default TaskCard;
