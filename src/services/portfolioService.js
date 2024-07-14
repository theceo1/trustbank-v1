import Portfolio from '@/models/Portfolio';
import dbConnect from '@/lib/dbConnect';

export const getPortfolio = async (userId) => {
  await dbConnect();
  const portfolio = await Portfolio.find({ user: userId });
  return portfolio;
};

export const updatePortfolio = async (userId, portfolioData) => {
  await dbConnect();
  const portfolio = await Portfolio.findOneAndUpdate(
    { user: userId },
    portfolioData,
    { new: true }
  );
  return portfolio;
};
