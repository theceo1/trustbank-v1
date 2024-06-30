// src/components/ui/Button.js

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  variant = 'solid',
  size = 'medium',
  children,
  className = '',
  ...props
}) => {
  let baseStyles = 'py-2 px-4 rounded focus:outline-none';
  let sizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    icon: 'p-2'
  };
  let variantStyles = {
    solid: 'bg-teal-500 text-white hover:bg-teal-600',
    outline: 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['solid', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'icon']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
