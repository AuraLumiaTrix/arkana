'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AppNav } from '@/components/app/app-nav';
import { useAuth } from '@/hooks/use-auth';
import { Spinner } from '@/components/ui/spinner';
import type { AppUser } from '@/types/user';

const DEV_ADMIN: AppUser = {
  uid: 'dev-admin',
  email: 'admin@dev.local',
  displayName: 'Dev Admin',
  hasAccess: true,
  role: 'admin',
  createdAt: new Date().toISOString(),
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { firebaseUser, appUser, loading } = useAuth();
  const router = useRouter();
  const [devAdmin, setDevAdmin] = useState<AppUser | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('dev_admin') === '1') {
      setDevAdmin(DEV_ADMIN);
    }
  }, []);

  // Dev bypass — skip Firebase auth entirely
  if (devAdmin) {
    return (
      <div className="min-h-screen bg-[#FFFFFF]">
        <AppNav />
        <main className="md:ml-60 pt-14 md:pt-0 min-h-screen">
          <div className="p-4 md:p-8 max-w-5xl mx-auto">{children}</div>
        </main>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF]">
        <Spinner size={32} />
      </div>
    );
  }

  if (!firebaseUser) {
    router.push('/login');
    return null;
  }

  if (appUser && !appUser.hasAccess && appUser.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-[#FFFFFF]">
        <div className="max-w-md text-center">
          <h1 className="font-heading text-3xl text-[#28201A] mb-4">
            Kein Zugang
          </h1>
          <p className="text-sm text-[#7A6C60] font-body mb-6">
            Dein Konto wurde noch nicht freigeschaltet. Bitte wende dich an die Kursleitung oder kaufe den Kurs.
          </p>
          <button
            onClick={() => router.push('/kaufen')}
            className="text-[#4A3272] font-body font-semibold underline"
          >
            Zur Kaufseite
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AppNav />
      <main className="md:ml-60 pt-14 md:pt-0 min-h-screen">
        <div className="p-4 md:p-8 max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
