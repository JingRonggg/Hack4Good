import React from "react";
import { useNavigate } from "react-router";

const TaskCard = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/detailed-task");
  }
  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <text style={styles.title}>Complete Math Homework</text>
        <p style={styles.subtitle}>Complete by 30 Jan 2025</p>
        <div style={styles.reward}>
          <span style={styles.points}>+500 Points</span>
        </div>
      </div>
      <button onClick={handleClick} style={styles.button}>More Info</button>
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
      alignItems: "center",
      backgroundColor: "#fff",
    },
    content: {
      flexDirection: "column" as "column",
    },
    title: {
      fontSize: "25px",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "15px",
      color: "#777",
      gap: "10px"
    },
    reward: {
      backgroundColor: "#f0f0f0",
      padding: "6px 12px",
      alignItems: "center",
    },
    points: {
      fontSize: "15px",
      fontWeight: "bold",
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

export default TaskCard