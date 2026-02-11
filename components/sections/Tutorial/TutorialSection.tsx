'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import { TUTORIAL_STEPS } from '@/lib/constants';

export default function TutorialSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const nextStep = currentStep + newDirection;
    if (nextStep >= 0 && nextStep < TUTORIAL_STEPS.length) {
      setCurrentStep(nextStep);
    }
  };

  return (
    <section
      id="tutorial"
      className="relative z-50 bg-koel-teal py-16 md:py-20 lg:py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto bg-[#FCF7EE] rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-center"
        >
              {/* Divider with Text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12"
              >
                <div className="w-12 md:w-24 h-[1px] bg-koel-teal/30" />
                <h2 className="text-sm md:text-base font-heading tracking-[0.3em] uppercase text-koel-teal whitespace-nowrap">
                  Recargar es parte del <span className="font-bold text-koel-aqua">ritual</span>
                </h2>
                <div className="w-12 md:w-24 h-[1px] bg-koel-teal/30" />
              </motion.div>

              {/* Steps - Mobile Swiper / Desktop Grid */}
              {/* Mobile: Swipeable Carousel */}
              <div className="md:hidden relative overflow-hidden">
                <div className="relative h-[400px] flex items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.3 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1);
                        }
                      }}
                      className="absolute w-full text-center px-4"
                    >
                      {(() => {
                        const step = TUTORIAL_STEPS[currentStep];
                        const iconSrc =
                          currentStep === 0
                            ? '/icons/abre.svg'
                            : currentStep === 1
                            ? '/icons/encaja.svg'
                            : '/icons/disfruta.svg';

                        const iconAlt =
                          currentStep === 0 ? 'Calienta' : currentStep === 1 ? 'Encaja' : 'Empuja';

                        return (
                          <>
                            {/* Step Number */}
                            <div className="text-5xl font-bold text-koel-teal/10 mb-3 font-display leading-none">
                              {step.number}
                            </div>

                            {/* Icon */}
                            <div className="mb-4 flex justify-center">
                              <Image
                                src={iconSrc}
                                alt={iconAlt}
                                width={80}
                                height={80}
                                className="w-16 h-16"
                                style={{
                                  filter: 'brightness(0) saturate(100%) invert(75%) sepia(12%) saturate(650%) hue-rotate(128deg) brightness(98%) contrast(90%)'
                                }}
                              />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-koel-teal mb-3 font-display uppercase tracking-wide">
                              {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base text-koel-neutral-600 leading-relaxed max-w-xs mx-auto">
                              {step.description}
                            </p>
                          </>
                        );
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {TUTORIAL_STEPS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStep
                          ? 'bg-koel-aqua w-8'
                          : 'bg-koel-neutral-300'
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
                {TUTORIAL_STEPS.map((step, index) => {
                  const iconSrc =
                    index === 0
                      ? '/icons/abre.svg'
                      : index === 1
                      ? '/icons/encaja.svg'
                      : '/icons/disfruta.svg';

                  const iconAlt =
                    index === 0 ? 'Calienta' : index === 1 ? 'Encaja' : 'Empuja';

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
                      <div className="text-5xl md:text-7xl font-bold text-koel-teal/10 mb-3 md:mb-4 font-display leading-none">
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
                          style={{
                            filter: 'brightness(0) saturate(100%) invert(75%) sepia(12%) saturate(650%) hue-rotate(128deg) brightness(98%) contrast(90%)'
                          }}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-2xl font-bold text-koel-teal mb-3 md:mb-4 font-display uppercase tracking-wide">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base md:text-lg text-koel-neutral-600 leading-relaxed max-w-xs mx-auto">
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
            className="mt-8 md:mt-12"
          >
            <p className="text-sm md:text-base tracking-[0.2em] uppercase text-koel-neutral-500">
              Menos de <span className="font-bold text-koel-aqua">30 segundos</span> de principio a fin
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
