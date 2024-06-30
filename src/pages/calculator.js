// src/pages/calculator.js

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import Notification from '@/components/ui/Notification';

const Calculator = () => {
  const [fiat, setFiat] = useState('USD');
  const [crypto, setCrypto] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/exchange_rates');
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        setError('Failed to fetch exchange rates.');
      }
    };

    fetchExchangeRates();
  }, []);

  const handleCalculate = (e) => {
    e.preventDefault();
    setError('');
    setConvertedAmount(null);

    if (!exchangeRates) {
      setError('Exchange rate data is not available.');
      return;
    }

    const cryptoRate = exchangeRates[crypto.toLowerCase()];
    const fiatRate = exchangeRates[fiat.toLowerCase()];

    if (!cryptoRate || !fiatRate) {
      setError('Invalid cryptocurrency or fiat currency.');
      return;
    }

    const conversionRate = cryptoRate.value / fiatRate.value;
    const result = (amount * conversionRate).toFixed(2);

    setConvertedAmount(result);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold">Crypto to Fiat Calculator</h2>
      <Card>
        <CardHeader>
          <CardTitle>Convert Cryptocurrency to Fiat</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCalculate}>
            <div className="mb-4">
              <Label htmlFor="fiat">Fiat Currency</Label>
              <select
                id="fiat"
                name="fiat"
                value={fiat}
                onChange={(e) => setFiat(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="USD">US Dollar (USD)</option>
                <option value="NGN">Nigerian Naira (NGN)</option>
                <option value="GBP">British Pound (GBP)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="crypto">Cryptocurrency</Label>
              <select
                id="crypto"
                name="crypto"
                value={crypto}
                onChange={(e) => setCrypto(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDC">USD Coin (USDC)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="amount">Amount</Label>
              <Input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Button type="submit" variant="solid">
              Calculate
            </Button>
          </form>
          {convertedAmount !== null && !error && (
            <p className="mt-4 text-green-500">{amount} {crypto} is approximately {convertedAmount} {fiat}</p>
          )}
          {error && <Notification message={error} type="error" />}
        </CardContent>
      </Card>
    </div>
  );
};

export default Calculator;
