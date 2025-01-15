import React from "react";

// Define the props type
interface RoundButtonProps {
  onClick: () => void; // Specify that onClick is a function with no arguments and no return value
}

const RoundButton: React.FC<RoundButtonProps> = ({ onClick }) => {
  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        border: "none",
        cursor: "pointer",
        fontSize: "24px",
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      +
    </button>
  );
};

export default RoundButton;
