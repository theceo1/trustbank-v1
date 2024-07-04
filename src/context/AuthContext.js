import React, { useContext, useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async ({ email, password }, rememberMe) => {
    // Implement your login logic here
    // For example, you can call an API and set the user state
    // await api.login(email, password);
    setUser({ email });
    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify({ email }));
    }
  };

  const signup = async ({ email, password }) => {
    // Implement your signup logic here
    // For example, you can call an API and set the user state
    // await api.signup(email, password);
    setUser({ email });
  };

  const logout = () => {
    // Implement your logout logic here
    // For example, you can call an API and clear the user state
    // await api.logout();
    setUser(null);
    localStorage.removeItem('user');
    router.push('/');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const value = {
    user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
