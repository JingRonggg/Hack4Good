// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import CardActions from "@mui/material/CardActions";
// // import { useNavigate } from "react-router";

// const MultiActionAreaCard = () => {
//   //   const navigate = useNavigate();

//   //   function handleClick() {
//   //     navigate("/detailed-listing");
//   //   }

//   const actionItems = [
//     {
//       id: "abc123",
//       purchaseDate: "2 January 2025",
//       status: "Pre-Order",
//       media: "https://m.media-amazon.com/images/I/71eWUsNaolL.jpg",
//       label: "Chicken Noodle",
//     },
//     {
//       id: "bcd123",
//       purchaseDate: "10 January 2025",
//       status: "Pending Collection",
//       media: "https://m.media-amazon.com/images/I/71eWUsNaolL.jpg",
//       label: "Seafood Noodle",
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       {actionItems.map((action) => (
//         <Card sx={{ alignSelf: "stretch" }}>
//           <CardMedia
//             component="img"
//             sx={{ width: 125, height: 125, margin: "auto" }}
//             image={action.media}
//             alt="green iguana"
//           />
//           <CardContent sx={{ textAlign: "left", paddingBottom: "0px" }}>
//             <Typography gutterBottom variant="h5" component="div">
//               Cup Noodle
//             </Typography>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               Chicken Flavour. This instant cup noodle contains chicken broth
//               with a savoury flavour and a distinct chicken aroma.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small" color="primary">
//               500 Points
//             </Button>
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flex: "1 1 calc(100% - 100px)",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "20px",
//     width: "100%",
//   },
//   actionCard: {
//     display: "flex",
//     alignSelf: "stretch",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column" as "column",
//     width: "300px",
//     height: "100px",
//     borderRadius: "10px",
//     backgroundColor: "#EBEBEB",
//     margin: "auto",
//   },
//   icon: {
//     fontSize: "24px",
//     marginBottom: "10px",
//   },
//   label: {
//     fontSize: "16px",
//     fontWeight: "bold",
//     marginRight: "15px",
//   },
// };

// export default MultiActionAreaCard;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const MultiActionAreaCard = () => {
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
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#000",
                boxShadow: "none",
                "&:hover": { backgroundColor: "#e0e0e0" },
              }}
            >
              Pre-Order
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default MultiActionAreaCard;
