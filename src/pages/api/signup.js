// src/pages/api/signup.js
import { hashPassword } from '@/utils/auth';
import { saveUser } from '@/utils/database';
import { verifyToken } from '@/utils/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, role = 'user' } = req.body;

  console.log('Received signup request:', { email, password, role });

  if (!email || !password) {
    console.log('Missing email or password');
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const hashedPassword = await hashPassword(password);
    console.log('Hashed password:', hashedPassword);
    await saveUser({ email, hashedPassword, role });
    console.log('User saved successfully');
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup failed, please try again' });
  }
}
