// src/pages/admin/dashboard.js
import React from 'react';
import AdminRoute from '@/components/AdminRoute';

const AdminDashboard = () => {
  return (
    <div>
      {/* Include the HTML structure from the template here */}
    </div>
  );
};

const AdminDashboardPage = () => (
  <AdminRoute>
    <AdminDashboard />
  </AdminRoute>
);

AdminDashboardPage.displayName = 'AdminDashboardPage';

export default AdminDashboardPage;
