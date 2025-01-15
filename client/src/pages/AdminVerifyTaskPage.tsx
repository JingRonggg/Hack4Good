import React from "react";
import VerifyTaskCard from "../components/Admin/VerifyTaskCard"
import { useNavigate } from "react-router";
import { AiOutlineLeft } from "react-icons/ai";

const AdminVerifyTaskPage: React.FC = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/admin/manage-tasks");
    }

    return(
        <div style={{ width: "70vw", margin: "0 auto", paddingBottom: "70px"  }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                            <AiOutlineLeft style={{ marginRight: "10px", cursor: "pointer" }} onClick={handleClick} />
                            <h1 style={{ margin: "0 auto" }}>Verify Tasks</h1>
            </div>
            < VerifyTaskCard />
        </div>
    )
};

export default AdminVerifyTaskPage;