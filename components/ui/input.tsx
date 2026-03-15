import { cn } from '@/lib/utils';
import { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-semibold text-[#73605a] mb-1.5 font-body"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full rounded-xl border border-[#DDD0B8] bg-white px-4 py-3 text-[#73605a] text-base font-body',
            'placeholder:text-[#7A6C60]/60',
            'focus:outline-none focus:ring-2 focus:ring-[#C8BAE6] focus:border-[#C8BAE6]',
            'transition-all duration-200',
            error && 'border-red-300 focus:ring-red-200',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500 font-body">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
