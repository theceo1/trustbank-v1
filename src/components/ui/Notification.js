import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button onClick={() => setVisible(false)}>X</button>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info']).isRequired,
};

export default Notification;
