import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material";
import axios from '../utils/axios';

const AdminAddTasksPage: React.FC = () => {
    const navigate = useNavigate();
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState(0);

    function handleClick() {
        navigate("/admin/manage-tasks");
    }

    const handleSubmit = async () => {
        const taskData = {
            task: taskName,
            description,
            points,
            users: []
        };

        try {
            const response = await axios.post('/task', taskData);
            if (response.status === 201) {
                console.log('Task created successfully');
                handleClick();
            } else {
                console.error('Error creating task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ width: "70vw", margin: "0 auto" , paddingBottom: "70px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <AiOutlineLeft style={{ marginRight: "10px", cursor: "pointer" }} onClick={handleClick} />
                <h1 style={{ margin: "0 auto" }}>Add Task</h1>
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
                    id="task-name"
                    label="Task Name"
                    multiline
                    rows={1}
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    style={{ width: "100%" }}
                />
                <TextField
                    id="points-rewarded" 
                    label="Points Rewarded On Completion"
                    multiline
                    rows={1}
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                    style={{ width: "100%" }}
                />
                <TextField
                    id="task-description"
                    label="Task Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ width: "100%" }}
                />   
            </div>
            <Button onClick={handleSubmit} style={{ position: "fixed", bottom: "66px", padding: "12px", width: "70vw", border:"1px, solid", backgroundColor: "black", color:"white", borderRadius: "8px",  marginTop: "600px"}}>
                    Create Task
            </Button>
        </div>
    );
};

export default AdminAddTasksPage;
