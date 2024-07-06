// src/pages/signin.js
import React from 'react';
import { useRouter } from 'next/router';
import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const router = useRouter();

  if (isAuthenticated) {
    router.push('/');
    return null;
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
      <form className="bg-white text-gray-800 p-6 rounded shadow-md form-container">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <button
          onClick={() => loginWithRedirect()}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login with Auth0
        </button>
        <p className="mt-4 text-center">
          Don&apos;t have an account? <Link href="/signup" legacyBehavior><a className="text-blue-500 hover:text-blue-700">Sign Up</a></Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
