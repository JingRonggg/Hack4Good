import React from "react";
import MultiActionAreaCard from "./Card";

const CardRow = () => {
  const containerStyle = {
    display: "flex", // Flexbox layout
    justifyContent: "space-between", // Evenly spaced
    alignItems: "center", // Align items vertically
    gap: "30px", // Space between cards
    padding: "0px", // Optional: Padding around the container
  };

  const cardStyle = {
    flex: "1", // Allows equal card width
    maxWidth: "200px", // Optional: Limit max width
    padding: "5px", // Padding inside the card"
    border: "1px solid #ccc", // Optional: Card border
    borderRadius: "8px", // Optional: Rounded corners
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Shadow
    textAlign: "center" as const, // Center text in the card
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <MultiActionAreaCard />
      </div>
      <div style={cardStyle}>
        <MultiActionAreaCard />
      </div>
      <div style={cardStyle}>
        <MultiActionAreaCard />
      </div>
      <div style={cardStyle}>
        <MultiActionAreaCard />
      </div>
    </div>
  );
};

export default CardRow;
