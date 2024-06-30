// src/components/ui/ReceiveForm.js
import React from 'react';

const ReceiveForm = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Receive Cryptocurrency</h2>
      <p>To receive cryptocurrency, share your wallet address with the sender.</p>
      {/* Display wallet address */}
      <p className="mt-4 font-mono">Your Wallet Address: <strong>1A2b3C4d5E6F...</strong></p>
    </div>
  );
};

export default ReceiveForm;
