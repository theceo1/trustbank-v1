// src/components/ui/dropdown-menu.js
import React from 'react';
import PropTypes from 'prop-types';

export const DropdownMenu = ({ children }) => {
  return <div className="dropdown-menu">{children}</div>;
};

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DropdownMenuTrigger = ({ children }) => {
  return <div className="dropdown-trigger">{children}</div>;
};

DropdownMenuTrigger.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DropdownMenuContent = ({ children }) => {
  return <div className="dropdown-content">{children}</div>;
};

DropdownMenuContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DropdownMenuItem = ({ children }) => {
  return <div className="dropdown-item">{children}</div>;
};

DropdownMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DropdownMenuSeparator = () => {
  return <div className="dropdown-separator"></div>;
};
