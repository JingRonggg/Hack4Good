import React from "react";
import TaskCard from "components/Admin/ManageTaskCard";
import RoundButton from "components/Admin/RoundButton";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";

const AdminManageTasksPage: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/add-tasks");
  }

  function handleBack() {
    navigate("/admin/tasks");
  }

  return (
    <div style={{ width: "70vw", paddingBottom: "100px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <AiOutlineLeft
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={handleBack}
        />
        <h1 style={{ margin: "0 auto" }}>Manage Tasks</h1>
      </div>
      <TaskCard />
      <div style={{ position: "absolute", bottom: "80px", right: "30px" }}>
        <RoundButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default AdminManageTasksPage;
