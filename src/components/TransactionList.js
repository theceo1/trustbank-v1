// src/components/TransactionList.js
import React, { useState } from 'react';

const TransactionList = () => {
  const [amount, setAmount] = useState('');
  const [transactionFee, setTransactionFee] = useState(0);

  const fetchTransactionFee = async (amount) => {
    const response = await fetch('/api/transaction-fee', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });
    const data = await response.json();
    setTransactionFee(data.fee);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    fetchTransactionFee(value);
  };

  return (
    <div>
      <h2>Transaction List</h2>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
      </div>
      <div>Transaction Fee: {transactionFee}</div>
      {/* Existing transaction list rendering logic */}
    </div>
  );
};

export default TransactionList;
