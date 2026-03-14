import Link from 'next/link';
import { CheckCircle2, Circle, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProgressBar } from '@/components/ui/progress-bar';
import type { Module } from '@/types/course';
import type { ProgressMap } from '@/types/progress';
import { getModuleProgress, isModuleComplete } from '@/lib/progress';

interface ModuleCardProps {
  module: Module;
  index: number;
  progress: ProgressMap;
}

export function ModuleCard({ module, index, progress }: ModuleCardProps) {
  const pct = getModuleProgress(module, progress);
  const complete = isModuleComplete(module, progress);
  const firstIncomplete = module.lessons.find((l) => !progress[l.slug]);
  const href = firstIncomplete
    ? `/app/lektion/${firstIncomplete.slug}`
    : `/app/module/${module.slug}`;

  return (
    <Link href={href} className="block group">
      <div className="bg-white border border-[#DDD0B8] rounded-2xl p-5 hover:border-[#C8BAE6] hover:shadow-sm transition-all duration-200 h-full">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#EBE2A2] flex items-center justify-center text-xs font-bold text-[#28201A] font-body flex-shrink-0">
              {index + 1}
            </span>
            <h3 className="font-heading text-base md:text-lg text-[#28201A] leading-snug group-hover:text-[#4A3272] transition-colors">
              {module.title}
            </h3>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2">
            {module.isBonus && <Badge variant="bonus">Bonus</Badge>}
            {complete ? (
              <CheckCircle2 size={20} className="text-[#A4BC9C]" />
            ) : pct > 0 ? (
              <Circle size={20} className="text-[#C8BAE6]" />
            ) : (
              <Circle size={20} className="text-[#DDD0B8]" />
            )}
          </div>
        </div>
        <p className="text-xs text-[#7A6C60] font-body leading-relaxed mb-4 line-clamp-2">
          {module.description}
        </p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#7A6C60] font-body">
            {module.lessons.length} Lektionen
          </span>
        </div>
        <ProgressBar value={pct} size="sm" showLabel={false} />
      </div>
    </Link>
  );
}
