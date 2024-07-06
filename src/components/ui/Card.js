// src/components/ui/Card.js

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Card = ({ children, className = '', ...props }) => {
  const baseStyles = 'bg-white rounded-lg shadow-lg p-4';
  return (
    <div className={clsx(baseStyles, className)} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => {
  const baseStyles = 'mb-2';
  return (
    <div className={clsx(baseStyles, className)} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = '', ...props }) => {
  const baseStyles = 'text-xl font-bold text-black';
  return (
    <h3 className={clsx(baseStyles, className)} {...props}>
      {children}
    </h3>
  );
};

const CardContent = ({ children, className = '', ...props }) => {
  const baseStyles = 'text-black';
  return (
    <div className={clsx(baseStyles, className)} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Card, CardHeader, CardTitle, CardContent };
