import React, { useEffect, useState }  from "react";
import ActionCard from "components/Admin/ActionCard";
import TaskCard from "components/Admin/TaskCard";
import { FaEdit, FaCheckSquare } from "react-icons/fa";
import axios from 'utils/axios'

interface TaskItem {
  _id: string;
  task: string; 
  description: string; 
  points: number; 
  users: string[]; 
  status: string; 
  markedCompleted: Date; 
  verified: Date;
  createdAt: Date;
}

const AdminTaskPage: React.FC = () => {
  const actionItems = [
    {
      id: "manage",
      icon: <FaEdit />,
      label: "Manage Tasks",
      route: "/admin/manage-tasks",
    },
    {
      id: "approve",
      icon: <FaCheckSquare />,
      label: "Verify Tasks",
      route: "/admin/verify-tasks",
    },
  ];

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

  return (
    <div style={{ width: "90%", paddingBottom: "70px" }}>
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
      <div style={{ gap: "10px" }}>
      {items.map((item) => (
                <TaskCard
                    key={item._id}
                    task={item.task}
                    description={item.description}
                    points={item.points}
                    users={item.users}
                    verifiedStatus={item.status}
                    markedCompleted={item.markedCompleted}
                    verified={item.verified}
                    date={new Date(item.createdAt)}
                />
            ))}

      </div>
      
    </div>
  );
};

export default AdminTaskPage;
