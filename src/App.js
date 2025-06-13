import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import FilterBar from "./components/FilterBar";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";

const mockFilters = {
  departments: ["Finance", "Engineer", "Arts"],
  statuses: ["Active", "Inactive", "Blocked", "Suspended"],
};

const mockUsers = [
  { id: 1, name: "Conrad Alexander", teacherId: "10001", department: "Finance", students: 20, status: "Active" },
  { id: 2, name: "Marcelo Cruz", teacherId: "10002", department: "Engineer", students: 20, status: "Inactive" },
  { id: 3, name: "Bing Manalo", teacherId: "10003", department: "Arts", students: 16, status: "Blocked" },
  { id: 4, name: "Abby Andrews", teacherId: "10004", department: "Finance", students: 10, status: "Active" },
  { id: 5, name: "Conrad Alexander", teacherId: "10005", department: "Engineer", students: 20, status: "Active" },
  { id: 6, name: "Marcelo Cruz", teacherId: "10006", department: "Arts", students: 20, status: "Suspended" },
  { id: 7, name: "Bing Manalo", teacherId: "10007", department: "Arts", students: 16, status: "Active" },
  { id: 8, name: "Abby Andrews", teacherId: "10008", department: "Finance", students: 10, status: "Active" },
  { id: 9, name: "Conrad Alexander", teacherId: "10009", department: "Engineer", students: 20, status: "Inactive" },
  { id: 10, name: "Marcelo Cruz", teacherId: "10010", department: "Arts", students: 20, status: "Inactive" },
  { id: 11, name: "Sarah Johnson", teacherId: "10011", department: "Finance", students: 18, status: "Active" },
  { id: 12, name: "David Smith", teacherId: "10012", department: "Engineer", students: 22, status: "Active" },
  { id: 13, name: "Emily Davis", teacherId: "10013", department: "Arts", students: 15, status: "Suspended" },
  { id: 14, name: "Michael Brown", teacherId: "10014", department: "Finance", students: 25, status: "Active" },
  { id: 15, name: "Jessica Wilson", teacherId: "10015", department: "Engineer", students: 19, status: "Blocked" },
];

const App = () => {
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = (page) => (page === 1 ? 10 : 5); 

  const getUsersForPage = () => {
    const startIndex = currentPage === 1 ? 0 : 10 + (currentPage - 2) * 5;
    const endIndex = currentPage === 1 ? 10 : startIndex + 5;
    return filteredUsers.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil((filteredUsers.length - 10) / 5) + 1;

  const handleFilterChange = (filterKey, value) => {
    const filtered = mockUsers.filter(
      (user) =>
        (filterKey === "department" ? user.department === value : true) &&
        (filterKey === "status" ? user.status === value : true)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const filtered = mockUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerQuery) ||
        user.teacherId.includes(lowerQuery)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <TopBar onSearch={handleSearch} />
        <FilterBar filters={mockFilters} onFilterChange={handleFilterChange} />
        <UserTable users={getUsersForPage()} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default App;
