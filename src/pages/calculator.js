import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Button from '@/components/ui/Button';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Spinner from '@/components/ui/Spinner';
import Image from 'next/image';
import '../styles/Calculator.css'; 

const currencyMap = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  'USDT (ERC20)': 'tether',
  'USDT (TRC20)': 'tether'
};

let lastRequestTime = 0;

export default function Calculator() {
  const [currency, setCurrency] = useState('BTC');
  const [action, setAction] = useState('SELL');
  const [amount, setAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [ngnValue, setNgnValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputError, setInputError] = useState(null);

  const fetchExchangeRate = useCallback(async () => {
    const now = Date.now();
    if (now - lastRequestTime < 1000) { // 1 second throttle
      setError('Please wait before making another request.');
      return;
    }
    lastRequestTime = now;

    setLoading(true);
    setError(null);
    try {
      const currencyId = currencyMap[currency];
      const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${currencyId}&vs_currencies=usd,ngn`;
      const response = await axios.get(`http://localhost:3001/proxy?url=${encodeURIComponent(apiUrl)}`);
      const data = response.data;
      console.log('API Response:', data);
      const rate = data[currencyId];
      if (!rate) {
        throw new Error('Invalid currency or response format');
      }
      setExchangeRate(rate);
      calculateNgnValue(rate);
    } catch (error) {
      setError(`Error fetching exchange rate. Please try again later. (${error.message})`);
      console.error('Error fetching exchange rate:', error);
    } finally {
      setLoading(false);
    }
  }, [calculateNgnValue, currency]);

  const calculateNgnValue = useCallback((rate) => {
    const usdToNgnRate = rate.usd / rate.ngn;
    const ngnEquivalent = (amount / usdToNgnRate).toFixed(2);
    setNgnValue(ngnEquivalent);
  }, [amount]);

  const handleAmountChange = useCallback((e) => {
    const value = e.target.value;
    if (value < 0 || isNaN(value)) {
      setInputError('Please enter a valid positive number.');
    } else {
      setInputError(null);
    }
    setAmount(value);
  }, []);

  useEffect(() => {
    if (amount && currency && !inputError) {
      fetchExchangeRate();
    }
  }, [currency, amount, inputError, fetchExchangeRate, calculateNgnValue]);

  return (
    <div className="min-h-screen bg-white">
      <h1>Rate Calculator</h1>
      <div>
        <Label htmlFor="currency">Currency:</Label>
        <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {Object.keys(currencyMap).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="amount">Amount:</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
      </div>
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      {ngnValue && <p>NGN Value: {ngnValue}</p>}
    </div>
  );
}
