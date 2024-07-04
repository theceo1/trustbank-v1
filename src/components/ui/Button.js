// src/components/ui/Button.js

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ children, variant, className, ...props }) => {
  const baseStyles = 'py-2 px-4 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105';
  const variants = {
    solid: 'bg-teal-500 text-white hover:bg-teal-600',
    outline: 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white',
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['solid', 'outline']).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
