// src/components/ui/MobileMenu.js

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
          <nav className="flex flex-col p-4">
            <Link href="/" legacyBehavior>
              <a onClick={toggleMenu} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-teal-500">Home</a>
            </Link>
            <Link href="/wallet" legacyBehavior>
              <a onClick={toggleMenu} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-teal-500">Wallet</a>
            </Link>
            <Link href="/markets" legacyBehavior>
              <a onClick={toggleMenu} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-teal-500">Markets</a>
            </Link>
            <Link href="/calculator" legacyBehavior>
              <a onClick={toggleMenu} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-teal-500">Calculator</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a onClick={toggleMenu} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-teal-500">About</a>
            </Link>
            <Link href="/vision" legacyBehavior>
              <a onClick={toggleMenu} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-teal-500">Vision</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a onClick={toggleMenu} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-teal-500">Contact</a>
            </Link>
            <Link href="/faq" legacyBehavior>
              <a onClick={toggleMenu} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-teal-500">FAQ</a>
            </Link>
            <Link href="/settings" legacyBehavior>
              <a onClick={toggleMenu} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-teal-500">Settings</a>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
