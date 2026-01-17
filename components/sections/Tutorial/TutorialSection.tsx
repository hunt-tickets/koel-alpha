'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { TUTORIAL_STEPS } from '@/lib/constants';

export default function TutorialSection() {
  return (
    <section
      id="tutorial"
      className="bg-[#FCF7EE] py-12 md:py-20"
    >
      <Container>
        <div className="text-center max-w-5xl mx-auto">
            {/* Divider with Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12"
            >
              <div className="w-12 md:w-24 h-[1px] bg-koel-teal/30" />
              <Image
                src="/logos/logo-tagline.svg"
                alt="KOEL"
                width={200}
                height={80}
                className="w-24 md:w-32 h-auto"
              />
              <div className="w-12 md:w-24 h-[1px] bg-koel-teal/30" />
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
                  index === 0 ? 'Abre' : index === 1 ? 'Encaja' : 'Disfruta';

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
                    <div className="text-6xl md:text-9xl font-bold text-koel-teal/10 mb-3 md:mb-4 font-display leading-none">
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
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-3xl font-bold text-koel-teal mb-3 md:mb-4 font-display uppercase tracking-wide">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-koel-neutral-600 leading-relaxed max-w-xs mx-auto">
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
              <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-koel-teal-dark/60">
                Menos de <span className="font-bold text-koel-teal">30 segundos</span> de principio a fin
              </p>
            </motion.div>
        </div>
      </Container>
    </section>
  );
}
