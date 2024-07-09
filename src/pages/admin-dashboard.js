// src/pages/admin-dashboard.js
import React from 'react';
import AdminUserManagement from '../components/AdminUserManagement';
import SystemHealth from '../components/SystemHealth';
import TransactionMonitor from '../components/TransactionMonitor';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminUserManagement />
      <SystemHealth />
      <TransactionMonitor />
    </div>
  );
};

export default AdminDashboard;
