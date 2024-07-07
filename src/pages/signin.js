import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    try {
      await login(email, password); // Ensure this sends the correct structure
      router.push('/dashboard');
    } catch (error) {
      setError('Login failed, please check your credentials and try again.');
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
      <form className="bg-white text-gray-800 p-6 rounded shadow-md form-container" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Don&rsquo;t have an account? <Link href="/signup" legacyBehavior><a className="text-blue-500 hover:text-blue-700">Sign Up</a></Link>
        </p>
        <p className="mt-2 text-center">
          <Link href="/ForgotPassword" legacyBehavior><a className="text-blue-500 hover:text-blue-700">Forgot Password?</a></Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
