import { course } from '@/content/course-data';
import { LessonDetailClient } from '@/components/app/lesson-detail-client';

export function generateStaticParams() {
  return course.modules.flatMap((m) => m.lessons.map((l) => ({ slug: l.slug })));
}

export default function LektionPage() {
  return <LessonDetailClient />;
}
