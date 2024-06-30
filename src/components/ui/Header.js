// src/components/ui/Header.js

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" legacyBehavior>
            TrustBank
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/markets" legacyBehavior>
            <span className="text-gray-800 dark:text-white">Markets</span>
          </Link>
          <Link href="/wallet" legacyBehavior>
            <span className="text-gray-800 dark:text-white">Wallet</span>
          </Link>
          <Link href="/settings" legacyBehavior>
            <span className="text-gray-800 dark:text-white">Settings</span>
          </Link>
          {user ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <div>
              <Link href="/signin" legacyBehavior>
                <span className="text-gray-800 dark:text-white">Sign In</span>
              </Link>
              <Link href="/signup" legacyBehavior>
                <span className="text-gray-800 dark:text-white ml-4">Sign Up</span>
              </Link>
            </div>
          )}
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
