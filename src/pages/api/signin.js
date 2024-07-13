// src/pages/api/signin.js
import { comparePassword } from '@/utils/auth';
import { findUserByEmail } from '@/utils/database';
import jwt from 'jsonwebtoken';
import { setCookie } from 'nookies';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  console.log('Received signin request:', { email, password });

  if (!email || !password) {
    console.log('Missing email or password');
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await findUserByEmail(email);
    console.log('User found:', user);

    if (!user) {
      console.log('Invalid credentials: user not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await comparePassword(password, user.hashedPassword);
    console.log('Password valid:', isPasswordValid);

    if (!isPasswordValid) {
      console.log('Invalid credentials: password does not match');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ sub: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    setCookie({ res }, 'token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      path: '/',
    });

    console.log('Login successful');
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({ message: 'Login failed, please try again' });
  }
}
