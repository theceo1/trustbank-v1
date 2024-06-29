// src/components/ui/Header.js

import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-lg font-bold" prefetch={false}>
          trustBank
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/trade" className="hover:text-teal-500 text-sm" prefetch={false}>
            Trade
          </Link>
          <Link href="/earn" className="hover:text-teal-500 text-sm" prefetch={false}>
            Earn
          </Link>
          <Link href="/wallet" className="hover:text-teal-500 text-sm" prefetch={false}>
            Wallet
          </Link>
          <Link href="/markets" className="hover:text-teal-500 text-sm" prefetch={false}>
            Markets
          </Link>
          <Link href="/vision" className="hover:text-teal-500 text-sm" prefetch={false}>
            Vision
          </Link>
          <Link href="/profile" className="hover:text-teal-500 text-sm" prefetch={false}>
            Profile
          </Link>
          <Link href="/settings" className="hover:text-teal-500 text-sm" prefetch={false}>
            Settings
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="hover:bg-teal-500 hover:text-white">
          Sign In
        </Button>
        <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
