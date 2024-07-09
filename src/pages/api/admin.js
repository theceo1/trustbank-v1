const { withApiAuthRequired, getSession } = require('@auth0/nextjs-auth0');
const checkRole = require('@/middleware/checkRole');

const handler = async (req, res) => {
  const { user } = getSession(req, res);
  req.user = user;

  // Your admin route logic here
  res.status(200).json({ message: 'Welcome, admin!' });
};

module.exports = withApiAuthRequired(checkRole('admin')(handler));
