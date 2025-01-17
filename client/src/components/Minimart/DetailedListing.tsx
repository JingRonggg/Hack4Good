import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { CSSProperties } from "react";
import axios from 'utils/axios'

interface InventoryProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

interface UserProps{
  username: string;
  points: number;
}

interface DetailedListingProps {
  inventory: InventoryProps;
  user: UserProps
}

const DetailedListing: React.FC<DetailedListingProps> = ({ inventory, user}) => {
  const transactionData = {
    item: inventory.name,
    status: "pending",
    username: user.username,
    points: -inventory.price
  };
  
  const createTransaction = async () => {
    if (user.points < inventory.price) {
      alert("Insufficient points to purchase this item.");
      return;
    }
  
    try {
      user.points -= inventory.price;
      await axios.put(`/account/${user.username}`, user);
      await axios.post(`/transaction`, transactionData);
      alert("Transaction successful!");
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Transaction failed. Please try again.");
    }
  };
  

  return (
    <div style={styles.pageContainer}>
      <Typography style={styles.title}>{inventory.name}</Typography>

      <div style={styles.scrollableContent}>
        <div style={styles.card}>
          {/* card media */}
          <div style={styles.content}>
            <CardMedia
              component="img"
              sx={{ maxWidth: "20%", maxHeight: "20%", margin: "auto" }}
              image={inventory.image || "https://m.media-amazon.com/images/I/71eWUsNaolL.jpg"}
              alt="Cup Noodle"
            />
            <p style={styles.subtitle}>{inventory.price} Points</p>
          </div>
        </div>
        <Typography style={styles.subtitle}>{inventory.quantity} Remaining</Typography>
        {/* description */}
        <div style={styles.descriptionContainer}>
          <p> {inventory.description}
          </p>
        </div>

        {/* action button */}
        {inventory.quantity === 0 ? (
          <div style={styles.outOfStockContainer}>
            <Typography style={styles.outOfStockMessage}>
              This product is out of stock. You may place a pre-order for the item.
            </Typography>
            <div style={styles.actionContainer}>
            <Typography
              variant="h6"
              fontWeight="bold"
              style={{
                width: "50%",
                textAlign: "left",
              }}
            >
              Your Balance: {user.points} Points
            </Typography>
            <button onClick={createTransaction} style={styles.preOrderButton}>Pre-Order</button>
          </div>
            </div>
        ) : (
          <div style={styles.actionContainer}>
            <Typography
              variant="h6"
              fontWeight="bold"
              style={{
                width: "50%",
                textAlign: "left",
              }}
            >
              Your Balance: {user.points} Points
            </Typography>
            <button onClick={createTransaction} style={styles.button}>Purchase</button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  scrollableContent: {
    flex: 1,
    overflowY: "auto",
    height: "100%",
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "12px",
    paddingRight: "12px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: "20px",
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    alignItems: "center",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "15px",
    color: "#777",
  },
  descriptionContainer: {
    marginTop: "20px",
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  outOfStockContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  outOfStockMessage: {
    fontSize: "16px",    
    border: "1px solid #ccc",
    borderRadius: "10px",
    color: "black",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "15px 30px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  preOrderButton: {
    backgroundColor: "white",
    color: "black",
    padding: "15px 30px",
    border: "1px solid",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default DetailedListing;
