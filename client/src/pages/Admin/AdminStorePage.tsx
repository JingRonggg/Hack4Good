import React, { useEffect, useState } from "react";
import ActionCard from "../../components/Admin/ActionCard";
import { FaEdit, FaCheckSquare } from "react-icons/fa";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import TransactionHistoryCard from "../../components/Admin/TransactionHistoryCard";
import InventoryCard from "../../components/Admin/InventoryCard";
import axios from 'utils/axios'

interface InventoryItem {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  status: string;
  image: string;
  description: string;
}

interface Transaction {
  _id: string;
  item: string;
  status: "approved" | "pending" | "declined";
  username: string;
  updatedAt: string;
}

const AdminStorePage: React.FC = () => {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);
    const [transaction, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
      const fetchInventory = async () => {
          try {
              const { data } = await axios.get<InventoryItem[]>("/inventory");
              setInventory(data);
          } catch (error) {
              console.error("Error fetching inventory:", error);
          }
      };
  
      fetchInventory();
  }, []);

  useEffect(() => {
    const fetchApprovedTransaction = async () => {
        try {
            const { data } = await axios.get<Transaction[]>("/transaction/status/approved");
            setTransaction(data);
        } catch (error) {
            console.error("Error fetching inventory:", error);
        }
    };

    fetchApprovedTransaction();
}, []);
  
  const actionItems = [
    {
      id: "manage",
      icon: <FaEdit />,
      label: "Manage Items",
      route: "/admin/manage-items",
    },
    {
      id: "approve",
      icon: <FaCheckSquare />,
      label: "Approve Purchases",
      route: "/admin/approve-purchases",
    },
  ];

  const [isInventoryExpanded, setIsInventoryExpanded] = useState(false);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

  const toggleInventory = () => {
    setIsInventoryExpanded(!isInventoryExpanded);
  };
  const toggleHistory = () => {
    setIsHistoryExpanded(!isHistoryExpanded);
  };

  return (
    <div style={{ width: "90%", paddingBottom: "70px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Store</h1>
      </div>
      <ActionCard actionItems={actionItems} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onClick={toggleInventory}
      >
        <h3 style={{ color: "#5E5E5E" }}>Inventory Summary</h3>
        {isInventoryExpanded ? (
          <AiOutlineDown style={{ color: "#5E5E5E" }} />
        ) : (
          <AiOutlineRight style={{ color: "#5E5E5E" }} />
        )}
      </div>
      {isInventoryExpanded && inventory.map((item) => (
          <InventoryCard
              key={item._id}
              name={item.name}
              id={item._id}
              quantity={100 - item.quantity} 
          />
        ))}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onClick={toggleHistory}
      >
        <h3 style={{ color: "#5E5E5E" }}>Transaction History</h3>
        {isHistoryExpanded ? (
          <AiOutlineDown style={{ color: "#5E5E5E" }} />
        ) : (
          <AiOutlineRight style={{ color: "#5E5E5E" }} />
        )}
      </div>
      {isHistoryExpanded && transaction.map((item) => (
          <TransactionHistoryCard
              key={item._id}
              item={item.item}
              id={item._id}
              user={item.username}
              date={item.updatedAt}
          />
        ))}
    </div>
  );
};

export default AdminStorePage;
