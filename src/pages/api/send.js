// src/pages/api/send.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { address, amount } = req.body;
      // Implement sending logic here
      res.status(200).json({ message: 'Cryptocurrency sent successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  