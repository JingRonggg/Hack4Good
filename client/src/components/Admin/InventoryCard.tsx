import React from "react";

interface InventoryProps {
  id: string;
  name: string;
  quantity: number;
}

const InventoryCard: React.FC<InventoryProps> = ({ id, name, quantity }) => { 
  
  const actionItems = [
        {
          id: id,
          name: name,
          remaining: quantity,
        },
      ];

      return (
        <div>
          {actionItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                width: "100%",
                textAlign: "center",
                marginBottom: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontWeight: "bold", margin: 0 }}>{item.name}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "8px",
                  flexGrow: 1, // Allows this div to take up available space
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "24px" }}>
                  {item.remaining}
                </p>
                <p style={{ margin: 0, color: "#5E5E5E", fontWeight: "bold" }}>
                  Remaining
                </p>
              </div>
            </div>
          ))}
        </div>
      );
};

export default InventoryCard;
