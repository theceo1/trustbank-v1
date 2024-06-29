// src/pages/profile.js

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const Profile = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold">Profile</h2>
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>User details and profile information will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
