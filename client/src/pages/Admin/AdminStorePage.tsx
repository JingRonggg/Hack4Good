import React, { useState } from "react";
import ActionCard from "../../components/Admin/ActionCard";
import { FaEdit, FaCheckSquare } from "react-icons/fa";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import TransactionHistoryCard from "../../components/Admin/TransactionHistoryCard";
import InventoryCard from "../../components/Admin/InventoryCard";

const AdminStorePage: React.FC = () => {
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
      {isInventoryExpanded && <InventoryCard />}
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
      {isHistoryExpanded && <TransactionHistoryCard />}
    </div>
  );
};

export default AdminStorePage;
