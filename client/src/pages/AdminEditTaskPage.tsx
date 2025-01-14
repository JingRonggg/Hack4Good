import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material";

const AdminEditTasksPage: React.FC = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/admin/manage-tasks");
    }

    return (
        <div style={{ width: "70vw", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <AiOutlineLeft style={{ marginRight: "10px", cursor: "pointer" }} onClick={handleClick} />
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
                    id="task-name"
                    label="Task Name"
                    multiline
                    rows={1}
                    defaultValue="Go for a 2.4km Run"
                    style={{ width: "100%" }}
                />
                <TextField
                    id="points-rewarded" 
                    label="Points Rewarded On Completion"
                    multiline
                    rows={1}
                    defaultValue="500"
                    style={{ width: "100%" }}
                />
                <TextField
                    id="task-description"
                    label="Task Description"
                    multiline
                    rows={4}
                    defaultValue="This is a sample description"
                    style={{ width: "100%" }}
                />   
            </div>
            <Button style={{ width: "70vw", border:"1px, solid", backgroundColor: "black", color:"white", borderRadius: "8px",  marginTop: "600px"}}>
                    Update Task
            </Button>
        </div>
    );
};

export default AdminEditTasksPage;
