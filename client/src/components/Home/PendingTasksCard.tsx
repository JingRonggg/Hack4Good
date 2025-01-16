import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { FaCoins } from "react-icons/fa";

interface Task {
  id: string;
  dateline: string;
  label: string;
  point: number;
}

interface Props {
  tasks: Task[];
}

const PendingTaskCard: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No pending tasks.
        </Typography>
      ) : (
        tasks.map((task) => (
          <Card
            key={task.id}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "16px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              marginBottom: "16px",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent sx={{ flex: 1, marginLeft: "16px" }}>
              <Typography variant="h6" fontWeight="bold">
                {task.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {task.dateline}
              </Typography>
            </CardContent>

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
                + {task.point} <span style={{ padding: "5px" }}></span>
                <FaCoins />
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
};

export default PendingTaskCard;
