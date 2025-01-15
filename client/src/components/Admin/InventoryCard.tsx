import React from "react";

const InventoryCard = () => {
    const actionItems = [
        {
          id: "3412313",
          name: "Nissin Cup Noodles",
          sold: 5,
          remaining: 95,
        },
        {
          id: "3421353",
          name: "Mamee",
          sold: 10,
          remaining: 190,
        },
      ];

      return(
        <div>
      {actionItems.map((item) => (
        <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          width: "100%",
          textAlign: "center",
        }}
       >
        <p style={{ fontWeight: "bold", margin: 0 }}>
        {item.name}
        </p>
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "8px",
        }}
        >
        <div style={{ textAlign: "center" }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>{item.sold}</p>
            <p style={{ margin: 0, color: "#5E5E5E", fontWeight: "bold" }}>Sold</p>
        </div>
        <div style={{ height: "40px", width: "1px", background: "#ccc" }} />
        <div style={{ textAlign: "center" }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>{item.remaining}</p>
            <p style={{ margin: 0, color: "#5E5E5E", fontWeight: "bold" }}>Remaining</p>
        </div>
        </div>
        </div>
      ))}
    </div>

      );
};

export default InventoryCard;