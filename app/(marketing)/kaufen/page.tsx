import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { course } from '@/content/course-data';

export const metadata: Metadata = { title: 'Zugang sichern' };

const included = [
  `${course.modules.length} Module (inkl. Bonusmodul)`,
  `${course.modules.reduce((s, m) => s + m.lessons.length, 0)}+ Lektionen mit Video & Audio`,
  'Workbooks, Journal-Vorlagen & Downloads',
  'Legesysteme für Ahnenmuster',
  'Unbegrenzter Zugang',
  'Selbstgesteuertes Lernen in deinem Tempo',
];

export default function KaufenPage() {
  return (
    <div className="pt-24">
      <section className="px-6 pt-12 pb-24 max-w-3xl mx-auto text-center">
        <h1 className="font-heading text-5xl md:text-6xl text-[#73605a] mb-6">
          Dein Zugang zum Kurs
        </h1>
        <p className="text-lg text-[#7A6C60] font-body leading-relaxed mb-12 max-w-xl mx-auto">
          Beginne noch heute deine Reise. Sichere dir den vollen Zugang zu allen Modulen,
          Lektionen und Downloads – für einen einmaligen Betrag.
        </p>

        {/* Card */}
        <div className="bg-white border border-[#DDD0B8] rounded-3xl p-8 md:p-10 max-w-lg mx-auto shadow-sm">
          <p className="text-sm font-body font-semibold text-[#4A3272] mb-2">Komplettzugang</p>
          <h2 className="font-heading text-4xl text-[#73605a] mb-6">
            {course.title}
          </h2>
          <ul className="text-left mb-8 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={16} className="text-[#A4BC9C] mt-1 flex-shrink-0" />
                <span className="text-sm text-[#73605a] font-body">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA – external purchase link placeholder */}
          <a
            href="#kaufen"
            className="block"
          >
            <Button size="lg" className="w-full group shadow-lg shadow-[#C8BAE6]/30">
              Jetzt Zugang sichern
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-xs text-[#7A6C60] font-body mt-4">
            Der Kaufvorgang wird über einen externen Zahlungsanbieter abgewickelt.
            Nach dem Kauf erhältst du eine E-Mail mit deinen Zugangsdaten.
          </p>
        </div>

        <div className="mt-12">
          <p className="text-sm text-[#7A6C60] font-body">
            Bereits gekauft?{' '}
            <Link href="/login" className="text-[#4A3272] font-semibold hover:underline">
              Hier einloggen
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
