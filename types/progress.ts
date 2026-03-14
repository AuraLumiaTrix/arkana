export interface LessonProgress {
  userId: string;
  courseSlug: string;
  lessonSlug: string;
  completed: boolean;
  completedAt?: string;
  lastVisitedAt?: string;
}

export type ProgressMap = Record<string, boolean>;
