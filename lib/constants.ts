/**
 * KOEL Brand Constants
 * Centralized content and configuration
 */

// Brand Information
export const BRAND = {
  name: 'KOEL',
  tagline: 'A New Way to Care',
  description: 'El primer desodorante recargable de Colombia',
  fullDescription: 'Un sistema sostenible que combina diseño premium con responsabilidad ambiental',
} as const;

// Product Information
export const PRODUCTS = [
  {
    id: 'pod-bamboo',
    name: 'Deodorant Pod Bamboo',
    subtitle: 'Recarga biodegradable',
    description: 'Recarga biodegradable con aroma fresco de bambú.',
    features: [
      { icon: 'Leaf', title: 'Biodegradable', description: 'Cartón 100% natural.' },
      { icon: 'CalendarRange', title: 'Larga duración', description: '1 a 2 meses por recarga.' },
      { icon: 'RotateCw', title: 'Fácil recarga', description: 'Cambio sin esfuerzo en segundos.' },
      { icon: 'Flower2', title: 'Natural', description: 'Ingredientes puros y seguros.' },
    ],
    price: 12000,
    accentColor: 'from-koel-olive/30 to-koel-aqua/30',
    image: '/images/products/pod-bamboo.jpg',
  },
  {
    id: 'pod-ginger',
    name: 'Deodorant Pod Ginger Grape',
    subtitle: 'Recarga con aroma cítrico',
    description: 'Recarga biodegradable con energizante aroma cítrico.',
    features: [
      { icon: 'Leaf', title: 'Biodegradable', description: 'Cartón 100% natural.' },
      { icon: 'CalendarRange', title: 'Larga duración', description: '1 a 2 meses por recarga.' },
      { icon: 'RotateCw', title: 'Fácil recarga', description: 'Cambio sin esfuerzo en segundos.' },
      { icon: 'Flower2', title: 'Natural', description: 'Ingredientes puros y seguros.' },
    ],
    price: 12000,
    accentColor: 'from-koel-coral/30 to-koel-coral-light/30',
    image: '/images/products/pod-ginger.jpg',
  },
  {
    id: 'case',
    name: 'Deodorant Case',
    subtitle: 'Tu compañero duradero',
    description: 'Cuerpo de aluminio premium diseñado para durar años.',
    features: [
      { icon: 'Sparkles', title: 'Diseño ergonómico', description: 'Compacto y elegante para cualquier lugar.' },
      { icon: 'Shield', title: 'Duradero', description: 'Materiales de alta resistencia.' },
      { icon: 'Leaf', title: 'Cero plástico', description: 'Elimina desechables de un solo uso.' },
      { icon: 'Gem', title: 'Premium', description: 'Acabados de alta calidad.' },
    ],
    price: 35000,
    accentColor: 'from-koel-aqua/30 to-koel-olive/30',
    image: '/images/products/case.jpg',
  },
  {
    id: 'starter-kit',
    name: 'Starter Kit',
    subtitle: 'Tu primer paso hacia lo sostenible',
    description: 'Pack completo: Case premium + 2 Pods biodegradables.',
    features: [
      { icon: 'Sparkles', title: 'Todo lo que necesitas', description: 'Case + 2 Pods biodegradables.' },
      { icon: 'Shield', title: 'Mejor valor', description: 'Ahorra con este kit completo.' },
      { icon: 'Gem', title: 'Premium', description: 'Diseño y calidad sin compromiso.' },
      { icon: 'Flower2', title: 'Perfecto para empezar', description: 'Ideal para tu primera compra.' },
    ],
    price: 45000,
    accentColor: 'from-koel-teal/30 to-koel-aqua/30',
    image: '/images/products/starter-kit.jpg',
  },
  {
    id: 'family-kit',
    name: 'Family Kit',
    subtitle: 'Para compartir en familia',
    description: 'Kit familiar: 2 Cases + 4 Pods variados.',
    features: [
      { icon: 'Sparkles', title: 'Para toda la familia', description: '2 Cases + 4 Pods variados.' },
      { icon: 'Shield', title: 'Máximo ahorro', description: 'Mejor precio por unidad.' },
      { icon: 'Gem', title: 'Dos fragancias', description: 'Bamboo y Ginger Grape.' },
      { icon: 'Leaf', title: 'Sostenible', description: 'Menos empaques, más conciencia.' },
    ],
    price: 79000,
    accentColor: 'from-koel-aqua/30 to-koel-olive/30',
    image: '/images/products/family-kit.jpg',
  },
] as const;

