'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { TUTORIAL_STEPS } from '@/lib/constants';

export default function TutorialSection() {
  return (
    <section
      id="tutorial"
      className="bg-koel-teal py-12 md:py-20"
    >
      <Container>
        <div className="text-center max-w-5xl mx-auto">
            {/* Divider with Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12"
            >
              <div className="w-12 md:w-24 h-[1px] bg-koel-aqua/30" />
              <h2 className="text-sm md:text-base font-heading tracking-[0.3em] uppercase text-white whitespace-nowrap">
                Recargar es parte del <span className="font-bold">ritual</span>
              </h2>
              <div className="w-12 md:w-24 h-[1px] bg-koel-aqua/30" />
            </motion.div>

            {/* Steps - Minimalist */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto">
              {TUTORIAL_STEPS.map((step, index) => {
                const iconSrc =
                  index === 0
                    ? '/icons/abre.svg'
                    : index === 1
                    ? '/icons/encaja.svg'
                    : '/icons/disfruta.svg';

                const iconAlt =
                  index === 0 ? 'Calienta' : index === 1 ? 'Encaja' : 'Empuja';

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    {/* Step Number */}
                    <div className="text-5xl md:text-7xl font-bold text-white/10 mb-3 md:mb-4 font-display leading-none">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-4 md:mb-6 flex justify-center">
                      <Image
                        src={iconSrc}
                        alt={iconAlt}
                        width={80}
                        height={80}
                        className="w-12 h-12 md:w-20 md:h-20"
                        style={{
                          filter: 'brightness(0) saturate(100%) invert(79%) sepia(14%) saturate(1187%) hue-rotate(128deg) brightness(95%) contrast(89%)'
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 font-display uppercase tracking-wide">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 md:mt-20"
            >
              <p className="text-sm md:text-base tracking-[0.2em] uppercase text-white/60">
                Menos de <span className="font-bold text-koel-aqua">30 segundos</span> de principio a fin
              </p>
            </motion.div>
        </div>
      </Container>
    </section>
  );
}
