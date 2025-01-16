import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material";
import UploadPhoto from "../../../components/Admin/UploadPhoto";
import axios from "../../../utils/axios";

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
    const [error, setError] = useState<string | null>(null);

    function handleClick() {
        navigate("/admin/manage-items");
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setItemData({ ...itemData, [id]: id === "quantity" || id === "price" ? parseFloat(value) : value });
    };

    const handleAddItem = async () => {
        try {
            const finalData = {
                ...itemData,
                image: itemData.image || "https://artsynest.in/upload/products/product-no-image.jpg",
            };
            await axios.post("/inventory", finalData);
            navigate("/admin/manage-items");
        } catch (error) {
            console.error("Error adding item:", error);
            setError("Failed to add item. Please try again.");
        }
    };

    return (
        <div style={{ width: "70vw", margin: "0 auto", paddingBottom: "70px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <AiOutlineLeft style={{ marginRight: "10px", cursor: "pointer" }} onClick={handleClick} />
                <h1 style={{ margin: "0 auto" }}>Add Item</h1>
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