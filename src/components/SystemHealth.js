// src/components/SystemHealth.js
import React, { useState, useEffect } from 'react';

const SystemHealth = () => {
  const [healthStatus, setHealthStatus] = useState('Unknown');

  useEffect(() => {
    fetchSystemHealth();
  }, []);

  const fetchSystemHealth = async () => {
    const response = await fetch('/api/admin/system-health');
    const data = await response.json();
    setHealthStatus(data.status);
  };

  return (
    <div>
      <h2>System Health</h2>
      <p>Status: {healthStatus}</p>
    </div>
  );
};

export default SystemHealth;
