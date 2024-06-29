// src/components/ui/Notification.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Notification = ({ message, type }) => {
  const types = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white',
  };

  const classes = classNames('notification p-4 rounded shadow-md', types[type]);

  return <div className={classes}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
};

Notification.defaultProps = {
  type: 'info',
};

export default Notification;
