// src/components/ui/Header.js

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';
import Button from './Button';

const Header = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const pages = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Markets', path: '/markets' },
    { name: 'Wallet', path: '/wallet' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Settings', path: '/settings' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-teal-500">trustBank</a>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {pages.map(
            (page) =>
              page.path !== router.pathname && (
                <Link key={page.name} href={page.path} legacyBehavior>
                  <a className="hover:underline text-gray-800 dark:text-white">{page.name}</a>
                </Link>
              )
          )}
          {user ? (
            <Button onClick={logout} className="text-gray-800 dark:text-white">
              Logout
            </Button>
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
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-2 space-y-2">
          {pages.map(
            (page) =>
              page.path !== router.pathname && (
                <Link key={page.name} href={page.path} legacyBehavior>
                  <a onClick={closeMenu} className="block text-gray-800 dark:text-white hover:underline">
                    {page.name}
                  </a>
                </Link>
              )
          )}
          {user ? (
            <Button onClick={logout} className="block w-full text-left">
              Logout
            </Button>
          ) : (
            <div>
              <Link href="/signin" legacyBehavior>
                <a onClick={closeMenu} className="block text-gray-800 dark:text-white">
                  Sign In
                </a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a onClick={closeMenu} className="block text-gray-800 dark:text-white mt-2">
                  Sign Up
                </a>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
