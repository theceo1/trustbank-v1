module.exports = (requiredRole) => {
    return (req, res, next) => {
      const { user } = req;
  
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      if (user.role !== requiredRole) {
        return res.status(403).json({ message: 'Forbidden' });
      }
  
      next();
    };
  };
  