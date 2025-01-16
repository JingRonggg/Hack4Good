import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

interface Transaction {
  id: string;
  purchaseDate: string;
  status: string;
  media: string;
  label: string;
  point: number;
}

interface Props {
  transactions: Transaction[];
}

const statusColors: Record<string, { bg: string; text: string }> = {
  Approved: { bg: "#d1e7dd", text: "#0f5132" },
  Declined: { bg: "#f8d7da", text: "#842029" },
  Pending: { bg: "#FEF0C7", text: "#DC6803" },
};

const PurchaseHistoryCard: React.FC<Props> = ({ transactions }) => {
  return (
    <div>
      {transactions.map((action) => (
        <Card
          key={action.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            alignItems: "center",
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            marginBottom: "16px",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 120, height: 120, borderRadius: "8px" }}
            image={action.media}
            alt="Product"
          />

          <CardContent sx={{ flex: 1, marginLeft: "16px" }}>
            <Typography variant="h6" fontWeight="bold">
              {action.label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {action.point} Points
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {action.purchaseDate}
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: statusColors[action.status]?.bg || "#EBEBEB",
                color: statusColors[action.status]?.text || "#222",
                boxShadow: "none",
              }}
            >
              {action.status}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default PurchaseHistoryCard;
