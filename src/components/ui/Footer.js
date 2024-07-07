// src/components/ui/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <div className="mb-4">
        <Link href="/" legacyBehavior><a className="hover:text-teal-500 mx-2">Home</a></Link>
        <Link href="/about" legacyBehavior><a className="hover:text-teal-500 mx-2">About</a></Link>
        <Link href="/contact" legacyBehavior><a className="hover:text-teal-500 mx-2">Contact</a></Link>
        <Link href="/faq" legacyBehavior><a className="hover:text-teal-500 mx-2">FAQ</a></Link>
      </div>
      <p className="mb-4">Join our waiting list!</p>
      <form className="flex justify-center mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l bg-gray-700 text-white"
        />
        <button type="submit" className="px-4 py-2 rounded-r bg-teal-500 hover:bg-teal-600">
          Subscribe
        </button>
      </form>
      <p className="mt-4">© 2024 trustBank. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
