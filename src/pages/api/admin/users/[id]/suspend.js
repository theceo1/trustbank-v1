// src/pages/api/admin/users/[id]/suspend.js
import User from '../../../../../models/User';

export default async function handler(req, res) {
  const { id } = req.query;
  await User.findByIdAndUpdate(id, { suspended: true });
  res.status(200).json({ message: 'User suspended' });
}
