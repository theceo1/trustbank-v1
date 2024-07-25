const express = require('express');
const router = express.Router();
const { verifyToken, checkRole } = require('../middleware/auth');

router.get('/dashboard', [verifyToken, checkRole('viewDashboard')], (req, res) => {
  res.send('Admin Dashboard');
});

router.post('/manage-users', [verifyToken, checkRole('manageUsers')], (req, res) => {
  res.send('Manage Users');
});

module.exports = router;
