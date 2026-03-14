'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CompletionButtonProps {
  lessonSlug: string;
  completed: boolean;
  onComplete: (lessonSlug: string) => Promise<void>;
}

export function CompletionButton({ lessonSlug, completed, onComplete }: CompletionButtonProps) {
  const [loading, setLoading] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  async function handleClick() {
    if (completed || loading) return;
    setLoading(true);
    await onComplete(lessonSlug);
    setJustCompleted(true);
    setLoading(false);
  }

  if (completed || justCompleted) {
    return (
      <div className="flex items-center gap-2 text-[#4A7040]">
        <CheckCircle2 size={20} />
        <span className="text-sm font-semibold font-body">Als abgeschlossen markiert</span>
      </div>
    );
  }

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      variant="secondary"
      className={cn('gap-2', loading && 'opacity-70')}
    >
      <CheckCircle2 size={18} />
      {loading ? 'Wird gespeichert…' : 'Als abgeschlossen markieren'}
    </Button>
  );
}
