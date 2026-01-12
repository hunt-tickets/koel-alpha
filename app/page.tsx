'use client';

import { useState } from 'react';
import {
  HeroSection,
  ProductSystemSection,
  VelocityBannerSection,
  TutorialSection,
  ValuePropSection,
  FAQSection,
} from '@/components/sections';
import { LoadingScreen } from '@/components/ui';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen
        minDuration={2500}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <main className="min-h-screen">
        <HeroSection />
        <ProductSystemSection />
        <VelocityBannerSection />
        <TutorialSection />
        <ValuePropSection />
        <FAQSection />
      </main>
    </>
  );
}
