// src/services/marketDataService.js

import axios from 'axios';

const COINAPI_URL = 'https://rest.coinapi.io/v1/exchangerate';
const COINAPI_KEY = process.env.COINAPI_KEY; // Add your API key in the .env file

const sources = [
  {
    name: 'CoinAPI',
    url: (symbol) => `${COINAPI_URL}/${symbol}/USD`,
    headers: { 'X-CoinAPI-Key': COINAPI_KEY },
    transform: (response) => ({
      price: response.data.rate,
      volume: response.data.volume_1day,
      change: response.data.change_24h,
      marketCap: response.data.market_cap,
    }),
  },
  // Add more sources as needed
];

export const fetchMarketData = async (symbol) => {
  for (const source of sources) {
    try {
      const response = await axios.get(source.url(symbol), { headers: source.headers });
      return source.transform(response);
    } catch (error) {
      console.error(`Error fetching data from ${source.name}:`, error);
    }
  }
  throw new Error('All data sources failed');
};
