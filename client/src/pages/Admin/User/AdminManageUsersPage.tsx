import React from "react";
import RoundButton from "components/Admin/RoundButton";
import UserProfileCard from "components/Admin/UserProfileCard";
import { useNavigate } from "react-router";

const AdminManageUsersPage: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/add-user");
  }

  return (
    <div style={{ width: "90%" }}>
      <h1>Manage Users</h1>
      <UserProfileCard />
      <div style={{ position: "absolute", bottom: "80px", right: "30px" }}>
        <RoundButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default AdminManageUsersPage;
