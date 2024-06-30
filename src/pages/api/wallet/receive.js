// src/pages/api/wallet/receive.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { address, amount } = req.body;
  
      // Add logic to receive cryptocurrency here
  
      res.status(200).json({ message: 'Cryptocurrency received successfully' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  