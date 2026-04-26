'use client';

export default function Footer() {
  const tags = [
    'Game',
    'iPhone',
    'TV',
    'Asus Laptops',
    'Macbook',
    'SSD',
    'Graphics Card',
    'Power Bank',
    'Smart TV',
    'Speaker',
    'Tablet',
    'Microwave',
    'Samsung',
  ];

  return (
    <footer style={{ backgroundColor: '#111111' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Logo + Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                C
              </div>
              <span className="text-lg font-bold tracking-wide">CLICON</span>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>4517 Washington Ave.</p>
              <p>Manchester, Kentucky 39495</p>
              <p className="pt-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (319) 555-0115
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@clicon.com
              </p>
            </div>
          </div>

          {/* Column 2: Top Categories */}
          <div>
            <h4 className="text-base font-semibold mb-4">Top Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Computer & Laptop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SmartPhone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Headphone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Camera & Photo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TV & Homes</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Shop Product</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shopping Cart</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Column 4: Download App */}
          <div>
            <h4 className="text-base font-semibold mb-4">Download App</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.15 3.8-.99 1.65.17 2.78 1.03 3.43 2.34-3.02 1.87-2.54 6.98.22 8.13-.57 1.5-1.31 2.99-2.53 4.75zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none">Download on the</p>
                  <p className="text-sm font-medium leading-tight">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none">Get it on</p>
                  <p className="text-sm font-medium leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 5: Popular Tags */}
          <div className="lg:col-span-1">
            <h4 className="text-base font-semibold mb-4">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-gray-400 border border-gray-700 rounded hover:border-gray-500 hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>CLICON © 2025. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

