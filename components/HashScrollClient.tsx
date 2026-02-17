'use client';

import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/ui';

export default function HashScrollClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isLoading]);

  return (
    <LoadingScreen
      minDuration={1750}
      onLoadingComplete={() => setIsLoading(false)}
      bgColor="bg-koel-neutral-100"
      textColor="text-koel-teal"
    />
  );
}
