// src/pages/admin-dashboard.js
import React from 'react';
import AdminUserManagement from '../components/AdminUserManagement';
import SystemHealth from '../components/SystemHealth';
import TransactionMonitor from '../components/TransactionMonitor';
import withAuth from '@/components/hoc/withAuth';
const AdminDashboard = () => {
  return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome to the admin dashboard. Here you can see the statistics and manage the application.</p>
        <AdminUserManagement />
        <SystemHealth />
        <TransactionMonitor />
      </div>
  );
};


export default withAuth(AdminDashboard);
