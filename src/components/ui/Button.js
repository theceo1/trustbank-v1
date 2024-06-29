// src/components/ui/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  variant = 'solid', // Default parameter
  size = 'medium', // Default parameter
  children,
  ...props
}) => {
  let className = 'btn';
  if (variant === 'outline') className += ' btn-outline';
  if (size === 'icon') className += ' btn-icon';

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['solid', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'icon']),
  children: PropTypes.node.isRequired,
};

export default Button;
