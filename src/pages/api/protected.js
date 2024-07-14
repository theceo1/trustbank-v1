const { withApiAuthRequired, getSession } = require('@auth0/nextjs-auth0');
const checkRole = require('@/middleware/checkRole'); // Ensure checkRole exists here

const handler = async (req, res) => {
  const { user } = getSession(req, res);
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!checkRole(user, 'admin')) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  res.status(200).json({ message: 'Protected content' });
};

module.exports = withApiAuthRequired(handler);
