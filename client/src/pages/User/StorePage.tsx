import CardRow from "components/Minimart/CardRow";
import React from "react";

const StorePage: React.FC = () => {
  return (
    <div style={{ padding: "20px", paddingBottom: "70px"  }}>
      <h1>Minimart</h1>
      <div style={{}}>
        <div>
          <CardRow />
        </div>
      </div>
    </div>
  );
};

export default StorePage;
