import React, { useEffect, useState } from "react";
import VerifyTaskCard from "components/Admin/VerifyTaskCard";
import { useNavigate } from "react-router";
import { AiOutlineLeft } from "react-icons/ai";
import axios from 'utils/axios'

interface TaskItem {
  _id: string;
  task: string; 
  description: string; 
  points: number; 
  users: [string]; 
  status: string; 
  markedCompleted: Date; 
  verified: Date;
  date: Date;
}

const AdminVerifyTaskPage: React.FC = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState<TaskItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPendingTasks = async () => {
        try {
            const { data } = await axios.get<TaskItem[]>("/task/status/pendingVerification");
            setTask(data);
        } catch (error) {
            console.error("Error fetching pending tasks:", error);
        }
    };

    fetchPendingTasks();
}, []);

const handleVerification = async (id: string) => {
  try {
      // Fetch the task details to retrieve users and points
      const { data: taskDetails } = await axios.get<TaskItem>(`/task/${id}`);
      const { users, points, task } = taskDetails;

      // Create transactions and update points for each user
      const transactionPromises = users.map(async (username) => {
          // Fetch the user's current points
          const { data: user } = await axios.get(`/account/${username}`);

          // Create a transaction for the user
          await axios.post('/transaction', {
              item: task,
              status: 'approved',
              username,
              points
          });

          // Update the user's points
          await axios.put(`/account/${username}`, {
              points: user.points + points
          });
      });

      // Wait for all transaction-related operations to complete
      await Promise.all(transactionPromises);

      // Mark the task as completed
      await axios.put(`/task/${id}`, { status: 'completed' });

      // Remove the task from the current list
      setTask((prev) => prev.filter((task) => task._id !== id));
  } catch (error) {
      console.error("Error approving task:", error);
      setError("Failed to approve task. Please try again.");
  }
};

const handleCancel = async (id: string) => {
  try {
      await axios.put(`/task/${id}`, {status: "pendingCompletion"});

      setTask((prev) => prev.filter((task) => task._id !== id));
  } catch (error) {
      console.error("Error canceling transaction:", error);
      setError("Failed to cancel transaction. Please try again.");
  }
};

  function handleClick() {
    navigate("/admin/tasks");
  }

  const closeErrorModal = () => {
    setError(null);
};

  return (
    <div style={{ width: "90%", margin: "0 auto", paddingBottom: "70px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <AiOutlineLeft
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={handleClick}
        />
        <h1 style={{ margin: "0 auto" }}>Verify Tasks</h1>
      </div>
      {task.length > 0 ? (
                task.map((task) => (
                    <VerifyTaskCard
                        key={task._id}
                        task={task}
                        handleApprove={handleVerification}
                        handleCancel={handleCancel}
                    />
                ))
            ) : (
                <p>No pending tasks.</p>
            )}

            {/* Error Modal */}
            {error && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.modal}>
                        <p>{error}</p>
                        <button onClick={closeErrorModal} style={modalStyles.button}>
                            Close
                        </button>
                    </div>
                </div>
            )}
    </div>
  );
};

  const modalStyles = {
    overlay: {
        position: "fixed" as "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center" as "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    button: {
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default AdminVerifyTaskPage;
