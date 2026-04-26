'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Hide default navbar on the FAQ page so the custom header can take over
  if (pathname === '/faq') {
    return null;
  }

  return <Navbar />;
}

