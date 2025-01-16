import React, { useEffect, useState } from "react";
import RoundButton from "components/Admin/RoundButton";
import UserProfileCard from "components/Admin/UserProfileCard";
import { useNavigate } from "react-router";
import axios from "utils/axios";
import { Account } from "@types";

const AdminManageUsersPage: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<Account[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/account");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  function handleClick() {
    navigate("/admin/add-user");
  }

  return (
    <div style={{ width: "90%", paddingBottom: "70px" }}>
      <h1>Manage Users</h1>
      {users.map((user) => (
        <UserProfileCard key={user.username} account={user} />
      ))}
      <div style={{ position: "absolute", bottom: "80px", right: "30px" }}>
        <RoundButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default AdminManageUsersPage;
