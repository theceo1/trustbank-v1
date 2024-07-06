// src/components/ui/Button.js

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, onClick = () => {}, children, className = '' }) => {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
