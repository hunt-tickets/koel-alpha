'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const VARIANTS = [
  { src: '/images/koel-bamboo.png', shot: '/images/productshot-bamboo.png', label: 'Bamboo', key: 'bamboo' },
  { src: '/images/koel-grape.png',  shot: '/images/productshot-grape.png',  label: 'Ginger Grape', key: 'grape'  },
];

export default function SubscriptionSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section className="relative z-20 bg-[#FCF7EE] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-display font-bold text-koel-teal mb-4 sm:mb-6 uppercase tracking-wide"
          >
            La forma más simple de usar
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 text-base sm:text-lg md:text-xl text-koel-neutral-600 mb-10 sm:mb-12 leading-relaxed font-heading max-w-3xl mx-auto"
          >
            Elige tu aroma, define la frecuencia y recibe tus recargas automáticamente. Tu ritual, siempre listo. Sin pensarlo.
          </motion.p>

          {/* Product Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-8 md:mb-10 relative z-0 -mx-4 sm:-mx-8 md:-mx-20 lg:-mx-40 h-[200px] sm:h-[240px] md:h-[280px] rounded-xl md:rounded-2xl cursor-pointer bg-[#E8DDD0]"
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            {VARIANTS.map((v, i) => (
              <div
                key={v.key}
                className={`absolute inset-0 ${i === activeIndex ? 'block' : 'hidden'}`}
              >
                <motion.div
                  style={{ y: imageY }}
                  className="absolute inset-x-0 h-[360px] sm:h-[360px] md:h-[420px] -top-[80px]"
                >
                  <Image
                    src={v.src}
                    alt={`KOEL ${v.label}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Variant label */}
          <div className="relative z-10 flex justify-center gap-2 mb-10">
            {VARIANTS.map((v, i) => (
              <span
                key={v.key}
                className={`px-6 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? 'bg-koel-teal text-white opacity-100'
                    : 'bg-koel-teal/20 text-koel-teal opacity-70'
                }`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                {v.label}
              </span>
            ))}
          </div>

          {/* Features Grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-3 sm:gap-4"
            >
              <Image
                src="/icons/mayor-durabilidad.svg"
                alt="Subscribe & Save"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                }}
              />
              <h3 className="text-sm sm:text-base font-heading font-bold text-koel-teal uppercase tracking-wide">Subscribe & Save</h3>
              <p className="text-sm sm:text-base text-koel-neutral-600 max-w-[220px] leading-relaxed">Ahorra en cada recarga al suscribirte.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center gap-3 sm:gap-4"
            >
              <Image
                src="/icons/sistema-recargable.svg"
                alt="Envío automático"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                }}
              />
              <h3 className="text-sm sm:text-base font-heading font-bold text-koel-teal uppercase tracking-wide">Envío automático</h3>
              <p className="text-sm sm:text-base text-koel-neutral-600 max-w-[220px] leading-relaxed">Recibe tus PODs cuando los necesitas. Nada más.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center gap-3 sm:gap-4 col-span-2 md:col-span-1"
            >
              <Image
                src="/icons/smart-system.svg"
                alt="Control total"
                width={64}
                height={64}
                className="w-14 h-14 sm:w-16 sm:h-16"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                }}
              />
              <h3 className="text-sm sm:text-base font-heading font-bold text-koel-teal uppercase tracking-wide">Control total</h3>
              <p className="text-sm sm:text-base text-koel-neutral-600 max-w-[220px] leading-relaxed">Cambia, pausa o cancela cuando quieras.</p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <Button variant="primary" size="lg" className="uppercase">
              Comenzar suscripción
            </Button>
            <p className="text-sm sm:text-base text-koel-neutral-500">
              Sin compromisos. Sin cargos ocultos.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
