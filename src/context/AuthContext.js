// src/context/AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const login = (userData, rememberMe) => {
    setUser(userData);
    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify(userData));
    }
    toast.success('Login successful!');
    router.push('/dashboard');
  };

  const signup = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    toast.success('Signup successful!');
    router.push('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.info('Logged out');
    router.push('/login');
  };

  const resetPassword = async (email) => {
    // Implement your password reset logic here
    toast.success(`Password reset email sent to: ${email}`);
  };

  const updateUserProfile = async (updatedProfile) => {
    // Implement your update profile logic here
    setUser(updatedProfile);
    localStorage.setItem('user', JSON.stringify(updatedProfile));
    toast.success('Profile updated successfully!');
  };

  const changePassword = async (newPassword) => {
    // Implement your change password logic here
    toast.success('Password changed successfully!');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, resetPassword, updateUserProfile, changePassword }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
