'use client';

import { useState, type FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signInWithEmail } from '@/lib/firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') ?? '/app/dashboard';

  function handleAdminBypass() {
    localStorage.setItem('dev_admin', '1');
    router.push('/app/dashboard');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmail(email, password);
      document.cookie = `arkana_auth=1; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
      router.push(redirect);
    } catch {
      setError('E-Mail oder Passwort ist ungültig. Bitte versuche es erneut.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="font-heading text-3xl text-[#28201A] hover:text-[#4A3272] transition-colors">
            Arkana
          </Link>
          <p className="text-sm text-[#7A6C60] font-body mt-3">
            Melde dich an, um zum Kurs zu gelangen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-[#DDD0B8] rounded-2xl p-6 space-y-4">
          <Input
            id="email"
            label="E-Mail-Adresse"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.de"
          />
          <Input
            id="password"
            label="Passwort"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

          {error && (
            <p className="text-sm text-red-500 font-body bg-red-50 px-4 py-2 rounded-xl">{error}</p>
          )}

          <Button type="submit" disabled={loading} className="w-full mt-2">
            {loading ? <Spinner size={20} /> : 'Einloggen'}
          </Button>
        </form>

        <p className="text-center text-sm text-[#7A6C60] font-body mt-6">
          Noch keinen Zugang?{' '}
          <Link href="/kaufen" className="text-[#4A3272] font-semibold hover:underline">
            Kurs kaufen
          </Link>
        </p>

        {/* DEV ONLY — remove before launch */}
        <div className="mt-8 pt-6 border-t border-[#DDD0B8]">
          <p className="text-center text-xs text-[#7A6C60] font-body mb-3">Entwicklungsmodus</p>
          <button
            type="button"
            onClick={handleAdminBypass}
            className="w-full py-2 px-4 rounded-xl border-2 border-dashed border-[#C8BAE6] text-[#4A3272] text-sm font-body font-semibold hover:bg-[#F5F0FF] transition-colors"
          >
            🔑 Als Admin einloggen (Dev-Bypass)
          </button>
        </div>
      </div>
    </div>
  );
}
