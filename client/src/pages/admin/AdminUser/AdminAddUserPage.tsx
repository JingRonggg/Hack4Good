import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { Avatar } from "@mui/material";

const AdminAddUserPage: React.FC = () => {
    const navigate = useNavigate();
    const [role, setRole] = React.useState('');

    function handleClick() {
        navigate("/admin/manage-users");
    }

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value);
      };

    return (
        <div style={{ width: "70vw", margin: "0 auto", paddingBottom: "70px"  }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <AiOutlineLeft style={{ marginRight: "10px", cursor: "pointer" }} onClick={handleClick} />
                <h1 style={{ margin: "0", flexGrow: 1, textAlign: "center" }}>Add User</h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <Avatar
                    style={{
                        width: "100px",
                        height: "100px",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                </Avatar>
                <Button variant="text" style={{ color: "#5E5E5E", fontWeight: "bold", textTransform: "none" }}>
                    Change Photo
                </Button>
            </div>
            <div
                style={{
                    display: "flex", alignItems: "center", flexDirection: "column", gap: "20px", marginTop: "20px",
                }}
            >
            <TextField
                id="name"
                label="Name"
                multiline
                rows={1}
                defaultValue="Jasper"
                style={{ width: "100%" }}
            />
            <TextField
                id="mobile-number" 
                label="Mobile Number"
                multiline
                rows={1}
                defaultValue="9123 4567"
                style={{ width: "100%" }}
            />
            <TextField
                id="password" 
                label="New Password"
                multiline
                rows={1}
                defaultValue="password123"
                style={{ width: "100%" }}
            />
            <TextField
                id="confirmation" 
                label="Re-enter New Password"
                multiline
                rows={1}
                defaultValue="password123"
                style={{ width: "100%" }}
            />
            <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Role"
                value={role}
                onChange={handleChange}
                >
                <MenuItem value={10}>User</MenuItem>
                <MenuItem value={20}>Admin</MenuItem>
                </Select>
            </FormControl>

            </div>
            <div style={{ position: "fixed", bottom: "100px", left: "50%", width:"70vw", transform: "translateX(-50%)", display:"flex", flexDirection: "column", gap: "10px"}}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#000",
                        color: "#fff",
                        fontWeight: "bold",
                        textTransform: "none",
                        width: "100%",
                    }}
                >
                    Add User
                </Button>
            </div>
        </div>
    );
};

export default AdminAddUserPage;
