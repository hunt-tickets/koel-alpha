import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/layout';
import { spaceGrotesk, outfit, inter } from './fonts';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${spaceGrotesk.variable} ${outfit.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
