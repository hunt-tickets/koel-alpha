'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { Quote } from 'lucide-react';

export default function SystemIntroSection() {
  return (
    <section className="relative z-10 bg-koel-aqua py-16 md:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center px-6 md:px-8 py-12 md:py-16 relative"
        >
          {/* Quote Icon Top */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-koel-teal/30" strokeWidth={1.5} />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-koel-teal mb-6 md:mb-8 uppercase tracking-wider"
          >
            ¿QUÉ ES KOEL?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg lg:text-xl text-white leading-relaxed font-heading uppercase max-w-3xl mx-auto"
          >
            KOEL ES UN SISTEMA DE DESODORANTE RECARGABLE: APLICADOR REUTILIZABLE Y RECARGAS BIODEGRADABLES, DISEÑADOS PARA EL USO DIARIO.
          </motion.p>

          {/* Decorative Lines */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 md:mt-10 flex items-center justify-center gap-4"
          >
            <div className="w-16 md:w-24 h-[2px] bg-koel-teal/40" />
            <div className="w-2 h-2 rounded-full bg-koel-teal" />
            <div className="w-16 md:w-24 h-[2px] bg-koel-teal/40" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
