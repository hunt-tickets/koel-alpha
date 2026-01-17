'use client';

import { motion, AnimatePresence, useAnimationFrame } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Gravity, MatterBody } from '@/components/ui/gravity';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minDuration?: number;
  bgColor?: string;
  textColor?: string;
}

const KOEL_LOGOS = [
  '/logos/koel-logo-1.svg',
  '/logos/koel-logo-2.svg',
  '/logos/koel-logo-3.svg',
  '/logos/koel-logo-4.svg',
  '/logos/koel-logo-5.svg',
  '/logos/koel-logo-6.svg',
  '/logos/koel-logo-7.svg',
  '/logos/koel-logo-8.svg',
];

export default function LoadingScreen({
  onLoadingComplete,
  minDuration = 2000,
  bgColor = 'bg-koel-aqua',
  textColor = 'text-koel-teal',
}: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [fallingLogos, setFallingLogos] = useState<Array<{
    id: number;
    logo: string;
    x: number;
    y: number;
    delay: number;
    duration: number;
    rotation: number;
    floatDistance: number;
    floatDuration: number;
    stackPosition?: number;
    column?: number;
  }>>([]);

  useEffect(() => {
    // Seleccionar logo según el color de fondo
    const isYellowBackground = bgColor === 'bg-koel-yellow';
    const isAquaBackground = bgColor === 'bg-koel-aqua';

    let logos;

    if (isAquaBackground) {
      // Para loader azul: muchos logos con física de Gravity - llenar pantalla completa
      logos = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        logo: KOEL_LOGOS[2], // Logo 3 siempre
        x: Math.random() * 100, // Posición horizontal aleatoria
        y: -800 - (i * 40), // Empiezan muy arriba, fuera de pantalla
        delay: 0,
        duration: 0,
        rotation: 0,
        floatDistance: 0,
        floatDuration: 0,
      }));
    } else {
      // Para otros loaders: stickers flotantes
      const fixedPositions = [
        { x: 20, y: 25, rotation: -12, floatDistance: 15, floatDuration: 2.8 },
        { x: 75, y: 30, rotation: 8, floatDistance: 8, floatDuration: 2.0 },
        { x: 25, y: 75, rotation: 5, floatDistance: 12, floatDuration: 3.2 },
      ];

      logos = fixedPositions.map((pos, i) => ({
        id: i,
        logo: isYellowBackground ? KOEL_LOGOS[5] : KOEL_LOGOS[i % KOEL_LOGOS.length],
        x: pos.x,
        y: pos.y,
        delay: i * 0.1,
        duration: 2.5,
        rotation: pos.rotation,
        floatDistance: pos.floatDistance,
        floatDuration: pos.floatDuration,
      }));
    }

    setFallingLogos(logos);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 800); // Espera a que termine la animación de salida
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onLoadingComplete, bgColor]);

  const isAquaBackground = bgColor === 'bg-koel-aqua';

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 120,
            duration: 0.6,
          }}
          className={`fixed inset-0 w-screen h-screen ${bgColor} z-[9999] flex items-center justify-center overflow-hidden`}
        >
          {/* Logos background - Gravity physics for aqua, floating for others */}
          {isAquaBackground ? (
            <Gravity
              gravity={{ x: 0, y: 2 }}
              className="w-full h-full"
              grabCursor={false}
              debug={false}
              resetOnResize={false}
              addTopWall={true}
            >
              {fallingLogos.map((item) => (
                <MatterBody
                  key={item.id}
                  matterBodyOptions={{
                    friction: 0.5,
                    restitution: 0.3,
                    density: 0.004,
                    frictionAir: 0.01
                  }}
                  x={`${item.x}%`}
                  y={item.y}
                  isDraggable={false}
                  angle={Math.random() * 360}
                  bodyType="circle"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 pointer-events-none">
                    <Image
                      src={item.logo}
                      alt="KOEL"
                      width={160}
                      height={160}
                      className="object-contain w-full h-full pointer-events-none"
                    />
                  </div>
                </MatterBody>
              ))}
            </Gravity>
          ) : (
            <div className="absolute inset-0 overflow-hidden">
              {fallingLogos.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{
                    scale: 0,
                    rotate: item.rotation,
                    opacity: 0
                  }}
                  animate={isLoading ? {
                    scale: 1,
                    rotate: item.rotation,
                    opacity: 1,
                    y: [0, -item.floatDistance, 0],
                  } : {
                    scale: 0,
                    rotate: item.rotation + 180,
                    opacity: 0,
                  }}
                  exit={{
                    scale: 0,
                    rotate: item.rotation + 180,
                    opacity: 0,
                  }}
                  transition={{
                    scale: { duration: 0.5, delay: item.delay },
                    opacity: { duration: 0.5, delay: item.delay },
                    rotate: { duration: 0.6 },
                    y: {
                      duration: item.floatDuration,
                      repeat: isLoading ? Infinity : 0,
                      ease: 'easeInOut',
                    }
                  }}
                  className="absolute w-16 h-16 md:w-20 md:h-20"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                  }}
                >
                  <Image
                    src={item.logo}
                    alt="KOEL"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          )}

          {/* Logo container - solo mostrar si NO es loader azul */}
          {!isAquaBackground && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                staggerChildren: 0.15,
                delayChildren: 0.2,
              }}
              className="relative z-10 flex flex-col items-center gap-8"
            >
            {/* Text labels above logo */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{
                duration: 0.7,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex flex-col items-center gap-1"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className={`${textColor} text-xs md:text-sm font-light tracking-[0.2em] uppercase`}
              >
                Refillable Deodorant
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className={`${textColor} text-xs md:text-sm font-light tracking-widest uppercase`}
              >
                Premium Care
              </motion.p>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{ opacity: 0, y: 60, scale: 0.9 }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="relative w-48 h-16 md:w-64 md:h-24"
            >
              <Image
                src="/logos/logo-teal.svg"
                alt="KOEL Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{
                duration: 0.7,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex gap-3"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={isLoading ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  } : {
                    scale: 0,
                    opacity: 0,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: isLoading ? Infinity : 0,
                    delay: index * 0.15,
                    ease: 'easeInOut',
                  }}
                  className={`w-3 h-3 rounded-full ${textColor.replace('text-', 'bg-')}`}
                />
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className={`${textColor} text-base md:text-lg font-heading tracking-wide uppercase`}
            >
              A New Way to Care
            </motion.p>
          </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
