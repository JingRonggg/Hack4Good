import React, { useEffect, useState }  from "react";
import TaskCard from "components/Admin/ManageTaskCard";
import RoundButton from "components/Admin/RoundButton";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import axios from 'utils/axios'

interface TaskItem {
  _id: string;
  task: string; 
  description: string; 
  points: number; 
  users: [string]; 
  status: string; 
  markedCompleted: Date; 
  verified: Date;
  createdAt: Date;
}

const AdminManageTasksPage: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<TaskItem[]>([]);

  useEffect(() => {
    async function fetchItems() {
        try {
            const response = await axios.get("/task");
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching tasks items:", error);
        }
    }

    fetchItems();
}, []);

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
      {items.map((item) => (
                <TaskCard
                    key={item._id}
                    id={item._id}
                    task={item.task}
                    description={item.description}
                    points={item.points}
                    users={item.users}
                    status={item.status}
                    markedCompleted={item.markedCompleted}
                    verified={item.verified}
                    date={new Date(item.createdAt)}
                />
            ))}
      <div style={{ position: "absolute", bottom: "80px", right: "30px" }}>
        <RoundButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default AdminManageTasksPage;
