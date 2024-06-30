// src/pages/api/wallet/send.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { address, amount, crypto } = req.body;
  
      // Add logic to send cryptocurrency here
  
      res.status(200).json({ message: 'Cryptocurrency sent successfully' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  