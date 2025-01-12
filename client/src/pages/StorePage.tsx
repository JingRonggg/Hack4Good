import CardRow from "components/Minimart/CardRow";
import React from "react";

const StorePage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Minimart</h1>
      <div style={{}}>
        <h3>Purchase History</h3>
        <div style={{}}>
          <CardRow />
        </div>
      </div>
    </div>
  );
};

export default StorePage;
