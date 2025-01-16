import React from "react";
import Task from "components/Admin/ManageTaskCard";
import RoundButton from "components/Admin/RoundButton";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";

const AdminManageTasksPage: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/add-tasks");
  }

  return (
    <div
      style={{
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "70px",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <AiOutlineLeft
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={handleClick}
        />
        <h1 style={{ margin: "0 auto" }}>Manage Tasks</h1>
      </div>
      <Task />
      <div style={{ position: "absolute", bottom: "80px", right: "30px" }}>
        <RoundButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default AdminManageTasksPage;