// Fragrances
export const FRAGRANCES = [
  {
    id: 'bamboo-whisper',
    name: 'Bamboo Whisper',
    description: 'Fresco y natural. Notas de bambú y té verde.',
    notes: {
      top: ['Bambú', 'Té verde'],
      mid: ['Jazmín', 'Lirio'],
      base: ['Almizcle blanco', 'Cedro'],
    },
    color: 'koel-olive',
    icon: '/images/fragrances/bamboo-whisper.svg',
  },
  {
    id: 'ginger-grape',
    name: 'Ginger Grape',
    description: 'Vibrante y energizante. Notas de jengibre y toronja.',
    notes: {
      top: ['Jengibre', 'Toronja'],
      mid: ['Cardamomo', 'Pimienta rosa'],
      base: ['Ámbar', 'Vetiver'],
    },
    color: 'koel-coral',
    icon: '/images/fragrances/ginger-grape.svg',
  },
] as const;

// Tutorial Steps
export const TUTORIAL_STEPS = [
  {
    number: 1,
    title: 'Abre',
    description: 'Gira la base del desodorante en sentido antihorario para abrir.',
    image: '/images/tutorial/step-1.jpg',
  },
  {
    number: 2,
    title: 'Recarga',
    description: 'Inserta la nueva recarga hasta escuchar un clic.',
    image: '/images/tutorial/step-2.jpg',
  },
  {
    number: 3,
    title: 'Disfruta',
    description: 'Cierra y gira hacia arriba para usar. ¡Listo!',
    image: '/images/tutorial/step-3.jpg',
  },
] as const;

// Value Propositions
export const VALUE_PROPS = [
  {
    title: 'Sostenible',
    description: 'Reduce tu huella de plástico hasta un 80% con nuestro sistema recargable.',
    icon: '🌱',
  },
  {
    title: 'Premium',
    description: 'Diseño minimalista en aluminio de alta calidad que dura años.',
    icon: '✨',
  },
  {
    title: 'Efectivo',
    description: 'Fórmula de larga duración sin aluminio, parabenos ni crueldad animal.',
    icon: '💪',
  },
  {
    title: 'Versátil',
    description: 'Cambia de fragancia cuando quieras. Tu estilo, tu elección.',
    icon: '🎨',
  },
] as const;

// FAQs
export const FAQS = [
  {
    question: '¿Cuánto dura una recarga?',
    answer: 'Cada recarga dura aproximadamente 2-3 meses con uso diario normal.',
  },
  {
    question: '¿Es realmente libre de aluminio?',
    answer: 'Sí, nuestra fórmula no contiene sales de aluminio (antitranspirantes). Usamos ingredientes naturales efectivos.',
  },
  {
    question: '¿Cómo funciona el sistema de recarga?',
    answer: 'Simple: abre girando la base, inserta la nueva recarga hasta el clic, cierra y listo. Toma menos de 30 segundos.',
  },
  {
    question: '¿Hacen envíos a toda Colombia?',
    answer: 'Sí, enviamos a todo el país. Envío gratis en compras superiores a $100.000.',
  },
  {
    question: '¿Puedo mezclar fragancias?',
    answer: 'Absolutamente. El sistema está diseñado para cambiar de fragancia cuando quieras.',
  },
  {
    question: '¿Qué hago con las recargas vacías?',
    answer: 'Son 100% reciclables. También estamos desarrollando un programa de retorno para reusarlas.',
  },
] as const;

// Social Links
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/koel.co',
  facebook: 'https://facebook.com/koel.co',
  tiktok: 'https://tiktok.com/@koel.co',
  email: 'hola@koel.co',
} as const;

// Navigation
export const NAV_LINKS = [
  { label: 'Productos', href: '#products' },
  { label: 'Cómo Funciona', href: '#tutorial' },
  { label: 'Fragancias', href: '#fragrances' },
  { label: 'Manifiesto', href: '/manifiesto' },
  { label: 'FAQ', href: '#faq' },
] as const;
