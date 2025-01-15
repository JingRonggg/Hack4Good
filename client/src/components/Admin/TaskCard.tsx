import React from "react";
import Status from "../Admin/Status"

const TaskCard = () => {

  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <div style={styles.header}>
            <text style={styles.subtitle}>Participant: Jasper</text>
            <span style={styles.points}>500 Points</span>
        </div>
        <text style={styles.title}>Go for a 2.4km Run</text>
        <div style={styles.description}>
            <text style={styles.subtitle}>Joined:10 Jan 2025, 10.59am</text>
            <text style={styles.subtitle}>Marked Completed:11 Jan 2025, 10.59am</text>
            <text style={styles.subtitle}>Verified:-</text>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end"}}>
        <Status status="Pending Completion"></Status>  
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
    description:{
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "space-between",
      marginTop: "15px",
    },
    header:{
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
      color: "#5E5E5E"
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