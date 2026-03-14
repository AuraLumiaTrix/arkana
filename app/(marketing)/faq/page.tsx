import type { Metadata } from 'next';
import { FaqSection } from '@/components/marketing/faq-section';

export const metadata: Metadata = { title: 'FAQ' };

export default function FaqPage() {
  return (
    <div className="pt-24">
      <FaqSection />
    </div>
  );
}
