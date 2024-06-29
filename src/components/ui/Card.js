import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children, className, ...props }) => {
  return <div className={`card ${className}`} {...props}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardHeader = ({ children, className, ...props }) => {
  return <div className={`card-header ${className}`} {...props}>{children}</div>;
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardTitle = ({ children, className, ...props }) => {
  return <div className={`card-title ${className}`} {...props}>{children}</div>;
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardContent = ({ children, className, ...props }) => {
  return <div className={`card-content ${className}`} {...props}>{children}</div>;
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
