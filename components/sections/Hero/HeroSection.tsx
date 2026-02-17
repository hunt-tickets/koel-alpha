'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useIsMobile } from '@/lib/hooks/useIsMobile';

const KoelModel3D = dynamic(() => import('@/components/three/KoelModel3D'), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const isMobile = useIsMobile(768);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
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

      {/* 3D Model - centered, floating */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div
          className="w-[400px] h-[400px] md:w-[650px] md:h-[650px] lg:w-[850px] lg:h-[850px] pointer-events-auto"
        >
          <KoelModel3D />
        </div>
      </div>
    </section>
  );
}
