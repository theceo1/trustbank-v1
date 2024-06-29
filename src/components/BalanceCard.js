import React from 'react';

const BalanceCard = ({ balance, currency }) => {
  return (
    <div className="bg-teal-500 text-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-2">Account Balance</h2>
      <p className="text-2xl">{currency} {balance}</p>
    </div>
  );
};

export default BalanceCard;
