// src/components/ui/Notification.js
import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, type }) => (
  <div className={`notification ${type}`}>
    {message}
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info']).isRequired,
};

export default Notification;
