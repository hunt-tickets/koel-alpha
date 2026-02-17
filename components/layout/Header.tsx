'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import Container from '@/components/ui/Container';
import { ShoppingCart, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  forceScrolled?: boolean;
}

export default function Header({ forceScrolled = false }: HeaderProps) {
  const { toggleCart, itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show header after loader (1.2s loader + 0.8s exit animation)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

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
    setIsMobileMenuOpen(false);

    // Check if it's an anchor link or a page link
    if (href.startsWith('#')) {
      // Check if we're on the home page
      if (window.location.pathname === '/') {
        // We're on home page, scroll to anchor
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're on another page, navigate to home with anchor
        window.location.href = '/' + href;
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
                className="relative transition-all duration-300 font-heading font-medium tracking-wide text-xs uppercase group text-koel-neutral-700 hover:scale-110 active:scale-95 inline-block"
              >
                <span className="inline-block group-hover:scale-[0.909] group-active:scale-[1.053] transition-transform duration-200">
                  {link.label}
                </span>
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-koel-teal" />
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="p-2 rounded-full transition-all duration-200 text-koel-neutral-700 hover:scale-110 active:scale-95 group relative"
              aria-label="Carrito"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-[0.909] group-active:scale-[1.053] transition-transform duration-200" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-koel-teal text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className="p-2 rounded-full transition-all duration-200 text-koel-neutral-700 hover:scale-110 active:scale-95 group"
              aria-label="Iniciar sesión"
            >
              <User className="w-5 h-5 group-hover:scale-[0.909] group-active:scale-[1.053] transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Cart & Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleCart}
              className="p-2 rounded-full transition-all duration-200 text-koel-neutral-700 hover:scale-110 active:scale-95 group relative"
              aria-label="Carrito"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-[0.909] group-active:scale-[1.053] transition-transform duration-200" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-koel-teal text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              className="p-2"
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
        </div>
      </Container>

      {/* Mobile Menu - Full Screen */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { y: 0 } : { y: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 bottom-0 bg-koel-teal z-[100] md:hidden',
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        style={{ position: 'fixed', width: '100vw', height: '100vh', paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="flex flex-col h-full px-8 py-6">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between pb-8 border-b border-koel-aqua/30">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Image
                src="/logos/logo-teal.svg"
                alt="KOEL"
                width={80}
                height={32}
                className="w-16 md:w-20 h-auto"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(73%) sepia(11%) saturate(1590%) hue-rotate(128deg) brightness(91%) contrast(87%)'
                }}
              />
            </motion.div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2"
              aria-label="Cerrar menú"
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
                <span className="w-5 h-0.5 bg-koel-aqua rotate-45 absolute rounded-full" />
                <span className="w-5 h-0.5 bg-koel-aqua -rotate-45 absolute rounded-full" />
              </div>
            </button>
          </div>

          {/* Navigation - Centered */}
          <nav className="flex flex-col flex-1 justify-center gap-12 py-8">
            {NAV_LINKS.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className="group text-left border-b border-koel-aqua/20 pb-4 hover:scale-110 active:scale-95 transition-transform duration-200"
              >
                <div className="flex items-center gap-3 group-hover:scale-[0.909] group-active:scale-[1.053] transition-transform duration-200">
                  <span className="w-2 h-2 rounded-full bg-koel-aqua" />
                  <span className="text-koel-aqua font-heading font-normal text-lg uppercase tracking-wider">
                    {link.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </nav>

          {/* Footer - Logo isotipo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-col items-center gap-6 pb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-koel-aqua/30" />
              <Image
                src="/icons/isotipo-koel.svg"
                alt="KOEL"
                width={24}
                height={24}
                className="w-6 h-6"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(73%) sepia(11%) saturate(1590%) hue-rotate(128deg) brightness(91%) contrast(87%)'
                }}
              />
              <div className="w-12 h-[1px] bg-koel-aqua/30" />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-koel-aqua opacity-80">
              A NEW WAY TO CARE
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
