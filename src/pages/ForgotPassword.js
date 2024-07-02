// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { resetPassword } = useAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await resetPassword(email);
      setMessage('Check your email for further instructions.');
    } catch (error) {
      setMessage('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <form className="bg-white p-6 rounded shadow-md form-container" onSubmit={handleResetPassword}>
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        {message && <p className="text-red-500 mb-4">{message}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
