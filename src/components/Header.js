// src/components/ui/Header.js

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" legacyBehavior>
            <a>TrustBank</a>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/markets" legacyBehavior>
            <a className="text-gray-800 dark:text-white">Markets</a>
          </Link>
          <Link href="/wallet" legacyBehavior>
            <a className="text-gray-800 dark:text-white">Wallet</a>
          </Link>
          <Link href="/calculator" legacyBehavior>
            <a className="text-gray-800 dark:text-white">Calculator</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-800 dark:text-white">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-gray-800 dark:text-white">Contact</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className="text-gray-800 dark:text-white">FAQ</a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a className="text-gray-800 dark:text-white">Settings</a>
          </Link>
          {user ? (
            <Button onClick={logout} className="text-gray-800 dark:text-white">Logout</Button>
          ) : (
            <div>
              <Link href="/signin" legacyBehavior>
                <a className="text-gray-800 dark:text-white">Sign In</a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a className="text-gray-800 dark:text-white ml-4">Sign Up</a>
              </Link>
            </div>
          )}
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 space-y-2">
          <Link href="/markets" legacyBehavior>
            <a className="block text-gray-800 dark:text-white">Markets</a>
          </Link>
          <Link href="/wallet" legacyBehavior>
            <a className="block text-gray-800 dark:text-white">Wallet</a>
          </Link>
          <Link href="/calculator" legacyBehavior>
            <a className="block text-gray-800 dark:text-white">Calculator</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block text-gray-800 dark:text-white">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block text-gray-800 dark:text-white">Contact</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className="block text-gray-800 dark:text-white">FAQ</a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a className="block text-gray-800 dark:text-white">Settings</a>
          </Link>
          {user ? (
            <Button onClick={logout} className="block w-full text-left text-gray-800 dark:text-white">Logout</Button>
          ) : (
            <div>
              <Link href="/signin" legacyBehavior>
                <a className="block text-gray-800 dark:text-white">Sign In</a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a className="block text-gray-800 dark:text-white mt-2">Sign Up</a>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
