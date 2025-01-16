import React from "react";
import HistoryCard from "../components/TransactionHistory/HistoryCard";

const HistoryPage: React.FC = () => {
  return (
    <div style={{ width: "90%" }}>
      <h1>Transaction History</h1>
      <p style={{ color: "#5E5E5E" }}>10 Jan 2025</p>
      <HistoryCard />
      <p style={{ color: "#5E5E5E" }}>5 Jan 2025</p>
      <HistoryCard />
    </div>
  );
};

export default HistoryPage;
