import localFont from 'next/font/local';

// Display font (Titles) - Transducer
export const transducer = localFont({
  src: [
    {
      path: '../public/fonts/transducer-extendedregular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/transducer-extendedmedium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-display',
  display: 'swap',
});

// Heading font (Subtitles) - Mazzard Soft M Light
export const mazzard = localFont({
  src: '../public/fonts/mazzard-soft-m-light.otf',
  weight: '300',
  style: 'normal',
  variable: '--font-heading',
  display: 'swap',
});

// Body font (Paragraphs/Labels) - Miso
export const miso = localFont({
  src: '../public/fonts/miso.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-body',
  display: 'swap',
});
