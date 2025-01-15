import React from "react";

const PurchasesCard = () => {

    return (
        <div style={styles.card}>
        <div style={styles.header}>
            <p style={styles.description}>Purchase ID: 3456123</p>
            <p style={styles.description}>30 Jan 2025</p>
        </div>
        <div style={{display: "flex", gap: "10px", marginBottom: "10px"}}>
        <img src={"https://m.media-amazon.com/images/I/71eWUsNaolL.jpg"} style={styles.icon}/>
        <div >
            <p style={styles.description}>0 points</p>
            <h2 style={styles.title}>Nissin Cup Noodles</h2>
            <p style={styles.description}>Purchased by Jasper</p>
        </div>
        </div>
        <div style={{display: "flex", justifyContent:"space-between"}}>
            <div style={styles.invalid}>
                <span>Cancel Purchase</span>
            </div>
            <div style={styles.valid}>
                <span>Item Collected</span>
            </div>
        </div>
        </div>
    );
};

const styles = {
  card: {
    border: "1px solid #DDDDDD",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#fff",
    width: "80vw",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 100, 
    height: 100, 
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "8px 0",
  },
  description: {
    fontSize: "14px",
    color: "#757575",
    margin: "8px 0",
  },
  invalid: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    border: "1px, solid",
    borderRadius: "8px",
    padding: "4px 8px",
    fontWeight: "bold",
    fontSize: "14px",
    width: "48%",
    cursor: "pointer",
  },
  valid:{
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    color:"white",
    backgroundColor: "black",
    border: "1px, solid",
    borderRadius: "8px",
    padding: "4px 8px",
    fontWeight: "bold",
    fontSize: "14px",
    width: "48%",
    cursor: "pointer",
  },
};

export default PurchasesCard;
