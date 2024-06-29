// components/Trade.js
import React, { useState } from 'react';
import Button from './ui/button';
import Label from './ui/Label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/Select';
import Input from './ui/Input';

const Trade = () => {
  const [coin, setCoin] = useState('BTC');
  const [amount, setAmount] = useState('');

  const handleTrade = (type) => {
    alert(`${type} ${amount} ${coin}`);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Trade</h3>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" size="sm" onClick={() => handleTrade('Buy')}>
            Buy
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleTrade('Sell')}>
            Sell
          </Button>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="coin" className="text-sm">
            Coin
          </Label>
          <Select id="coin" value={coin} onChange={(e) => setCoin(e.target.value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Coin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
              <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
              <SelectItem value="USDC">USDC</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="amount" className="text-sm">
            Amount
          </Label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button size="sm" onClick={() => handleTrade('Place Order')}>
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Trade;
