import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { CSSProperties } from "react";

const DetailedListing = () => {
  //   const users = ["user1", "user2"];

  return (
    <div style={styles.pageContainer}>
      <Typography style={styles.title}>Cup Noodle</Typography>

      <div style={styles.scrollableContent}>
        <div style={styles.card}>
          {/* card media */}
          <div style={styles.content}>
            <CardMedia
              component="img"
              sx={{ maxWidth: "20%", maxHeight: "20%", margin: "auto" }}
              image="https://m.media-amazon.com/images/I/71eWUsNaolL.jpg"
              alt="Cup Noodle"
            />
            <p style={styles.subtitle}>500 Points</p>
          </div>
        </div>
        {/* description */}
        <div style={styles.descriptionContainer}>
          <p>
            Chicken Flavour. This instant cup noodle contains chicken broth with
            a savoury flavour and a distinct chicken aroma.
          </p>
        </div>

        {/* action button */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px", // Adjust for spacing between elements
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            style={{
              width: "50%", // Each item gets 50% width
              textAlign: "left",
            }}
          >
            Your Points: 300 Points
          </Typography>
          <button style={styles.button}>Purchase</button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  scrollableContent: {
    flex: 1,
    overflowY: "auto",
    height: "100%",
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "row" as "row",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "12px",
    paddingRight: "12px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: "20px",
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column" as "column",
    width: "fit-content",
    alignItems: "center",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "15px",
    color: "#777",
  },
  reward: {
    backgroundColor: "#f0f0f0",
    padding: "6px 12px",
    alignItems: "center",
  },
  points: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  fixedButtonContainer: {
    position: "fixed",
    bottom: "56px",
    left: 0,
    right: 0,
    padding: "12px",
    backgroundColor: "#fff",
    zIndex: 10,
    display: "flex",
    gap: "12px",
  },
  button: {
    width: "fit-content", // Each item gets 50% width
    backgroundColor: "black",
    color: "white",
    padding: "15px 30px",
    border: "none",
    borderRadius: "4px",
    textAlign: "center",
    cursor: "pointer",
  },
  secondaryButton: {
    backgroundColor: "gray",
  },
  descriptionContainer: {
    marginTop: "20px",
  },
};

export default DetailedListing;
