// src/pages/transactionHistory.js
import React, { useState, useEffect } from 'react';
import TransactionTable from '@/components/ui/TransactionTable';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions');
      const data = await response.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default TransactionHistory;
