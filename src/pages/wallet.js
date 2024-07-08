import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Notification from '@/components/ui/Notification';
import QRCode from 'qrcode.react';

const Wallet = () => {
  const { user, isLoading } = useUser();
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isQRCodeVisible, setQRCodeVisible] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [selectedFiat, setSelectedFiat] = useState('USD');
  const [bankDetails, setBankDetails] = useState({ accountName: '', bank: '' });
  const [swapFrom, setSwapFrom] = useState('BTC');
  const [swapTo, setSwapTo] = useState('ETH');
  const [swapAmount, setSwapAmount] = useState('');
  const [swapResult, setSwapResult] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState('buy'); // Added transactionType

  useEffect(() => {
    if (!user && !isLoading) {
      window.location.href = '/api/auth/login';
    } else if (user) {
      fetch('/api/transactions')
        .then((response) => response.json())
        .then((data) => setTransactions(data.transactions));
    }
  }, [user, isLoading]);

  const handleTrade = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/trade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedCrypto, amount, transactionType }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Trade Error:', errorData);
        setMessageType('error');
        setMessage(errorData.message);
        return;
      }

      const data = await response.json();
      console.log('Trade Success:', data);
      setMessageType('success');
      setMessage(data.message);
    } catch (error) {
      console.error('Unexpected Error:', error);
      setMessageType('error');
      setMessage('An unexpected error occurred');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>Redirecting to login...</div>;

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold">Wallet</h2>

      <Card className="mb-4 mt-2 bg-white shadow-lg">
        <CardHeader>
          <CardTitle>Buy/Sell Cryptocurrency</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTrade} className="space-y-4">
            <div className="flex space-x-4">
              <Button
                type="button"
                variant="solid"
                className={`w-full ${transactionType === 'buy' ? 'bg-teal-500 text-white' : 'bg-white text-black'}`}
                onClick={() => setTransactionType('buy')}
              >
                Buy
              </Button>
              <Button
                type="button"
                variant="outline"
                className={`w-full ${transactionType === 'sell' ? 'bg-teal-500 text-white' : 'bg-white text-black'}`}
                onClick={() => setTransactionType('sell')}
              >
                Sell
              </Button>
            </div>
            <div>
              <Label htmlFor="crypto">Coin</Label>
              <select
                id="crypto"
                name="crypto"
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDT">Tether (USDT)</option>
              </select>
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Button type="submit" variant="solid" className="bg-teal-500 text-white hover:bg-teal-600">
              Trade
            </Button>
          </form>
          {message && <Notification type={messageType} message={message} />}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
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
          <form onSubmit={handleTrade}>
            <div className="mb-4">
              <Label htmlFor="crypto">Select Cryptocurrency</Label>
              <select
                id="crypto"
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDT">Tether (USDT)</option>
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Button type="submit" variant="solid">
              Send
            </Button>
          </form>
          {message && <Notification type={messageType} message={message} />}
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Withdraw Cryptocurrency</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTrade}>
            <div className="mb-4">
              <Label htmlFor="crypto">Select Cryptocurrency</Label>
              <select
                id="crypto"
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDT">Tether (USDT)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="fiat">Select Fiat Currency</Label>
              <select
                id="fiat"
                value={selectedFiat}
                onChange={(e) => setSelectedFiat(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Button type="submit" variant="solid">
              Withdraw
            </Button>
          </form>
          {message && <Notification type={messageType} message={message} />}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Swap Cryptocurrency</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTrade}>
            <div className="mb-4">
              <Label htmlFor="swapFrom">From</Label>
              <select
                id="swapFrom"
                value={swapFrom}
                onChange={(e) => setSwapFrom(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDT">Tether (USDT)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="swapTo">To</Label>
              <select
                id="swapTo"
                value={swapTo}
                onChange={(e) => setSwapTo(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDT">Tether (USDT)</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="swapAmount">Amount</Label>
              <Input
                type="number"
                id="swapAmount"
                value={swapAmount}
                onChange={(e) => setSwapAmount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Button type="submit" variant="solid">
              Swap
            </Button>
          </form>
          {swapResult && <Notification type="success" message={swapResult} />}
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          {transactions.length > 0 ? (
            <table className="min-w-full bg-white dark:bg-gray-800">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Type</th>
                  <th className="py-2 px-4 border-b">Amount</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="py-2 px-4 border-b">{transaction.date}</td>
                    <td className="py-2 px-4 border-b">{transaction.type}</td>
                    <td className="py-2 px-4 border-b">{transaction.amount}</td>
                    <td className="py-2 px-4 border-b">{transaction.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No transactions found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Wallet;
