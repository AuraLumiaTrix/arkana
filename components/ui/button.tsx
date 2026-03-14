import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-body font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4A3272] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            // Primary — light lilac
            'bg-[#C8BAE6] text-[#28201A] hover:bg-[#B5A5D9] active:bg-[#A894CC] shadow-sm':
              variant === 'primary',
            // Secondary — champagne
            'bg-[#EBE2A2] text-[#28201A] hover:bg-[#DDD48E] active:bg-[#D4C87C]':
              variant === 'secondary',
            // Ghost
            'bg-transparent text-[#C8BAE6] hover:bg-[#EDE8F5] active:bg-[#EBE4F4]':
              variant === 'ghost',
            // Outline
            'border border-[#C8BAE6] bg-transparent text-[#C8BAE6] hover:bg-[#EDE8F5]':
              variant === 'outline',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
