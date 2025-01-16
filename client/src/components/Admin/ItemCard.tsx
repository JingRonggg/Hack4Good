import React from "react";
import Pencil from "../../assets/Pencil.png";
import { Typography } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router";

interface InventoryProps {
  id: string;
  name: string;
  quantity: number;
  price: number;
  status: string;
  image: string;
  description: string;
}

const ItemCard: React.FC<InventoryProps> = ({ id, name, quantity, price, status, image, description }) => {
  const navigate = useNavigate();

  // Define action items
  const actionItems = [
    { id: "edit", icon: <FaEdit />, label: "Edit Item", route: `/admin/edit-item/${id}` },
  ];

  function handleClick(route: string) {
    navigate(route); // Navigate to the route defined in actionItems
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.leftcontent}>
          <img
            src={image || "https://m.media-amazon.com/images/I/71eWUsNaolL.jpg"}
            alt={name}
            style={styles.icon}
          />
          <div style={styles.content}>
            <Typography style={styles.title}>{name}</Typography>
            <Typography style={styles.subtitle}>Quantity: {quantity}</Typography>
            <Typography style={styles.subtitle}>Price: ${price.toFixed(2)}</Typography>
            <Typography style={styles.subtitle}>Status: {status}</Typography>
          </div>
        </div>
        <div style={styles.arrow}>
          {actionItems.map((item) => (
            <img
              key={item.id}
              src={Pencil}
              alt="Edit"
              onClick={() => handleClick(item.route)} // Use handleClick to navigate
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
      <Typography style={styles.description}>{description}</Typography>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "12px",
    display: "flex",
    flexDirection: "column" as "column",
    gap: "10px",
    backgroundColor: "#fff",
  },
  content: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  leftcontent: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "15px",
    color: "#777",
  },
  icon: {
    width: 100,
    height: 100,
    margin: "auto",
  },
  arrow: {
    cursor: "pointer",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
};

export default ItemCard;
