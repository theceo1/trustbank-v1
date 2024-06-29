import React from 'react';
import Card from './Card';

const MarketPricesCard = ({ marketPrices }) => {
  return (
    <Card title="Top Cryptocurrencies">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Symbol</th>
            <th className="text-left">Name</th>
            <th className="text-left">Price</th>
            <th className="text-left">Change</th>
            <th className="text-left">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {marketPrices.map((coin) => (
            <tr key={coin.symbol}>
              <td>{coin.symbol}</td>
              <td>{coin.name}</td>
              <td>${coin.price}</td>
              <td className={coin.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                {coin.change}%
              </td>
              <td>{coin.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default MarketPricesCard;
