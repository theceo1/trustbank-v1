// src/components/AdminUserManagement.js
import React, { useState, useEffect } from 'react';

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('/api/admin/users');
    const data = await response.json();
    setUsers(data.users);
  };

  const suspendUser = async (userId) => {
    await fetch(`/api/admin/users/${userId}/suspend`, { method: 'POST' });
    fetchUsers();
  };

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.email} <button onClick={() => suspendUser(user._id)}>Suspend</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUserManagement;
