import { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "≪" : "≫"}
      </button>
      {isOpen && (
        <div className="sidebar-content">
          <h2>{title}</h2>
          {children}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
