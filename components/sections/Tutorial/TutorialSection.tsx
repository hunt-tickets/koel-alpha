'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { TUTORIAL_STEPS } from '@/lib/constants';

export default function TutorialSection() {
  return (
    <section id="tutorial" className="section-container bg-koel-neutral-100">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-koel-neutral-500 mb-3 font-light">
            Cómo funciona
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-koel-teal font-display leading-tight">
            Tres pasos. Cero complicaciones.
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-koel-neutral-200 bg-white p-8 transition-all duration-300 hover:border-koel-aqua/40 hover:shadow-lg">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-koel-teal flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg font-display">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-2">
                    <Image
                      src={iconSrc}
                      alt={iconAlt}
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-koel-teal mb-3 font-display">
                    {step.title}
                  </h3>
                  <p className="text-base text-koel-neutral-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-koel-aqua/5 to-transparent rounded-tl-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-koel-neutral-50 border border-koel-neutral-200">
            <Sparkles className="w-4 h-4 text-koel-aqua" strokeWidth={2} />
            <span className="text-sm text-koel-neutral-600">
              Menos de <span className="font-semibold text-koel-teal">30 segundos</span> de principio a fin
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
