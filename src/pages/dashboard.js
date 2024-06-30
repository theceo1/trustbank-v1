// src/pages/dashboard.js

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import Modal from '@/components/ui/Modal';
import Tooltip from '@/components/ui/Tooltip';
import Notification from '@/components/ui/Notification';
import Button from '@/components/ui/Button';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
const DynamicChart = dynamic(() => import('@/components/ui/Chart'), { ssr: false });

const Dashboard = () => {
  const [marketData, setMarketData] = useState([]);
  const [accountBalance, setAccountBalance] = useState({ BTC: 1.23, USD: 12345.67 });
  const [isModalOpen, setModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [tooltipContent, setTooltipContent] = useState('');

  useEffect(() => {
    socket.on('marketData', (data) => {
      setMarketData(data);
    });

    socket.on('accountBalance', (data) => {
      setAccountBalance(data);
    });

    return () => {
      socket.off('marketData');
      socket.off('accountBalance');
    };
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="card-balance shadow-lg">
            <CardHeader>
              <CardTitle>Account Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl">${accountBalance.USD.toFixed(2)} ≈ {accountBalance.BTC} BTC</p>
              <div className="flex justify-end mt-4">
                <Button variant="solid" className="bg-gray-900 text-white hover:bg-black mr-2">Debit</Button>
                <Button variant="solid" className="bg-white text-teal-500 hover:bg-gray-100">Deposit</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Trade</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="flex space-x-4">
                  <Button variant="solid" className="w-full bg-teal-500 text-white hover:bg-teal-600">Buy</Button>
                  <Button variant="outline" className="w-full border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">Sell</Button>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="crypto">
                    Coin
                  </label>
                  <select id="crypto" name="crypto" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Bitcoin (BTC)</option>
                    <option>Ethereum (ETH)</option>
                    <option>USDC</option>
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

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Bitcoin</span>
                  <span className="text-green-500">+$1,250.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Ethereum</span>
                  <span className="text-red-500">-$750.00</span>
                </div>
                <div className="flex justify-between">
                  <span>USDC</span>
                  <span className="text-green-500">+$500.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-end items-center mb-4">
            <h2 className="text-2xl font-semibold">Market Overview</h2>
          </div>
          <Card className="bg-white shadow-lg">
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Coin</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Market Cap</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {marketData.map((data) => (
                    <TableRow key={data.symbol}>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.price}</TableCell>
                      <TableCell className={data.change > 0 ? 'text-green-500' : 'text-red-500'}>
                        {data.change > 0 ? `+${data.change}%` : `${data.change}%`}
                      </TableCell>
                      <TableCell>{data.marketCap}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Crypto to Fiat Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="crypto-calc">
                    Cryptocurrency
                  </label>
                  <select id="crypto-calc" name="crypto-calc" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Bitcoin</option>
                    <option>Ethereum</option>
                    <option>Tether</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="fiat">
                    Fiat Currency
                  </label>
                  <select id="fiat" name="fiat" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="amount-calc">
                    Amount
                  </label>
                  <input type="number" id="amount-calc" name="amount-calc" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <Button type="submit" variant="solid" className="bg-teal-500 text-white hover:bg-teal-600">
                  Calculate
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is a modal content.</p>
      </Modal>
      {notifications.map((notification, index) => (
        <Notification key={index} message={notification.message} type={notification.type} />
      ))}
      <Tooltip text={tooltipContent}>
        <Button variant="outline">Hover me</Button>
      </Tooltip>
    </div>
  );
};

export default Dashboard;
