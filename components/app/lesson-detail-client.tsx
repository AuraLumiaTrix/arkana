'use client';

import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { useProgress } from '@/hooks/use-progress';
import { course, findLesson, getLessonNeighbors } from '@/content/course-data';
import { LessonPlayer } from '@/components/app/lesson-player';
import { ReflectionBox } from '@/components/app/reflection-box';
import { DownloadList } from '@/components/app/download-card';
import { CompletionButton } from '@/components/app/completion-button';
import { Badge } from '@/components/ui/badge';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { useEffect } from 'react';
import { updateLastVisited } from '@/lib/firebase/firestore';

export function LessonDetailClient() {
  const { slug } = useParams<{ slug: string }>();
  const { appUser } = useAuth();
  const { progress, loading, completeLesson } = useProgress(appUser?.uid, course.slug);
  const found = findLesson(slug);
  const neighbors = getLessonNeighbors(slug);

  useEffect(() => {
    if (appUser?.uid && slug) {
      updateLastVisited(appUser.uid, course.slug, slug);
    }
  }, [appUser?.uid, slug]);

  if (!found) {
    return (
      <div className="text-center py-24">
        <h1 className="font-heading text-3xl text-[#28201A] mb-4">Lektion nicht gefunden</h1>
        <Link href="/app/module" className="text-[#4A3272] font-body underline">
          Zur Modulübersicht
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

  const { lesson, module: mod } = found;
  const isCompleted = !!progress[lesson.slug];

  return (
    <div className="pb-12 max-w-3xl mx-auto">
      <Link
        href={`/app/module/${mod.slug}`}
        className="inline-flex items-center gap-2 text-sm text-[#7A6C60] font-body hover:text-[#4A3272] mb-6 transition-colors"
      >
        <ArrowLeft size={15} /> {mod.title}
      </Link>

      <div className="mb-6">
        <h1 className="font-heading text-3xl md:text-4xl text-[#28201A] mb-2">
          {lesson.title}
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="soft">{lesson.mediaType === 'video' ? '🎬 Video' : lesson.mediaType === 'audio' ? '🎧 Audio' : '📖 Text'}</Badge>
          {lesson.durationMinutes && (
            <span className="flex items-center gap-1 text-xs text-[#7A6C60] font-body">
              <Clock size={12} /> {lesson.durationMinutes} Min.
            </span>
          )}
        </div>
      </div>

      <p className="text-base text-[#28201A] font-body leading-relaxed mb-8 italic">
        {lesson.intro}
      </p>

      <div className="mb-8">
        <LessonPlayer
          mediaType={lesson.mediaType}
          mediaUrl={lesson.mediaUrl}
          title={lesson.title}
        />
      </div>

      {lesson.summary && (
        <div className="bg-white border border-[#DDD0B8] rounded-2xl p-6 mb-8">
          <p className="text-xs font-semibold text-[#7A6C60] uppercase tracking-widest font-body mb-3">
            ✨ Zusammenfassung
          </p>
          <p className="text-sm text-[#28201A] font-body leading-relaxed">{lesson.summary}</p>
        </div>
      )}

      <div className="mb-8">
        <ReflectionBox questions={lesson.reflectionQuestions} />
      </div>

      <div className="mb-10">
        <DownloadList downloads={lesson.downloads} />
      </div>

      <div className="mb-10 border-t border-[#DDD0B8] pt-6">
        <CompletionButton
          lessonSlug={lesson.slug}
          completed={isCompleted}
          onComplete={completeLesson}
        />
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-[#DDD0B8] pt-6">
        {neighbors.prev ? (
          <Link
            href={`/app/lektion/${neighbors.prev.slug}`}
            className="flex items-center gap-2 text-sm text-[#7A6C60] font-body hover:text-[#4A3272] transition-colors"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">{neighbors.prev.title}</span>
            <span className="sm:hidden">Zurück</span>
          </Link>
        ) : <div />}
        {neighbors.next ? (
          <Link
            href={`/app/lektion/${neighbors.next.slug}`}
            className="flex items-center gap-2 text-sm text-[#4A3272] font-body font-semibold hover:underline ml-auto"
          >
            <span className="hidden sm:inline">{neighbors.next.title}</span>
            <span className="sm:hidden">Weiter</span>
            <ArrowRight size={15} />
          </Link>
        ) : (
          <Link
            href="/app/module"
            className="flex items-center gap-2 text-sm text-[#4A3272] font-body font-semibold hover:underline ml-auto"
          >
            Zur Modulübersicht <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </div>
  );
}
