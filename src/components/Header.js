// src/components/ui/Header.js

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>TrustBank</a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/dashboard">
            <a className="text-gray-800 dark:text-white">Dashboard</a>
          </Link>
          <Link href="/markets">
            <a className="text-gray-800 dark:text-white">Markets</a>
          </Link>
          <Link href="/wallet">
            <a className="text-gray-800 dark:text-white">Wallet</a>
          </Link>
          <Link href="/calculator">
            <a className="text-gray-800 dark:text-white">Calculator</a>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="text-gray-800 dark:text-white focus:outline-none">
              About
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white dark:bg-gray-800 shadow-md mt-2 rounded z-10">
                <ul className="py-2">
                  <li>
                    <Link href="/vision">
                      <a className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Vision</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/mission">
                      <a className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Mission</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/company">
                      <a className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Company</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Blog</a>
                    </Link>
                  </li>
                </ul>
      </div>
            )}
          </div>
          <Link href="/contact">
            <a className="text-gray-800 dark:text-white">Contact</a>
          </Link>
          <Link href="/faq">
            <a className="text-gray-800 dark:text-white">FAQ</a>
          </Link>
          <Link href="/settings">
            <a className="text-gray-800 dark:text-white">Settings</a>
          </Link>
        {user ? (
            <button onClick={logout} className="text-gray-800 dark:text-white">Logout</button>
          ) : (
            <div>
              <Link href="/signin">
                <a className="text-gray-800 dark:text-white">Sign In</a>
              </Link>
              <Link href="/signup">
                <a className="text-gray-800 dark:text-white ml-4">Sign Up</a>
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
