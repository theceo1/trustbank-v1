import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-64 min-h-screen p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl">Dashboard</h2>
        <button className="bg-gray-300 p-2 rounded-full">
          <span role="img" aria-label="toggle-dark-mode">🌗</span>
        </button>
      </div>
      <Link href="/dashboard">
        <span className="block py-2 text-xl cursor-pointer">Dashboard</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
