import React from "react";
import HomePageDashboardCard from "components/Home/Card";
import PurchaseHistoryCard from "components/Home/PurchaseHistoryCard";
import PendingTaskCard from "components/Home/PendingTasksCard";

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: "20px", width: "90%" }}>
      <h1>
        Hello <i>name</i>
      </h1>
      {/* status view of dashboard  */}
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
