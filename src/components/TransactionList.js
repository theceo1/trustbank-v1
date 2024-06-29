import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-4">Recent Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id} className="mb-2">
            <div className="flex justify-between">
              <span>{transaction.type}</span>
              <span>{transaction.amount} {transaction.currency}</span>
            </div>
            <div className="text-gray-500 text-sm">{transaction.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
