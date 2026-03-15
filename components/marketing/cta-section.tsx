import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#EDE8F5] to-white rounded-3xl p-10 md:p-16 border border-[#DDD0B8]">
          <p className="font-heading text-sm tracking-widest text-[#7B60B4] uppercase mb-4">
            Dein nächster Schritt
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#73605a] mb-6">
            Bereit, dich zu befreien?
          </h2>
          <p className="text-base md:text-lg text-[#7A6C60] font-body leading-relaxed mb-10 max-w-xl mx-auto">
            Dieser Kurs begleitet dich sanft und tiefgehend durch deine Heilungsarbeit. Du brauchst
            keine Vorkenntnisse – nur die Bereitschaft, dich selbst zu sehen.
          </p>
          <Link href="/kaufen">
            <Button size="lg" className="shadow-xl shadow-[#C8BAE6]/40 group">
              Jetzt Zugang sichern
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-xs text-[#7A6C60] font-body mt-6">
            Unbegrenzter Zugang · Selbststudium · Workbooks & Downloads inklusive
          </p>
        </div>
      </div>
    </section>
  );
}
