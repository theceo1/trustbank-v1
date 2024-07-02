export default function handler(req, res) {
    if (req.method === 'GET') {
      const mockMarketData = [
        {
          "symbol": "BTCUSDT",
          "price": "62,927.6",
          "change": "+0.27%",
          "vol": "98.51K"
        },
        {
          "symbol": "ETHUSDT",
          "price": "3,456.64",
          "change": "-0.34%",
          "vol": "327.11K"
        },
      ]
      
      res.status(200).json(mockMarketData);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  