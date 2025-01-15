import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const PendingTaskCard = () => {
  const actionItems = [
    {
      id: "task1",
      dateline: "30 January 2025",
      label: "Complete Math Homework",
      point: 100,
    },
    {
      id: "task2",
      dateline: "10 February 2025",
      label: "Go for 2.4km Run",
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
          {/* Content Section */}
          <CardContent sx={{ flex: 1, marginLeft: "16px" }}>
            <Typography variant="h6" fontWeight="bold">
              {action.label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {action.dateline}
            </Typography>
          </CardContent>

          {/* Actions Section */}
          <CardActions>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#000000",
                color: "#fefefe",
                boxShadow: "none",
                "&:hover": { backgroundColor: "#e0e0e0" },
              }}
            >
              + {action.point} Point
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default PendingTaskCard;
