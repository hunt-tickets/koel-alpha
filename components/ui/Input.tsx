import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label className="text-sm font-medium text-koel-neutral-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'px-4 py-3 rounded-full border-2 transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-koel-aqua focus:border-koel-aqua',
            error
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : 'border-koel-neutral-300',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
