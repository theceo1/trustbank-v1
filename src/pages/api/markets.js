export default function handler(req, res) {
    if (req.method === 'GET') {
      const mockMarketData = [
        { symbol: 'BTC', name: 'Bitcoin', price: '30000', change: '5%', marketCap: '600B' },
        { symbol: 'ETH', name: 'Ethereum', price: '2000', change: '3%', marketCap: '200B' },
      ];
      res.status(200).json(mockMarketData);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  