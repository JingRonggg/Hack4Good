import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router";

interface MultiActionAreaCardProps {
  item: {
    _id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
    description: string;
  };
}

const MultiActionAreaCard: React.FC<MultiActionAreaCardProps> = ({ item }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/detailed-listing", { state: { item } }); // Pass item to details page
  }

  return (
    <Card sx={{ alignSelf: "stretch" }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          sx={{ width: 200, height: 200, margin: "auto" }}
          image={item.image}
          alt={item.name}
        />
        <CardContent sx={{ textAlign: "left", paddingBottom: "0px" }}>
          <Typography gutterBottom variant="h5">
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {item.price} Points
        </Button>
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
