import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { CSSProperties } from "react";

const DetailedListing = () => {
  //   const users = ["user1", "user2"];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.scrollableContent}>
        <div style={styles.card}>
          <div style={styles.content}>
            <text style={styles.title}>Cup Noodle</text>
            <CardMedia
              component="img"
              sx={{ width: 300, height: 300, margin: "auto" }}
              image="https://m.media-amazon.com/images/I/71eWUsNaolL.jpg"
              alt="Cup Noodle"
            />
            <p style={styles.subtitle}>500 Points</p>
          </div>
        </div>

        <div style={styles.descriptionContainer}>
          <p>
            Chicken Flavour. This instant cup noodle contains chicken broth with
            a savoury flavour and a distinct chicken aroma.
          </p>
        </div>
        <div style={{ display: "flex", alignSelf: "stretch" }}>
          <h3>
            Your Points: <br></br> 300 Points
          </h3>
          <div style={{ padding: "20px 200px" }}></div>
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
    height: "100vh",
    width: "100%",
  },
  scrollableContent: {
    flex: 1,
    overflowY: "auto",
    padding: "12px",
    width: "100%",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "12px",
    paddingRight: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: "20px",
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column" as "column",
    width: "100%",
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
    backgroundColor: "black",
    color: "white",
    padding: "12px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    fontSize: "15px",
    flex: 1,
  },
  secondaryButton: {
    backgroundColor: "gray",
  },
  descriptionContainer: {
    marginTop: "20px",
  },
};

export default DetailedListing;
