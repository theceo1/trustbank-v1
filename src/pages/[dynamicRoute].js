// src/pages/[dynamicRoute].js
import { useRouter } from 'next/router';
import React from 'react';

const DynamicRoutePage = () => {
  const router = useRouter();
  const { dynamicRoute } = router.query;

  return (
    <div>
      <h1>Dynamic Route: {dynamicRoute}</h1>
    </div>
  );
};

export default DynamicRoutePage;
