// src/pages/mission.js

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export default function Mission() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        At TrustBank, our mission is to empower individuals globally by providing accessible financial services to one billion people. We believe that financial inclusion is key to a better future, and we are dedicated to making this vision a reality.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Through innovative solutions and a commitment to transparency, we strive to build trust with our users and create a secure financial ecosystem for everyone.
      </p>
    </div>
  );
}
