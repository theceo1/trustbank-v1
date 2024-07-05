// src/components/MobileMenu.js

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

const MobileMenu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const pages = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Markets', path: '/markets' },
    { name: 'Wallet', path: '/wallet' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="md:hidden relative" ref={menuRef}>
      <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 w-48 bg-white dark:bg-gray-800 shadow-md z-50">
          <nav className="flex flex-col p-4 text-left">
            {pages.map((page) => (
              <Link key={page.name} href={page.path} legacyBehavior>
                <a onClick={() => setIsOpen(false)} className={`block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500 ${router.pathname === page.path ? 'bg-teal-500' : ''}`}>
                  {page.name}
                </a>
              </Link>
            ))}
            {user ? (
              <>
                <Link href="/profile" legacyBehavior>
                  <a onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Profile</a>
                </Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Logout</button>
              </>
            ) : (
              <>
                <Link href="/signin" legacyBehavior>
                  <a onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Sign In</a>
                </Link>
                <Link href="/signup" legacyBehavior>
                  <a onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Sign Up</a>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
