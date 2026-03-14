'use client';

import { useState, useEffect } from 'react';
import { type User } from 'firebase/auth';
import { onAuthChange } from '@/lib/firebase/auth';
import { getUser, createUser } from '@/lib/firebase/firestore';
import type { AppUser } from '@/types/user';

interface AuthState {
  firebaseUser: User | null;
  appUser: AppUser | null;
  loading: boolean;
}

export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({
    firebaseUser: null,
    appUser: null,
    loading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthChange(async (firebaseUser) => {
      if (firebaseUser) {
        // Ensure user document exists
        await createUser(firebaseUser.uid, firebaseUser.email ?? '', firebaseUser.displayName ?? '');
        const appUser = await getUser(firebaseUser.uid);
        setState({ firebaseUser, appUser, loading: false });
      } else {
        setState({ firebaseUser: null, appUser: null, loading: false });
      }
    });
    return () => unsubscribe();
  }, []);

  return state;
}
