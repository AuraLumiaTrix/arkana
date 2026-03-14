import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number; // 0–100
  className?: string;
  size?: 'sm' | 'md';
  label?: string;
  showLabel?: boolean;
}

export function ProgressBar({
  value,
  className,
  size = 'md',
  label,
  showLabel = true,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={cn('w-full', className)}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-xs text-[#7A6C60] font-body">{label}</span>}
          {showLabel && (
            <span className="text-xs font-semibold text-[#4A3272] font-body ml-auto">
              {clamped}%
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          'w-full bg-[#DDD0B8] rounded-full overflow-hidden',
          size === 'sm' ? 'h-1.5' : 'h-2.5'
        )}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-gradient-to-r from-[#C8BAE6] to-[#C6A338] rounded-full transition-all duration-700 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
