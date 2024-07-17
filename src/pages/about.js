// src/pages/about.js
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const About = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Welcome to TrustBank, where we are revolutionizing the way people interact with their finances. Our mission is to empower individuals with secure, transparent, and accessible financial tools that help them achieve their financial goals.
      </p>
      <div className="relative" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="text-teal-500 hover:underline">
          Learn More
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg z-10">
            <Link href="/vision">
              <a className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Our Vision</a>
            </Link>
            <Link href="/mission">
              <a className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Our Mission</a>
            </Link>
            <Link href="/company">
              <a className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Company</a>
            </Link>
            <Link href="/blog">
              <a className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-teal-500">Blog</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
