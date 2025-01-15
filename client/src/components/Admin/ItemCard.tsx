import React from "react";
import Pencil from "../../assets/Pencil.png"
import { useNavigate } from "react-router";

const ItemCard = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/admin/edit-item");
    }

    return (
      <div style={styles.card}>
        <div style={styles.header}>
            <div style={styles.leftcontent}>
                <img src={"https://m.media-amazon.com/images/I/71eWUsNaolL.jpg"} style={styles.icon}/>
                <div style={styles.content}>
                    <text style={styles.title}>Nissin Cup Noodles</text>
                    <text style={styles.subtitle}>0 points</text>
                </div>
            </div>
            <div style={styles.arrow}>
                <img src={Pencil} onClick={handleClick}>
                </img>
            </div>
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
      alignItems: "column",
      backgroundColor: "#fff",
    },
    content: {
      display: "flex",
      flexDirection: "column" as "column",
    },
    leftcontent:{
      display: "flex", 
      alignItems: "center",
      gap: "10px",
    },
    header:{
      display: "flex", 
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
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
      width: 100, 
      height: 100, 
      margin: "auto" 
    },
    arrow:{
      cursor: "pointer",
    },
  };

export default ItemCard