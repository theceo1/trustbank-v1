// src/components/TransactionMonitor.js
import React, { useState, useEffect } from 'react';

const TransactionMonitor = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await fetch('/api/admin/transactions');
    const data = await response.json();
    setTransactions(data.transactions);
  };

  return (
    <div>
      <h2>Transaction Monitor</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.user}: {transaction.amount} {transaction.currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionMonitor;
