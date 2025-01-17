import React from "react";
import { CSSProperties } from "react";
import checkAccepted from "functions/Task/check-accepted";
import axios from "utils/axios";
import { FaCoins } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
interface Task {
  _id: string;
  task: string;
  description: string;
  points: number;
  users: string[];
  status: "completed" | "pendingCompletion" | "pendingVerification";
  markedCompleted?: Date;
  verified?: Date;
}
interface DetailedTaskProps {
  task: Task;
  currentUser: string;
}

const DetailedTask: React.FC<DetailedTaskProps> = ({ task, currentUser }) => {
  const isAccepted = checkAccepted(task.users,currentUser);
  const navigate = useNavigate();

  const acceptTask = async () => {
    try {
      await axios.put(`/task/accept/${task._id}`, { username: currentUser });
      alert("Task accepted!");
      navigate("/rewards");
    } catch (error) {
      console.error("Error accepting task:", error);
      alert("Failed to accept the task. Please try again.");
    }
  };

  const markAsCompleted = async () => {
    try {
      await axios.put(`/task/complete/${task._id}`);
      alert("Task marked as completed! Your points will be awarded after verification.");
      navigate("/rewards");
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  const leaveTask = async () => {
    try {
      await axios.put(`/task/quit/${task._id}`, { username: currentUser });
      alert("You have quit the task.");
      navigate("/rewards");
    } catch (error) {
      console.error("Error quitting task:", error);
      alert("Failed to quit the task. Please try again.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.scrollableContent}>
        <div style={styles.card}>
          <div style={styles.content}>
            <Typography style={styles.title}>{task.task}</Typography>
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
              <span style={styles.points}>+{task.points} </span>
              <span>
                <FaCoins />
              </span>
            </div>
          </div>
        </div>
        <div style={styles.descriptionContainer}>
          <p>Task Description:</p>
          <p>{task.description}</p>
        </div>
      </div>
      <div style={styles.fixedButtonContainer}>
        {isAccepted ? (
          <>
            <button onClick={markAsCompleted} style={styles.button}>
              Mark as Completed
            </button>
            <button
              onClick={leaveTask}
              style={{ ...styles.button, ...styles.secondaryButton }}
            >
              Leave Task
            </button>
          </>
        ) : (
          <button onClick={acceptTask} style={styles.button}>
            Accept Task
          </button>
        )}
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  },
  scrollableContent: {
    flex: 1,
    overflowY: "auto",
    padding: "12px",
    width: "100%",
    alignItems: "center",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: "20px",
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "15px",
    color: "#777",
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
  fixedButtonContainer: {
    width: "90%",
    margin: "0 auto",
    position: "fixed",
    bottom: "56px",
    left: 0,
    right: 0,
    padding: "12px",
    backgroundColor: "#fff",
    zIndex: 10,
    display: "flex",
    gap: "12px",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "12px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    fontSize: "15px",
    flex: 1,
  },
  secondaryButton: {
    backgroundColor: "gray",
  },
  descriptionContainer: {
    marginTop: "20px",
  },
};

export default DetailedTask;