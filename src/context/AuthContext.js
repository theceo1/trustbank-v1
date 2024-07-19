// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import jwt_decode from 'jwt-decode'; 
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.token;

    console.log('Cookies:', cookies);
    console.log('Token:', token);

    if (token) {
      try {
        const decodedToken = jwt_decode(token); 
        console.log('Decoded Token:', decodedToken);
        setUser(decodedToken);
      } catch (error) {
        console.error('Failed to decode token:', error);
        destroyCookie(null, 'token');
        setUser(null);
      }
    }
  }, []);

  const signup = async ({ name, email, password }) => {
    try {
      const response = await axios.post('/api/signup', { name, email, password });
      console.log('Signup Response:', response);

      if (response.status === 200) {
        const { token, user } = response.data;
        setCookie(null, 'token', token, { path: '/' });
        setUser(user);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const signin = async ({ email, password }) => {
    try {
      const response = await axios.post('/api/signin', { email, password });
      console.log('Signin Response:', response);

      if (response.status === 200) {
        const { token, user } = response.data;
        setCookie(null, 'token', token, { path: '/' });
        setUser(user);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Signin failed:', error);
    }
  };

  const signout = () => {
    destroyCookie(null, 'token');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
