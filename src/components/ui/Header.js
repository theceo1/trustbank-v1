// src/components/ui/Header.js

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { CSSTransition } from 'react-transition-group';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
    if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
      setAboutDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen || isAboutDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, isAboutDropdownOpen]);

  const isHomePage = router.pathname === '/';

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-lg">
      <Link href="/" legacyBehavior>
        <a className="font-bold text-lg">trustBank</a>
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="/calculator" legacyBehavior><a className="hover:text-teal-500">Calculator</a></Link>
        <div className="relative" ref={aboutDropdownRef}>
          <button
            onClick={toggleAboutDropdown}
            className="hover:text-teal-500"
          >
            About
          </button>
          {isAboutDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg z-50">
              <nav className="flex flex-col p-4 text-left">
                <Link href="/vision" legacyBehavior><a className="block hover:text-teal-500">Vision</a></Link>
                <Link href="/mission" legacyBehavior><a className="block hover:text-teal-500">Mission</a></Link>
                <Link href="/company" legacyBehavior><a className="block hover:text-teal-500">Company</a></Link>
                <Link href="/blog" legacyBehavior><a className="block hover:text-teal-500">Blog</a></Link>
              </nav>
            </div>
          )}
        </div>
        {user ? (
          <>
            <Link href="/dashboard" legacyBehavior><a className="hover:text-teal-500">Dashboard</a></Link>
            <Link href="/markets" legacyBehavior><a className="hover:text-teal-500">Markets</a></Link>
            <Link href="/wallet" legacyBehavior><a className="hover:text-teal-500">Wallet</a></Link>
            <Link href="/contact" legacyBehavior><a className="hover:text-teal-500">Contact</a></Link>
            <Link href="/faq" legacyBehavior><a className="hover:text-teal-500">FAQ</a></Link>
            <Link href="/settings" legacyBehavior><a className="hover:text-teal-500">Settings</a></Link>
            <Link href="/profile" legacyBehavior><a className="hover:text-teal-500">Profile</a></Link>
            <button
              onClick={handleLogout}
              className="hover:text-teal-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/signin" legacyBehavior><a className="hover:text-teal-500">Sign In</a></Link>
            <Link href="/signup" legacyBehavior><a className="hover:text-teal-500">Sign Up</a></Link>
          </>
        )}
      </nav>
      <button className="md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <XIcon className="h-6 w-6 text-white" />
        ) : (
          <MenuIcon className="h-6 w-6 text-white" />
        )}
      </button>
      <CSSTransition
        in={isMobileMenuOpen}
        timeout={300}
        classNames="mobile-menu"
        unmountOnExit
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-end">
          <div ref={menuRef} className="bg-white w-64 p-4 space-y-4">
            <Link href="/calculator" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>Calculator</a></Link>
            <div className="relative" ref={aboutDropdownRef}>
              <button
                onClick={toggleAboutDropdown}
                className="hover:text-teal-500"
              >
                About
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg z-50">
                  <nav className="flex flex-col p-4 text-left">
                    <Link href="/vision" legacyBehavior><a className="block hover:text-teal-500">Vision</a></Link>
                    <Link href="/mission" legacyBehavior><a className="block hover:text-teal-500">Mission</a></Link>
                    <Link href="/company" legacyBehavior><a className="block hover:text-teal-500">Company</a></Link>
                    <Link href="/blog" legacyBehavior><a className="block hover:text-teal-500">Blog</a></Link>
                  </nav>
                </div>
              )}
            </div>
            {user ? (
              <>
                <Link href="/dashboard" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>Dashboard</a></Link>
                <Link href="/markets" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>Markets</a></Link>
                <Link href="/wallet" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>Wallet</a></Link>
                <Link href="/contact" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>Contact</a></Link>
                <Link href="/faq" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>FAQ</a></Link>
                <Link href="/settings" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>Settings</a></Link>
                <Link href="/profile" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>Profile</a></Link>
                <button
                  onClick={handleLogout}
                  className="block text-black hover:text-teal-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/signin" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>Sign In</a></Link>
                <Link href="/signup" legacyBehavior><a className="block text-black hover:text-teal-500" onClick={toggleMobileMenu}>Sign Up</a></Link>
              </>
            )}
          </div>
        </div>
      </CSSTransition>
    </header>
  );
};

export default Header;
