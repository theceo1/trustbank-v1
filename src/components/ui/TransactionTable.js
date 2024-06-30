// src/components/ui/TransactionTable.js
import React from 'react';
import PropTypes from 'prop-types';

const TransactionTable = ({ transactions }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left p-2">Date</th>
          <th className="text-left p-2">Type</th>
          <th className="text-left p-2">Amount</th>
          <th className="text-left p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className="p-2">{transaction.date}</td>
            <td className="p-2">{transaction.type}</td>
            <td className="p-2">{transaction.amount}</td>
            <td className="p-2">{transaction.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionTable;
