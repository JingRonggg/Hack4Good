import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { Typography } from "@mui/material";

const LogoutButton = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <FaSignOutAlt style={styles.icon} />
        <Typography style={styles.text}>Log Out</Typography>
      </div>
      <AiOutlineRight style={styles.arrow} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    marginTop: "30px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    fontSize: "18px",
  },
  text: {
    fontSize: "15px",
  },
  arrow: {
    fontSize: "16px",
  },
};

export default LogoutButton;
