import Link from 'next/link';
import { CheckCircle2, Circle, Play, Headphones, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Lesson } from '@/types/course';
import type { ProgressMap } from '@/types/progress';

const mediaIcons = {
  video: Play,
  audio: Headphones,
  text: FileText,
};

interface LessonListProps {
  lessons: Lesson[];
  progress: ProgressMap;
  moduleSlug: string;
}

export function LessonList({ lessons, progress, moduleSlug: _moduleSlug }: LessonListProps) {
  return (
    <div className="flex flex-col gap-2">
      {lessons.map((lesson, i) => {
        const done = !!progress[lesson.slug];
        const Icon = mediaIcons[lesson.mediaType] ?? FileText;
        return (
          <Link key={lesson.slug} href={`/app/lektion/${lesson.slug}`}>
            <div
              className={cn(
                'flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-150 group',
                done
                  ? 'bg-[#A4BC9C]/10 border-[#A4BC9C]/40 hover:border-[#A4BC9C]'
                  : 'bg-white border-[#DDD0B8] hover:border-[#C8BAE6] hover:bg-[#EDE8F5]'
              )}
            >
              <span className="text-xs text-[#7A6C60] w-5 text-center font-body">{i + 1}</span>
              <div className="w-7 h-7 rounded-full bg-[#EDE8F5] flex items-center justify-center flex-shrink-0">
                <Icon size={13} className="text-[#7B60B4]" />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    'text-sm font-body font-medium leading-snug truncate',
                    done ? 'text-[#4A7040]' : 'text-[#28201A] group-hover:text-[#4A3272]'
                  )}
                >
                  {lesson.title}
                </p>
                {lesson.durationMinutes && (
                  <p className="text-xs text-[#7A6C60]">{lesson.durationMinutes} Min.</p>
                )}
              </div>
              {done ? (
                <CheckCircle2 size={18} className="text-[#A4BC9C] flex-shrink-0" />
              ) : (
                <Circle size={18} className="text-[#DDD0B8] flex-shrink-0" />
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
