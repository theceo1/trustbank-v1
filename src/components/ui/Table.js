import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({ children }) => {
  return <table className="table">{children}</table>;
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TableHeader = ({ children }) => {
  return <thead className="table-header">{children}</thead>;
};

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TableRow = ({ children }) => {
  return <tr className="table-row">{children}</tr>;
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TableHead = ({ children }) => {
  return <th className="table-head">{children}</th>;
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TableBody = ({ children }) => {
  return <tbody className="table-body">{children}</tbody>;
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TableCell = ({ children }) => {
  return <td className="table-cell">{children}</td>;
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};
