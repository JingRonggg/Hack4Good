import React, { useState, useEffect } from "react";
import TaskCard from "../../components/Task/TaskCard";
import Bubble from "../../components/Task/Bubble";
import axios from "axios"; // Direct axios import
import { useAuth } from "contexts/AuthContext";

const RewardsPage: React.FC = () => {
  const { account } = useAuth();
  interface Task {
    id: string;
    label: string;
    dateline: string;
    point: number;
  }
  
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [availableTasks, setAvailableTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/task/");
      const allTasks = response.data;

      // Separate pending tasks where the user IS in the users array
      const userPendingTasks = allTasks
        .filter(
          (task: any) =>
            task.status === "pendingCompletion" && task.users.includes(account?.username)
        )
        .map((task: any) => ({
          id: task._id,
          label: task.task,
          dateline: new Date(task.createdAt).toLocaleDateString("en-GB"),
          point: task.points || 0,
        }));

      // Separate available tasks where the user is NOT in the users array
      const filteredAvailableTasks = allTasks
        .filter(
          (task: any) =>
            task.status === "pendingCompletion" && !task.users.includes(account?.username)
        )
        .map((task: any) => ({
          id: task._id,
          label: task.task,
          dateline: new Date(task.createdAt).toLocaleDateString("en-GB"),
          point: task.points || 0,
        }));

      setPendingTasks(userPendingTasks);
      setAvailableTasks(filteredAvailableTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div style={{ width: "90%", paddingBottom: "70px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Tasks</h1>
        <Bubble points={account?.points ?? 0} />
      </div>

      {/* Pending Tasks Section */}
      <h3 style={{ color: "#5E5E5E" }}>Pending Completion</h3>
      {pendingTasks.length > 0 ? (
        pendingTasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p>No pending tasks</p>
      )}

      {/* Available Tasks Section */}
      <h3 style={{ color: "#5E5E5E" }}>Available Tasks</h3>
      {availableTasks.length > 0 ? (
        availableTasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p>No available tasks</p>
      )}
    </div>
  );
};

export default RewardsPage;
