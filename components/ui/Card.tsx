import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
  padding = true,
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-sm',
        padding && 'p-6 md:p-8',
        hover && 'transition-transform duration-300 hover:scale-105 hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
}
