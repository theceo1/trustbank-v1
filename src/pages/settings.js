// src/pages/settings.js

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const Settings = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold">Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Settings options will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
