import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';

const Markets = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const response = await fetch('/api/markets');
      const data = await response.json();
      setMarketData(data);
    };

    fetchMarketData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold">Market Prices</h2>
      <Card>
        <CardHeader>
          <CardTitle>Current Prices</CardTitle>
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
    </div>
  );
};

export default Markets;
