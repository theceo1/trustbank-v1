// src/pages/api/portfolio.js

import { getSession } from '@auth0/nextjs-auth0';
import { getPortfolio, updatePortfolio } from '@/services/portfolioService';

export default async function handler(req, res) {
  const session = getSession(req, res);
  if (!session || !session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = session.user.sub;

  if (req.method === 'GET') {
    try {
      const portfolio = await getPortfolio(userId);
      res.status(200).json(portfolio);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch portfolio' });
    }
  } else if (req.method === 'POST') {
    try {
      const { assets } = req.body;
      const updatedPortfolio = await updatePortfolio(userId, assets);
      res.status(200).json(updatedPortfolio);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update portfolio' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
