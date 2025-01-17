import React, { useEffect, useState } from "react";
import HomePageDashboardCard from "components/Home/Card";
import PurchaseHistoryCard from "components/Home/PurchaseHistoryCard";
import PendingTaskCard from "components/Home/PendingTasksCard";
import { useAuth } from "contexts/AuthContext";
import axios from "utils/axios";

const HomePage: React.FC = () => {
  const { account } = useAuth();
  interface Transaction {
    id: string;
    label: string;
    status: string;
    purchaseDate: string;
    media: string;
    point: number;
  }
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!account?.username) return;

    const fetchTransactions = async () => {
      try {
        const transactionResponse = await axios.get(`/transaction/username/${account.username}`);
        const transactionsData = transactionResponse.data;
    
        const transactionsWithDetails = await Promise.all(
          transactionsData.map(async (transaction: any) => {
            try {
              // Extract item name, removing "Purchase Declined: " if present
              let itemName = transaction.item;
              if (itemName.startsWith("Purchase Declined: ")) {
                itemName = itemName.replace("Purchase Declined: ", "").trim();
              }
    
              // Fetch inventory details using the extracted item name
              const inventoryResponse = await axios.get(`/inventory/name/${itemName}`);
              const inventory = inventoryResponse.data;
    
              return {
                id: transaction._id,
                label: transaction.item, // Keep original transaction label
                status: transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1),
                purchaseDate: new Date(transaction.createdAt).toLocaleDateString("en-GB"),
                point: transaction.points || 0,
                rawDate: new Date(transaction.createdAt),
                media: inventory.image, // Add image from inventory details
                price: inventory.price, // Include price
                description: inventory.description, // Include description
              };
            } catch (error) {
              console.error(`Error fetching inventory for ${transaction.item}:`, error);
              return { 
                id: transaction._id,
                label: transaction.item,
                status: transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1),
                purchaseDate: new Date(transaction.createdAt).toLocaleDateString("en-GB"),
                point: transaction.points || 0,
                rawDate: new Date(transaction.createdAt),
                media: "", // Default empty if fetch fails
                price: 0,
                description: "No description available",
              };
            }
          })
        );
    
        // Sort transactions by date (newest first)
        transactionsWithDetails.sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());
    
        // Filter transactions where points <= 0
        const filteredTransactions = transactionsWithDetails.filter((transaction) => transaction.point <= 0);
    
        setTransactions(filteredTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };    
    
    const fetchTasks = async () => {
      try {
        const taskResponse = await axios.get(`/task/username/${account.username}`);
        const allTasks = taskResponse.data;

        // Filter tasks with status "pendingCompletion"
        const pendingTasks = allTasks
          .filter((task: any) => task.status === "pendingCompletion")
          .map((task: any) => ({
            id: task._id,
            label: task.task,
            dateline: new Date(task.createdAt).toLocaleDateString("en-GB"),
            point: task.points || 0, // Assuming points exist in the task model
          }));

        setTasks(pendingTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTransactions();
    fetchTasks();
  }, [account?.username]);

  return (
    <div style={{ padding: "20px", width: "90%", paddingBottom: "70px" }}>
      <h1>
        Hello <i>{account?.username}</i>
      </h1>

      <div>
        <HomePageDashboardCard />
      </div>

      <h3>Purchase History</h3>
      <div>
        <PurchaseHistoryCard transactions={transactions} />
      </div>

      <h3>Pending Tasks</h3>
      <div>
        <PendingTaskCard tasks={tasks} />
      </div>
    </div>
  );
};

export default HomePage;
