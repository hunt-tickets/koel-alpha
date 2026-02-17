/**
 * KOEL Brand Constants
 * Centralized content and configuration
 */

// Timing
export const LOADER_MIN_DURATION = 1750;
export const LOADER_EXIT_DURATION = 800;
export const LOADER_REVEAL_DELAY = LOADER_MIN_DURATION + LOADER_EXIT_DURATION; // 2550ms

// CSS filter strings for SVG icon tinting
export const ICON_FILTERS = {
  teal: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)',
  aqua: 'brightness(0) saturate(100%) invert(73%) sepia(11%) saturate(1590%) hue-rotate(128deg) brightness(91%) contrast(87%)',
  yellow: 'brightness(0) saturate(100%) invert(85%) sepia(16%) saturate(1449%) hue-rotate(358deg) brightness(102%) contrast(101%)',
  olive: 'brightness(0) saturate(100%) invert(38%) sepia(13%) saturate(1066%) hue-rotate(74deg) brightness(94%) contrast(88%)',
  cream: 'brightness(0) saturate(100%) invert(98%) sepia(2%) saturate(1157%) hue-rotate(318deg) brightness(102%) contrast(96%)',
} as const;

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
    slug: 'lavanda',
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
    slug: 'citrico',
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
    slug: 'coco',
  },
] as const;

// Tutorial Steps
export const TUTORIAL_STEPS = [
  {
    number: 1,
    title: 'Calienta',
    description: 'Frota el POD entre tus manos durante 90 segundos para una mejor recarga.',
    image: '/images/tutorial/step-1.jpg',
  },
  {
    number: 2,
    title: 'Encaja',
    description: 'Encaja el POD en el aplicador hasta que quede firme.',
    image: '/images/tutorial/step-2.jpg',
  },
  {
    number: 3,
    title: 'Empuja',
    description: 'Empuja desde la base del POD hasta que quede completamente encajado.',
    image: '/images/tutorial/step-3.jpg',
  },
] as const;

// FAQs
export const FAQS = [
  {
    question: '¿Qué incluye el Kit Inicial KOEL?',
    answer: 'El Kit Inicial KOEL incluye todo lo que necesitas para comenzar tu ritual:\n\n• 1 Aplicador reutilizable, fabricado en plástico PCR reciclable\n• 1 POD recargable, hecho en cartón biodegradable, en el aroma que elijas\n\nEs la forma más simple de entrar al sistema KOEL y empezar desde el primer día.\n\nAdemás, todos los pedidos durante el lanzamiento participan en un sorteo para ganar una Golden Box que te otorga un año completo de desodorante KOEL gratis.',
  },
  {
    question: '¿Cómo funciona el sistema recargable de KOEL?',
    answer: 'KOEL funciona como un sistema simple, diseñado para repetirse:\n\n• El aplicador se queda contigo\n• Cuando se termina tu desodorante, solo cambias el POD\n\nRecargarlo es así de fácil:\n\nPaso 1 — CALIENTA\nFrota el POD entre tus manos durante 90 segundos para una mejor recarga.\n\nPaso 2 — ENCAJA\nEncaja el POD en el aplicador hasta que quede firme.\n\nPaso 3 — EMPUJA\nEmpuja desde la base del POD hasta que quede completamente encajado.\n\nLuego, solo gira la base y úsalo normalmente.',
  },
  {
    question: '¿Qué aromas están disponibles?',
    answer: 'Actualmente ofrecemos dos aromas:\n\n• Bamboo: fresco, limpio y equilibrado\n• Ginger Grape: vibrante, moderno y energizante\n\nAmbos están pensados para acompañar tu rutina diaria sin ser invasivos.',
  },
  {
    question: '¿Las fragancias de KOEL son aptas para piel sensible?',
    answer: 'Sí. Las fórmulas de KOEL están diseñadas para ser suaves con la piel.\nNo contienen aluminio ni alcohol y están pensadas para el uso diario, incluso en pieles sensibles.\n\nSi tienes alguna condición específica, siempre recomendamos revisar los ingredientes antes de usar.',
  },
  {
    question: '¿Cuánto tiempo dura un POD de KOEL?',
    answer: 'Cada POD está diseñado para durar aproximadamente entre uno y dos meses, dependiendo de la frecuencia y cantidad de uso diario.\n\nLa suscripción te permite elegir la periodicidad que mejor se adapte a tu ritmo.',
  },
  {
    question: '¿Qué hace a KOEL una opción más consciente?',
    answer: 'KOEL reduce el desperdicio desde el diseño:\n\n• El aplicador es reutilizable y está hecho en plástico PCR reciclable\n• Los PODs son de cartón biodegradable\n• Solo reemplazas lo que realmente se consume\n\nNo es solo un producto, es un sistema pensado para durar.',
  },
  {
    question: '¿Puedo comprar los productos sin suscribirme?',
    answer: 'Sí. Puedes comprar el Kit Inicial, los PODs o el Aplicador de forma individual.\n\nSin embargo, la suscripción es la forma más conveniente de usar KOEL: ahorras en cada recarga y recibes tus PODs automáticamente.',
  },
  {
    question: '¿Puedo modificar o cancelar mi suscripción?',
    answer: 'Claro. La suscripción KOEL es flexible:\n\n• Puedes cambiar la frecuencia\n• Pausar cuando lo necesites\n• Cancelar en cualquier momento\n\nTodo desde tu cuenta, sin complicaciones.',
  },
  {
    question: '¿Dónde está disponible KOEL?',
    answer: 'Por ahora, KOEL está disponible únicamente en Colombia.\nEstamos trabajando para expandirnos a otros mercados en el futuro.',
  },
  {
    question: '¿Cuánto tiempo tarda el envío?',
    answer: 'Los tiempos de envío se muestran antes de finalizar tu compra.\nTrabajos para que recibas tu KOEL lo más rápido posible y en óptimas condiciones.',
  },
  {
    question: '¿KOEL tendrá más productos en el futuro?',
    answer: 'Sí. KOEL nace como un sistema de cuidado personal recargable.\nEn el futuro, iremos ampliando el universo KOEL a otros productos de aseo personal, siempre bajo la misma lógica de diseño consciente y simplicidad.',
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
  { label: 'Manifiesto', href: '/manifiesto' },
  { label: 'Tutorial', href: '#tutorial' },
] as const;
