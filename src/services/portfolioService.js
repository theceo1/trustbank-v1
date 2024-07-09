// src/services/portfolioService.js

import dbConnect from '@/utils/mongodb';
import Portfolio from '@/models/Portfolio';

export const getPortfolio = async (userId) => {
  await dbConnect();
  const portfolio = await Portfolio.findOne({ userId }).lean();
  return portfolio || { userId, assets: [] };
};

export const updatePortfolio = async (userId, assets) => {
  await dbConnect();
  const portfolio = await Portfolio.findOneAndUpdate(
    { userId },
    { $set: { assets } },
    { new: true, upsert: true }
  );
  return portfolio;
};
