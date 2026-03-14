import type { Metadata } from 'next';
import { ModulePreview } from '@/components/marketing/module-preview';
import { CtaSection } from '@/components/marketing/cta-section';
import { course } from '@/content/course-data';
import { BookOpen, Clock, FileDown, Star } from 'lucide-react';

export const metadata: Metadata = { title: 'Der Kurs' };

export default function KursPage() {
  const totalLessons = course.modules.reduce((s, m) => s + m.lessons.length, 0);
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 pt-12 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl text-[#28201A] mb-6">
            {course.title}
          </h1>
          <p className="text-lg text-[#7A6C60] font-body leading-relaxed mb-10 max-w-xl mx-auto">
            Ein selbstgesteuerter Online-Kurs, der dich tiefgehend und liebevoll durch die Themen
            Ahnenheilung, Karma und Glaubenssätze begleitet – mithilfe der Weisheit des Tarot.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#7A6C60] font-body">
            <div className="flex items-center gap-2"><BookOpen size={16} className="text-[#C6A338]" />{course.modules.length} Module</div>
            <div className="flex items-center gap-2"><Star size={16} className="text-[#C6A338]" />{totalLessons} Lektionen</div>
            <div className="flex items-center gap-2"><Clock size={16} className="text-[#C6A338]" />Selbststudium</div>
            <div className="flex items-center gap-2"><FileDown size={16} className="text-[#C6A338]" />Workbooks & PDFs</div>
          </div>
        </div>
      </section>

      <ModulePreview />
      <CtaSection />
    </div>
  );
}
