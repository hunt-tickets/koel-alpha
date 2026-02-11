'use client';

import { useCart } from '@/contexts/CartContext';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatPrice } from '@/lib/utils/formatPrice';

const DEMO_PRODUCTS = [
  {
    id: 'koel-starter-kit',
    name: 'KOEL Starter Kit',
    price: 89000,
    image: '/images/products/starter-kit.jpg',
    variant: 'Eucalipto & Menta'
  },
  {
    id: 'koel-refill-citrus',
    name: 'Refill Cítrico',
    price: 35000,
    image: '/images/products/refill-citrus.jpg',
    variant: 'Naranja & Bergamota'
  },
  {
    id: 'koel-refill-forest',
    name: 'Refill Bosque',
    price: 35000,
    image: '/images/products/refill-forest.jpg',
    variant: 'Cedro & Pino'
  },
  {
    id: 'koel-case-premium',
    name: 'Case Premium',
    price: 65000,
    image: '/images/products/case-premium.jpg',
    variant: 'Aluminio Anodizado'
  },
];

export default function CartTestSection() {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (product: typeof DEMO_PRODUCTS[0]) => {
    addItem(product);
    openCart();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FCF7EE] to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-koel-neutral-900 mb-4">
            Prueba el Carrito
          </h2>
          <p className="text-lg text-koel-neutral-600">
            Haz clic en cualquier producto para agregarlo al carrito
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-koel-teal/20 to-koel-teal/5 rounded-xl mb-4 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-koel-teal/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>

              {/* Product Info */}
              <div className="mb-4">
                <h3 className="font-heading font-semibold text-lg text-koel-neutral-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-koel-neutral-600 mb-3">
                  {product.variant}
                </p>
                <p className="text-2xl font-bold text-koel-teal">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={() => handleAddToCart(product)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-koel-teal text-white font-heading font-semibold rounded-full hover:bg-koel-teal/90 transition-colors duration-200"
              >
                Agregar al Carrito
              </motion.button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
