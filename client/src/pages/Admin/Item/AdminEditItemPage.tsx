import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material";
import UploadPhoto from "../../../components/Admin/UploadPhoto";

const AdminEditItemPage: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/manage-items");
  }

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <AiOutlineLeft
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={handleClick}
        />
        <h1 style={{ margin: "0 auto" }}>Edit Item</h1>
      </div>
      <UploadPhoto />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <TextField
          id="item-name"
          label="Item Name"
          multiline
          rows={1}
          defaultValue="Nissin Cup Noodles"
          style={{ width: "100%" }}
        />
        <TextField
          id="points-required"
          label="Points Required"
          multiline
          rows={1}
          defaultValue="500"
          style={{ width: "100%" }}
        />
        <TextField
          id="remaining-stock"
          label="Remaining Stock"
          multiline
          rows={1}
          defaultValue="100"
          style={{ width: "100%" }}
        />
        <TextField
          id="item-description"
          label="Item Description"
          multiline
          rows={4}
          defaultValue="This is a sample description"
          style={{ width: "100%" }}
        />
      </div>
      <Button
        style={{
          width: "70vw",
          border: "1px, solid",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          marginTop: "300px",
        }}
      >
        Update Item
      </Button>
    </div>
  );
};

export default AdminEditItemPage;
