import React, { useEffect, useState } from "react";
import MultiActionAreaCard from "./Card";
import axios from "../../utils/axios"; // Ensure axios is properly imported

const CardRow: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("/inventory") // Calls localhost:8080/inventory (set in axios baseURL)
      .then((response) => {
        setItems(response.data); // Save inventory items in state
      })
      .catch((error) => {
        console.error("Error fetching inventory:", error);
      });
  }, []);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
  };

  return (
    <div style={containerStyle}>
      {items.map((item) => (
          <MultiActionAreaCard key={item._id} item={item} />
        ))}
    </div>
  );
};

export default CardRow;
