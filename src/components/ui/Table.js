import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      {children}
    </table>
  </div>
);

export const TableHeader = ({ children }) => (
  <thead>
    {children}
  </thead>
);

export const TableRow = ({ children }) => (
  <tr>
    {children}
  </tr>
);

export const TableHead = ({ children }) => (
  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-medium text-gray-700">
    {children}
  </th>
);

export const TableBody = ({ children }) => (
  <tbody>
    {children}
  </tbody>
);

export const TableCell = ({ children }) => (
  <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">
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

export default Table;
