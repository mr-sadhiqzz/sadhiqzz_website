'use client';

import { useState } from 'react';

export default function SecondaryNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 text-sm">
          {/* Left */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* All Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                All Category
                <svg
                  className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Electronics
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Fashion
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Home & Garden
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    Sports
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-600 hover:text-gray-900 hidden sm:block">
              Track Order
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 hidden sm:block">
              Compare
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 hidden md:block">
              Customer Support
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 hidden md:block">
              Need Help
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 text-gray-700 shrink-0">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="font-medium hidden sm:inline">+1 (555) 123-4567</span>
            <span className="font-medium sm:hidden">+1 (555)...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

