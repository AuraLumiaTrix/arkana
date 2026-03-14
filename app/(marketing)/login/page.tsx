import { Suspense } from 'react';
import LoginForm from '@/components/marketing/login-form';
import { Spinner } from '@/components/ui/spinner';

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Spinner /></div>}>
      <LoginForm />
    </Suspense>
  );
}
