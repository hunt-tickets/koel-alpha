'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { useState } from 'react';

export default function SystemIntroSection() {
  const [activeColor, setActiveColor] = useState<number | null>(null);

  // Color combinations
  const colorSchemes = [
    { bg: 'bg-koel-olive',  text: 'text-koel-yellow', divider: 'bg-koel-yellow', border: 'border-koel-yellow' },
    { bg: 'bg-koel-coral',  text: 'text-koel-teal',   divider: 'bg-koel-teal',   border: 'border-koel-teal'   },
    { bg: 'bg-koel-aqua',   text: 'text-koel-teal',   divider: 'bg-koel-teal',   border: 'border-koel-teal'   },
    { bg: 'bg-koel-teal',   text: 'text-koel-aqua',   divider: 'bg-koel-aqua',   border: 'border-koel-aqua'   },
    { bg: 'bg-koel-pink',   text: 'text-white',        divider: 'bg-white',       border: 'border-white'       },
    { bg: 'bg-koel-yellow', text: 'text-koel-olive',  divider: 'bg-koel-olive',  border: 'border-koel-olive'  },
  ];

  const currentScheme = activeColor !== null ? colorSchemes[activeColor] : null;

  // Get the appropriate isotipo based on active color
  const getIsotipoSrc = () => {
    if (activeColor === null) return '/icons/isotipo-teal.svg';

    switch (activeColor) {
      case 0: // olive/yellow
        return '/icons/isotipo-yellow.svg';
      case 1: // coral/teal
        return '/icons/isotipo-teal.svg';
      case 2: // aqua/teal
        return '/icons/isotipo-teal.svg';
      case 3: // teal/aqua
        return '/icons/isotipo-aqua.svg';
      case 4: // pink/white
        return '/icons/isotipo-koel.svg';
      case 5: // yellow/olive
        return '/icons/isotipo-koel.svg';
      default:
        return '/icons/isotipo-teal.svg';
    }
  };

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
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <AnimatePresence mode="sync" initial={false}>
                <motion.div
                  key={activeColor ?? 'default'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={getIsotipoSrc()}
                    alt="KOEL"
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12"
                    style={{
                      filter: activeColor === 4
                        ? 'brightness(0) invert(98%) sepia(8%) saturate(524%) hue-rotate(329deg) brightness(103%) contrast(97%)'
                        : activeColor === 5
                        ? 'brightness(0) saturate(100%) invert(35%) sepia(14%) saturate(1272%) hue-rotate(45deg) brightness(93%) contrast(89%)'
                        : undefined
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
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
            className={`text-base md:text-lg lg:text-xl leading-relaxed uppercase max-w-xl mx-auto transition-colors duration-500 ${
              currentScheme ? currentScheme.text : 'text-koel-teal'
            }`}
          >
            KOEL ES UN SISTEMA DE DESODORANTE RECARGABLE: APLICADOR REUTILIZABLE Y RECARGAS BIODEGRADABLES, DISEÑADOS PARA EL USO DIARIO.
          </motion.p>

          {/* Decorative Lines */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 md:mt-8 flex items-center justify-center gap-3"
          >
            <div className={`w-12 md:w-20 h-[1px] transition-colors duration-500 opacity-40 ${
              currentScheme ? currentScheme.divider : 'bg-koel-teal'
            }`} />
            <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
              currentScheme ? currentScheme.divider : 'bg-koel-teal'
            }`} />
            <div className={`w-12 md:w-20 h-[1px] transition-colors duration-500 opacity-40 ${
              currentScheme ? currentScheme.divider : 'bg-koel-teal'
            }`} />
          </motion.div>

          {/* Color Circles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
                  activeColor === index ? scheme.border : 'border-transparent'
                } transition-all duration-300`}
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
