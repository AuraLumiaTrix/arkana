'use client';

import { useAuth } from '@/hooks/use-auth';
import { useProgress } from '@/hooks/use-progress';
import { course } from '@/content/course-data';
import { getTotalProgress, getCompletedCount, getTotalLessons } from '@/lib/progress';
import { signOut } from '@/lib/firebase/auth';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Spinner } from '@/components/ui/spinner';
import { LogOut, Mail, BookOpen, CheckCircle2 } from 'lucide-react';

export default function ProfilPage() {
  const { firebaseUser, appUser } = useAuth();
  const { progress, loading } = useProgress(appUser?.uid, course.slug);

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Spinner size={28} />
      </div>
    );
  }

  const totalLessons = getTotalLessons(course);
  const completedCount = getCompletedCount(course, progress);
  const pct = getTotalProgress(course, progress);

  return (
    <div className="pb-12 max-w-xl mx-auto">
      <h1 className="font-heading text-3xl text-[#28201A] mb-8">Mein Profil</h1>

      <div className="bg-white border border-[#DDD0B8] rounded-2xl p-6 mb-6 space-y-4">
        <div className="flex items-center gap-3">
          <Mail size={16} className="text-[#7B60B4]" />
          <span className="text-sm text-[#28201A] font-body">{firebaseUser?.email}</span>
        </div>
        {appUser?.displayName && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#28201A] font-body font-semibold">{appUser.displayName}</span>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="bg-white border border-[#DDD0B8] rounded-2xl p-6 mb-6">
        <h2 className="font-heading text-xl text-[#28201A] mb-4">Kursfortschritt</h2>
        <ProgressBar value={pct} className="mb-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <BookOpen size={16} className="text-[#C6A338]" />
            <div>
              <p className="text-xs text-[#7A6C60] font-body">Lektionen gesamt</p>
              <p className="text-lg font-semibold text-[#28201A] font-body">{totalLessons}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 size={16} className="text-[#A4BC9C]" />
            <div>
              <p className="text-xs text-[#7A6C60] font-body">Abgeschlossen</p>
              <p className="text-lg font-semibold text-[#28201A] font-body">{completedCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logout */}
      <Button
        variant="outline"
        onClick={() => {
          document.cookie = 'arkana_auth=; path=/; max-age=0';
          signOut().then(() => (window.location.href = '/login'));
        }}
        className="gap-2"
      >
        <LogOut size={16} />
        Ausloggen
      </Button>
    </div>
  );
}
