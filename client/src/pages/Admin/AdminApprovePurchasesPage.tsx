import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineLeft } from "react-icons/ai";
import axios from "utils/axios";
import PurchasesCard from "components/Admin/PurchasesCard";

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

  // Fetch transactions with status 'pending' on component mount
  useEffect(() => {
    const fetchPendingTransactions = async () => {
      try {
        const { data } = await axios.get<Transaction[]>(
          "/transaction/status/pending"
        );
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching pending transactions:", error);
      }
    };

    fetchPendingTransactions();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      await axios.post(`/transaction/approve/${id}`);

      // Remove the approved transaction from the list
      setTransactions((prev) =>
        prev.filter((transaction) => transaction._id !== id)
      );
    } catch (error) {
      console.error("Error approving transaction:", error);
    }
  };

  const handleCancel = async (id: string) => {
    try {
      await axios.put(`/transaction/${id}`, { status: "declined" });

      // Remove the canceled transaction from the list
      setTransactions((prev) =>
        prev.filter((transaction) => transaction._id !== id)
      );
    } catch (error) {
      console.error("Error canceling transaction:", error);
    }
  };

  const handleClick = () => {
    navigate("/admin/store");
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
    </div>
  );
};

export default AdminApprovePurchasesPage;
