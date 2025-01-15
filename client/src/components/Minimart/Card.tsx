import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router";

const MultiActionAreaCard = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/detailed-listing");
  }

  return (
    <Card sx={{ alignSelf: "stretch" }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          sx={{ width: 200, height: 200, margin: "auto" }}
          image="https://m.media-amazon.com/images/I/71eWUsNaolL.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left", paddingBottom: "0px" }}>
          <Typography gutterBottom variant="h5" component="div">
            Cup Noodle
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Chicken Flavour. This instant cup noodle contains chicken broth with
            a savoury flavour and a distinct chicken aroma.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          500 Points
        </Button>
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
