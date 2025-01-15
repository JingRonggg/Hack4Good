import React from "react";
import { Typography } from "@mui/material";
import { FaStore, FaTrophy } from "react-icons/fa";

const HistoryCard = () => {
  const isTask = 1;

  if (!isTask) {
    return (
      <div style={styles.card}>
        <div style={styles.header}>
          <FaTrophy style={styles.icon} />
          {/* <img src={Trophy} style={styles.icon} /> */}
          <div style={styles.separator}>
            <div style={styles.content}>
              <Typography style={styles.title}>Task Completed</Typography>
              <Typography style={styles.subtitle}>
                Complete Math Homework
              </Typography>
            </div>
            <Typography style={styles.gainpoints}>+500</Typography>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        {/* <img src={Purchase} style={styles.icon} /> */}
        <FaStore style={styles.icon} />
        <div style={styles.separator}>
          <div style={styles.content}>
            <Typography style={styles.title}>Purchase</Typography>
            <Typography style={styles.subtitle}>Nissin Cup Noodles</Typography>
          </div>
        </div>
      </div>
      <Typography style={styles.losepoints}>-50</Typography>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row" as "row",
    width: "100%",
    borderRadius: "10px",
    padding: "30px",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column" as "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  separator: {
    display: "flex",
    alignItems: "center",
    gap: "550px",
  },
  title: {
    fontSize: "20px",
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
  gainpoints: {
    color: "#039855",
    fontSize: "25px",
    fontWeight: "bold",
  },
  losepoints: {
    color: "#D92D20",
    fontSize: "25px",
    fontWeight: "bold",
  },
};

export default HistoryCard;
