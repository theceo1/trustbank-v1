import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className }) => (
  <div className={`bg-white p-4 rounded-lg shadow ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

const CardHeader = ({ children }) => (
  <div className="mb-4">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold text-gray-800">
    {children}
  </h3>
);

const CardContent = ({ children }) => (
  <div className="text-gray-700">
    {children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Card, CardHeader, CardTitle, CardContent };
