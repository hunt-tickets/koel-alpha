'use client';

import ScrollMorphHero from '@/components/ui/ScrollMorphHero';

export default function ManifiestoPage() {
  return (
    <main className="min-h-screen">
      <ScrollMorphHero />

      {/* Additional manifesto content sections can go here */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-koel-teal mb-6 font-display">
            Nuestro Compromiso
          </h2>
          <p className="text-lg md:text-xl text-koel-neutral-700 leading-relaxed mb-8">
            En KOEL creemos que el cuidado personal y el cuidado del planeta van de la mano.
            Somos pioneros en crear el primer desodorante recargable de Colombia,
            revolucionando la forma en que pensamos sobre los productos de higiene personal.
          </p>
          <p className="text-lg md:text-xl text-koel-neutral-700 leading-relaxed">
            Cada decisión que tomamos está guiada por nuestros valores de sostenibilidad,
            innovación y bienestar. Porque cuidarte a ti mismo no debería costarle al planeta.
          </p>
        </div>
      </section>
    </main>
  );
}
