// src/pages/calculator.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@/components/ui/Button';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Image from 'next/image';
import '../styles/Calculator.css'; // Correct import for the CSS file

export default function Calculator() {
  const [currency, setCurrency] = useState('BTC');
  const [action, setAction] = useState('SELL');
  const [amount, setAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [ngnValue, setNgnValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputError, setInputError] = useState(null);

  useEffect(() => {
    if (amount && currency && !inputError) {
      fetchExchangeRate();
    }
  }, [currency, amount, inputError]);

  const fetchExchangeRate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${currency.toLowerCase()}&vs_currencies=usd,ngn`
      );
      const rate = response.data[currency.toLowerCase()];
      setExchangeRate(rate);
      calculateNgnValue(rate);
    } catch (error) {
      setError('Error fetching exchange rate. Please try again later.');
      console.error('Error fetching exchange rate:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateNgnValue = (rate) => {
    const usdToNgnRate = rate.usd / rate.ngn;
    const ngnEquivalent = (amount / usdToNgnRate).toFixed(2);
    setNgnValue(ngnEquivalent);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value < 0 || isNaN(value)) {
      setInputError('Please enter a valid positive number.');
    } else {
      setInputError(null);
    }
    setAmount(value);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#001F54] text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-sm font-semibold tracking-wider">RATE CALCULATOR</h1>
          <h2 className="mt-4 text-4xl font-bold">Know how much you stand to gain</h2>
        </div>
      </header>
      <main className="container mx-auto flex flex-col items-center py-12">
        <section className="flex flex-col items-center md:flex-row md:justify-between md:w-full">
          <div className="bg-[#E6F0FF] p-8 rounded-lg shadow-lg md:w-1/2">
            <h3 className="text-xl font-bold text-[#001F54] mb-4">CRYPTO</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-2">Select Currency:</p>
                <div className="flex space-x-4">
                  {['BTC', 'ETH', 'USDT (ERC20)', 'USDT (TRC20)'].map((cur) => (
                    <Button
                      key={cur}
                      className={`${currency === cur ? 'text-teal-500' : 'text-gray-700'}`}
                      onClick={() => setCurrency(cur)}
                    >
                      {cur}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="wallet-action" className="block text-sm font-semibold mb-2">
                  Wallet Action:
                </Label>
                <div className="select">
                  <select
                    id="wallet-action"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                  >
                    <option value="SELL">SELL</option>
                    <option value="BUY">BUY</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="amount" className="block text-sm font-semibold mb-2">
                  Amount in USD
                </Label>
                <Input
                  id="amount"
                  placeholder="5000"
                  value={amount}
                  onChange={handleAmountChange}
                />
                {inputError && <p className="text-red-500">{inputError}</p>}
              </div>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : exchangeRate && (
                <div>
                  <p className="text-2xl font-bold text-[#001F54]">NGN {ngnValue}</p>
                  <p className="text-sm text-gray-600">1 USD = {exchangeRate.ngn.toFixed(2)} NGN</p>
                  <p className="text-xs text-gray-600 mt-2">NOTE: This is an estimated rate. Actual rate may differ</p>
                </div>
              )}
              <Button className="text-teal-500 hover:text-teal-600">Execute {action}</Button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2">
            <Image src="/images/calculator-illustration.svg" alt="Calculator Illustration" width={600} height={600} className="mx-auto" />
          </div>
        </section>
        <section className="text-center mt-12">
          <p className="text-sm text-gray-600">JOIN 300,000+ PEOPLE USING JEROID</p>
          <h3 className="text-2xl font-bold text-[#001F54] mt-4">Create a free account and start trading today</h3>
        </section>
      </main>
    </div>
  );
}
