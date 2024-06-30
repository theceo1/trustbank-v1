// src/pages/api/wallet/withdraw.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { crypto, fiat, bank, bankDetails, accountName, amount } = req.body;
  
      // Add logic to withdraw cryptocurrency to fiat currency here
  
      res.status(200).json({ message: 'Withdrawal successful' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  