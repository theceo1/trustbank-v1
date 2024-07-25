const jwt = require('jsonwebtoken');
const User = require('../models/User');
const roles = require('../config/roles');

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    req.userId = decoded.id;
    next();
  });
};

const checkRole = (role) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      if (roles[user.role].includes(role)) {
        next();
      } else {
        res.status(403).send({ message: 'Require Admin Role!' });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
};

module.exports = { verifyToken, checkRole };
