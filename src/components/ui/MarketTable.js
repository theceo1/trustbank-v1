// src/components/ui/MarketTable.js
import React from 'react';
import PropTypes from 'prop-types';

const MarketTable = ({ marketData }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-2xl font-bold mb-4">Market Data</h2>
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left p-2">Coin</th>
          <th className="text-left p-2">Price</th>
          <th className="text-left p-2">Change</th>
          <th className="text-left p-2">Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {marketData.map((data) => (
          <tr key={data.symbol}>
            <td className="p-2">{data.name}</td>
            <td className="p-2">{data.price}</td>
            <td className={`p-2 ${data.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.change > 0 ? `+${data.change}%` : `${data.change}%`}
            </td>
            <td className="p-2">{data.marketCap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

MarketTable.propTypes = {
  marketData: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      change: PropTypes.number.isRequired,
      marketCap: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MarketTable;
