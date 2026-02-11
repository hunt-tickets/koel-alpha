'use client';

import { useState, useEffect } from 'react';
import {
  HeroSection,
  ProductSystemSection,
  VelocityBannerSection,
  TutorialSection,
  SubscriptionSection,
  ValuePropSection,
  FAQSection,
} from '@/components/sections';
import { LoadingScreen } from '@/components/ui';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it after loading
    if (!isLoading && window.location.hash) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isLoading]);

  return (
    <>
      <LoadingScreen
        minDuration={2500}
        onLoadingComplete={() => setIsLoading(false)}
        bgColor="bg-koel-neutral-100"
        textColor="text-koel-teal"
      />
      <main className="min-h-screen">
        <HeroSection />
        <SubscriptionSection />
        <VelocityBannerSection />
        <ProductSystemSection />
        <TutorialSection />
        <FAQSection />
      </main>
    </>
  );
}
