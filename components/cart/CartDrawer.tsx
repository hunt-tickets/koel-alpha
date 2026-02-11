'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, total, itemCount } = useCart();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#FCF7EE] z-[201] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-koel-neutral-300">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-heading font-semibold text-koel-neutral-900">
                  Carrito
                </h2>
                {itemCount > 0 && (
                  <span className="bg-koel-teal text-white text-sm font-medium px-2.5 py-1 rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-koel-neutral-200 transition-colors duration-200"
                aria-label="Cerrar carrito"
              >
                <X className="w-6 h-6 text-koel-neutral-700" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="w-24 h-24 rounded-full bg-koel-neutral-200 flex items-center justify-center mb-4">
                    <svg
                      className="w-12 h-12 text-koel-neutral-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-medium text-koel-neutral-900 mb-2">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-koel-neutral-600 mb-6">
                    Agrega productos para comenzar tu ritual KOEL
                  </p>
                  <button
                    onClick={closeCart}
                    className="px-6 py-3 bg-koel-teal text-white font-medium rounded-full hover:bg-koel-teal/90 transition-colors duration-200"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="bg-white rounded-2xl p-4 shadow-sm"
                    >
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-koel-neutral-100 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1 min-w-0 pr-2">
                              <h3 className="font-heading font-semibold text-koel-neutral-900 truncate">
                                {item.name}
                              </h3>
                              {item.variant && (
                                <p className="text-sm text-koel-neutral-600 mt-0.5">
                                  {item.variant}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1 hover:bg-red-50 rounded-full transition-colors duration-200"
                              aria-label="Eliminar producto"
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </button>
                          </div>

                          {/* Price and Quantity Controls */}
                          <div className="flex justify-between items-center mt-3">
                            <p className="text-lg font-semibold text-koel-neutral-900">
                              ${item.price.toFixed(2)}
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 bg-koel-neutral-100 rounded-full px-2 py-1">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-white rounded-full transition-colors duration-200"
                                aria-label="Disminuir cantidad"
                              >
                                <Minus className="w-4 h-4 text-koel-neutral-700" />
                              </button>
                              <span className="w-8 text-center font-medium text-koel-neutral-900">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-white rounded-full transition-colors duration-200"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus className="w-4 h-4 text-koel-neutral-700" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer - Only show when there are items */}
            {items.length > 0 && (
              <div className="border-t border-koel-neutral-300 px-6 py-6 bg-white">
                {/* Subtotal */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-koel-neutral-600 font-medium">Subtotal</span>
                  <span className="text-2xl font-heading font-bold text-koel-neutral-900">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Shipping Info */}
                <p className="text-sm text-koel-neutral-500 text-center mb-4">
                  Envío e impuestos calculados al finalizar la compra
                </p>

                {/* Checkout Button */}
                <button
                  className="w-full py-4 bg-koel-teal text-white font-heading font-semibold text-lg rounded-full hover:bg-koel-teal/90 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                >
                  Finalizar Compra
                </button>

                {/* Continue Shopping */}
                <button
                  onClick={closeCart}
                  className="w-full mt-3 py-3 text-koel-neutral-700 font-medium hover:text-koel-teal transition-colors duration-200"
                >
                  Continuar comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
