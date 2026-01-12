'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll into parallax movement
  // Image moves at 60% speed (0.6 factor) of normal scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <Image
          src="/hero1.jpg"
          alt="KOEL - Desodorante Recargable"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </motion.div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display">
            {BRAND.name}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white/90 font-light">
            {BRAND.tagline}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80">
            {BRAND.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary">
              Explorar Productos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-koel-teal"
            >
              Cómo Funciona
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
