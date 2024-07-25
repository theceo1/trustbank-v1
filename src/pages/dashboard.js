// src/pages/dashboard.js

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import { useRouter } from 'next/router';
import axios from 'axios';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch balance and transactions data
    const fetchData = async () => {
      try {
        const { data: balanceData } = await axios.get('/api/balance');
        const { data: transactionsData } = await axios.get('/api/transactions');
        setBalance(balanceData.balance);
        setTransactions(transactionsData.transactions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    router.push('/signin');
    return null;
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="text-2xl font-bold">
            trustBank
          </a>
          <nav className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-gray-400">
              Trade
            </a>
            <a href="#" className="hover:text-gray-400">
              Earn
            </a>
            <a href="#" className="hover:text-gray-400">
              Wallet
            </a>
            <a href="#" className="hover:text-gray-400">
              Markets
            </a>
            <a href="#" className="hover:text-gray-400">
              Vision
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={logout}>
            Sign Out
          </Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] bg-gray-100">
        <div className="bg-white border-r border-gray-200 p-6 md:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Dashboard</h2>
          </div>
          <div className="grid gap-4">
            <Card className="bg-teal-500 text-white">
              <CardHeader>
                <CardTitle className="text-sm">Account Balance</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold">${balance}</div>
                  <div className="text-gray-200 text-xs">≈ {balance / 50000} BTC</div>
                </div>
                <Button variant="outline" size="sm">
                  Deposit
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-sm">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border">
                          <AvatarImage src={transaction.avatar} />
                          <AvatarFallback>{transaction.currency}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{transaction.currency}</div>
                          <div className="text-gray-500 text-xs">{transaction.type} {transaction.amount}</div>
                        </div>
                      </div>
                      <div className={`font-medium text-sm ${transaction.type === 'Bought' ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.type === 'Bought' ? '+' : '-'}${transaction.amount * transaction.price}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-950 dark:text-white p-6 md:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Market Overview</h2>
          </div>
          <div className="grid gap-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-sm">Top Cryptocurrencies</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-sm">Coin</TableHead>
                      <TableHead className="text-sm">Price</TableHead>
                      <TableHead className="text-sm">Change</TableHead>
                      <TableHead className="text-sm">Market Cap</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8 border">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>BTC</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">Bitcoin</div>
                            <div className="text-gray-500 text-xs">BTC</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">$56,789.00</TableCell>
                      <TableCell className="text-green-500 text-sm">+2.5%</TableCell>
                      <TableCell className="text-sm">$1.2T</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8 border">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>ETH</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">Ethereum</div>
                            <div className="text-gray-500 text-xs">ETH</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">$1,789.00</TableCell>
                      <TableCell className="text-red-500 text-sm">-1.2%</TableCell>
                      <TableCell className="text-sm">$210B</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8 border">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>USDC</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">USDC</div>
                            <div className="text-gray-500 text-xs">USDC</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">$1.00</TableCell>
                      <TableCell className="text-green-500 text-sm">+0.1%</TableCell>
                      <TableCell className="text-sm">$55B</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
