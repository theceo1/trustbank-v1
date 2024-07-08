const { getSession } = require('@auth0/nextjs-auth0');

const isAuthenticated = (req, res, next) => {
  const session = getSession(req, res);
  if (session && session.user) {
    req.user = session.user; // Attach user info to the request object
    return next();
  }
  res.status(401).send('Unauthorized');
};

module.exports = isAuthenticated;
