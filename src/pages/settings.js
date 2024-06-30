// src/pages/settings.js
import React, { useState, useEffect } from 'react';
import SettingsForm from '@/components/ui/SettingsForm';

const Settings = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const response = await fetch('/api/settings');
      const data = await response.json();
      setSettings(data);
    };

    fetchSettings();
  }, []);

  const handleSave = async (updatedSettings) => {
    const response = await fetch('/api/settings', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSettings),
    });

    if (response.ok) {
      const data = await response.json();
      setSettings(data);
    }
  };

  return (
    <div className="container mx-auto py-8">
      {settings ? (
        <SettingsForm settings={settings} onSave={handleSave} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Settings;
