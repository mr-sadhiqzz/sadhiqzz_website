'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              BlogSite
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-gray-900">
              Blogs
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </Link>
            {user ? (
              <>
                <span className="text-sm text-gray-500">Hi, {user.email}</span>
                <Button onClick={logout} variant="outline" size="sm">
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/auth">
                <Button>Login</Button>
              </Link>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <Button onClick={() => setMobileOpen(!mobileOpen)} size="sm" variant="outline">
              Menu
            </Button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/blogs" className="block py-2 text-gray-700 hover:text-gray-900">Blogs</Link>
            <Link href="/faq" className="block py-2 text-gray-700 hover:text-gray-900">FAQ</Link>
            {user ? (
              <>
                <span className="block py-2 text-sm text-gray-500">Hi, {user.email}</span>
                <Button className="w-full" onClick={logout} variant="outline">Logout</Button>
              </>
            ) : (
              <Link href="/auth" className="block py-2">
                <Button className="w-full">Login</Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

