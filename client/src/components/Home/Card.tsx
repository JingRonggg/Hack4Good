import React from "react";
import { FaMedal, FaCoins } from "react-icons/fa";

const HomePageDashboardCard: React.FC = () => {
  const actionItems = [
    {
      id: "points",
      icon: <FaCoins />,
      label: "300 Points",
    },
    {
      id: "tasks",
      icon: <FaMedal />,
      label: "2 Tasks",
    },
  ];

  return (
    <div style={styles.container}>
      {actionItems.map((action) => (
        <div key={action.id} style={styles.actionCard}>
          <div style={styles.icon}>{action.icon}</div>
          <div style={styles.label}>{action.label}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: "1 1 calc(100% - 100px)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    width: "100%",
  },
  actionCard: {
    display: "flex",
    flex: "1 1 45%",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column",
    width: "300px",
    height: "100px",
    borderRadius: "10px",
    backgroundColor: "#EBEBEB",
    margin: "auto",
  },
  icon: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "15px",
  },
};

export default HomePageDashboardCard;
