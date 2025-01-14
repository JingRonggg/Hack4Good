import React from "react";

type StatusProps = {
  status: "Pending Completion" | "Verified" | "Pending Verification";
};

const Status: React.FC<StatusProps> = ({ status }) => {
  const statusConfig: Record<
    StatusProps["status"],
    { color: string; textColor: string }
  > = {
    "Pending Completion": {
      color: "#E0E0E0",
      textColor: "#000000",
    },
    "Verified": {
      color: "#C8F7C5",
      textColor: "#2B7A0B",
    },
    "Pending Verification": {
      color: "#FFEFC6",
      textColor: "#DA9200",
    },
  };

  const { color, textColor } = statusConfig[status];

  return (
    <span
      style={{
        backgroundColor: color,
        color: textColor,
        padding: "8px 16px",
        borderRadius: "16px",
        fontWeight: "bold",
        fontSize: "14px",
      }}
    >
      {status}
    </span>
  );
};

export default Status;
