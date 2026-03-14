import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { app } from './config';
import type { AppUser } from '@/types/user';
import type { ProgressMap } from '@/types/progress';

export const db = getFirestore(app);

// ─── User ────────────────────────────────────────────────────────────────────

export async function getUser(uid: string): Promise<AppUser | null> {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data() as AppUser;
}

export async function createUser(uid: string, email: string, displayName?: string) {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (snap.exists()) return;
  await setDoc(ref, {
    uid,
    email,
    displayName: displayName ?? '',
    hasAccess: false,
    role: 'student',
    createdAt: new Date().toISOString(),
  });
}

export async function grantAccess(uid: string) {
  const ref = doc(db, 'users', uid);
  await updateDoc(ref, { hasAccess: true });
}

// ─── Progress ────────────────────────────────────────────────────────────────

export async function getUserProgress(
  userId: string,
  courseSlug: string
): Promise<ProgressMap> {
  const q = query(
    collection(db, 'progress'),
    where('userId', '==', userId),
    where('courseSlug', '==', courseSlug)
  );
  const snap = await getDocs(q);
  const map: ProgressMap = {};
  snap.forEach((d) => {
    const data = d.data();
    map[data.lessonSlug] = data.completed;
  });
  return map;
}

export async function markLessonComplete(
  userId: string,
  courseSlug: string,
  lessonSlug: string
) {
  const id = `${userId}_${courseSlug}_${lessonSlug}`;
  const ref = doc(db, 'progress', id);
  await setDoc(
    ref,
    {
      userId,
      courseSlug,
      lessonSlug,
      completed: true,
      completedAt: new Date().toISOString(),
      lastVisitedAt: new Date().toISOString(),
    },
    { merge: true }
  );
}

export async function updateLastVisited(
  userId: string,
  courseSlug: string,
  lessonSlug: string
) {
  const id = `${userId}_${courseSlug}_${lessonSlug}`;
  const ref = doc(db, 'progress', id);
  await setDoc(
    ref,
    {
      userId,
      courseSlug,
      lessonSlug,
      completed: false,
      lastVisitedAt: new Date().toISOString(),
    },
    { merge: true }
  );
}

export async function getLastVisited(
  userId: string,
  courseSlug: string
): Promise<string | null> {
  const q = query(
    collection(db, 'progress'),
    where('userId', '==', userId),
    where('courseSlug', '==', courseSlug)
  );
  const snap = await getDocs(q);
  let latest: { slug: string; ts: string } | null = null;
  snap.forEach((d) => {
    const data = d.data();
    if (data.lastVisitedAt) {
      if (!latest || data.lastVisitedAt > latest.ts) {
        latest = { slug: data.lessonSlug, ts: data.lastVisitedAt };
      }
    }
  });
  return latest ? (latest as { slug: string; ts: string }).slug : null;
}
