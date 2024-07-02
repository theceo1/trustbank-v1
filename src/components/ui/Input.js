// src/components/ui/Input.js
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, value, onChange, placeholder, className = '', ...props }) => (
  <input
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`py-2 px-4 border rounded ${className}`}
    {...props}
  />
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
