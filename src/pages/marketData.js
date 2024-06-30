// src/pages/marketData.js
import React, { useState, useEffect } from 'react';
import MarketTable from '@/components/ui/MarketTable';

const MarketData = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const response = await fetch('/api/marketData');
      const data = await response.json();
      setMarketData(data);
    };

    fetchMarketData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <MarketTable marketData={marketData} />
    </div>
  );
};

export default MarketData;
