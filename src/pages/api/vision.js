export default function handler(req, res) {
    if (req.method === 'POST') {
      const { feedback } = req.body;
      res.status(200).json({ message: `Feedback received: ${feedback}` });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  