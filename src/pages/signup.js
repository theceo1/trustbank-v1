// src/pages/signup.js
import React from 'react';
import { useRouter } from 'next/router';
import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';

const Signup = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const router = useRouter();

  if (isAuthenticated) {
    router.push('/');
    return null;
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500">
      <form className="bg-white text-gray-800 p-6 rounded shadow-md form-container">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <button
          onClick={() => loginWithRedirect()}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
          Sign Up with Auth0
        </button>
        <p className="mt-4 text-center">
          Already have an account? <Link href="/signin" legacyBehavior><a className="text-blue-500 hover:text-blue-700">Login</a></Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
