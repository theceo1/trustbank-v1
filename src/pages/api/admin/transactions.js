// src/pages/api/admin/transactions.js
import Transaction from '../../../models/Transaction';

export default async function handler(req, res) {
  const transactions = await Transaction.find();
  res.status(200).json({ transactions });
}
