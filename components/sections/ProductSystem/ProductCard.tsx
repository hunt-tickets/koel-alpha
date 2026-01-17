'use client';

import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

interface ProductFeature {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

interface ProductCardProps {
  name: string;
  subtitle: string;
  description: string;
  features: ProductFeature[];
  price: number;
  accentColor: string;
  image: string;
  slug: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export default function ProductCard({
  name,
  subtitle,
  description,
  features,
  price,
  accentColor,
  image,
  slug,
  isExpanded = false,
  onToggleExpand,
}: ProductCardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  // Scroll-based rotation for badge
  const { scrollY } = useScroll();
  const scrollRotation = useTransform(scrollY, [0, 1000], [0, 360]);
  const smoothRotation = useSpring(scrollRotation, {
    damping: 20,
    stiffness: 100,
  });

  return (
    <div className="h-full">
      <div className="h-full">
        <Card className="flex flex-col h-full min-h-[600px] relative">
          {/* Badge Seal - Top Right */}
          <motion.div
            className="absolute top-4 right-4 z-10 w-12 h-12"
            style={{ rotate: smoothRotation }}
          >
            <Image
              src="/icons/sello.svg"
              alt="Sello KOEL"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </motion.div>

          {/* Product Image Placeholder - Square */}
          <div className="relative w-full pb-[100%] mb-6 rounded-xl bg-koel-neutral-200 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-koel-neutral-500 text-sm">Imagen del producto</span>
            </div>
          </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-koel-teal mb-2">{name}</h3>
        <p className="text-base text-koel-neutral-600 mb-6">{subtitle}</p>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Price & CTA */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-koel-teal">
              {formatPrice(price)}
            </span>
          </div>
          <Button
            size="md"
            variant="primary"
            fullWidth
            className="uppercase"
            onClick={() => {
              console.log('Slug:', slug);
              console.log('Navigating to:', `/producto/${slug}`);
              router.push(`/producto/${slug}`);
            }}
          >
            Comprar
          </Button>
        </div>
        </Card>
      </div>
    </div>
  );
}
