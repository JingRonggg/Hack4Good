import React from "react";

interface TaskProps {
  _id: string;
  task: string; 
  points: number; 
  users: string[]; 
  markedCompleted: string | Date | null; 
  date: Date;
}

interface TaskCardProps {
  task: TaskProps;
  handleApprove: (id: string) => void;
  handleCancel: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, handleApprove, handleCancel }) => {
  const formatDate = (date: string | Date | null) => {
    if (!date) return "-";
    const parsedDate = typeof date === "string" ? new Date(date) : date;
    return parsedDate.toLocaleDateString();
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.title}>{task.task}</h2>
        <p style={styles.description}>{task.points} Points</p>
      </div>
      <p style={styles.description}>Created: {formatDate(task.date)}</p>
      <p style={styles.description}>Marked Completed: {formatDate(task.markedCompleted)}</p>
      <p style={styles.description}>Participant(s): {task.users.join(", ")}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={styles.invalid} onClick={() => handleCancel(task._id)}>
          <span>Completion Invalid</span>
        </div>
        <div style={styles.valid} onClick={() => handleApprove(task._id)}>
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
