'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Don't render header on manifiesto page (it has its own)
  if (pathname === '/manifiesto') {
    return null;
  }

  return <Header />;
}
