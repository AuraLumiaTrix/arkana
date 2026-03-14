import type { Course, Module } from '@/types/course';
import type { ProgressMap } from '@/types/progress';

export function getTotalLessons(course: Course): number {
  return course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
}

export function getCompletedCount(course: Course, progress: ProgressMap): number {
  return course.modules.reduce((sum, m) => {
    return sum + m.lessons.filter((l) => progress[l.slug]).length;
  }, 0);
}

export function getTotalProgress(course: Course, progress: ProgressMap): number {
  const total = getTotalLessons(course);
  if (total === 0) return 0;
  return Math.round((getCompletedCount(course, progress) / total) * 100);
}

export function getModuleProgress(module: Module, progress: ProgressMap): number {
  if (module.lessons.length === 0) return 0;
  const done = module.lessons.filter((l) => progress[l.slug]).length;
  return Math.round((done / module.lessons.length) * 100);
}

export function isModuleComplete(module: Module, progress: ProgressMap): boolean {
  return module.lessons.every((l) => progress[l.slug]);
}

export function getNextLesson(
  course: Course,
  progress: ProgressMap
): { moduleSlug: string; lessonSlug: string } | null {
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      if (!progress[lesson.slug]) {
        return { moduleSlug: mod.slug, lessonSlug: lesson.slug };
      }
    }
  }
  return null;
}
