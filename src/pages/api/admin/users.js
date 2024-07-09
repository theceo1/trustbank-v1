// src/pages/api/admin/users.js
import User from '../../../models/User';

export default async function handler(req, res) {
  const users = await User.find();
  res.status(200).json({ users });
}
