import { Typography } from "@mui/material";
import React from "react";
import { FaCoins } from "react-icons/fa";
import { useNavigate } from "react-router";

interface TaskProps {
  task: {
    id: string;
    label: string;
    dateline: string;
    point: number;
    users: string[]
  };
}

const TaskCard: React.FC<TaskProps> = ({ task }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/detailed-task/${task.id}`);
  }

  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <Typography style={styles.title}>{task.label}</Typography>
        <p style={styles.subtitle}>
          {
            task.users?.length
              ? task.users.length === 1
                ? `1 Participant: ${task.users[0]}`
                : `${task.users.length} Participants: ${task.users.join(", ")}`
              : "No active participants."
          }
        </p>
        <div style={styles.reward}>
          <span style={styles.points}>+{task.point}</span>
          <span style={{ padding: "10px 5px" }}></span>
          <FaCoins />
        </div>
      </div>
      <button onClick={handleClick} style={styles.button}>
        More Info
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    flexDirection: "row" as "row",
    borderRadius: "10px",
    padding: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    backgroundColor: "#fff",
    marginBottom: "10px",
  },
  content: {
    flexDirection: "column" as "column",
    maxWidth: "60%",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "15px",
    color: "#777",
    gap: "10px",
  },
  reward: {
    width: "fit-content",
    backgroundColor: "#f0f0f0",
    padding: "10px 20px",
    alignItems: "center",
    borderRadius: "12px",
  },
  points: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  button: {
    width: "30%",
    backgroundColor: "black",
    justifyContent: "flex-end",
    color: "white",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    fontSize: "15px",
  },
};

export default TaskCard;
