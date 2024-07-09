// src/components/ui/Button.js

import React from 'react';

const Button = ({ children, variant, className, ...props }) => {
  let variantClasses = '';
  switch (variant) {
    case 'solid':
      variantClasses = 'bg-teal-500 text-white hover:bg-teal-600';
      break;
    case 'outline':
      variantClasses = 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white';
      break;
    default:
      variantClasses = '';
  }

  return (
    <button className={`${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
