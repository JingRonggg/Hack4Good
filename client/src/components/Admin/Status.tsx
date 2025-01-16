import React from "react";

type StatusProps = {
  status: string;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  const statusConfig: Record<
    StatusProps["status"],
    { color: string; textColor: string; label: string }
  > = {
    "pendingCompletion": {
      color: "#E0E0E0",
      textColor: "#000000",
      label: "Pending Completion",
    },
    "completed": {
      color: "#C8F7C5",
      textColor: "#2B7A0B",
      label: "Verified",
    },
    "pendingVerification": {
      color: "#FFEFC6",
      textColor: "#DA9200",
      label: "Pending Verification"
    },
  };

  const { color, textColor, label } = statusConfig[status] || {};

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
      {label}
    </span>
  );
};

export default Status;
