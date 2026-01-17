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
        animate={isMobileMenuOpen ? { y: 0 } : { y: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 bottom-0 bg-[#1C4A4A] z-[100] md:hidden',
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        style={{ position: 'fixed', width: '100vw', height: '100vh', paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="flex flex-col h-full px-8 py-6">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between pb-8 border-b border-[#2C5A5A]/50">
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
                  filter: 'brightness(0) saturate(100%) invert(61%) sepia(35%) saturate(826%) hue-rotate(126deg) brightness(95%) contrast(92%)'
                }}
              />
            </motion.div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2"
              aria-label="Cerrar menú"
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
                <span className="w-5 h-0.5 bg-[#4FB3A9] rotate-45 absolute rounded-full" />
                <span className="w-5 h-0.5 bg-[#4FB3A9] -rotate-45 absolute rounded-full" />
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
                className="group text-left border-b border-[#2C5A5A]/30 pb-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#4FB3A9]" />
                  <span className="text-[#4FB3A9] font-display font-normal text-xl uppercase tracking-wider transition-all duration-300 group-hover:translate-x-2">
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
              <div className="w-12 h-[1px] bg-[#4FB3A9]/30" />
              <Image
                src="/icons/isotipo-koel.svg"
                alt="KOEL"
                width={24}
                height={24}
                className="w-6 h-6"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(61%) sepia(35%) saturate(826%) hue-rotate(126deg) brightness(95%) contrast(92%)'
                }}
              />
              <div className="w-12 h-[1px] bg-[#4FB3A9]/30" />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#4FB3A9]/80">
              A NEW WAY TO CARE
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
