// src/api/crypto.js

import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get(`${COINGECKO_API_URL}/simple/price`, {
      params: {
        ids: 'bitcoin,ethereum,litecoin',
        vs_currencies: 'usd',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};
