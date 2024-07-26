// components/Header.tsx

import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="logo-no-background.png" alt="Logo" className="w-15 h-10 mr-2" />
        </div>

        {/* Search Bar Section */}
        <div className="relative w-1/3">
          <input
            type="search"
            placeholder="ค้นหาหรือสร้างโพสต์..."
            className="bg-gray-700 text-white px-4 py-2 rounded-full w-full focus:outline-none pl-10"
          />
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Sign In / Sign Up Section */}
        <div className="flex space-x-4">
          <Link href="/auth/signin">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign In
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
