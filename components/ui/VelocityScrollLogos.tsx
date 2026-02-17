"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface VelocityScrollLogosProps {
  logos: string[];
  default_velocity?: number;
  className?: string;
  logoSize?: number;
}

interface ParallaxProps {
  logos: string[];
  baseVelocity: number;
  className?: string;
  logoSize: number;
}

interface LogoItemProps {
  logo: string;
  baseRotation: MotionValue<number>;
  initialRotation: number;
  logoSize: number;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function LogoItem({ logo, baseRotation, initialRotation, logoSize }: LogoItemProps) {
  const rotation = useTransform(baseRotation, (value) => value + initialRotation);

  return (
    <motion.div
      className="inline-flex items-center justify-center flex-shrink-0"
      style={{ width: logoSize, height: logoSize, rotate: rotation }}
    >
      <Image
        src={logo}
        alt="KOEL Logo"
        width={logoSize}
        height={logoSize}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

function ParallaxLogos({ logos, baseVelocity = 100, className, logoSize }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const baseRotation = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  const initialRotations = useRef<number[]>(
    logos.map(() => Math.random() * 360)
  ).current;

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalRowWidth = logoSize * logos.length;
        setRepetitions(Math.ceil(containerWidth / totalRowWidth) + 2);
      }
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [logos.length, logoSize]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
  const directionFactor = React.useRef<number>(1);

  useAnimationFrame((_t, delta) => {
    const currentVelocity = velocityFactor.get();

    if (Math.abs(currentVelocity) < 0.1) return;

    directionFactor.current = currentVelocity < 0 ? 1 : -1;

    const moveBy = directionFactor.current * baseVelocity * currentVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);

    const rotateBy = -directionFactor.current * 200 * Math.abs(currentVelocity) * (delta / 1000);
    baseRotation.set(baseRotation.get() + rotateBy);
  });

  return (
    <div className="w-full overflow-hidden whitespace-nowrap" ref={containerRef}>
      <motion.div className={cn("inline-flex gap-0", className)} style={{ x }}>
        {Array.from({ length: repetitions }).map((_, repIndex) => (
          <React.Fragment key={repIndex}>
            {logos.map((logo, logoIndex) => (
              <LogoItem
                key={`${repIndex}-${logoIndex}`}
                logo={logo}
                baseRotation={baseRotation}
                initialRotation={initialRotations[logoIndex]}
                logoSize={logoSize}
              />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScrollLogos({
  logos,
  default_velocity = 5,
  className,
  logoSize = 120,
}: VelocityScrollLogosProps) {
  return (
    <section className="relative w-full">
      <ParallaxLogos
        logos={logos}
        baseVelocity={default_velocity}
        className={className}
        logoSize={logoSize}
      />
    </section>
  );
}
