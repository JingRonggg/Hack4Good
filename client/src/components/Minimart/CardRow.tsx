import React from "react";
import MultiActionAreaCard from "./Card";

const CardRow: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex", // Flexbox layout
    flexWrap: "wrap", // Wrap items to the next row
    justifyContent: "space-between", // Evenly spaced
    alignItems: "center", // Align items vertically
    gap: "30px", // Space between cards
  };

  const cardStyle = {
    flex: "1 1 calc(25% - 20px)", // Allows equal card width
    alignSelf: "stretch", // Allows equal card height
    // maxWidth: "200px", // Optional: Limit max width
    padding: "1px", // Padding inside the card"
    margin: "10px",
    border: "1px solid #ccc", // Optional: Card border
    borderRadius: "10px", // Optional: Rounded corners
    // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional: Shadow
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
