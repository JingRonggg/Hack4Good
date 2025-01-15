import React, { useEffect, useState } from "react";
import axios from '../utils/axios'; // Import your custom axios instance
import { useNavigate } from "react-router";
import { AiOutlineLeft } from "react-icons/ai";
import PurchasesCard from "../components/Admin/PurchasesCard";

interface Transaction {
    _id: string;
    item: string;
    status: "approved" | "pending" | "declined";
    username: string;
    createdAt: string;
    imageUrl?: string;
}

const AdminApprovePurchasesPage: React.FC = () => {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Fetch transactions with status 'pending' on component mount
    useEffect(() => {
        const fetchPendingTransactions = async () => {
            try {
                const { data } = await axios.get<Transaction[]>("/transaction/status/pending");
                setTransactions(data);
            } catch (error) {
                console.error("Error fetching pending transactions:", error);
                setError("Failed to fetch pending transactions.");
            }
        };

        fetchPendingTransactions();
    }, []);

    const handleApprove = async (id: string) => {
        try {
            await axios.post(`/transaction/approve/${id}`);

            // Remove the approved transaction from the list
            setTransactions((prev) => prev.filter((transaction) => transaction._id !== id));
        } catch (error) {
            console.error("Error approving transaction:", error);
            setError("Failed to approve transaction. Please try again.");
        }
    };

    const handleCancel = async (id: string) => {
        try {
            await axios.put(`/transaction/${id}`, { status: "declined" });

            // Remove the canceled transaction from the list
            setTransactions((prev) => prev.filter((transaction) => transaction._id !== id));
        } catch (error) {
            console.error("Error canceling transaction:", error);
            setError("Failed to cancel transaction. Please try again.");
        }
    };

    const handleClick = () => {
        navigate("/admin/store");
    };

    const closeErrorModal = () => {
        setError(null);
    };

    return (
        <div style={{ width: "70vw", margin: "0 auto", paddingBottom: "70px" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <AiOutlineLeft style={{ marginRight: "10px", cursor: "pointer" }} onClick={handleClick} />
                <h1 style={{ margin: "0 auto" }}>Approve Purchases</h1>
            </div>
            {transactions.length > 0 ? (
                transactions.map((transaction) => (
                    <PurchasesCard
                        key={transaction._id}
                        transaction={transaction}
                        handleApprove={handleApprove}
                        handleCancel={handleCancel}
                    />
                ))
            ) : (
                <p>No pending purchases.</p>
            )}

            {/* Error Modal */}
            {error && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.modal}>
                        <p>{error}</p>
                        <button onClick={closeErrorModal} style={modalStyles.button}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const modalStyles = {
    overlay: {
        position: "fixed" as "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center" as "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    button: {
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default AdminApprovePurchasesPage;
