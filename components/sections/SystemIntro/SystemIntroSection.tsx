'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function SystemIntroSection() {
  return (
    <section className="relative z-10 bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-koel-teal mb-6 md:mb-8 uppercase tracking-wide"
          >
            ¿QUÉ ES KOEL?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-koel-neutral-700 leading-relaxed font-heading uppercase max-w-3xl mx-auto"
          >
            KOEL ES UN SISTEMA DE DESODORANTE RECARGABLE: APLICADOR REUTILIZABLE Y RECARGAS BIODEGRADABLES, DISEÑADOS PARA EL USO DIARIO.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
