// src/components/ui/SendForm.js
import React, { useState } from 'react';

const SendForm = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/wallet/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address, amount }),
    });

    if (response.ok) {
      // Handle successful send
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Send Cryptocurrency</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-teal-500 text-white p-2 rounded">Send</button>
    </form>
  );
};

export default SendForm;
