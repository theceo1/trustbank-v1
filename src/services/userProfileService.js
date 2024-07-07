const User = require('../models/User');

// Get user profile by user ID
const getUserProfile = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return {
    username: user.username,
    email: user.email,
    profilePicture: user.profilePicture,
    twoFactorAuth: user.twoFactorAuth,
    accountCreationDate: user.createdAt,
    balance: user.balance
  };
};

// Update user profile by user ID
const updateUserProfile = async (userId, updatedData) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  user.username = updatedData.username;
  user.email = updatedData.email;
  user.profilePicture = updatedData.profilePicture;
  user.twoFactorAuth = updatedData.twoFactorAuth;
  await user.save();
  return user;
};

module.exports = {
  getUserProfile,
  updateUserProfile
};
