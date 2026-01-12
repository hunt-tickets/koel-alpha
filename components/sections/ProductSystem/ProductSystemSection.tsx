'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Shield, Leaf, Gem, CalendarRange, RotateCw, Flower2, ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import ProductCard from './ProductCard';
import { PRODUCTS } from '@/lib/constants';

// Icon mapping
const iconMap = {
  Sparkles,
  Shield,
  Leaf,
  Gem,
  CalendarRange,
  RotateCw,
  Flower2,
};

export default function ProductSystemSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Map products with icon components
  const productsWithIcons = PRODUCTS.map(product => ({
    ...product,
    features: product.features.map(feature => ({
      ...feature,
      icon: iconMap[feature.icon as keyof typeof iconMap],
    })),
  }));

  return (
    <section id="products" className="section-container bg-koel-neutral-100">
      {/* Section Header */}
      <Container className="mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-koel-neutral-500 mb-4 font-light">
            Nuestro sistema
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-koel-teal mb-4 font-display">
            Diseño que cambia las reglas
          </h2>
          <p className="text-lg md:text-xl text-koel-neutral-600 max-w-2xl mx-auto">
            Elige el sistema que mejor se adapte a tus necesidades
          </p>
        </motion.div>
      </Container>

      {/* Horizontal Carousel - Full Width (All Screens) */}
      <div className="overflow-x-auto scrollbar-hide snap-x pb-4">
        <div className="flex gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-12">
          {productsWithIcons.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="snap-center flex-shrink-0 w-[75vw] sm:w-[55vw] md:w-[42vw] lg:w-[28vw] xl:w-[24vw] min-w-0"
            >
              <ProductCard
                {...product}
                isExpanded={expandedIndex === index}
                onToggleExpand={() => setExpandedIndex(expandedIndex === index ? null : index)}
              />
            </motion.div>
          ))}
          {/* Spacer */}
          <div className="flex-shrink-0 w-[8vw] md:w-[15vw]" />
        </div>
      </div>

      {/* Scroll Indicators */}
      <Container>
        <div className="flex gap-2 justify-center mt-6">
          {productsWithIcons.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-koel-neutral-300"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
