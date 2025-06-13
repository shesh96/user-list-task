import React from "react";
import "./styles/SearchBar.css";

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    className="search-bar"
    placeholder="Search here..."
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
