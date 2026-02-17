'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function ValuePropSection() {
  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#FCF7EE]">
      <Container>
        {/* Decorative Header with Sello */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto"
        >
          {/* Top Divider */}
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-16 md:w-24 bg-koel-teal/30" />
            <Image
              src="/logos/logo-teal.svg"
              alt="KOEL"
              width={120}
              height={48}
              className="w-20 md:w-24 h-auto opacity-90"
            />
            <div className="h-[1px] w-16 md:w-24 bg-koel-teal/30" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
