'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-koel-neutral-100/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logos/logo-teal.svg"
              alt="KOEL"
              width={80}
              height={32}
              className="w-16 md:w-20 h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  'transition-all duration-200 font-medium',
                  isScrolled
                    ? 'text-koel-neutral-700 hover:text-koel-teal'
                    : 'text-white hover:text-koel-aqua drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm" variant="primary">
              Comprar Ahora
            </Button>
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
                className="text-left text-koel-neutral-700 hover:text-koel-teal transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <Button size="sm" variant="primary" fullWidth>
              Comprar Ahora
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
