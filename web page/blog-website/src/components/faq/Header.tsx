'use client';

import { useState } from 'react';

export default function Header() {
  const [search, setSearch] = useState('');

  return (
    <header
      className="w-full text-white"
      style={{ backgroundColor: '#1f5f8b' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div
              className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base border-2 border-white"
            >
              C
            </div>
            <span className="text-lg md:text-xl font-bold tracking-wide">
              CLICON
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for..."
                className="w-full py-2.5 md:py-3 pl-4 pr-10 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-5 shrink-0">
            {/* Cart */}
            <button aria-label="Cart" className="hover:opacity-80 transition-opacity">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>

            {/* Wishlist */}
            <button aria-label="Wishlist" className="hover:opacity-80 transition-opacity">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* User */}
            <button aria-label="Profile" className="hover:opacity-80 transition-opacity">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

