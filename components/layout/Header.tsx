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
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
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
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed inset-0 bg-koel-neutral-100 z-[100] md:hidden',
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between px-6 h-16">
            <Image
              src="/logos/logo-teal.svg"
              alt="KOEL"
              width={80}
              height={32}
              className="w-16 h-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="Cerrar menú"
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
                <span className="w-full h-0.5 bg-koel-teal rotate-45 absolute" />
                <span className="w-full h-0.5 bg-koel-teal -rotate-45 absolute" />
              </div>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col flex-1 justify-center items-center gap-8 px-6">
            {NAV_LINKS.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className="text-koel-neutral-700 hover:text-koel-teal transition-colors duration-200 font-display font-medium tracking-wide text-2xl uppercase"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

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
