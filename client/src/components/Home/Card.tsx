import React from "react";
import { FaCoins, FaTrophy } from "react-icons/fa";

const HomePageDashboardCard: React.FC = () => {
  const actionItems = [
    {
      id: "points",
      icon: <FaCoins />,
      number: 300,
      label: "Points",
    },
    {
      id: "tasks",
      icon: <FaTrophy />,
      number: 2,
      label: "Pending Tasks",
    },
  ];

  return (
    <div style={styles.container}>
      {actionItems.map((action) => (
        <div key={action.id} style={styles.card}>
          <div style={styles.icon}>{action.icon}</div>
          <div style={{ padding: "10px" }}></div>
          <div style={styles.textContainer}>
            <span style={styles.number}>{action.number}</span>
            <span style={styles.label}>{action.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    width: "100%",
    margin: "0 auto",
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#F8F8F8",
    borderRadius: "12px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "48%",
  },
  icon: {
    fontSize: "24px",
    color: "555",
    marginBottom: "10px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  number: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "15px",
  },
};

export default HomePageDashboardCard;
