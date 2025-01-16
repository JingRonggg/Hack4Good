import React from "react";
import { FaHome, FaStore, FaTrophy, FaHistory, FaUser } from "react-icons/fa";
import "../styles/Navbar.css"; // Import your CSS styles
import { useNavigate } from "react-router"; // If you're using React Router

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const navItems: NavItemProps[] = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaStore />, label: "Store", path: "/store" },
    { icon: <FaTrophy />, label: "Rewards", path: "/rewards" },
    { icon: <FaHistory />, label: "History", path: "/history" },
    { icon: <FaUser />, label: "Profile", path: "/profile" },
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

export default Navbar;
