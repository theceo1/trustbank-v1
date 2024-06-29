// src/pages/dashboard.js

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { MoonIcon } from '@heroicons/react/24/outline';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import Modal from '@/components/ui/Modal';
import Tooltip from '@/components/ui/Tooltip';
import Notification from '@/components/ui/Notification';
import Button from '@/components/ui/Button';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const TooltipChart = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });
const Legend = dynamic(() => import('recharts').then(mod => mod.Legend), { ssr: false });
const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart), { ssr: false });
const Line = dynamic(() => import('recharts').then(mod => mod.Line), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });

const Dashboard = () => {
  const [marketData, setMarketData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    socket.on('message', (data) => {
      setMarketData(JSON.parse(data));
    });

    return () => {
      socket.off('message');
    };
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <Button variant="outline" size="icon" onClick={() => setModalOpen(true)}>
          <MoonIcon className="h-5 w-5" />
        </Button>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-teal-500 text-white">
            <CardHeader>
              <CardTitle>Account Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl">$50,000.00</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Trade</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="crypto">
                    Cryptocurrency
                  </label>
                  <select id="crypto" name="crypto" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Bitcoin</option>
                    <option>Ethereum</option>
                    <option>Tether</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="amount">
                    Amount
                  </label>
                  <input type="number" id="amount" name="amount" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <Button type="submit" variant="solid">
                  Trade
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
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
                <Button type="submit" variant="solid">
                  Calculate
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Market Prices</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Market Cap</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {marketData.map((data) => (
                    <TableRow key={data.symbol}>
                      <TableCell>{data.symbol}</TableCell>
                      <TableCell>{data.name}</TableCell>
                      <TableCell>{data.price}</TableCell>
                      <TableCell>{data.change}</TableCell>
                      <TableCell>{data.marketCap}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-06-01</TableCell>
                    <TableCell>Buy</TableCell>
                    <TableCell>0.5 BTC</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-06-02</TableCell>
                    <TableCell>Sell</TableCell>
                    <TableCell>1 ETH</TableCell>
                    <TableCell>Pending</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is a modal content.</p>
      </Modal>
      <Notification message="This is a notification" type="success" />
      <Tooltip text="This is a tooltip">
        <Button variant="outline">Hover me</Button>
      </Tooltip>
    </div>
  );
};

export default Dashboard;
