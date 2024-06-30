import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ children }) => (
  <table className="min-w-full bg-white">
    {children}
  </table>
);

const TableHeader = ({ children }) => (
  <thead>
    {children}
  </thead>
);

const TableRow = ({ children }) => (
  <tr>
    {children}
  </tr>
);

const TableHead = ({ children }) => (
  <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-gray-600">
    {children}
  </th>
);

const TableBody = ({ children }) => (
  <tbody>
    {children}
  </tbody>
);

const TableCell = ({ children }) => (
  <td className="py-2 px-4 border-b border-gray-200">
    {children}
  </td>
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
