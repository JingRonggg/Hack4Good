import React from "react";
import HomePageDashboardCard from "components/Home/Card";
import PurchaseHistoryCard from "components/Home/PurchaseHistoryCard";
import PendingTaskCard from "components/Home/PendingTasksCard";
import { useAuth } from "contexts/AuthContext";

const HomePage: React.FC = () => {
  const { account } = useAuth();

  return (
    <div style={{ padding: "20px", width: "90%", paddingBottom: "70px" }}>
      <h1>
        Hello <i>{account?.username}</i>
      </h1>
      {/* status view of dashboard */}
      <div>
        <HomePageDashboardCard />
      </div>
      {/* purchase history */}
      <h3>Purchase History</h3>
      <div>
        <PurchaseHistoryCard />
      </div>
      {/* Pending tasks */}
      <h3>Pending Tasks</h3>
      <div>
        <PendingTaskCard />
      </div>
    </div>
  );
};

export default HomePage;