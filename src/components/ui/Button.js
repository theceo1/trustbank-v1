import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, children }) => {
  const baseClass = 'py-2 px-4 rounded focus:outline-none text-base';
  const variantClass = variant === 'outline'
    ? 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white'
    : '';

  return (
    <button className={`${baseClass} ${variantClass}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
