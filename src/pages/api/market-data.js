// src/pages/api/market-data.js

import { fetchMarketData } from '@/services/marketDataService';

export default async function handler(req, res) {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ message: 'Symbol is required' });
  }

  try {
    const data = await fetchMarketData(symbol);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching market data:', error);
    res.status(500).json({ message: 'Failed to fetch market data' });
  }
}
