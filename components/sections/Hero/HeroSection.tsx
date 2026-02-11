'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Fixed */}
      <div className="absolute inset-0 z-0">
        <Image
          src={isMobile ? "/images/hero-mobile.png" : "/images/hero-products.png"}
          alt="KOEL - Productos Naturales"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

    </section>
  );
}
