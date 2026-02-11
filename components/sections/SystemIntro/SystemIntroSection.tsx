'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { useState } from 'react';

export default function SystemIntroSection() {
  const [activeColor, setActiveColor] = useState<number | null>(null);

  // Color combinations
  const colorSchemes = [
    { bg: 'bg-koel-olive', text: 'text-koel-yellow' },
    { bg: 'bg-koel-coral', text: 'text-koel-teal' },
    { bg: 'bg-koel-aqua', text: 'text-koel-teal' },
    { bg: 'bg-koel-teal', text: 'text-koel-aqua' },
    { bg: 'bg-koel-pink', text: 'text-white' },
    { bg: 'bg-koel-yellow', text: 'text-koel-olive' },
  ];

  const currentScheme = activeColor !== null ? colorSchemes[activeColor] : null;

  return (
    <section className={`sticky top-16 md:top-20 z-0 py-12 md:py-16 transition-colors duration-500 ${
      currentScheme ? currentScheme.bg : 'bg-koel-aqua'
    }`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center px-4 md:px-6 py-8 md:py-10 relative"
        >
          {/* Brand Icon Top */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-4 md:mb-6"
          >
            <Image
              src="/icons/isotipo-teal.svg"
              alt="KOEL"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 opacity-40"
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6 uppercase tracking-wider transition-colors duration-500 ${
              currentScheme ? currentScheme.text : 'text-koel-teal'
            }`}
          >
            ¿QUÉ ES KOEL?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base lg:text-lg text-white leading-relaxed uppercase max-w-2xl mx-auto"
          >
            KOEL ES UN SISTEMA DE DESODORANTE RECARGABLE: APLICADOR REUTILIZABLE Y RECARGAS BIODEGRADABLES, DISEÑADOS PARA EL USO DIARIO.
          </motion.p>

          {/* Color Circles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8 flex items-center justify-center gap-3"
          >
            {colorSchemes.map((scheme, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.5 }}
                onHoverStart={() => setActiveColor(index)}
                onHoverEnd={() => setActiveColor(null)}
                onClick={() => setActiveColor(activeColor === index ? null : index)}
                className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${scheme.bg} cursor-pointer border-2 ${
                  activeColor === index ? 'border-white' : 'border-white/30'
                } transition-all duration-300`}
              />
            ))}
          </motion.div>

          {/* Decorative Lines */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 md:mt-8 flex items-center justify-center gap-3"
          >
            <div className={`w-12 md:w-20 h-[1px] transition-colors duration-500 ${
              currentScheme ? `${currentScheme.text.replace('text-', 'bg-')}/40` : 'bg-koel-teal/40'
            }`} />
            <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
              currentScheme ? currentScheme.text.replace('text-', 'bg-') : 'bg-koel-teal'
            }`} />
            <div className={`w-12 md:w-20 h-[1px] transition-colors duration-500 ${
              currentScheme ? `${currentScheme.text.replace('text-', 'bg-')}/40` : 'bg-koel-teal/40'
            }`} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
