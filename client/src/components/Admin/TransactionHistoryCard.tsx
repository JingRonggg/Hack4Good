import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface TransactionProps {
  id: string;
  item: string;
  user: string;
  date: string;
}

const TransactionHistoryCard: React.FC<TransactionProps> = ({ id, item, user, date }) => {
  const formatDate = (date: string | Date | null) => {
    if (!date) return "-";
    const parsedDate = typeof date === "string" ? new Date(date) : date;
    return parsedDate.toLocaleDateString();
  };
  
  const actionItems = [
    {
      id: id,
      dateline: formatDate(date),
      label: item,
      user: user,
    },
  ];

  return (
    <div>
      {actionItems.map((action) => (
        <Card
          sx={{
            display: "flex", // Flexbox for horizontal alignment
            alignItems: "center",
            padding: "16px",
            border: "1px solid #e0e0e0", // Light border for separation
            borderRadius: "8px",
            marginBottom: "16px",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", // Subtle shadow
          }}
        >
          {/* Content Section */}
          <CardContent sx={{ flex: 1, marginLeft: "16px" }}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <Typography variant="body2" color="text.secondary">
                Purchase ID: {action.id}
                </Typography>
                <div style={{display: "flex" , marginLeft: "auto", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                    {action.dateline}
                    </Typography>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h6" fontWeight="bold">
                {action.label}
                </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              Purchased by {action.user}
            </Typography>
          </CardContent>

        </Card>
      ))}
    </div>
  );
};

export default TransactionHistoryCard;
