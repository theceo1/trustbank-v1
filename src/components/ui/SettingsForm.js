// src/components/ui/SettingsForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SettingsForm = ({ settings, onSave }) => {
  const [notification, setNotification] = useState(settings.notification);
  const [security, setSecurity] = useState(settings.security);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ notification, security });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Notification</label>
          <input
            type="checkbox"
            checked={notification}
            onChange={(e) => setNotification(e.target.checked)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Security</label>
          <input
            type="checkbox"
            checked={security}
            onChange={(e) => setSecurity(e.target.checked)}
          />
        </div>
        <button type="submit" className="bg-teal-500 text-white p-2 rounded">Save</button>
      </form>
    </div>
  );
};

SettingsForm.propTypes = {
  settings: PropTypes.shape({
    notification: PropTypes.bool,
    security: PropTypes.bool,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default SettingsForm;
