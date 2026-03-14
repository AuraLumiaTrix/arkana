'use client';

import { useParams } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { useProgress } from '@/hooks/use-progress';
import { course, findModule } from '@/content/course-data';
import { LessonList } from '@/components/app/lesson-list';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Badge } from '@/components/ui/badge';
import { Spinner } from '@/components/ui/spinner';
import { getModuleProgress } from '@/lib/progress';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function ModuleDetailClient() {
  const { slug } = useParams<{ slug: string }>();
  const { appUser } = useAuth();
  const { progress, loading } = useProgress(appUser?.uid, course.slug);
  const mod = findModule(slug);

  if (!mod) {
    return (
      <div className="text-center py-24">
        <h1 className="font-heading text-3xl text-[#28201A] mb-4">Modul nicht gefunden</h1>
        <Link href="/app/module" className="text-[#4A3272] font-body underline">
          Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Spinner size={28} />
      </div>
    );
  }

  const pct = getModuleProgress(mod, progress);

  return (
    <div className="pb-12 max-w-3xl mx-auto">
      <Link
        href="/app/module"
        className="inline-flex items-center gap-2 text-sm text-[#7A6C60] font-body hover:text-[#4A3272] mb-6 transition-colors"
      >
        <ArrowLeft size={15} /> Alle Module
      </Link>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="font-heading text-3xl text-[#28201A]">{mod.title}</h1>
          {mod.isBonus && <Badge variant="bonus">Bonus</Badge>}
        </div>
        <p className="text-sm text-[#7A6C60] font-body mb-4">{mod.description}</p>
        <ProgressBar value={pct} label={`${pct}% abgeschlossen`} />
      </div>

      <LessonList lessons={mod.lessons} progress={progress} moduleSlug={mod.slug} />
    </div>
  );
}
