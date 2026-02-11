'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function SubscriptionSection() {
  return (
    <section className="relative z-10 bg-[#FCF7EE] pt-12 md:pt-20 lg:pt-32 pb-12 md:pb-20 lg:pb-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full min-h-[750px] sm:aspect-[16/9] md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden"
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
          <div className="absolute inset-0 flex items-center justify-center py-8 px-6 sm:p-6 md:p-8 lg:p-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-2xl bg-[#FCF7EE] rounded-xl md:rounded-2xl p-5 sm:p-8 md:p-12 lg:p-16 text-center"
            >
              {/* Logo KOEL - Top */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <Image
                  src="/logos/logo-teal.svg"
                  alt="KOEL"
                  width={200}
                  height={80}
                  className="w-14 md:w-20 h-auto mx-auto"
                />
              </div>

              {/* Title */}
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-display font-bold text-koel-teal mb-3 sm:mb-6 uppercase tracking-wide">
                La forma más simple de usar KOEL
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-lg md:text-xl text-koel-neutral-600 mb-4 sm:mb-8 leading-relaxed font-heading">
                Elige tu aroma, define la frecuencia y recibe tus recargas automáticamente. Tu ritual, siempre listo. Sin pensarlo.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-8">
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <Image
                    src="/icons/mayor-durabilidad.svg"
                    alt="Subscribe & Save"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                    }}
                  />
                  <h3 className="text-xs sm:text-sm font-heading font-bold text-koel-teal uppercase tracking-wide">Subscribe & Save</h3>
                  <p className="text-sm sm:text-base text-koel-neutral-600 max-w-[200px] leading-tight">Ahorra en cada recarga al suscribirte.</p>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <Image
                    src="/icons/sistema-recargable.svg"
                    alt="Envío automático"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                    }}
                  />
                  <h3 className="text-xs sm:text-sm font-heading font-bold text-koel-teal uppercase tracking-wide">Envío automático</h3>
                  <p className="text-sm sm:text-base text-koel-neutral-600 max-w-[200px] leading-tight">Recibe tus PODs cuando los necesitas. Nada más.</p>
                </div>
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <Image
                    src="/icons/smart-system.svg"
                    alt="Control total"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                    }}
                  />
                  <h3 className="text-xs sm:text-sm font-heading font-bold text-koel-teal uppercase tracking-wide">Control total</h3>
                  <p className="text-sm sm:text-base text-koel-neutral-600 max-w-[200px] leading-tight">Cambia, pausa o cancela cuando quieras.</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button variant="primary" size="lg" className="uppercase">
                Comenzar suscripción
              </Button>

              {/* Mini copy below button */}
              <p className="text-sm sm:text-base text-koel-neutral-500 mt-3 sm:mt-4">
                Sin compromisos. Sin cargos ocultos.
              </p>

              {/* Logo isotipo - Bottom */}
              <div className="mt-4 sm:mt-8">
                <Image
                  src="/logos/logo-teal.svg"
                  alt="KOEL"
                  width={60}
                  height={24}
                  className="w-auto h-3 sm:h-4 opacity-70 mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
