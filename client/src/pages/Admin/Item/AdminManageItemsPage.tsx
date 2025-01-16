import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineLeft } from "react-icons/ai";
import axios from "utils/axios";
import ItemCard from "components/Admin/ItemCard";
import RoundButton from "components/Admin/RoundButton";

interface InventoryItem {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  status: string;
  image: string;
  description: string;
}

const AdminManageItemsPage: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<InventoryItem[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get("/inventory");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching inventory items:", error);
      }
    }

    fetchItems();
  }, []);

  function handleClick() {
    navigate("/admin/store");
  }

  function addItem() {
    navigate("/admin/add-item");
  }

  return (
    <div style={{ width: "70vw", paddingBottom: "70px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <AiOutlineLeft
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={handleClick}
        />
        <h1 style={{ margin: "0 auto" }}>Manage Items</h1>
      </div>
      {items.map((item) => (
        <ItemCard
          key={item._id}
          id={item._id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          status={item.status}
          image={item.image}
          description={item.description}
        />
      ))}
      <div style={{ position: "absolute", bottom: "80px", right: "30px" }}>
        <RoundButton onClick={addItem} />
      </div>
    </div>
  );
};

export default AdminManageItemsPage;
