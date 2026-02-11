'use client';

import { useCart } from '@/contexts/CartContext';
import { motion } from 'framer-motion';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    variant?: string;
  };
  className?: string;
}

export default function AddToCartButton({ product, className = '' }: AddToCartButtonProps) {
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    openCart();
  };

  return (
    <motion.button
      onClick={handleAddToCart}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-4 bg-koel-teal text-white font-heading font-semibold rounded-full hover:bg-koel-teal/90 transition-colors duration-200 ${className}`}
    >
      Agregar al Carrito
    </motion.button>
  );
}
