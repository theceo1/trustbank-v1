const { withApiAuthRequired, getSession } = require('@auth0/nextjs-auth0');
const checkRole = require('../../../middleware/checkRole');

const handler = async (req, res) => {
  const { user } = getSession(req, res);
  req.user = user;

  // Your route logic here
  res.status(200).json({ message: 'This is a protected route' });
};

module.exports = withApiAuthRequired(checkRole('admin')(handler));
