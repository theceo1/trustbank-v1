export default function handler(req, res) {
    if (req.method === 'POST') {
      const { address, amount } = req.body;
      res.status(200).json({ message: `Added ${amount} to wallet ${address}` });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  