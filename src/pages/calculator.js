// src/pages/Calculator.js

import React, { useState } from 'react';

const currencies = [
  { code: 'BTC', name: 'Bitcoin' },
  { code: 'ETH', name: 'Ethereum' },
  { code: 'USDT_ERC20', name: 'USDT (ERC20)' },
  { code: 'USDT_TRC20', name: 'USDT (TRC20)' },
];

const conversionRates = {
  BTC: 1470,
  ETH: 1470,
  USDT_ERC20: 1470,
  USDT_TRC20: 1470,
};

const Calculator = () => {
  const [currency, setCurrency] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const handleCurrencyChange = (e) => setCurrency(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  const handleConversion = () => {
    if (!amount) return;
    const rate = conversionRates[currency];
    const convertedAmount = amount * rate;
    setResult(convertedAmount);
  };

  return (
    <div className="calculator-container">
      <h1>Know how much you stand to gain</h1>
      <div className="crypto-section">
        <div className="currency-selector">
          <label htmlFor="currency">Select Currency:</label>
          <select id="currency" value={currency} onChange={handleCurrencyChange}>
            {currencies.map((curr) => (
              <option key={curr.code} value={curr.code}>{curr.name}</option>
            ))}
          </select>
        </div>
        <div className="amount-input">
          <label htmlFor="amount">Amount in USD:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button onClick={handleConversion}>Convert</button>
        {result !== null && (
          <div className="conversion-result">
            <p>NGN {result.toFixed(2)}</p>
            <p>1 USD = NGN {conversionRates[currency]}</p>
            <p>Note: This is an estimated rate. Actual rate may differ.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
