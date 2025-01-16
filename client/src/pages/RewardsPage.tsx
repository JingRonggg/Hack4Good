import React from "react";
import TaskCard from "../components/Task/TaskCard";
import Bubble from "../components/Task/Bubble";

const RewardsPage: React.FC = () => {
  return (
    <div style={{ width: "90%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Tasks</h1>
        <Bubble />
      </div>
      <h3 style={{ color: "#5E5E5E" }}>Pending Tasks</h3>
      <TaskCard />
      <h3 style={{ color: "#5E5E5E" }}>New Tasks</h3>
      <TaskCard />
    </div>
  );
};

export default RewardsPage;
