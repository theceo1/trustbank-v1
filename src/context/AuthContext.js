// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.token;

    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);

  const signup = async ({ name, email, password }) => {
    const response = await axios.post('/api/signup', { name, email, password });
    if (response.status === 200) {
      const { token, user } = response.data;
      setCookie(null, 'token', token, { path: '/' });
      setUser(user);
      router.push('/dashboard');
    }
  };

  const signin = async ({ email, password }) => {
    const response = await axios.post('/api/signin', { email, password });
    if (response.status === 200) {
      const { token, user } = response.data;
      setCookie(null, 'token', token, { path: '/' });
      setUser(user);
      router.push('/dashboard');
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
