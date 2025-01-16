import React, { useEffect, useState } from "react";
import DetailedTask from "../../components/Task/DetailedTask";
import { useParams } from "react-router";
import { useAuth } from "contexts/AuthContext";
import axios from "utils/axios";

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

const DetailedTaskPage: React.FC = () => {
  const { id: taskId } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const { account } = useAuth();

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const { data } = await axios.get(`/task/${taskId}`);
        setTask(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching task data:", error);
        setLoading(false);
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!task || !account) {
    return <p>Error: Could not load task or user data</p>;
  }

  return (
    <div style={{ width: "90%" }}>
      {/* Pass task and current user to DetailedTask */}
      <DetailedTask task={task} currentUser={account.username} />
    </div>
  );
};

export default DetailedTaskPage;