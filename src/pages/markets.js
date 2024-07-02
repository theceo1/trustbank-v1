// File path: src/pages/markets/Markets.js

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import Image from 'next/image';

const Markets = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('/api/markets');
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold mb-4">Market Prices</h2>
      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Current Prices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-400">Trading Pair</TableHead>
                <TableHead className="text-gray-400">Last Price</TableHead>
                <TableHead className="text-gray-400">24h Change</TableHead>
                <TableHead className="text-gray-400">Vol</TableHead>
                <TableHead className="text-gray-400">24h Chart</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketData.map((data) => (
                <TableRow key={data.symbol}>
                  <TableCell className="flex items-center">
                    <Image src={`/icons/${data.symbol.toLowerCase()}.svg`} alt={data.symbol} width={24} height={24} />
                    {data.symbol}
                  </TableCell>
                  <TableCell>{data.price}</TableCell>
                  <TableCell className={data.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                    {data.change}
                  </TableCell>
                  <TableCell>{data.vol}</TableCell>
                  <TableCell>
                    {/* Assuming you have a small chart component or image */}
                    <Image src={`/charts/${data.symbol.toLowerCase()}.png`} alt={`${data.symbol} chart`} width={20} height={8}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Markets;
