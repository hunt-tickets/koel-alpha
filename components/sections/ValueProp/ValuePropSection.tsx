'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Palette, Droplet, Clock, Recycle } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  index: number;
}

function ValueItem({ icon, title, index }: ValueItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col items-center text-center group"
    >
      {/* Icon */}
      <div className="mb-4 text-koel-teal group-hover:text-koel-aqua transition-colors duration-300">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-sm md:text-base font-semibold text-koel-teal uppercase tracking-wide">
        {title}
      </h4>
    </motion.div>
  );
}

export default function ValuePropSection() {
  const valuePoints = [
    {
      icon: <Image src="/icons/eco-friendly.svg" alt="Eco-Friendly" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Eco-Friendly",
    },
    {
      icon: <Image src="/icons/sistema-recargable.svg" alt="Sistema Recargable" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Sistema Recargable",
    },
    {
      icon: <Image src="/icons/smart-system.svg" alt="Smart System" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Smart System",
    },
    {
      icon: <Image src="/icons/libre-quimicos.svg" alt="Libre de Químicos" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Libre de Químicos",
    },
    {
      icon: <Image src="/icons/ingredientes-naturales.svg" alt="Ingredientes Naturales" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Ingredientes Naturales",
    },
    {
      icon: <Image src="/icons/24-hour.svg" alt="24 Hour Protection" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "24 Hour Protection",
    },
    {
      icon: <Image src="/icons/aromas-naturales.svg" alt="Aromas Naturales" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Aromas Naturales",
    },
    {
      icon: <Image src="/icons/mayor-durabilidad.svg" alt="Mayor Durabilidad" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Mayor Durabilidad",
    },
    {
      icon: <Image src="/icons/cruelty-free.svg" alt="Cruelty Free & Vegan" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Cruelty Free & Vegan",
    },
    {
      icon: <Image src="/icons/dermatologicamente-probado.svg" alt="Dermatológicamente Probado" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Dermatológicamente Probado",
    },
    {
      icon: <Image src="/icons/biodegradables.svg" alt="Biodegradable" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Biodegradable",
    },
    {
      icon: <Image src="/icons/hecho-colombia.svg" alt="Hecho en Colombia" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Hecho en Colombia",
    },
    {
      icon: <Image src="/icons/zero-waste.svg" alt="Zero Waste" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Zero Waste",
    },
    {
      icon: <Image src="/icons/todos-tipos-piel.svg" alt="Todos los Tipos de Piel" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Todos los Tipos de Piel",
    },
    {
      icon: <Image src="/icons/secado-rapido.svg" alt="Secado Rápido" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Secado Rápido",
    },
    {
      icon: <Image src="/icons/ph-balanced.svg" alt="pH Balanced" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "pH Balanced",
    },
    {
      icon: <Image src="/icons/no-microplastics.svg" alt="No Microplásticos" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "No Microplásticos",
    },
    {
      icon: <Image src="/icons/unisex.svg" alt="Unisex" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Unisex",
    },
    {
      icon: <Image src="/icons/formulacion.svg" alt="Formulación Premium" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Formulación Premium",
    },
    {
      icon: <Image src="/icons/aceites-esenciales.svg" alt="Aceites Esenciales" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Aceites Esenciales",
    },
    {
      icon: <Image src="/icons/antibacteriales.svg" alt="Antibacterial" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Antibacterial",
    },
    {
      icon: <Image src="/icons/5-estrellas.svg" alt="5 Estrellas" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "5 Estrellas",
    },
    {
      icon: <Image src="/icons/testeado-tropico.svg" alt="Testeado en el Trópico" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Testeado en el Trópico",
    },
    {
      icon: <Image src="/icons/fast-absorption.svg" alt="Absorción Rápida" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Absorción Rápida",
    },
    {
      icon: <Image src="/icons/diseno-patentado.svg" alt="Diseño Patentado" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "Diseño Patentado",
    },
    {
      icon: <Image src="/icons/no-white-residue.svg" alt="No White Residue" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "No White Residue",
    },
    {
      icon: <Image src="/icons/no-interfiere-piel.svg" alt="No Interfiere con la Piel" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />,
      title: "No Interfiere con la Piel",
    },
  ];

  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#FCF7EE]">
      <Container>
        {/* Decorative Header with Sello */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto"
        >
          {/* Top Divider */}
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-16 md:w-24 bg-koel-teal/30" />
            <Image
              src="/logos/logo-teal.svg"
              alt="KOEL"
              width={120}
              height={48}
              className="w-20 md:w-24 h-auto opacity-90"
            />
            <div className="h-[1px] w-16 md:w-24 bg-koel-teal/30" />
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
