import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ type, message }) => {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
