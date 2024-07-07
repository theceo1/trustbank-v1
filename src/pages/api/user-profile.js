const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../../services/userProfileService');

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Unauthorized');
};

// Get user profile
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const profile = await getUserProfile(req.user.id);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Update user profile
router.put('/', isAuthenticated, async (req, res) => {
  const { username, email, twoFactorAuth, profilePicture } = req.body;
  try {
    const updatedProfile = await updateUserProfile(req.user.id, {
      username,
      email,
      twoFactorAuth,
      profilePicture
    });
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
