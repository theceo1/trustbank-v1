// src/pages/company.js

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const Company = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">About TrustBank</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Launched in 2024, TrustBank has quickly grown into a leading financial institution focused on empowering individuals and fostering innovation in the web3 financial sector. Our goal is to provide secure, cheaper and a more transparent financial solutions, globally..
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        With a team of dedicated professionals and a commitment to ethical practices, TrustBank is at the forefront of financial technology, striving to make a positive impact in the lives of our customers.
      </p>
    </div>
  );
}


export default Company;