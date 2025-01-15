import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const PurchaseHistoryCard = () => {
  const actionItems = [
    {
      id: "abc123",
      purchaseDate: "2 January 2025",
      status: "Pre-Order",
      media: "https://m.media-amazon.com/images/I/71eWUsNaolL.jpg",
      label: "Chicken Noodle",
      point: 0,
    },
    {
      id: "bcd123",
      purchaseDate: "10 January 2025",
      status: "Pending Collection",
      media: "https://m.media-amazon.com/images/I/71eWUsNaolL.jpg",
      label: "Seafood Noodle",
      point: 200,
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
          {/* Image Section */}
          <CardMedia
            component="img"
            sx={{ width: 120, height: 120, borderRadius: "8px" }} // Adjust image size
            image={action.media}
            alt="Product"
          />

          {/* Content Section */}
          <CardContent sx={{ flex: 1, marginLeft: "16px" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Purchase ID: {action.id}
            </Typography>
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

          {/* Actions Section */}
          <CardActions>
            {action.status === "Pre-Order" && (
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#EBEBEB",
                  color: "#222222",
                  boxShadow: "none",
                }}
              >
                Pre-Order
              </Button>
            )}
            {action.status === "Pending Collection" && (
              <Button
                variant="contained"
                size="small"
                sx={{
                  // to do: make color different for the different status
                  backgroundColor: "#FEF0C7",
                  color: "#DC6803",
                  boxShadow: "none",
                }}
              >
                {action.status}
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

// const styles = {
//   preorder: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "20px",
//     width: "100%",
//     margin: "0 auto",
//   },
// };

export default PurchaseHistoryCard;