import React from "react";
import CardRow from "components/home/CardRow";

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Hello <i>name</i>
      </h1>
      {/* status view of dashboard  */}
      <div style={{}}></div>
      {/* purchase history */}
      <div style={{}}>
        <h3>Purchase History</h3>
        <div style={{}}>
          <CardRow />
        </div>
      </div>

      {/* Pending tasks */}
    </div>
  );
};

export default HomePage;
