import React from "react";
import RoundButton from "components/Admin/RoundButton";
import { useNavigate } from "react-router";
import { AiOutlineLeft } from "react-icons/ai";
import ItemCard from "components/Admin/ItemCard";

const AdminManageItemsPage: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/store");
  }

  function addItem() {
    navigate("/admin/add-item");
  }

  return (
    <div style={{ width: "90%" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <AiOutlineLeft
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={handleClick}
        />
        <h1 style={{ margin: "0 auto" }}>Manage Items</h1>
      </div>
      <ItemCard />
      <div style={{ position: "absolute", bottom: "80px", right: "30px" }}>
        <RoundButton onClick={addItem} />
      </div>
    </div>
  );
};

export default AdminManageItemsPage;
