export default function handler(req, res) {
    if (req.method === 'POST') {
      const { amount, duration } = req.body;
      res.status(200).json({ message: `Earn plan created for ${amount} over ${duration} days` });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  