import React, { useEffect, useState } from "react";
import axios from "utils/axios";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
import { Button, TextField } from "@mui/material";

const AdminEditTasksPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [itemData, setItemData] = useState({
      task: "",
      points: 0,
      description: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    navigate("/admin/manage-tasks");
  }

  useEffect(() => {
    const fetchItem = async () => {
        try {
            if (!id) {
                throw new Error("Task ID is missing");
            }
            const { data } = await axios.get(`/task/${id}`);
            setItemData(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching task data:", error);
            setError("Failed to fetch task data. Please try again later.");
            setLoading(false);
        }
    };

    fetchItem();
}, [id]);

const handleUpdate = async () => {
    try {
        if (!id) {
            throw new Error("Task ID is missing");
        }
        await axios.put(`/task/${id}`, itemData);
        navigate("/admin/manage-tasks");
    } catch (error) {
        console.error("Error updating task:", error);
        setError("Failed to update task. Please try again.");
    }
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setItemData({ ...itemData, [id]: value });
};

if (loading) {
    return <p>Loading...</p>;
}

if (error) {
    return <p>{error}</p>;
}

  return (
    <div style={{ width: "90%", margin: "0 auto", paddingBottom: "70px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <AiOutlineLeft
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={handleClick}
        />
        <h1 style={{ margin: "0 auto" }}>Edit Task</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <TextField
          id="task"
          label="Task Name"
          multiline
          rows={1}
          value={itemData.task}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          id="points"
          label="Points Rewarded On Completion"
          multiline
          rows={1}
          value={itemData.points}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          id="description"
          label="Task Description"
          multiline
          rows={4}
          value={itemData.description}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>
      <Button
        onClick={handleUpdate}
        style={{
          width: "100%",
          border: "1px, solid",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          marginTop: "600px",
        }}
      >
        Update Task
      </Button>
    </div>
  );
};

export default AdminEditTasksPage;
