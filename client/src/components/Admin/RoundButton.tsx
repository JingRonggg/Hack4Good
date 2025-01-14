import React from "react";
import { useNavigate } from "react-router";

const RoundButton = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/admin/add-tasks");
    }

    return (
        <button
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                fontWeight: "bold",
            }}
            onClick={handleClick}
        >
            +
        </button>
    );
};

export default RoundButton;
