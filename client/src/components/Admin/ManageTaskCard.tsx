import React from "react";
import Pencil from "../../assets/Pencil.png";
import { useNavigate } from "react-router";

interface TaskProps {
  task: string; 
  description: string; 
  points: number; 
  users: string[]; 
  status: string; 
  markedCompleted: Date; 
  verified: Date;
  date: Date;
}

const TaskCard: React.FC<TaskProps> = ({ task, points, date }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/edit-tasks");
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <p style={styles.description}>Created on {date.toLocaleDateString()}</p>
        <img style={styles.icon} src={Pencil} onClick={handleClick}></img>
      </div>
      <h2 style={styles.title}>{task}</h2>
      <div style={styles.reward}>
        <span>+{points} points</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #DDDDDD",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#fff",
    width: "100%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    cursor: "pointer",
    width: "15px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "8px 0",
  },
  description: {
    fontSize: "14px",
    color: "#757575",
    margin: "8px 0",
  },
  reward: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#EBEBEB",
    borderRadius: "8px",
    padding: "4px 8px",
    fontWeight: "bold",
    fontSize: "14px",
    width: "fit-content",
  },
};

export default TaskCard;
