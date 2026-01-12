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

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScrollLogos({
  logos,
  default_velocity = 5,
  className,
  logoSize = 120,
}: VelocityScrollLogosProps) {
  function ParallaxLogos({
    logos,
    baseVelocity = 100,
    className,
    logoSize,
  }: ParallaxProps) {
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

    // Generar rotaciones iniciales aleatorias para cada logo
    const initialRotations = useRef<number[]>(
      logos.map(() => Math.random() * 360)
    ).current;

    // Crear transformaciones combinadas para cada logo fuera del render
    const combinedRotations = useRef<ReturnType<typeof useTransform>[]>(
      logos.map((_, index) =>
        useTransform(baseRotation, (value) => value + initialRotations[index])
      )
    ).current;

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const itemWidth = logoSize; // logo width sin gap
          const itemsPerRow = logos.length;
          const totalRowWidth = itemWidth * itemsPerRow;
          const newRepetitions = Math.ceil(containerWidth / totalRowWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [logos.length, logoSize]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = React.useRef<number>(1);
    useAnimationFrame((t, delta) => {
      // Solo mover cuando hay velocidad de scroll
      const currentVelocity = velocityFactor.get();

      if (Math.abs(currentVelocity) < 0.1) {
        // No hay scroll, no mover
        return;
      }

      // Invertir dirección: scroll arriba = izquierda, scroll abajo = derecha
      if (currentVelocity < 0) {
        directionFactor.current = 1;  // Scroll hacia arriba → mover a la izquierda
      } else if (currentVelocity > 0) {
        directionFactor.current = -1; // Scroll hacia abajo → mover a la derecha
      }

      const moveBy = directionFactor.current * baseVelocity * currentVelocity * (delta / 1000);
      baseX.set(baseX.get() + moveBy);

      // Rotar los logos - usar valor absoluto de velocidad para magnitud
      const rotationSpeed = 200;
      // La rotación debe ir en dirección opuesta al movimiento para simular rueda
      const rotateBy = -directionFactor.current * rotationSpeed * Math.abs(currentVelocity) * (delta / 1000);
      baseRotation.set(baseRotation.get() + rotateBy);
    });

    return (
      <div
        className="w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <motion.div className={cn("inline-flex gap-0", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, repIndex) => (
            <React.Fragment key={repIndex}>
              {logos.map((logo, logoIndex) => (
                <motion.div
                  key={`${repIndex}-${logoIndex}`}
                  className="inline-flex items-center justify-center flex-shrink-0"
                  style={{
                    width: logoSize,
                    height: logoSize,
                    rotate: combinedRotations[logoIndex]
                  }}
                >
                  <Image
                    src={logo}
                    alt={`KOEL Logo ${logoIndex + 1}`}
                    width={logoSize}
                    height={logoSize}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    );
  }

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
