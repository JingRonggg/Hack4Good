import React from "react";
import { Typography } from "@mui/material";
import { FaStore, FaTrophy } from "react-icons/fa";

interface Transaction {
  _id: string;
  item: string;
  status: "approved" | "pending" | "declined";
  username: string;
  points: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const HistoryCard = ({ transaction }: { transaction: Transaction }) => {
  const isTask = transaction.points >= 1;

  if (isTask) {
    return (
      <div style={styles.card}>
        <div style={styles.header}>
          <FaTrophy style={styles.icon} />
          {/* <img src={Trophy} style={styles.icon} /> */}
          <div style={styles.separator}>
            <div style={styles.content}>
              <Typography style={styles.title}>Task Completed</Typography>
              <Typography style={styles.subtitle}>{transaction.item}</Typography>
            </div>
          </div>
        </div>
        <Typography style={styles.gainpoints}>+{transaction.points}</Typography>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <FaStore style={styles.icon} />
        {/* <img src={Purchase} style={styles.icon} /> */}
        <div style={styles.separator}>
          <div style={styles.content}>
            <Typography style={styles.title}>Purchase</Typography>
            <Typography style={styles.subtitle}>{transaction.item}</Typography>
          </div>
        </div>
      </div>
      <Typography style={styles.losepoints}>{transaction.points}</Typography>
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