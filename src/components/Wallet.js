import React, { useState, useEffect } from 'react';

const Wallet = () => {
  const [walletData, setWalletData] = useState([]);
  const [transferDetails, setTransferDetails] = useState({ recipient: '', symbol: '', amount: 0 });

  useEffect(() => {
    // Fetch wallet data
    fetch('http://localhost:5001/wallet')
      .then(response => response.json())
      .then(data => setWalletData(data));
  }, []);

  const handleTransaction = (type, symbol, amount) => {
    const updatedWallet = walletData.map((data) => {
      if (data.symbol === symbol) {
        if (type === 'deposit') {
          data.balance += amount;
        } else if (type === 'withdraw' && data.balance >= amount) {
          data.balance -= amount;
        }
      }
      return data;
    });
    setWalletData(updatedWallet);
  };

  const handleTransfer = () => {
    const { recipient, symbol, amount } = transferDetails;
    if (recipient && symbol && amount > 0) {
      const updatedWallet = walletData.map((data) => {
        if (data.symbol === symbol && data.balance >= amount) {
          data.balance -= amount;
        }
        return data;
      });
      setWalletData(updatedWallet);
      alert(`Transferred ${amount} ${symbol} to ${recipient}`);
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransferDetails({
      ...transferDetails,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl mb-4">Your Wallet</h2>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="text-left">Coin</th>
            <th className="text-left">Balance</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {walletData.map((data, index) => (
            <tr key={index}>
              <td>{data.coin} ({data.symbol})</td>
              <td>{data.balance.toLocaleString()} {data.symbol}</td>
              <td>
                <button
                  onClick={() => handleTransaction('deposit', data.symbol, 0.1)}
                  className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                >
                  Deposit
                </button>
                <button
                  onClick={() => handleTransaction('withdraw', data.symbol, 0.1)}
                  className="px-2 py-1 bg-red-500 text-white rounded mr-2"
                >
                  Withdraw
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg mb-2">Transfer Funds</h3>
      <div className="mb-4">
        <input
          type="text"
          name="recipient"
          value={transferDetails.recipient}
          onChange={handleInputChange}
          placeholder="Recipient"
          className="p-2 border rounded mr-2"
        />
        <select
          name="symbol"
          value={transferDetails.symbol}
          onChange={handleInputChange}
          className="p-2 border rounded mr-2"
        >
          <option value="">Select Coin</option>
          {walletData.map((data) => (
            <option key={data.symbol} value={data.symbol}>
              {data.coin} ({data.symbol})
            </option>
          ))}
        </select>
        <input
          type="number"
          name="amount"
          value={transferDetails.amount}
          onChange={handleInputChange}
          placeholder="Amount"
          className="p-2 border rounded mr-2"
        />
        <button
          onClick={handleTransfer}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Transfer
        </button>
      </div>
    </div>
  );
};

export default Wallet;
