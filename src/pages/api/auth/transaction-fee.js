// src/pages/api/transaction-fee.js
export default function handler(req, res) {
    const { amount } = req.body;
    const fee = calculateTransactionFee(amount);
    res.status(200).json({ fee });
  }
  
  function calculateTransactionFee(amount) {
    // Example fee calculation logic (1% of the amount)
    return amount * 0.01;
  }
  