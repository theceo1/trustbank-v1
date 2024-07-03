import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
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

  const pages = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Markets', path: '/markets' },
    { name: 'Wallet', path: '/wallet' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Settings', path: '/settings' },
  ];

  const aboutPages = [
    { name: 'Vision', path: '/vision' },
    { name: 'Mission', path: '/mission' },
    { name: 'Company', path: '/company' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="fixed w-full bg-teal-500 dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold text-gray-800 dark:text-white">trustBank</a>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {pages.map((page) => (
            <Link key={page.name} href={page.path} legacyBehavior>
              <a className={`py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500 ${router.pathname === page.path ? 'hidden' : ''}`}>
                {page.name}
              </a>
            </Link>
          ))}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500 focus:outline-none"
            >
              About
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg z-50">
                <nav className="flex flex-col p-4 text-left">
                  {aboutPages.map((page) => (
                    <Link key={page.name} href={page.path} legacyBehavior>
                      <a onClick={() => setDropdownOpen(false)} className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">
                        {page.name}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
          {user ? (
            <>
              <Link href="/profile" legacyBehavior>
                <a className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Profile</a>
              </Link>
              <button onClick={logout} className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Logout</button>
            </>
          ) : (
            <>
              <Link href="/signin" legacyBehavior>
                <a className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Sign In</a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Sign Up</a>
              </Link>
            </>
          )}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
