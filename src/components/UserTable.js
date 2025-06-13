import React from "react";
import "./styles/UserTable.css";

const UserTable = ({ users = [] }) => (
  <table className="user-table">
    <thead>
      <tr>
        <th>Record ID</th>
        <th>Teacher Name</th>
        <th>Teacher ID</th>
        <th>Department</th>
        <th>Students</th>
        <th>Status</th>
        <th>All Details</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.teacherId}</td>
            <td>{user.department}</td>
            <td>{user.students}</td>
            <td>
              <span className={`status ${user.status.toLowerCase()}`}>
                {user.status}
              </span>
            </td>
            <td>
              <a href="#">View More &gt;</a>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7" style={{ textAlign: "center" }}>
            No records available.
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
