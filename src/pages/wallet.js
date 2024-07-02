// src/pages/wallet.js
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Notification from '@/components/ui/Notification';
import QRCode from 'qrcode.react';

const Wallet = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isQRCodeVisible, setQRCodeVisible] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [selectedFiat, setSelectedFiat] = useState('USD');
  const [bankDetails, setBankDetails] = useState({ accountName: '', bank: '' });
  const [swapFrom, setSwapFrom] = useState('BTC');
  const [swapTo, setSwapTo] = useState('ETH');
  const [swapAmount, setSwapAmount] = useState('');
  const [swapResult, setSwapResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const response = await fetch('/api/wallet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address, amount }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setMessage('');

    const response = await fetch('/api/withdraw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedCrypto, selectedFiat, bankDetails }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  const handleSwap = async (e) => {
    e.preventDefault();
    setMessage('');

    const response = await fetch('/api/swap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ swapFrom, swapTo, swapAmount }),
    });

    const data = await response.json();
    setSwapResult(data.result);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold">Wallet</h2>
      
      <Card className="mb-4 mt-2 bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Buy/Sell Cryptocurrency</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="flex space-x-4">
                  <Button variant="solid" className="w-full bg-teal-500 text-white hover:bg-teal-600 hover:text-black">Buy</Button>
                  <Button variant="outline" className="w-full text-white hover:bg-teal-600 hover:text-black">Sell</Button>
                </div>
                <div>
                  <label className="block text-gray-700  text-sm font-bold mb-2" htmlFor="crypto">
                    Coin
                  </label>
                  <select id="crypto" name="crypto" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Bitcoin (BTC)</option>
                    <option>Ethereum (ETH)</option>
                    <option>Tether (USDT)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="amount">
                    Amount
                  </label>
                  <input type="number" id="amount" name="amount" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <Button type="submit" variant="solid" className="bg-teal-500 text-white hover:bg-teal-600">
                  Trade
                </Button>
              </form>
            </CardContent>
          </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Receive Cryptocurrency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label>Wallet Address</Label>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <Button onClick={() => setQRCodeVisible(!isQRCodeVisible)} variant="solid">
            {isQRCodeVisible ? 'Hide QR Code' : 'Show QR Code'}
          </Button>
          {isQRCodeVisible && <QRCode value={address} className="mt-4" />}
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Send Cryptocurrency</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="crypto">Select Cryptocurrency</Label>
              <select
                id="crypto"
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDC">USD Coin (USDC)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="address">Recipient&apos;s Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
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
              Send
            </Button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Withdraw Cryptocurrency</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleWithdraw}>
            <div className="mb-4">
              <Label htmlFor="crypto">Select Cryptocurrency</Label>
              <select
                id="crypto"
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDC">USD Coin (USDC)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="fiat">Select Fiat Currency</Label>
              <select
                id="fiat"
                value={selectedFiat}
                onChange={(e) => setSelectedFiat(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="USD">USD</option>
                <option value="NGN">Nigerian Naira (NGN)</option>
                <option value="GBP">British Pounds (GBP)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="bank">Select Bank</Label>
              <select
                id="bank"
                value={bankDetails.bank}
                onChange={(e) => setBankDetails({ ...bankDetails, bank: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Bank</option>
                <option value="Bank1">Bank 1</option>
                <option value="Bank2">Bank 2</option>
                <option value="Bank3">Bank 3</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="accountName">Account Name</Label>
              <Input
                type="text"
                id="accountName"
                value={bankDetails.accountName}
                onChange={(e) => setBankDetails({ ...bankDetails, accountName: e.target.value })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Button type="submit" variant="solid">
              Withdraw
            </Button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Swap Cryptocurrency</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSwap}>
            <div className="mb-4">
              <Label htmlFor="swapFrom">From</Label>
              <select
                id="swapFrom"
                value={swapFrom}
                onChange={(e) => setSwapFrom(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDC">USD Coin (USDC)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="swapTo">To</Label>
              <select
                id="swapTo"
                value={swapTo}
                onChange={(e) => setSwapTo(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDC">USD Coin (USDC)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="swapAmount">Amount</Label>
              <Input
                type="number"
                id="swapAmount"
                value={swapAmount}
                onChange={(e) => setSwapAmount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Button type="submit" variant="solid">
              Swap
            </Button>
          </form>
          {swapResult && <p className="mt-4 text-green-500">{swapResult}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default Wallet;
