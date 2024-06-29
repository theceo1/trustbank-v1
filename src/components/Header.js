// src/components/Header.js
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-bold" prefetch={false}>
          trustBank
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/dashboard" className="hover:text-gray-400" prefetch={false}>
            Dashboard
          </Link>
          <Link href="/trade" className="hover:text-gray-400" prefetch={false}>
            Trade
          </Link>
          <Link href="/wallet" className="hover:text-gray-400" prefetch={false}>
            Wallet
          </Link>
          <Link href="/markets" className="hover:text-gray-400" prefetch={false}>
            Markets
          </Link>
          <Link href="/vision" className="hover:text-gray-400" prefetch={false}>
            Vision
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>{user.username}</span>
            <Button variant="outline" size="sm" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
