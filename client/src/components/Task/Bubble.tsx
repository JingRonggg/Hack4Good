import { Typography } from "@mui/material";
import React from "react";
import { FaCoins } from "react-icons/fa";

interface BubbleProps {
  points: number;
}

const Bubble: React.FC<BubbleProps> = ({points}) => {
  return (
    <div style={styles.button}>
      <Typography style={styles.textContainer}>{points} </Typography>
      <div style={{ padding: "5px" }}></div>
      <div style={styles.icon}>
        <FaCoins />
      </div>
    </div>
  );
};

const styles = {
  button: {
    display: "flex",
    backgroundColor: "white",
    color: "black",
    padding: "10px 30px 5px 30px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "bold",
    alignText: "center",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", // Subtle shadow
  },
  icon: {
    fontSize: "20px",
    color: "555",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column" as "column",
  },
};

export default Bubble;
