// src/components/MobileMenu.js
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const MobileMenu = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
        ☰
      </button>
      {menuOpen && (
        <nav className="bg-teal-500 dark:bg-gray-800 shadow fixed top-0 left-0 w-full z-50 p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" legacyBehavior>
                <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/markets" legacyBehavior>
                <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>Markets</a>
              </Link>
            </li>
            <li>
              <Link href="/wallet" legacyBehavior>
                <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/calculator" legacyBehavior>
                <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>Calculator</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/faq" legacyBehavior>
                <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/settings" legacyBehavior>
                <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>Settings</a>
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link href="/profile" legacyBehavior>
                    <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>Profile</a>
                  </Link>
                </li>
                <li>
                  <button onClick={() => { logout(); toggleMenu(); }} className="text-gray-800 dark:text-white">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/signin" legacyBehavior>
                    <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>Sign In</a>
                  </Link>
                </li>
                <li>
                  <Link href="/signup" legacyBehavior>
                    <a className="text-gray-800 dark:text-white" onClick={toggleMenu}>Sign Up</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
