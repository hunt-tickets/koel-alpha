'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function SubscriptionSection() {
  return (
    <section className="relative z-10 bg-koel-teal pt-12 md:pt-20 lg:pt-32 pb-20 md:pb-32 lg:pb-48">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[3/4] sm:aspect-[16/9] md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2000&auto=format&fit=crop"
            alt="KOEL Subscription"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-2xl bg-[#FCF7EE] rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-center"
            >
              {/* Logo KOEL - Top */}
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/logos/logo-teal.svg"
                  alt="KOEL"
                  width={200}
                  height={80}
                  className="w-16 md:w-20 h-auto mx-auto"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-koel-teal mb-4 sm:mb-6 uppercase tracking-wide">
                Suscripción KOEL
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-koel-neutral-600 mb-6 sm:mb-8 leading-relaxed font-heading">
                Recibe tus recargas automáticamente cada mes. Nunca te quedes sin tu desodorante favorito y ahorra con nuestro modelo de suscripción.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/icons/sistema-recargable.svg"
                    alt="Envío Automático"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                    }}
                  />
                  <p className="text-xs sm:text-sm font-heading text-koel-teal uppercase tracking-wide">Envío Automático</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/icons/mayor-durabilidad.svg"
                    alt="Ahorra 15%"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                    }}
                  />
                  <p className="text-xs sm:text-sm font-heading text-koel-teal uppercase tracking-wide">Ahorra 15%</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/icons/smart-system.svg"
                    alt="Cancela Cuando Quieras"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                    }}
                  />
                  <p className="text-xs sm:text-sm font-heading text-koel-teal uppercase tracking-wide">Cancela Cuando Quieras</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button variant="primary" size="lg" className="uppercase">
                Comenzar Suscripción
              </Button>

              {/* Logo isotipo - Bottom */}
              <div className="mt-6 sm:mt-8">
                <Image
                  src="/logos/logo-teal.svg"
                  alt="KOEL"
                  width={60}
                  height={24}
                  className="w-auto h-4 opacity-70 mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
