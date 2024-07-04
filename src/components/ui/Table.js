// src/components/ui/Table.js

import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      {children}
    </table>
  </div>
);

const TableHeader = ({ children }) => (
  <thead>
    <tr className="w-full bg-teal-500 text-white">{children}</tr>
  </thead>
);

const TableRow = ({ children }) => (
  <tr className="bg-gray-100 border-b">{children}</tr>
);

const TableHead = ({ children }) => (
  <th className="text-left py-2 px-4 uppercase font-semibold text-sm">{children}</th>
);

const TableBody = ({ children }) => <tbody>{children}</tbody>;

const TableCell = ({ children }) => (
  <td className="text-left py-2 px-4">{children}</td>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Table, TableHeader, TableRow, TableHead, TableBody, TableCell };
