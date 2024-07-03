import React from 'react';
import Link from 'next/link';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard" legacyBehavior><a onClick={toggleMenu}>Dashboard</a></Link>
        <Link href="/markets" legacyBehavior><a onClick={toggleMenu}>Markets</a></Link>
        <Link href="/wallet" legacyBehavior><a onClick={toggleMenu}>Wallet</a></Link>
        <Link href="/contact" legacyBehavior><a onClick={toggleMenu}>Contact</a></Link>
        <Link href="/faq" legacyBehavior><a onClick={toggleMenu}>FAQ</a></Link>
        <Link href="/settings" legacyBehavior><a onClick={toggleMenu}>Settings</a></Link>
        <Link href="/about" legacyBehavior><a onClick={toggleMenu}>About</a></Link>
        <Link href="/sign-in" legacyBehavior><a onClick={toggleMenu}>Sign In</a></Link>
        <Link href="/sign-up" legacyBehavior><a onClick={toggleMenu}>Sign Up</a></Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
