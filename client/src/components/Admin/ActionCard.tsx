import React from "react";
import { FaEdit, FaCheckSquare } from "react-icons/fa";
import { useNavigate } from "react-router";

const ActionCard: React.FC = () => {

    const navigate = useNavigate();

    function handleClick(route: string) {
        navigate(route);
    }
    
    const actionItems = [
        { id: "manage", icon: <FaEdit />, label: "Manage Tasks", route: "/admin/manage-tasks" },
        { id: "approve", icon: <FaCheckSquare />, label: "Verify Tasks", route: "/admin/verify-tasks" },
    ]

    return (
        <div style={styles.container}>
          {actionItems.map((action) => (
            <div key={action.id} style={styles.actionCard} onClick={() => handleClick(action.route)}>
              <div style={styles.icon}>{action.icon}</div>
              <div style={styles.label}>{action.label}</div>
            </div>
          ))}
        </div>
      );
}

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
      width: "300px",
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

export default ActionCard