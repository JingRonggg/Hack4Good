import React from "react";
import { useNavigate } from "react-router";

interface ActionItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  route: string;
}

interface ActionCardProps {
  actionItems: ActionItem[];
}

const ActionCard: React.FC<ActionCardProps> = ({ actionItems }) => {
  const navigate = useNavigate();

  function handleClick(route: string) {
    navigate(route);
  }

  return (
    <div style={styles.container}>
      {actionItems.map((action) => (
        <div
          key={action.id}
          style={styles.actionCard}
          onClick={() => handleClick(action.route)}
        >
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
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  actionCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column",
    width: "50%",
    height: "100px",
    borderRadius: "10px",
    backgroundColor: "#EBEBEB",
    cursor: "pointer",
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

export default ActionCard;
