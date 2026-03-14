import { course } from '@/content/course-data';
import { ModuleDetailClient } from '@/components/app/module-detail-client';

export function generateStaticParams() {
  return course.modules.map((m) => ({ slug: m.slug }));
}

export default function ModuleDetailPage() {
  return <ModuleDetailClient />;
}
