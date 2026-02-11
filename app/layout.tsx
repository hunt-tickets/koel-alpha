import type { Metadata } from 'next';
import './globals.css';
import { HeaderWrapper, Footer } from '@/components/layout';
import { transducer, mazzard, miso } from './fonts';
import { CartProvider } from '@/contexts/CartContext';
import CartDrawer from '@/components/cart/CartDrawer';

export const metadata: Metadata = {
  title: 'KOEL - El Primer Desodorante Recargable de Colombia',
  description:
    'Sistema sostenible de desodorante recargable. Diseño premium, fórmula natural y cero plástico. A New Way to Care.',
  keywords: [
    'desodorante recargable',
    'desodorante sostenible',
    'cuidado personal',
    'Colombia',
    'eco-friendly',
  ],
  authors: [{ name: 'KOEL' }],
  openGraph: {
    title: 'KOEL - A New Way to Care',
    description: 'El primer desodorante recargable de Colombia',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${transducer.variable} ${mazzard.variable} ${miso.variable}`}>
      <body className={miso.className}>
        <CartProvider>
          <HeaderWrapper />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
