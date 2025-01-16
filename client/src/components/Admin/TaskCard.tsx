import React from "react";
import Status from "../Admin/Status";
import { Typography } from "@mui/material";

interface TaskProps {
  task: string; 
  description: string; 
  points: number; 
  users: string[]; 
  verifiedStatus: string; 
  markedCompleted: string | Date | null; 
  verified: string | Date | null;
  date: Date;
}

const TaskCard: React.FC<TaskProps> = ({ task, points, verifiedStatus, date, users, markedCompleted, verified }) => {
  const formatDate = (date: string | Date | null) => {
    if (!date) return "-";
    const parsedDate = typeof date === "string" ? new Date(date) : date;
    return parsedDate.toLocaleDateString();
  };

  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <div style={styles.header}>
          <Typography style={styles.subtitle}>Participant(s): {users.join(", ")}</Typography>
          <span style={styles.points}>{points} Points</span>
        </div>
        <Typography style={styles.title}>{task}</Typography>
        <div style={styles.description}>
          <Typography style={styles.subtitle}>
          Created: {date.toLocaleDateString()}
          </Typography>
          <Typography style={styles.subtitle}>
          Marked Completed: {formatDate(markedCompleted)}
          </Typography>
          <Typography style={styles.subtitle}>
          Verified: {formatDate(verified)}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Status status={verifiedStatus}></Status>
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
    alignItems: "center",
    flex: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    flex: 1,
  },
  description: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    color: "#777",
  },
  points: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#5E5E5E",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    fontSize: "15px",
  },
};

export default TaskCard;
