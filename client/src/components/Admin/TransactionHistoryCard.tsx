import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TransactionHistoryCard = () => {
  const actionItems = [
    {
      id: "3412313",
      dateline: "30 January 2025, 10.30am",
      label: "Nissin Cup Noodles",
      point: 0,
      user: "Jasper",
    },
    {
      id: "3421353",
      dateline: "10 February 2025, 11.00am",
      label: "Nissin Cup Noodles",
      point: 0,
      user: "Tom",
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
                <Typography variant="body2" color="text.secondary">
                        {action.point} POINTS
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
