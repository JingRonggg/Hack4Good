import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const MultiActionAreaCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: 200, height: 200, margin: "auto" }}
          image="https://m.media-amazon.com/images/I/71eWUsNaolL.jpg"
          alt="green iguana"
        />
        <CardContent
          sx={{ textAlign: "left", padding: "10px", paddingBottom: "0px" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Cup Noodle
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Cup noodles are yumyum and nice nice. Exchange your points now for
            unhealthy food!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          0 Points
        </Button>
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
