import React from "react";
import ActionCard from "../components/Admin/ActionCard";
import TaskCard from "../components/Admin/TaskCard";
import { FaEdit, FaCheckSquare } from "react-icons/fa";

const AdminTaskPage: React.FC = () => {
  const actionItems = [
    { id: "manage", icon: <FaEdit />, label: "Manage Tasks", route: "/admin/manage-tasks" },
    { id: "approve", icon: <FaCheckSquare />, label: "Verify Tasks", route: "/admin/verify-tasks" },
  ];

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
      <ActionCard actionItems={actionItems} />
      <h3 style={{ color: "#5E5E5E" }}>Tasks Activity Log</h3>
      <TaskCard />
    </div>
  );
};

export default AdminTaskPage;
