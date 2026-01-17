'use client';

import { useState, use, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formatPrice } from '@/lib/utils';
import LoadingScreen from '@/components/ui/LoadingScreen';

// Datos de productos (más adelante vendrán de Shopify)
const PRODUCTS = {
  'citrico': {
    id: 'citrico',
    name: 'Deodorant Pod Ginger Grape',
    subtitle: 'Recarga con aroma cítrico',
    price: 12000,
    description: 'Recarga biodegradable con energizante aroma cítrico. Fórmula natural de larga duración que cuida tu piel y el planeta.',
    features: [
      'Biodegradable - Cartón 100% natural',
      'Larga duración - 1 a 2 meses por recarga',
      'Fácil recarga - Cambio sin esfuerzo en segundos',
      'Natural - Ingredientes puros y seguros',
      'Sin aluminio ni parabenos',
      'Aroma cítrico energizante'
    ],
    ingredients: 'Manteca de karité, aceite de coco, bicarbonato de sodio, aceites esenciales de jengibre y toronja, cera de candelilla.',
    usage: 'Aplica 2-3 pasadas sobre la piel limpia y seca. Espera unos segundos antes de vestirte para que se absorba completamente.',
    accentColor: 'bg-koel-coral',
    textColor: 'text-koel-teal',
    images: [
      '/images/producto-citrico-1.jpg',
      '/images/producto-citrico-2.jpg',
      '/images/producto-citrico-3.jpg',
    ]
  },
  'coco': {
    id: 'coco',
    name: 'Deodorant Case',
    subtitle: 'Tu compañero duradero',
    price: 35000,
    description: 'Cuerpo de aluminio premium diseñado para durar años. Un diseño elegante y sostenible que elimina el uso de plásticos desechables.',
    features: [
      'Diseño ergonómico - Compacto y elegante',
      'Duradero - Materiales de alta resistencia',
      'Cero plástico - Elimina desechables',
      'Premium - Acabados de alta calidad',
      'Compatible con todas las recargas',
      'Garantía de por vida'
    ],
    ingredients: 'Aluminio premium, componentes reciclables de alta calidad.',
    usage: 'Inserta tu recarga favorita, gira la base para ajustar la cantidad de producto y aplica sobre la piel limpia.',
    accentColor: 'bg-koel-aqua',
    textColor: 'text-koel-teal',
    images: [
      '/images/producto-coco-1.jpg',
      '/images/producto-coco-2.jpg',
      '/images/producto-coco-3.jpg',
    ]
  },
  'lavanda': {
    id: 'lavanda',
    name: 'Deodorant Pod Bamboo',
    subtitle: 'Recarga biodegradable',
    price: 12000,
    description: 'Recarga biodegradable con aroma fresco de bambú. Fórmula natural que proporciona protección duradera mientras cuida el medio ambiente.',
    features: [
      'Biodegradable - Cartón 100% natural',
      'Larga duración - 1 a 2 meses por recarga',
      'Fácil recarga - Cambio sin esfuerzo en segundos',
      'Natural - Ingredientes puros y seguros',
      'Sin aluminio ni parabenos',
      'Aroma fresco de bambú'
    ],
    ingredients: 'Manteca de karité, aceite de coco, bicarbonato de sodio, aceites esenciales de bambú y té verde, cera de candelilla.',
    usage: 'Aplica 2-3 pasadas sobre la piel limpia y seca. Espera unos segundos antes de vestirte para que se absorba completamente.',
    accentColor: 'bg-koel-olive',
    textColor: 'text-koel-teal',
    images: [
      '/images/producto-lavanda-1.jpg',
      '/images/producto-lavanda-2.jpg',
      '/images/producto-lavanda-3.jpg',
    ]
  }
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { slug } = use(params);

  console.log('Product page - slug:', slug);
  console.log('Available products:', Object.keys(PRODUCTS));

  const product = PRODUCTS[slug as keyof typeof PRODUCTS];

  console.log('Found product:', product);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-koel-neutral-100">
        <div className="text-center">
          <h1 className="text-4xl font-display text-koel-teal mb-4">Producto no encontrado</h1>
          <Button onClick={() => router.push('/')}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // TODO: Integrar con Shopify Cart API
    console.log('Agregando al carrito:', { product: product.id, quantity });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <>
      <LoadingScreen
        minDuration={2000}
        onLoadingComplete={() => setIsLoading(false)}
        bgColor="bg-koel-aqua"
        textColor="text-koel-teal"
      />
      <div className="min-h-screen bg-koel-neutral-50">
      {/* Header Navigation */}
      <Container className="py-6">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-koel-neutral-600 hover:text-koel-teal transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-heading">Volver</span>
        </button>
      </Container>

      {/* Product Content */}
      <Container className="py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square bg-koel-neutral-200 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-koel-neutral-500 text-lg font-heading">
                  Imagen del producto
                </span>
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-koel-neutral-200 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-koel-teal scale-95'
                      : 'border-transparent hover:border-koel-neutral-300'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-sm text-koel-neutral-400 font-body">
                      {index + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Title & Price */}
            <div>
              <h1 className="text-4xl md:text-5xl font-display text-koel-teal mb-2 uppercase tracking-wide">
                {product.name}
              </h1>
              <p className="text-xl text-koel-neutral-600 font-heading mb-6">
                {product.subtitle}
              </p>
              <p className="text-5xl font-bold text-koel-teal">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-koel-neutral-700 leading-relaxed font-body">
              {product.description}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-koel-neutral-700 font-heading">
                  Cantidad:
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-koel-neutral-200 hover:bg-koel-neutral-300 flex items-center justify-center font-heading transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-heading text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-koel-neutral-200 hover:bg-koel-neutral-300 flex items-center justify-center font-heading transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <Button
                size="lg"
                variant="primary"
                fullWidth
                onClick={handleAddToCart}
                className="uppercase flex items-center justify-center gap-2"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Agregado al carrito
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Agregar al carrito
                  </>
                )}
              </Button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-heading text-koel-teal mb-4 uppercase">
                Características
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-koel-neutral-700 font-body"
                  >
                    <Check className="w-5 h-5 text-koel-teal flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-heading text-koel-teal mb-3 uppercase">
                Ingredientes
              </h3>
              <p className="text-koel-neutral-700 font-body leading-relaxed">
                {product.ingredients}
              </p>
            </div>

            {/* Usage */}
            <div>
              <h3 className="text-xl font-heading text-koel-teal mb-3 uppercase">
                Modo de uso
              </h3>
              <p className="text-koel-neutral-700 font-body leading-relaxed">
                {product.usage}
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Sustainability Section */}
      <section className="bg-koel-aqua py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display text-koel-teal mb-6 uppercase">
              Sistema Refillable
            </h2>
            <p className="text-lg text-koel-teal font-body mb-8">
              Cada refill KOEL reduce el desperdicio de plástico en un 80%. Cuando termines tu desodorante, simplemente compra un refill y reutiliza tu envase.
            </p>
            <Button variant="secondary" size="lg">
              Conoce más sobre sostenibilidad
            </Button>
          </div>
        </Container>
      </section>
    </div>
    </>
  );
}
