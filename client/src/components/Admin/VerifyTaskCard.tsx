import React from "react";

const TaskCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <p style={styles.description}>Participant: Jasper</p>
      </div>
      <h2 style={styles.title}>Go for a 2.4km Run</h2>
      <p style={styles.description}>Complete by 30 Jan 2025</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={styles.invalid}>
          <span>Completion Invalid</span>
        </div>
        <div style={styles.valid}>
          <span>Task Verified</span>
        </div>
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
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  invalid: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    border: "1px, solid",
    borderRadius: "8px",
    padding: "4px 8px",
    fontWeight: "bold",
    fontSize: "14px",
    width: "48%",
    cursor: "pointer",
  },
  valid: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    color: "white",
    backgroundColor: "black",
    border: "1px, solid",
    borderRadius: "8px",
    padding: "4px 8px",
    fontWeight: "bold",
    fontSize: "14px",
    width: "48%",
    cursor: "pointer",
  },
};

export default TaskCard;
