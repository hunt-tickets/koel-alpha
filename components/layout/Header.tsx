'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import Container from '@/components/ui/Container';
import { ShoppingCart, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  forceScrolled?: boolean;
}

export default function Header({ forceScrolled = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show header after loader (2.5s loader + 0.8s exit animation)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (forceScrolled) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceScrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    // Check if it's an anchor link or a page link
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // It's a page link, navigate normally
      window.location.href = href;
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-koel-neutral-100/95 backdrop-blur-md'
          : 'bg-transparent'
      )}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20" style={{ paddingTop: '0' }}>
          {/* Logo */}
          <a href="/" className="flex items-center cursor-pointer group">
            <Image
              src="/logos/logo-teal.svg"
              alt="KOEL"
              width={80}
              height={32}
              className="w-16 md:w-20 h-auto transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative transition-all duration-300 font-display font-medium tracking-wide text-sm uppercase group text-koel-neutral-700 hover:text-koel-teal"
              >
                {link.label}
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-koel-teal" />
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="p-2 rounded-full transition-all duration-200 text-koel-neutral-700 hover:text-koel-teal hover:bg-koel-teal/10"
              aria-label="Carrito"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              className="p-2 rounded-full transition-all duration-200 text-koel-neutral-700 hover:text-koel-teal hover:bg-koel-teal/10"
              aria-label="Iniciar sesión"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  'w-full h-0.5 transition-all duration-300 bg-koel-teal',
                  isMobileMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 transition-all duration-300 bg-koel-teal',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 transition-all duration-300 bg-koel-teal',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Menu - Full Screen */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 bottom-0 bg-[#FCF7EE] z-[100] md:hidden overflow-y-auto',
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        style={{ position: 'fixed', width: '100vw', height: '100vh', paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="flex flex-col min-h-screen px-6 py-8">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isMobileMenuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Image
                src="/icons/sello.svg"
                alt="KOEL"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </motion.div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2"
              aria-label="Cerrar menú"
            >
              <div className="w-8 h-8 flex items-center justify-center relative">
                <span className="w-6 h-0.5 bg-koel-teal rotate-45 absolute rounded-full" />
                <span className="w-6 h-0.5 bg-koel-teal -rotate-45 absolute rounded-full" />
              </div>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col flex-1 justify-center items-center gap-10 py-8">
            {NAV_LINKS.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={() => handleNavClick(link.href)}
                className="group relative"
              >
                <span className="text-koel-teal font-display font-bold tracking-wider text-4xl uppercase block transition-all duration-300 group-hover:scale-110">
                  {link.label}
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-koel-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </motion.button>
            ))}
          </nav>

          {/* Footer - Logo isotipo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-6 pb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-koel-teal/30" />
              <Image
                src="/icons/isotipo-koel.svg"
                alt="KOEL"
                width={24}
                height={24}
                className="w-6 h-6"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(13%) sepia(25%) saturate(3194%) hue-rotate(147deg) brightness(95%) contrast(95%)'
                }}
              />
              <div className="w-12 h-[1px] bg-koel-teal/30" />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-koel-teal-dark/60">
              A NEW WAY TO CARE
            </p>
          </motion.div>

          {/* Bottom Actions */}
          <div className="flex flex-col gap-3 p-6">
            <button className="w-full flex items-center justify-center gap-2 py-4 bg-koel-teal text-white rounded-full hover:bg-koel-teal/90 transition-colors duration-200">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-display text-base uppercase tracking-wide">Carrito</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-koel-teal text-koel-teal rounded-full hover:bg-koel-teal/10 transition-colors duration-200">
              <User className="w-5 h-5" />
              <span className="font-display text-base uppercase tracking-wide">Entrar</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
