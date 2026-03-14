'use client';

import { useState, useEffect, useCallback } from 'react';
import { getUserProgress, markLessonComplete } from '@/lib/firebase/firestore';
import type { ProgressMap } from '@/types/progress';

export function useProgress(userId: string | undefined, courseSlug: string) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    getUserProgress(userId, courseSlug).then((map) => {
      setProgress(map);
      setLoading(false);
    });
  }, [userId, courseSlug]);

  const completeLesson = useCallback(
    async (lessonSlug: string) => {
      if (!userId) return;
      await markLessonComplete(userId, courseSlug, lessonSlug);
      setProgress((prev) => ({ ...prev, [lessonSlug]: true }));
    },
    [userId, courseSlug]
  );

  return { progress, loading, completeLesson };
}
