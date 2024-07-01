// src/components/ui/MobileMenu.js

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const MobileMenu = () => {
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
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Settings', path: '/settings' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <div className="md:hidden relative" ref={menuRef}>
      <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-48 bg-white dark:bg-gray-800 shadow-md z-50 transform translate-x-full transition-transform duration-300 ease-in-out">
          <nav className="flex flex-col p-4 text-left">
            {pages.map((page) => (
              page.path !== router.pathname && (
                <Link key={page.name} href={page.path} legacyBehavior>
                  <a onClick={() => setIsOpen(false)} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">
                    {page.name}
                  </a>
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
