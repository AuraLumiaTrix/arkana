'use client';

import { useAuth } from '@/hooks/use-auth';
import { useProgress } from '@/hooks/use-progress';
import { course } from '@/content/course-data';
import { DashboardHeader } from '@/components/app/dashboard-header';
import { ModuleCard } from '@/components/app/module-card';
import { Spinner } from '@/components/ui/spinner';
import { getTotalProgress, getCompletedCount, getTotalLessons, getNextLesson } from '@/lib/progress';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function DashboardPage() {
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
  const next = getNextLesson(course, progress);

  return (
    <div className="space-y-8 pb-12">
      <DashboardHeader
        displayName={appUser?.displayName}
        totalProgress={pct}
        completedLessons={completed}
        totalLessons={total}
      />

      {/* Next lesson CTA */}
      {next && (
        <Link href={`/app/lektion/${next.lessonSlug}`}>
          <div className="bg-white border border-[#C8BAE6] rounded-2xl p-5 flex items-center justify-between hover:shadow-sm transition-all group">
            <div>
              <p className="text-xs text-[#7B60B4] font-body font-medium mb-1">Deine nächste Lektion</p>
              <p className="font-heading text-lg text-[#28201A] group-hover:text-[#4A3272] transition-colors">
                {course.modules
                  .flatMap((m) => m.lessons)
                  .find((l) => l.slug === next.lessonSlug)?.title}
              </p>
            </div>
            <Button size="sm" variant="primary" className="gap-1">
              Weiterlernen <ArrowRight size={16} />
            </Button>
          </div>
        </Link>
      )}

      {/* Module grid */}
      <div>
        <h2 className="font-heading text-2xl text-[#28201A] mb-4">Deine Module</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.modules.map((mod, i) => (
            <ModuleCard key={mod.slug} module={mod} index={i} progress={progress} />
          ))}
        </div>
      </div>
    </div>
  );
}
