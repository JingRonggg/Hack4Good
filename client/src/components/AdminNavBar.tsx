import React from "react";
import { FaStore, FaTrophy, FaUsers } from "react-icons/fa";
import "../styles/Navbar.css"; // Import your CSS styles
import { useNavigate } from "react-router"; // If you're using React Router

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const AdminNavbar: React.FC = () => {
  const navigate = useNavigate();

  const navItems: NavItemProps[] = [
    { icon: <FaStore />, label: "Store", path: "/admin/store" },
    { icon: <FaTrophy />, label: "Rewards", path: "/admin/tasks" },
    { icon: <FaUsers />, label: "Profile", path: "/admin/manage-users" },
  ];

  return (
    <div className="navbar">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="nav-item"
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default AdminNavbar;
