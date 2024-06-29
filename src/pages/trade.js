import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import Button from '@/components/ui/Button';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const Trade = () => {
  const [orderBook, setOrderBook] = useState([]);
  const [tradeHistory, setTradeHistory] = useState([]);
  const [orderType, setOrderType] = useState('market');
  const [crypto, setCrypto] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    socket.on('orderBook', (data) => {
      setOrderBook(data);
    });

    socket.on('tradeHistory', (data) => {
      setTradeHistory(data);
    });

    return () => {
      socket.off('orderBook');
      socket.off('tradeHistory');
    };
  }, []);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    // API call to place order
    // Example: placeOrder({ type: orderType, crypto, amount, price });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Trade</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Order Book</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Price</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderBook.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell>{order.price}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>{order.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Trade History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Crypto</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tradeHistory.map((trade, index) => (
                    <TableRow key={index}>
                      <TableCell>{trade.date}</TableCell>
                      <TableCell>{trade.type}</TableCell>
                      <TableCell>{trade.crypto}</TableCell>
                      <TableCell>{trade.amount}</TableCell>
                      <TableCell>{trade.price}</TableCell>
                      <TableCell>{trade.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Place Order</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="order-type">
                    Order Type
                  </label>
                  <select id="order-type" value={orderType} onChange={(e) => setOrderType(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="market">Market</option>
                    <option value="limit">Limit</option>
                    <option value="stop">Stop</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="crypto">
                    Cryptocurrency
                  </label>
                  <select id="crypto" value={crypto} onChange={(e) => setCrypto(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="USDC">USDC</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                    Amount
                  </label>
                  <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                {orderType !== 'market' && (
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                      Price
                    </label>
                    <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                  </div>
                )}
                <Button type="submit" variant="solid" className="bg-teal-500 text-white hover:bg-teal-600">
                  Place Order
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trade;
