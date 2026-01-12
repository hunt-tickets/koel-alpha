import { Space_Grotesk, Outfit, Inter } from 'next/font/google';

// Display font (Titles) - Space Grotesk
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

// Heading font (Subtitles) - Outfit Light
export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-heading',
  display: 'swap',
});

// Body font (Paragraphs/Labels) - Inter
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});
