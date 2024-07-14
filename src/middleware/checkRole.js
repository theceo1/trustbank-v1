// src/middleware/checkRole.js
const checkRole = (user, role) => {
  return user.roles && user.roles.includes(role);
};

module.exports = checkRole;
