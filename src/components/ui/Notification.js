// src/components/ui/Notification.js

import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, type }) => {
  const types = {
    success: 'bg-teal-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg text-white ${types[type]}`}>
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']).isRequired,
};

export default Notification;
