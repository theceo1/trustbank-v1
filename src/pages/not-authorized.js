import React from 'react';

const NotAuthorized = () => {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-red-600">Not Authorized</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  };
  
  export default NotAuthorized;
  