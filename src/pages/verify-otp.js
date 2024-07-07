// src/pages/verify-otp.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Verify OTP with the backend (implementation not covered here)
      const response = await axios.post('/api/verify-otp', { otp });

      if (response.data.success) {
        router.push('/'); // Redirect to homepage on successful verification
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      setError('OTP verification failed, please try again.');
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <form className="bg-white text-gray-800 p-6 rounded shadow-md form-container" onSubmit={handleVerifyOtp}>
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
