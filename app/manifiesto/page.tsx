'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '@/components/ui/Container';
import { Leaf, Heart, Sparkles, Users, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/ui';
import Button from '@/components/ui/Button';

export default function ManifiestoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeColor, setActiveColor] = useState<number | null>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Show hero after loader (2.5s loader + 0.8s exit animation)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  // Parallax transforms
  const yTop = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yLogo = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yTitle = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const yBottom = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  // Color combinations for circles
  const colorSchemes = [
    { bg: 'bg-koel-olive', text: 'text-koel-yellow' }, // olive
    { bg: 'bg-koel-coral', text: 'text-koel-teal' },   // coral
    { bg: 'bg-koel-aqua', text: 'text-koel-teal' },    // aqua
    { bg: 'bg-koel-teal', text: 'text-koel-aqua' },    // teal
    { bg: 'bg-koel-pink', text: 'text-[#FCF7EE]' },    // pink
    { bg: 'bg-koel-yellow', text: 'text-koel-olive' }, // yellow
  ];

  // Get current color scheme
  const currentScheme = activeColor !== null ? colorSchemes[activeColor] : null;
  const values = [
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      subtitle: 'Cuidado Verde',
      description: 'Reducimos el desperdicio de plástico un 80% con nuestro sistema recargable.',
      bgColor: 'bg-koel-olive',
      textColor: 'text-koel-yellow',
    },
    {
      icon: Heart,
      title: 'Bienestar',
      subtitle: 'Salud Natural',
      description: 'Fórmulas naturales sin aluminio, parabenos ni crueldad animal.',
      bgColor: 'bg-koel-coral',
      textColor: 'text-koel-teal',
    },
    {
      icon: Sparkles,
      title: 'Diseño',
      subtitle: 'Belleza Funcional',
      description: 'Cada producto está diseñado para durar años y hacer de lo cotidiano algo especial.',
      bgColor: 'bg-koel-aqua',
      textColor: 'text-koel-teal',
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      subtitle: 'Pioneros',
      description: 'Reimaginamos el cuidado personal desde cero para crear algo mejor.',
      bgColor: 'bg-koel-teal',
      textColor: 'text-koel-aqua',
    },
    {
      icon: Target,
      title: 'Transparencia',
      subtitle: 'Sin Secretos',
      description: 'Compartimos abiertamente nuestros ingredientes, procesos y el impacto real.',
      bgColor: 'bg-koel-pink',
      textColor: 'text-[#FCF7EE]',
    },
    {
      icon: Users,
      title: 'Comunidad',
      subtitle: 'Movimiento Colectivo',
      description: 'Cada persona que elige KOEL es parte del cambio hacia un futuro más sostenible.',
      bgColor: 'bg-koel-yellow',
      textColor: 'text-koel-olive',
    },
  ];

  const manifestoText = `Hay una nueva forma de cuidar que no se impone, se siente.
Se revela en los detalles, en lo que dejamos atrás y en lo que elegimos volver esencial.
No responde a tendencias ni promesas. Responde a una necesidad silenciosa de pensar distinto.
Somos un universo que respira claridad.
Fusionamos lo natural con lo inteligente, transformando lo cotidiano en una experiencia suave, minimal y consciente.
El diseño nos permite simplificar, resolver y elevar.
Los hábitos se vuelven rituales más claros, más propios, más pensados.
Cuidar no es un acto de consumo.
Es coherencia en movimiento.
El futuro del cuidado comienza aquí.`;

  return (
    <>
      <LoadingScreen
        minDuration={2500}
        onLoadingComplete={() => setIsLoading(false)}
        bgColor="bg-koel-yellow"
        textColor="text-koel-olive"
      />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`sticky top-0 min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
          currentScheme ? currentScheme.bg : 'bg-[#FCF7EE]'
        }`}
      >
        <motion.div style={{ opacity }} className="w-full">
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto py-20 px-4 md:py-20">
              {/* Top Label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                style={{ y: yTop }}
                className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase mb-8 md:mb-16 font-medium transition-colors duration-500 ${
                  currentScheme ? currentScheme.text : 'text-koel-teal-dark'
                }`}
              >
                PRIMER DESODORANTE RECARGABLE
              </motion.p>

              {/* Logo Seal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                style={{ y: yLogo }}
                className="inline-flex items-center justify-center mb-16"
              >
                <Image
                  src={
                    activeColor === 0 ? "/icons/sello-olive.svg" :
                    activeColor === 5 ? "/icons/sello-hover-yellow.svg" :
                    "/icons/sello.svg"
                  }
                  alt="Sello KOEL"
                  width={160}
                  height={160}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 transition-all duration-500"
                  style={{
                    filter: currentScheme && activeColor !== 0 && activeColor !== 5
                      ? currentScheme.text === 'text-koel-yellow'
                        ? 'brightness(0) saturate(100%) invert(85%) sepia(16%) saturate(1449%) hue-rotate(358deg) brightness(102%) contrast(101%)'
                        : currentScheme.text === 'text-koel-teal'
                        ? 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                        : currentScheme.text === 'text-koel-aqua'
                        ? 'brightness(0) saturate(100%) invert(73%) sepia(11%) saturate(1590%) hue-rotate(128deg) brightness(91%) contrast(87%)'
                        : currentScheme.text === 'text-koel-olive'
                        ? 'brightness(0) saturate(100%) invert(38%) sepia(13%) saturate(1066%) hue-rotate(74deg) brightness(94%) contrast(88%)'
                        : 'brightness(0) saturate(100%) invert(98%) sepia(2%) saturate(1157%) hue-rotate(318deg) brightness(102%) contrast(96%)'
                      : undefined
                  }}
                />
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                style={{ y: yTitle }}
                className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 font-display tracking-tight transition-colors duration-500 ${
                  currentScheme ? currentScheme.text : 'text-koel-teal'
                }`}
              >
                MANIFIESTO
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                style={{ y: ySubtitle }}
                className={`text-base md:text-lg lg:text-xl tracking-[0.2em] md:tracking-[0.3em] uppercase mb-12 md:mb-20 font-light transition-colors duration-500 ${
                  currentScheme ? currentScheme.text : 'text-koel-teal-dark'
                }`}
              >
                SOSTENIBILIDAD Y DISEÑO
              </motion.p>

              {/* Divider with Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                style={{ y: ySubtitle }}
                className="flex items-center justify-center gap-4 md:gap-8 mb-12 md:mb-20"
              >
                <div className={`h-[1px] w-16 md:w-24 transition-colors duration-500 ${
                  currentScheme ? currentScheme.text.replace('text-', 'bg-') : 'bg-koel-teal'
                }`} />
                <Image
                  src={
                    activeColor === 0 ? "/logos/logo-olive.svg" :
                    activeColor === 5 ? "/logos/logo-yellow.svg" :
                    "/logos/logo-teal.svg"
                  }
                  alt="KOEL"
                  width={100}
                  height={40}
                  className="w-16 md:w-20 lg:w-24 h-auto transition-all duration-500"
                  style={{
                    filter: currentScheme && activeColor !== 0 && activeColor !== 5
                      ? currentScheme.text === 'text-koel-yellow'
                        ? 'brightness(0) saturate(100%) invert(85%) sepia(16%) saturate(1449%) hue-rotate(358deg) brightness(102%) contrast(101%)'
                        : currentScheme.text === 'text-koel-teal'
                        ? 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                        : currentScheme.text === 'text-koel-aqua'
                        ? 'brightness(0) saturate(100%) invert(73%) sepia(11%) saturate(1590%) hue-rotate(128deg) brightness(91%) contrast(87%)'
                        : currentScheme.text === 'text-koel-olive'
                        ? 'brightness(0) saturate(100%) invert(38%) sepia(13%) saturate(1066%) hue-rotate(74deg) brightness(94%) contrast(88%)'
                        : 'brightness(0) saturate(100%) invert(98%) sepia(2%) saturate(1157%) hue-rotate(318deg) brightness(102%) contrast(96%)'
                      : undefined
                  }}
                />
                <div className={`h-[1px] w-16 md:w-24 transition-colors duration-500 ${
                  currentScheme ? currentScheme.text.replace('text-', 'bg-') : 'bg-koel-teal'
                }`} />
              </motion.div>

              {/* Bottom Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                style={{ y: yBottom }}
                className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.35em] uppercase max-w-2xl mx-auto leading-loose mb-8 md:mb-12 transition-colors duration-500 ${
                  currentScheme ? currentScheme.text : 'text-koel-neutral-600'
                }`}
              >
                Cuidado personal libre de aluminio y parabenos,
                <br className="hidden md:block" />
                Un sistema que reduce el desperdicio de plástico
              </motion.p>

              {/* Color Circles */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
                style={{ y: yBottom }}
                className="flex items-center justify-center gap-3 md:gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  onHoverStart={() => setActiveColor(0)}
                  onHoverEnd={() => setActiveColor(null)}
                  onClick={() => setActiveColor(activeColor === 0 ? null : 0)}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-koel-olive cursor-pointer ${activeColor === 0 ? 'border border-[#FCF7EE]' : ''}`}
                />
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  onHoverStart={() => setActiveColor(1)}
                  onHoverEnd={() => setActiveColor(null)}
                  onClick={() => setActiveColor(activeColor === 1 ? null : 1)}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-koel-coral cursor-pointer ${activeColor === 1 ? 'border border-[#FCF7EE]' : ''}`}
                />
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  onHoverStart={() => setActiveColor(2)}
                  onHoverEnd={() => setActiveColor(null)}
                  onClick={() => setActiveColor(activeColor === 2 ? null : 2)}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-koel-aqua cursor-pointer ${activeColor === 2 ? 'border border-[#FCF7EE]' : ''}`}
                />
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  onHoverStart={() => setActiveColor(3)}
                  onHoverEnd={() => setActiveColor(null)}
                  onClick={() => setActiveColor(activeColor === 3 ? null : 3)}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-koel-teal cursor-pointer ${activeColor === 3 ? 'border border-[#FCF7EE]' : ''}`}
                />
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  onHoverStart={() => setActiveColor(4)}
                  onHoverEnd={() => setActiveColor(null)}
                  onClick={() => setActiveColor(activeColor === 4 ? null : 4)}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-koel-pink cursor-pointer ${activeColor === 4 ? 'border border-[#FCF7EE]' : ''}`}
                />
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  onHoverStart={() => setActiveColor(5)}
                  onHoverEnd={() => setActiveColor(null)}
                  onClick={() => setActiveColor(activeColor === 5 ? null : 5)}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-koel-yellow cursor-pointer ${activeColor === 5 ? 'border border-[#FCF7EE]' : ''}`}
                />
              </motion.div>
            </div>
          </Container>
        </motion.div>
      </section>

      {/* Values Section */}
      <section id="valores" className="relative z-10 section-container bg-[#FCF7EE]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => {
              const [isFlipped, setIsFlipped] = useState(false);

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative min-h-[400px] sm:min-h-[440px] md:min-h-[520px] cursor-pointer select-none"
                  style={{ perspective: '1500px', WebkitUserSelect: 'none', userSelect: 'none' }}
                  onHoverStart={() => setIsFlipped(true)}
                  onHoverEnd={() => setIsFlipped(false)}
                  onTouchStart={() => setIsFlipped(true)}
                  onTouchEnd={() => setIsFlipped(false)}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      position: 'relative',
                      width: '100%',
                      height: '100%'
                    }}
                    className="min-h-[400px] sm:min-h-[440px] md:min-h-[520px]"
                  >
                    {/* Front Side */}
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        position: 'absolute',
                        width: '100%',
                        height: '100%'
                      }}
                      className={`p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl ${value.bgColor} shadow-lg flex flex-col`}
                    >
                {/* Top Section */}
                <div className="flex flex-col items-center text-center mb-auto">
                  <p className={`text-[10px] sm:text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase ${value.textColor} mb-4 sm:mb-6 font-medium opacity-90`}>
                    100% NATURAL
                  </p>

                  {/* Isotipo KOEL */}
                  <div className="mb-6 sm:mb-8">
                    <Image
                      src={
                        value.title === 'Sostenibilidad' ? '/icons/isotipo-yellow.svg' :
                        value.title === 'Bienestar' ? '/icons/isotipo-teal.svg' :
                        value.title === 'Diseño' ? '/icons/isotipo-teal.svg' :
                        value.title === 'Innovación' ? '/icons/isotipo-aqua.svg' :
                        '/icons/isotipo-koel.svg'
                      }
                      alt="Isotipo KOEL"
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                      style={(value.title === 'Sostenibilidad' || value.title === 'Bienestar' || value.title === 'Diseño' || value.title === 'Innovación') ? {} : {
                        filter: value.textColor.includes('white')
                          ? 'brightness(0) invert(1)'
                          : value.textColor.includes('yellow')
                          ? 'brightness(0) saturate(100%) invert(93%) sepia(93%) saturate(1352%) hue-rotate(360deg) brightness(99%) contrast(96%)'
                          : value.textColor.includes('aqua')
                          ? 'brightness(0) saturate(100%) invert(60%) sepia(98%) saturate(476%) hue-rotate(134deg) brightness(96%) contrast(89%)'
                          : value.textColor.includes('#FCF7EE')
                          ? 'brightness(0) invert(98%) sepia(8%) saturate(524%) hue-rotate(329deg) brightness(103%) contrast(97%)'
                          : value.textColor.includes('olive')
                          ? 'brightness(0) saturate(100%) invert(35%) sepia(14%) saturate(1272%) hue-rotate(45deg) brightness(93%) contrast(89%)'
                          : 'none'
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${value.textColor} mb-2 font-display tracking-tight uppercase`}>
                    {value.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`text-sm sm:text-base md:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase ${value.textColor} mb-4 sm:mb-6 opacity-80`}>
                    {value.subtitle}
                  </p>

                  {/* Divider Line */}
                  <div className={`w-12 sm:w-16 h-[1px] ${value.textColor.replace('text-', 'bg-')} opacity-40 mb-6 sm:mb-8`} />
                </div>

                {/* Description */}
                <div className="mt-auto">
                  <p className={`text-[11px] sm:text-xs md:text-sm text-center ${value.textColor} leading-relaxed opacity-75 mb-6 sm:mb-8`}>
                    {value.description}
                  </p>

                  {/* Bottom Logo */}
                  <div className="flex items-center justify-center">
                    <Image
                      src={
                        value.title === 'Sostenibilidad' ? '/logos/logo-yellow-full.svg' :
                        value.title === 'Innovación' ? '/logos/logo-aqua-full.svg' :
                        '/logos/logo-teal.svg'
                      }
                      alt="KOEL"
                      width={60}
                      height={24}
                      className="w-auto h-5 sm:h-4 opacity-70"
                      style={(value.title === 'Sostenibilidad' || value.title === 'Innovación') ? {} : {
                        filter: value.textColor.includes('white')
                          ? 'brightness(0) invert(1)'
                          : value.textColor.includes('yellow')
                          ? 'brightness(0) saturate(100%) invert(93%) sepia(93%) saturate(1352%) hue-rotate(360deg) brightness(99%) contrast(96%)'
                          : value.textColor.includes('aqua')
                          ? 'brightness(0) saturate(100%) invert(60%) sepia(98%) saturate(476%) hue-rotate(134deg) brightness(96%) contrast(89%)'
                          : value.textColor.includes('#FCF7EE')
                          ? 'brightness(0) invert(98%) sepia(8%) saturate(524%) hue-rotate(329deg) brightness(103%) contrast(97%)'
                          : value.textColor.includes('olive')
                          ? 'brightness(0) saturate(100%) invert(35%) sepia(14%) saturate(1272%) hue-rotate(45deg) brightness(93%) contrast(89%)'
                          : 'none'
                      }}
                    />
                  </div>
                </div>
                    </div>

                    {/* Back Side */}
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        transform: 'rotateY(180deg)'
                      }}
                      className={`px-6 sm:px-8 md:px-10 pb-6 sm:pb-8 md:pb-10 rounded-2xl md:rounded-3xl ${value.bgColor} shadow-lg flex flex-col items-center justify-start text-center`}
                    >
                      <div className="mb-4 sm:mb-6 -mt-2">
                        <Image
                          src={
                            value.title === 'Sostenibilidad' ? '/icons/sello-yellow.svg' :
                            value.title === 'Innovación' ? '/icons/sello-aqua.svg' :
                            '/icons/sello-02.svg'
                          }
                          alt="Sello KOEL"
                          width={160}
                          height={160}
                          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto"
                          style={(value.title === 'Sostenibilidad' || value.title === 'Innovación') ? {} : {
                            filter: value.textColor.includes('white')
                              ? 'brightness(0) invert(1)'
                              : value.textColor.includes('yellow')
                              ? 'brightness(0) saturate(100%) invert(88%) sepia(42%) saturate(1352%) hue-rotate(360deg) brightness(104%) contrast(96%)'
                              : value.textColor.includes('aqua')
                              ? 'brightness(0) saturate(100%) invert(60%) sepia(98%) saturate(476%) hue-rotate(134deg) brightness(96%) contrast(89%)'
                              : value.textColor.includes('#FCF7EE')
                              ? 'brightness(0) invert(98%) sepia(8%) saturate(524%) hue-rotate(329deg) brightness(103%) contrast(97%)'
                              : value.textColor.includes('olive')
                              ? 'brightness(0) saturate(100%) invert(35%) sepia(14%) saturate(1272%) hue-rotate(45deg) brightness(93%) contrast(89%)'
                              : 'none'
                          }}
                        />
                      </div>
                      <h4 className={`text-lg sm:text-xl md:text-2xl font-bold ${value.textColor} mb-3 sm:mb-4 font-display uppercase`}>
                        {value.subtitle}
                      </h4>
                      <p className={`text-sm sm:text-base md:text-lg ${value.textColor} leading-relaxed opacity-80 max-w-xs`}>
                        {value.description}
                      </p>
                      <div className="mt-auto pt-6 sm:pt-8">
                        <Image
                          src={
                            value.title === 'Sostenibilidad' ? '/logos/logo-yellow-full.svg' :
                            value.title === 'Innovación' ? '/logos/logo-aqua-full.svg' :
                            '/logos/logo-teal.svg'
                          }
                          alt="KOEL"
                          width={60}
                          height={24}
                          className="w-auto h-5 sm:h-4 opacity-70 mx-auto"
                          style={(value.title === 'Sostenibilidad' || value.title === 'Innovación') ? {} : {
                            filter: value.textColor.includes('white')
                              ? 'brightness(0) invert(1)'
                              : value.textColor.includes('yellow')
                              ? 'brightness(0) saturate(100%) invert(88%) sepia(42%) saturate(1352%) hue-rotate(360deg) brightness(104%) contrast(96%)'
                              : value.textColor.includes('aqua')
                              ? 'brightness(0) saturate(100%) invert(60%) sepia(98%) saturate(476%) hue-rotate(134deg) brightness(96%) contrast(89%)'
                              : value.textColor.includes('#FCF7EE')
                              ? 'brightness(0) invert(98%) sepia(8%) saturate(524%) hue-rotate(329deg) brightness(103%) contrast(97%)'
                              : value.textColor.includes('olive')
                              ? 'brightness(0) saturate(100%) invert(35%) sepia(14%) saturate(1272%) hue-rotate(45deg) brightness(93%) contrast(89%)'
                              : 'none'
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Vision Text Section */}
      <section className="relative pt-20 md:pt-32 overflow-hidden" style={{ backgroundColor: '#FCF7EE' }}>
        <Container>
          {/* Logo Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 mb-12 md:mb-16"
          >
            <div className="h-[1px] flex-1 bg-koel-teal/30" />
            <Image
              src="/logos/logo-teal.svg"
              alt="KOEL"
              width={120}
              height={48}
              className="w-24 md:w-32 h-auto"
            />
            <div className="h-[1px] flex-1 bg-koel-teal/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-left space-y-6 md:space-y-8"
          >
            <p className="text-sm md:text-base lg:text-lg xl:text-xl tracking-[0.1em] md:tracking-[0.15em] uppercase text-koel-neutral-600 leading-relaxed md:leading-loose">
              Hay una nueva forma de cuidar que no se impone, se siente. Se revela en los detalles, en lo que dejamos atrás y en lo que elegimos volver esencial.
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl tracking-[0.1em] md:tracking-[0.15em] uppercase text-koel-neutral-600 leading-relaxed md:leading-loose">
              No responde a tendencias ni promesas. Responde a una necesidad silenciosa de pensar distinto.
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl tracking-[0.1em] md:tracking-[0.15em] uppercase text-koel-neutral-600 leading-relaxed md:leading-loose">
              Somos un universo que respira claridad. Fusionamos lo natural con lo inteligente, transformando lo cotidiano en una experiencia suave, minimal y consciente.
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl tracking-[0.1em] md:tracking-[0.15em] uppercase text-koel-neutral-600 leading-relaxed md:leading-loose">
              El diseño nos permite simplificar, resolver y elevar. Los hábitos se vuelven rituales más claros, más propios, más pensados.
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl tracking-[0.1em] md:tracking-[0.15em] uppercase text-koel-neutral-600 leading-relaxed md:leading-loose">
              Cuidar no es un acto de consumo — Es coherencia en movimiento.
            </p>
          </motion.div>

          {/* Grid of Icons - Same Section */}
          <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-9 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-24 lg:mt-32">
            {[
              { icon: "/icons/eco-friendly.svg", title: "Eco-Friendly" },
              { icon: "/icons/sistema-recargable.svg", title: "Sistema Recargable" },
              { icon: "/icons/smart-system.svg", title: "Smart System" },
              { icon: "/icons/libre-quimicos.svg", title: "Libre de Químicos" },
              { icon: "/icons/ingredientes-naturales.svg", title: "Ingredientes Naturales" },
              { icon: "/icons/24-hour.svg", title: "24 Hour Protection" },
              { icon: "/icons/aromas-naturales.svg", title: "Aromas Naturales" },
              { icon: "/icons/mayor-durabilidad.svg", title: "Mayor Durabilidad" },
              { icon: "/icons/cruelty-free.svg", title: "Cruelty Free & Vegan" },
              { icon: "/icons/dermatologicamente-probado.svg", title: "Dermatológicamente Probado" },
              { icon: "/icons/biodegradables.svg", title: "Biodegradable" },
              { icon: "/icons/hecho-colombia.svg", title: "Hecho en Colombia" },
              { icon: "/icons/zero-waste.svg", title: "Zero Waste" },
              { icon: "/icons/todos-tipos-piel.svg", title: "Todos los Tipos de Piel" },
              { icon: "/icons/secado-rapido.svg", title: "Secado Rápido" },
              { icon: "/icons/ph-balanced.svg", title: "pH Balanced" },
              { icon: "/icons/no-microplastics.svg", title: "No Microplásticos" },
              { icon: "/icons/unisex.svg", title: "Unisex" },
              { icon: "/icons/formulacion.svg", title: "Formulación Premium" },
              { icon: "/icons/aceites-esenciales.svg", title: "Aceites Esenciales" },
              { icon: "/icons/antibacteriales.svg", title: "Antibacterial" },
              { icon: "/icons/5-estrellas.svg", title: "5 Estrellas" },
              { icon: "/icons/testeado-tropico.svg", title: "Testeado en el Trópico" },
              { icon: "/icons/fast-absorption.svg", title: "Absorción Rápida" },
              { icon: "/icons/diseno-patentado.svg", title: "Diseño Patentado" },
              { icon: "/icons/no-white-residue.svg", title: "No White Residue" },
              { icon: "/icons/no-interfiere-piel.svg", title: "No Interfiere con la Piel" },
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Icon */}
                <div className="transition-all duration-300 opacity-40 group-hover:opacity-100">
                  <Image
                    src={point.icon}
                    alt={point.title}
                    width={64}
                    height={64}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                    }}
                  />
                </div>

                {/* Tooltip - Only visible on hover */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-10">
                  <div className="bg-koel-teal text-white px-3 py-2 rounded-lg shadow-lg relative">
                    <p className="text-xs font-medium whitespace-nowrap uppercase tracking-wide">
                      {point.title}
                    </p>
                    {/* Arrow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-koel-teal rotate-45"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Sello Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 mt-12 md:mt-16"
          >
            <div className="h-[1px] flex-1 bg-koel-teal/30" />
            <Image
              src="/icons/sello-02.svg"
              alt="Sello KOEL"
              width={200}
              height={200}
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              style={{
                filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
              }}
            />
            <div className="h-[1px] flex-1 bg-koel-teal/30" />
          </motion.div>
        </Container>
      </section>

      {/* Image Section */}
      <section className="relative z-10 bg-[#FCF7EE] pt-12 md:pt-20 lg:pt-32 pb-20 md:pb-32 lg:pb-48">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] sm:aspect-[16/9] md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden"
          >
            {/* Background Gradient */}
            <Image
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2000&auto=format&fit=crop"
              alt="KOEL Gradient"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-[#FCF7EE] rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md w-full flex flex-col items-center text-center"
              >
                {/* Isotipo Circle - Top */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-6 md:mb-8"
                >
                  <Image
                    src="/icons/isotipo-koel.svg"
                    alt="Isotipo KOEL"
                    width={64}
                    height={64}
                    className="w-8 h-8 md:w-10 md:h-10"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                    }}
                  />
                </motion.div>

                {/* Top Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xs md:text-sm tracking-[0.3em] uppercase text-koel-teal mb-6 md:mb-8 font-medium"
                >
                  BREEZE NOTE
                </motion.p>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-koel-teal/80 mb-3 md:mb-4"
                >
                  (REFILLABLE DEODORANT)
                </motion.p>

                {/* Small Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-koel-teal/70 mb-8 md:mb-12"
                >
                  SNAP-CLICK™
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mb-12 md:mb-16"
                >
                  <a
                    href="/#products"
                    className="inline-block"
                  >
                    <Button size="md" variant="primary" className="uppercase">
                      Ver Productos
                    </Button>
                  </a>
                </motion.div>

                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="pb-4 md:pb-6"
                >
                  <Image
                    src="/logos/logo-teal.svg"
                    alt="KOEL"
                    width={200}
                    height={80}
                    className="w-16 md:w-20 h-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
    </>
  );
}
