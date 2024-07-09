import { hashPassword } from '@/utils/auth';
import { saveUser } from '@/utils/database';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, secret } = req.body;

  if (!email || !password || !secret) {
    return res.status(400).json({ message: 'Email, password, and secret are required' });
  }

  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const hashedPassword = await hashPassword(password);
    await saveUser({ email, hashedPassword, role: 'admin' });
    res.status(200).json({ message: 'Admin user created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup failed, please try again' });
  }
}
