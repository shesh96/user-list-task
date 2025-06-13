import React from "react";
import "./styles/TopBar.css";

const TopBar = ({ onSearch }) => (
  <div className="top-bar">
    <h2>Welcome, User!</h2>
    <div className="actions">
      <input
        type="text"
        placeholder="Search by name or ID..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="notification">🔔</button>
      <button className="profile">👤</button>
    </div>
  </div>
);

export default TopBar;
