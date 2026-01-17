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
          <p className="text-base tracking-[0.3em] uppercase text-koel-neutral-500 mb-4 font-light">
            Nuestro sistema
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-koel-teal mb-4 font-display">
            Diseño que cambia las reglas
          </h2>
          <p className="text-xl md:text-2xl text-koel-neutral-600 max-w-2xl mx-auto">
            Elige el sistema que mejor se adapte a tus necesidades
          </p>
        </motion.div>
      </Container>

      {/* Three Column Grid */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
            >
              <ProductCard
                {...product}
                isExpanded={expandedIndex === index}
                onToggleExpand={() => setExpandedIndex(expandedIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
