import React from "react";
import Trophy from "../../assets/Trophy.jpg"
import Purchase from '../../assets/Purchase.jpg'

const HistoryCard = () => {

    const isTask = 1

    if(!isTask){
        return (
            <div style={styles.card}>
                <div style={styles.header}>
                    <img src={Trophy} style={styles.icon}/>
                    <div style={styles.separator}>
                        <div style={styles.content}>
                            <text style={styles.title}>Task Completed</text>
                            <text style={styles.subtitle}>Complete Math Homework</text>
                        </div>
                    <text style={styles.gainpoints}>+500</text>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={styles.card}>
                <div style={styles.header}>
                    <img src={Purchase} style={styles.icon}/>
                    <div style={styles.separator}>
                        <div style={styles.content}>
                            <text style={styles.title}>Purchase</text>
                            <text style={styles.subtitle}>Nissin Cup Noodles</text>
                        </div>
                    <text style={styles.losepoints}>-50</text>
                    </div>
                </div>
            </div>
    )
}
  

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
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column" as "column",
    },
    header:{
      display: "flex", 
      alignItems: "center",
      gap: "10px",
    },
    separator:{
      display: "flex",
      alignItems: "center",
      gap: "550px"
    },
    title: {
      fontSize: "20px",
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
    gainpoints: {
        color: "#039855",
        fontSize: "25px",
        fontWeight: "bold",
    },
    losepoints:{
        color: "#D92D20",
        fontSize: "25px",
        fontWeight: "bold",
    }
  };

export default HistoryCard