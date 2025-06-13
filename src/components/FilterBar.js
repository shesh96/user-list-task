import React from "react";
import "./styles/FilterBar.css";

const FilterBar = ({ filters, onFilterChange }) => (
  <div className="filter-bar">
    <div className="dropdown">
      <label>Department</label>
      <select onChange={(e) => onFilterChange("department", e.target.value)}>
        <option value="">All</option>
        {filters.departments.map((dep) => (
          <option key={dep} value={dep}>
            {dep}
          </option>
        ))}
      </select>
    </div>
    <div className="dropdown">
      <label>Status</label>
      <select onChange={(e) => onFilterChange("status", e.target.value)}>
        <option value="">All</option>
        {filters.statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default FilterBar;
