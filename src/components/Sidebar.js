import React, { useState } from "react";
import "./styles/Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="header">
        <div className="logo">QMS</div>
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <nav>
        <a href="#teachers" className="active">
          <span className="icon">🌍</span>
          {!isCollapsed && "Teachers"}
        </a>
        <a href="#department">
          <span className="icon">📡</span>
          {!isCollapsed && "Department"}
        </a>
        <a href="#library">
          <span className="icon">📘</span>
          {!isCollapsed && "Library"}
        </a>
        <a href="#add-teacher">
          <span className="icon">➕</span>
          {!isCollapsed && "Add Teacher"}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
