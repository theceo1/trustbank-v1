export default function handler(req, res) {
    const marketData = [
      { symbol: 'BTC', name: 'Bitcoin', price: '$40,000', change: '+2%', marketCap: '$800B' },
      { symbol: 'ETH', name: 'Ethereum', price: '$2,500', change: '+1.5%', marketCap: '$300B' },
      { symbol: 'USDT', name: 'Tether', price: '$1.00', change: '0%', marketCap: '$60B' },
      { symbol: 'BNB', name: 'Binance Coin', price: '$300', change: '+1%', marketCap: '$45B' },
    ];
    
    res.status(200).json(marketData);
  }
  