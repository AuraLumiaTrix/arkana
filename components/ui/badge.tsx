import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'bonus' | 'soft';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-body',
        {
          'bg-[#EDE8F5] text-[#4A3272]': variant === 'default',
          'bg-[#A4BC9C]/20 text-[#4A7040]': variant === 'success',
          'bg-[#EBE2A2] text-[#7A6020]': variant === 'bonus',
          'bg-[#DDD0B8] text-[#7A6C60]': variant === 'soft',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
