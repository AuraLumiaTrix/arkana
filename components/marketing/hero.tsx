import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Star, Sun } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-24 right-12 w-64 h-64 rounded-full bg-[#EDE8F5] blur-3xl opacity-70" />
        <div className="absolute bottom-20 left-12 w-80 h-80 rounded-full bg-[#EBE2A2]/40 blur-3xl opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-[#C8BAE6]/20 blur-2xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Pre-title */}
        <div className="inline-flex items-center gap-2 bg-[#EDE8F5] rounded-full px-4 py-2 mb-8">
          <Sparkles size={14} className="text-[#7B60B4]" />
          <span className="text-sm text-[#4A3272] font-body font-medium">
            Online-Kurs · Selbststudium · Tiefgehend
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#73605a] leading-tight mb-6">
          Tarot, Ahnenheilung &<br />
          <span className="text-[#4A3272] italic">das Lösen alter</span>{' '}
          <span className="relative">
            Glaubenssätze
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 300 8"
              fill="none"
              aria-hidden
            >
              <path d="M2 6 Q150 0 298 6" stroke="#C6A338" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#7A6C60] font-body leading-relaxed mb-10 max-w-2xl mx-auto">
          Ein tiefgehender Kurs für Frauen, die bereit sind, vererbte Muster zu erkennen,
          alte Wunden zu heilen und sich selbst neu zu begegnen – durch die Sprache des Tarot.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/kaufen">
            <Button size="lg" className="font-semibold shadow-lg shadow-[#C8BAE6]/30">
              Jetzt Zugang sichern
            </Button>
          </Link>
          <Link href="/kurs">
            <Button size="lg" variant="outline">
              Kursinhalt ansehen
            </Button>
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
          {[
            { icon: Star, text: '9 Module' },
            { icon: Sun, text: '35+ Lektionen' },
            { icon: Sparkles, text: 'Workbooks & Journal' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-[#7A6C60]">
              <Icon size={16} className="text-[#C6A338]" />
              <span className="text-sm font-body">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
