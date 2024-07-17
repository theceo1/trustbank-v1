import React from 'react';
import withAuth from '@/components/hoc/withAuth';

const Admin = () => {
  return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
        <p>Welcome to the admin page. Here you can manage the application.</p>
      </div>
  );
};

export default withAuth(Admin);
