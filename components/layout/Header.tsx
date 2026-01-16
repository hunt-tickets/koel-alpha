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
                className={cn(
                  'relative transition-all duration-300 font-display font-medium tracking-wide text-sm uppercase group',
                  isScrolled
                    ? 'text-koel-neutral-700 hover:text-koel-teal'
                    : 'text-white hover:text-koel-aqua drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                )}
              >
                {link.label}
                {/* Underline effect */}
                <span className={cn(
                  'absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300',
                  isScrolled ? 'bg-koel-teal' : 'bg-koel-aqua'
                )} />
              </button>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className={cn(
                'p-2 rounded-full transition-all duration-200',
                isScrolled
                  ? 'text-koel-neutral-700 hover:text-koel-teal hover:bg-koel-teal/10'
                  : 'text-white hover:text-koel-aqua drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
              )}
              aria-label="Carrito"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              className={cn(
                'p-2 rounded-full transition-all duration-200',
                isScrolled
                  ? 'text-koel-neutral-700 hover:text-koel-teal hover:bg-koel-teal/10'
                  : 'text-white hover:text-koel-aqua drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
              )}
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
                  'w-full h-0.5 transition-all duration-300',
                  isScrolled ? 'bg-koel-teal' : 'bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]',
                  isMobileMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 transition-all duration-300',
                  isScrolled ? 'bg-koel-teal' : 'bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 transition-all duration-300',
                  isScrolled ? 'bg-koel-teal' : 'bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="flex flex-col gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-koel-neutral-700 hover:text-koel-teal transition-colors duration-200 font-display font-medium tracking-wide text-sm uppercase"
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-koel-teal text-white rounded-full hover:bg-koel-teal/90 transition-colors duration-200">
                <ShoppingCart className="w-4 h-4" />
                <span className="font-display text-sm uppercase tracking-wide">Carrito</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-koel-teal text-koel-teal rounded-full hover:bg-koel-teal/10 transition-colors duration-200">
                <User className="w-4 h-4" />
                <span className="font-display text-sm uppercase tracking-wide">Entrar</span>
              </button>
            </div>
          </nav>
        </div>
      </Container>
    </motion.header>
  );
}
