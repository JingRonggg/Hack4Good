import React, { useEffect, useState } from "react";
import HistoryCard from "../../components/TransactionHistory/HistoryCard";
import axios from "utils/axios";
import { useAuth } from "contexts/AuthContext";

interface Transaction {
  _id: string;
  item: string;
  status: "approved" | "pending" | "declined";
  username: string;
  points: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const HistoryPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { account } = useAuth();

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!account || !account.username) {
        setError(new Error("User not logged in"));
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`/transaction/username/${account.username}`);
        setTransactions(response.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [account]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading transactions: {error.message}</p>;
  }

  return (
    <div style={{ width: "90%", paddingBottom: "70px" }}>
      <h1>Transaction History</h1>
      {transactions.map((transaction) => (
        <div key={transaction._id}>
          <p style={{ color: "#5E5E5E" }}>{transaction.createdAt ? new Date(transaction.createdAt).toLocaleDateString() : "Unknown Date"}</p>
          <HistoryCard transaction={transaction} />
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;