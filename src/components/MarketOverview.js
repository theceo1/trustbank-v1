import React, { useState } from 'react';

const initialMarketData = [
  { coin: 'Bitcoin', symbol: 'BTC', price: 56789, change: 2.5, marketCap: 1200000000000 },
  { coin: 'Ethereum', symbol: 'ETH', price: 1789, change: -1.2, marketCap: 210000000000 },
  { coin: 'USDC', symbol: 'USDC', price: 1, change: 0.1, marketCap: 55000000000 },
];

const MarketOverview = () => {
  const [marketData, setMarketData] = useState(initialMarketData);
  const [sortKey, setSortKey] = useState('');
  const [filterKey, setFilterKey] = useState('');

  const handleSort = (key) => {
    const sortedData = [...marketData].sort((a, b) => {
      if (key === 'price' || key === 'marketCap') {
        return b[key] - a[key];
      } else if (key === 'change') {
        return Math.abs(b[key]) - Math.abs(a[key]);
      } else {
        return a[key].localeCompare(b[key]);
      }
    });
    setSortKey(key);
    setMarketData(sortedData);
  };

  const handleFilter = (key) => {
    if (key) {
      const filteredData = initialMarketData.filter((data) =>
        data.coin.toLowerCase().includes(key.toLowerCase())
      );
      setMarketData(filteredData);
    } else {
      setMarketData(initialMarketData);
    }
    setFilterKey(key);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Market Overview</h2>
        <div className="flex space-x-2">
          <button onClick={() => handleSort('price')} className="bg-gray-300 p-2 rounded">
            Sort by Price
          </button>
          <button onClick={() => handleSort('change')} className="bg-gray-300 p-2 rounded">
            Sort by Change
          </button>
          <button onClick={() => handleSort('marketCap')} className="bg-gray-300 p-2 rounded">
            Sort by Market Cap
          </button>
          <input
            type="text"
            value={filterKey}
            onChange={(e) => handleFilter(e.target.value)}
            placeholder="Filter by Coin"
            className="p-2 border rounded"
          />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Coin</th>
            <th className="text-left">Price</th>
            <th className="text-left">Change</th>
            <th className="text-left">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((data, index) => (
            <tr key={index}>
              <td>{data.coin} ({data.symbol})</td>
              <td>${data.price.toLocaleString()}</td>
              <td className={data.change > 0 ? 'text-green-500' : 'text-red-500'}>
                {data.change > 0 ? `+${data.change}` : data.change}%
              </td>
              <td>${(data.marketCap / 1e9).toLocaleString()}B</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketOverview;
