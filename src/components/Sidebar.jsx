import { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "≪" : "≫"}
      </button>
      {isOpen && <div className="sidebar-content">{children}</div>}
    </div>
  );
};

export default Sidebar;
