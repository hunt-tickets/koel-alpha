'use client';

import { VelocityScrollLogos } from '@/components/ui/VelocityScrollLogos';

const KOEL_LOGOS = [
  '/logos/koel-logo-1.svg',
  '/logos/koel-logo-2.svg',
  '/logos/koel-logo-3.svg',
  '/logos/koel-logo-4.svg',
  '/logos/koel-logo-5.svg',
  '/logos/koel-logo-6.svg',
  '/logos/koel-logo-7.svg',
  '/logos/koel-logo-8.svg',
];

export default function VelocityBannerSection() {
  return (
    <section className="relative py-12 md:py-16 bg-koel-neutral-100 overflow-hidden">
      {/* Velocity Scroll with Logos */}
      <div className="relative">
        <VelocityScrollLogos
          logos={KOEL_LOGOS}
          default_velocity={2}
          logoSize={150}
        />
      </div>
    </section>
  );
}
