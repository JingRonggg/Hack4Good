import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router";
import { Button, TextField } from "@mui/material";
import UploadPhoto from "../../../components/Admin/UploadPhoto";

const AdminEditItemPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [itemData, setItemData] = useState({
        name: "",
        quantity: 0,
        price: 0,
        status: "",
        image: "",
        description: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                if (!id) {
                    throw new Error("Item ID is missing");
                }
                const { data } = await axios.get(`/inventory/${id}`);
                setItemData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching item data:", error);
                setError("Failed to fetch item data. Please try again later.");
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    const handleUpdate = async () => {
        try {
            if (!id) {
                throw new Error("Item ID is missing");
            }
            await axios.put(`/inventory/${id}`, itemData);
            navigate("/admin/manage-items");
        } catch (error) {
            console.error("Error updating item:", error);
            setError("Failed to update item. Please try again.");
        }
    };

    const handleDelete = async () => {
        try {
            if (!id) {
                throw new Error("Item ID is missing");
            }
            await axios.delete(`/inventory/${id}`);
            navigate("/admin/manage-items");
        } catch (error) {
            console.error("Error deleting item:", error);
            setError("Failed to delete item. Please try again.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setItemData({ ...itemData, [id]: value });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={{ width: "70vw", margin: "0 auto", paddingBottom: "70px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <AiOutlineLeft
                    style={{ marginRight: "10px", cursor: "pointer" }}
                    onClick={() => navigate("/admin/manage-items")}
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
                onClick={handleUpdate}
                style={{
                    width: "70vw",
                    border: "1px solid",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "8px",
                    marginTop: "30px",
                }}
            >
                Update Item
            </Button>
            <Button
                onClick={handleDelete}
                style={{
                    width: "70vw",
                    border: "1px solid",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "8px",
                    marginTop: "15px",
                }}
            >
                Delete Item
            </Button>
        </div>
    );
};

export default AdminEditItemPage;
