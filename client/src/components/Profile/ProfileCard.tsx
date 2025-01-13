import React from "react";
import icon from "../../assets/Avatar.jpg"

const TaskCard = () => {
    return (
      <div style={styles.card}>
        <div style={styles.content}>
            <div style={styles.header}>
                <img src={icon} style={styles.icon}/>
                <text style={styles.title}>Jasper</text>
            </div>
          <p style={styles.subtitle}>Resident | +65 9123 4567</p>
        </div>
      </div>    
    );
  };
  

const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    content: {
      flexDirection: "column" as "column",
    },
    header:{
      display: "flex", 
      alignItems: "center",
      gap: "10px",
    },
    title: {
      fontSize: "25px",
      fontWeight: "bold",
      padding: "5",
    },
    subtitle: {
      fontSize: "15px",
      color: "#777",
      gap: "10px"
    },
    icon: {
        width: "40",
        height: "40",
        marginRight: "10px",
    },
  };

export default TaskCard