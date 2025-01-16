import React, { useEffect, useState } from "react";
import axios from '../../utils/axios';

interface Transaction {
    _id: string;
    item: string;
    status: "approved" | "pending" | "declined";
    username: string;
    createdAt: string;
}

interface InventoryItem {
    name: string;
    image: string;
}

interface PurchasesCardProps {
    transaction: Transaction;
    handleApprove: (id: string) => void;
    handleCancel: (id: string) => void;
}

const PurchasesCard: React.FC<PurchasesCardProps> = ({ transaction, handleApprove, handleCancel }) => {
    const [imageUrl, setImageUrl] = useState<string>("https://artsynest.in/upload/products/product-no-image.jpg");

    useEffect(() => {
        const fetchImageUrl = async () => {
            try {
                const { data }: { data: InventoryItem } = await axios.get(`/inventory/name/${transaction.item}`);
                setImageUrl(data.image);
            } catch (error) {
                console.error("Error fetching image URL:", error);
            }
        };

        fetchImageUrl();
    }, [transaction.item]);

    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <p style={styles.description}>Purchase ID: {transaction._id}</p>
                <p style={styles.description}>
                    {new Date(transaction.createdAt).toLocaleDateString()}
                </p>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <img
                    src={imageUrl}
                    alt={transaction.item}
                    style={styles.icon}
                />
                <div>
                    <p style={styles.description}>Status: {transaction.status}</p>
                    <h2 style={styles.title}>{transaction.item}</h2>
                    <p style={styles.description}>Purchased by {transaction.username}</p>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={styles.invalid} onClick={() => handleCancel(transaction._id)}>
                    <span>Cancel Purchase</span>
                </div>
                <div style={styles.valid} onClick={() => handleApprove(transaction._id)}>
                    <span>Approve Purchase</span>
                </div>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #DDDDDD",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#fff",
        width: "80vw",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "8px 0",
    },
    description: {
        fontSize: "14px",
        color: "#757575",
        margin: "8px 0",
    },
    invalid: {
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        border: "1px solid #DDDDDD",
        borderRadius: "8px",
        padding: "4px 8px",
        fontWeight: "bold",
        fontSize: "14px",
        width: "48%",
        cursor: "pointer",
    },
    valid: {
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        color: "white",
        backgroundColor: "black",
        borderRadius: "8px",
        padding: "4px 8px",
        fontWeight: "bold",
        fontSize: "14px",
        width: "48%",
        cursor: "pointer",
    },
};

export default PurchasesCard;