'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';
import { FAQS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-container bg-koel-neutral-100">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <p className="text-base tracking-[0.3em] uppercase text-koel-neutral-500 mb-3 font-light">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-koel-teal mb-4 font-display leading-tight">
            ¿Tienes dudas?
          </h2>
          <p className="text-xl text-koel-neutral-600 uppercase">
            Aquí respondemos las preguntas más comunes sobre KOEL
          </p>
        </motion.div>

        {/* FAQ Items - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full border border-koel-neutral-200 rounded-xl overflow-hidden hover:border-koel-aqua/40 transition-colors duration-300">
                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left gap-4 transition-all duration-200"
                >
                  <span className="text-base md:text-lg font-semibold text-koel-teal flex-1 leading-snug font-heading">
                    {faq.question}
                  </span>

                  {/* Plus/Minus Icon */}
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {openIndex === index ? (
                        <motion.div
                          key="minus"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Minus className="w-5 h-5 text-koel-aqua" strokeWidth={2} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus className="w-5 h-5 text-koel-teal" strokeWidth={2} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-base md:text-lg text-koel-neutral-600 leading-relaxed border-t border-koel-neutral-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
