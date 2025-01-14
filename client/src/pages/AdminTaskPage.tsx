import React from "react";
import ActionCard from "../components/Admin/ActionCard";
import TaskCard from "../components/Admin/TaskCard";

const AdminTaskPage: React.FC = () => {
  return (
    <div style={{ width: "70vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Tasks</h1>
      </div>
      <ActionCard />
      <h3 style={{ color: "#5E5E5E" }}>Tasks Activity Log</h3>
      <TaskCard />
    </div>
  );
};

export default AdminTaskPage;
