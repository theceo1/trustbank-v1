import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <a className="text-xl font-bold">trustBank</a>
        </Link>
        <nav className="space-x-4">
          <Link href="/dashboard">
            <a className="py-2 px-4 text-gray-300 hover:bg-teal-500">Dashboard</a>
          </Link>
          <Link href="/markets">
            <a className="py-2 px-4 text-gray-300 hover:bg-teal-500">Markets</a>
          </Link>
          <Link href="/wallet">
            <a className="py-2 px-4 text-gray-300 hover:bg-teal-500">Wallet</a>
          </Link>
          <Link href="/calculator">
            <a className="py-2 px-4 text-gray-300 hover:bg-teal-500">Calculator</a>
          </Link>
          <Link href="/contact">
            <a className="py-2 px-4 text-gray-300 hover:bg-teal-500">Contact</a>
          </Link>
          <Link href="/faq">
            <a className="py-2 px-4 text-gray-300 hover:bg-teal-500">FAQ</a>
          </Link>
          <Link href="/settings">
            <a className="py-2 px-4 text-gray-300 hover:bg-teal-500">Settings</a>
          </Link>
          <div className="relative group">
            <button className="py-2 px-4 text-gray-300 hover:bg-teal-500">About</button>
            <div className="absolute hidden group-hover:block bg-black text-white py-2">
              <Link href="/about/vision">
                <a className="block px-4 py-2 hover:bg-teal-500">Vision</a>
              </Link>
              <Link href="/about/mission">
                <a className="block px-4 py-2 hover:bg-teal-500">Mission</a>
              </Link>
              <Link href="/about/company">
                <a className="block px-4 py-2 hover:bg-teal-500">Company</a>
              </Link>
              <Link href="/about/blog">
                <a className="block px-4 py-2 hover:bg-teal-500">Blog</a>
              </Link>
            </div>
          </div>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
