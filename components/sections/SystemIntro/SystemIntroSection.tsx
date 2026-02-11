'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function SystemIntroSection() {
  return (
    <section className="sticky top-0 z-10 bg-koel-aqua py-12 md:py-16">
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
            className="text-2xl md:text-3xl font-display font-bold text-koel-teal mb-4 md:mb-6 uppercase tracking-wider"
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

          {/* Decorative Lines */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 md:mt-8 flex items-center justify-center gap-3"
          >
            <div className="w-12 md:w-20 h-[1px] bg-koel-teal/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-koel-teal" />
            <div className="w-12 md:w-20 h-[1px] bg-koel-teal/40" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
