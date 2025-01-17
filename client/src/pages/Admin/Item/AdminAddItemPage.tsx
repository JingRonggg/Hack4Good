import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "utils/axios";

const AdminAddItemPage: React.FC = () => {
  const navigate = useNavigate();

  const [itemData, setItemData] = useState({
    name: "",
    quantity: 0,
    price: 0,
    status: "regular",
    image: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    navigate("/admin/manage-items");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setItemData({
      ...itemData,
      [id]: id === "quantity" || id === "price" ? parseFloat(value) : value,
    });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAddItem = async () => {
    try {
      // const formData = new FormData();
      let uploadImageURL = itemData.image;

      // Append the file and item data to the FormData object
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        try {
          console.log("Uploading image...");
          const uploadResponse = await axios.post("/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          console.log("Upload response:", uploadResponse.data);

          uploadImageURL = uploadResponse.data.filePath;
          itemData.image = uploadImageURL;
          console.log("image url", itemData.image);
        } catch (error) {
          console.error("Error uploading image:", error);
          setError("Failed to upload image. Please try again.");
        }
      }
      const finalData = {
        ...itemData,
        image:
          uploadImageURL ||
          "https://artsynest.in/upload/products/product-no-image.jpg",
      };
      // Add the item with image path
      await axios.post("/inventory", finalData);
      console.log("done adding item");
      navigate("/admin/manage-items");
    } catch (error) {
      console.error("Error adding item:", error);
      setError("Failed to add item. Please try again.");
    }
  };

  return (
    <div style={{ width: "70vw", margin: "0 auto", paddingBottom: "70px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <AiOutlineLeft
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={handleClick}
        />
        <h1 style={{ margin: "0 auto" }}>Add Item</h1>
      </div>
      {/* <UploadPhoto onClick={} /> */}
      {/* upload photo */}
      <Box
        sx={{
          width: "100%",
          height: "200px",
          border: "2px solid #",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E0E0E0",
          cursor: "pointer",
          position: "relative",
          textAlign: "center",
        }}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <Typography style={{ fontSize: 30, color: "#000" }}> + </Typography>
        <Typography style={{ fontSize: 30, color: "#000" }}>
          {" "}
          Upload Product Photo{" "}
        </Typography>
        <input
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*"
        />
      </Box>

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
          id="name"
          label="Item Name"
          multiline
          rows={1}
          value={itemData.name}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          id="price"
          label="Points Required"
          multiline
          rows={1}
          value={itemData.price}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          id="quantity"
          label="Remaining Stock"
          multiline
          rows={1}
          value={itemData.quantity}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          id="description"
          label="Item Description"
          multiline
          rows={4}
          value={itemData.description}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>
      <Button
        onClick={handleAddItem}
        style={{
          width: "70vw",
          border: "1px solid",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          marginTop: "30px",
        }}
      >
        Add Item
      </Button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default AdminAddItemPage;
