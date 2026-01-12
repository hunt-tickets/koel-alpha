'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

type AnimationPhase = 'scatter' | 'line' | 'circle';

interface Card {
  id: number;
  image: string;
  backText: string;
}

const IMG_WIDTH = 120;
const IMG_HEIGHT = 170;

const cards: Card[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&q=80',
    backText: 'Sostenibilidad',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=300&q=80',
    backText: 'Innovación',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=300&q=80',
    backText: 'Bienestar',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=300&q=80',
    backText: 'Naturaleza',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80',
    backText: 'Compromiso',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=300&q=80',
    backText: 'Futuro',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=300&q=80',
    backText: 'Planeta',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80',
    backText: 'Verde',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&q=80',
    backText: 'Natural',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=300&q=80',
    backText: 'Cambio',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80',
    backText: 'Renovable',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=80',
    backText: 'Cuidado',
  },
];

export default function ScrollMorphHero() {
  const [phase, setPhase] = useState<AnimationPhase>('scatter');

  // Random scatter positions
  const scatterPositions = useMemo(() => {
    return cards.map(() => ({
      x: (Math.random() - 0.5) * 1000,
      y: (Math.random() - 0.5) * 600,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  // Animation sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('line'), 500);
    const timer2 = setTimeout(() => setPhase('circle'), 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const getTarget = (index: number) => {
    if (phase === 'scatter') {
      return scatterPositions[index];
    }

    if (phase === 'line') {
      const lineSpacing = 140;
      const lineTotalWidth = cards.length * lineSpacing;
      const lineX = index * lineSpacing - lineTotalWidth / 2;
      return { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
    }

    // Circle
    const circleRadius = 350;
    const circleAngle = (index / cards.length) * 360;
    const circleRad = (circleAngle * Math.PI) / 180;
    return {
      x: Math.cos(circleRad) * circleRadius,
      y: Math.sin(circleRad) * circleRadius + 50, // Offset down slightly
      rotation: circleAngle + 90,
      scale: 1,
      opacity: 1,
    };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-koel-neutral-100">
      {/* Title */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-20 text-center max-w-md px-4"
        style={{ top: 'calc(50% + 50px)' }}
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        animate={
          phase === 'circle'
            ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
            : { opacity: 0, scale: 0.8, filter: 'blur(10px)' }
        }
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-koel-teal font-display mb-3">
          Manifiesto KOEL
        </h1>
        <p className="text-sm md:text-base text-koel-neutral-700">
          Nuestros valores, tu compromiso
        </p>
      </motion.div>

      {/* Cards Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {cards.map((card, index) => {
          const target = getTarget(index);

          return (
            <motion.div
              key={card.id}
              className="absolute cursor-pointer group"
              animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
              }}
              transition={{
                type: 'spring',
                stiffness: 40,
                damping: 15,
              }}
              style={{
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: 'preserve-3d' }}
                transition={{
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{ rotateY: 180 }}
              >
                {/* Front Face */}
                <div
                  className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-200"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Image
                    src={card.image}
                    alt={card.backText}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-koel-teal flex flex-col items-center justify-center p-4 border border-koel-aqua"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="text-center">
                    <p className="text-xs font-bold text-white">
                      {card.backText}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
