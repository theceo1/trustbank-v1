// src/components/ui/Card.js

import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children, className = '' }) => (
  <div className={`p-4 rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-2 ${className}`}>
    {children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardTitle = ({ children, className = '' }) => (
  <h2 className={`text-lg font-bold ${className}`}>
    {children}
  </h2>
);

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardContent = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
