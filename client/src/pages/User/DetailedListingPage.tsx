import React, { useEffect, useState } from "react";
import DetailedListing from "../../components/Minimart/DetailedListing";
import { useParams } from "react-router";
import { useAuth } from "contexts/AuthContext";
import axios from 'utils/axios'
interface InventoryItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string
  quantity: number;
}

interface UserItem {
  points: number; 
  username: string;
}

const DetailedListingPage: React.FC = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState<InventoryItem | null>(null); 
  const [user, setUser] = useState<UserItem | null>(null);
  const [loading, setLoading] = useState(true);
  const { account } = useAuth();

  useEffect(() => {
    const fetchInventoryItem = async () => {
        try {
            const { data } = await axios.get(`/inventory/${id}`);
            setInventory(data);
            console.log("Inventory data:", data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching task data:", error);
            setLoading(false);
        }
    };

  fetchInventoryItem();
}, [id]);

    useEffect(() => {
      const fetchUserItem = async () => {
          try {
              const { data } = await axios.get(`/account/${account?.username}`);
              console.log(data);
              setUser(data);
              setLoading(false);
          } catch (error) {
              console.error("Error fetching user data:", error);
              setLoading(false);
          }
      };

    fetchUserItem();
}, [account?.username]);



if (loading) {
  return <p>Loading...</p>;
}

if (!inventory || !user) {
  return <p>Error: Could not load data</p>;
}

  return (
    <div style={{ width: "90%" }}>
      <DetailedListing inventory={inventory} user={user}
      />
    </div>
  );
};

export default DetailedListingPage;
