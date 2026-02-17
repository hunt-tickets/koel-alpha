import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-heading rounded-full transition-all duration-200 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95';

  const variants = {
    primary: 'bg-koel-teal text-white focus:ring-koel-teal',
    secondary: 'bg-koel-aqua text-white focus:ring-koel-aqua',
    outline: 'border-2 border-koel-teal text-koel-teal focus:ring-koel-teal',
    ghost: 'text-koel-teal focus:ring-koel-teal',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        'group',
        className
      )}
      disabled={disabled}
      {...props}
    >
      <span className="inline-block group-hover:scale-[0.909] group-active:scale-[1.053] transition-transform duration-200">
        {children}
      </span>
    </button>
  );
}
