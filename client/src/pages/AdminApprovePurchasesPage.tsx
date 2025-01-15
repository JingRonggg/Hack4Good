import React from "react";
import { useNavigate } from "react-router";
import { AiOutlineLeft } from "react-icons/ai";
import PurchasesCard from "../components/Admin/PurchasesCard";

const AdminApprovePurchasesPage: React.FC = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/admin/store");
    }

    return(
        <div style={{ width: "70vw", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                            <AiOutlineLeft style={{ marginRight: "10px", cursor: "pointer" }} onClick={handleClick} />
                            <h1 style={{ margin: "0 auto" }}>Approve Purchases</h1>
            </div>
            < PurchasesCard />
        </div>
    )
};

export default AdminApprovePurchasesPage;