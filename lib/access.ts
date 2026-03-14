import type { AppUser } from '@/types/user';

export function hasAccessTo(_courseSlug: string, user: AppUser | null): boolean {
  if (!user) return false;
  return user.hasAccess === true || user.role === 'admin';
}
