import React from "react";
import icon from "../../assets/Avatar.jpg";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
import { Account } from "../../@types";

interface UserProfileCardProps {
  account: Account;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ account }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/update-user", { state: { account } });
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.leftcontent}>
          <img src={icon} style={styles.icon} />
          <div style={styles.content}>
            <Typography style={styles.title}>{account.username}</Typography>
            <Typography style={styles.subtitle}>
              {account.role} | Points: {account.points}
            </Typography>
          </div>
        </div>
        <div style={styles.arrow}>
          <AiOutlineRight onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "column",
    backgroundColor: "#fff",
    marginBottom: "10px",
  },
  content: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  leftcontent: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: "25px",
    fontWeight: "bold",
    padding: "5",
  },
  subtitle: {
    fontSize: "15px",
    color: "#777",
    gap: "10px",
  },
  icon: {
    width: "40",
    height: "40",
    marginRight: "10px",
  },
  arrow: {
    cursor: "pointer",
  },
};

export default UserProfileCard;
