'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view on route change
    trackPageView(pathname);
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
