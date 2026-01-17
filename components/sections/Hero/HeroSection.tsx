'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll into parallax movement - only on desktop
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax (disabled on mobile) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={isMobile ? {} : { y: imageY }}
      >
        <Image
          src={isMobile ? "/images/hero-mobile.png" : "/images/hero-products.png"}
          alt="KOEL - Productos Naturales"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

    </section>
  );
}
