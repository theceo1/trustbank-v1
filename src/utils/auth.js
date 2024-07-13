// src/utils/auth.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { parseCookies } from 'nookies';

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const verifyToken = (req) => {
  const cookies = parseCookies({ req });
  const token = cookies.token;

  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};
