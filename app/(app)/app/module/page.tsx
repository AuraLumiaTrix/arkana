'use client';

import { useAuth } from '@/hooks/use-auth';
import { useProgress } from '@/hooks/use-progress';
import { course } from '@/content/course-data';
import { ModuleCard } from '@/components/app/module-card';
import { Spinner } from '@/components/ui/spinner';
import { getTotalProgress, getCompletedCount, getTotalLessons } from '@/lib/progress';
import { ProgressBar } from '@/components/ui/progress-bar';

export default function ModulePage() {
  const { appUser } = useAuth();
  const { progress, loading } = useProgress(appUser?.uid, course.slug);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-24">
        <Spinner size={28} />
      </div>
    );
  }

  const total = getTotalLessons(course);
  const completed = getCompletedCount(course, progress);
  const pct = getTotalProgress(course, progress);

  return (
    <div className="pb-12">
      <div className="mb-8">
        <h1 className="font-heading text-3xl text-[#73605a] mb-2">Alle Module</h1>
        <p className="text-sm text-[#7A6C60] font-body mb-4">
          {completed} von {total} Lektionen abgeschlossen
        </p>
        <ProgressBar value={pct} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {course.modules.map((mod, i) => (
          <ModuleCard key={mod.slug} module={mod} index={i} progress={progress} />
        ))}
      </div>
    </div>
  );
}
