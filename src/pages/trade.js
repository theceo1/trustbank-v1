import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const Trade = () => {
  const [crypto, setCrypto] = useState('Bitcoin');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    socket.on('message', (data) => {
      setMarketData(JSON.parse(data));
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const response = await fetch('/api/trade', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ crypto, amount }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold">Trade</h2>
      <Card>
        <CardHeader>
          <CardTitle>Execute Trade</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="crypto">Cryptocurrency</Label>
              <select
                id="crypto"
                name="crypto"
                value={crypto}
                onChange={(e) => setCrypto(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {marketData.map((data) => (
                  <option key={data.symbol} value={data.name}>
                    {data.name}
                  </option>
                ))}
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
              Trade
            </Button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default Trade;
