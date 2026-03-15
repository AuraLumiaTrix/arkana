import { Hero } from '@/components/marketing/hero';
import { ProblemSolution } from '@/components/marketing/problem-solution';
import { ModulePreview } from '@/components/marketing/module-preview';
import { FaqSection } from '@/components/marketing/faq-section';
import { CtaSection } from '@/components/marketing/cta-section';
import { Heart, BookOpen, Headphones, FileDown, Gift } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />

      {/* What's included */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-[#EBE2A2] mb-4">
            Was dich erwartet
          </h2>
          <p className="text-base text-[#7A6C60] font-body max-w-xl mx-auto">
            Ein Kurs, der nicht nur Wissen vermittelt – sondern auf mehreren Ebenen wirkt.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: 'Video-Lektionen', desc: 'Einfühlsame Lektionen, die dich Schritt für Schritt begleiten.' },
            { icon: Headphones, title: 'Audio-Meditationen', desc: 'Geführte Reflexionen und Übungen zum Mitmachen.' },
            { icon: FileDown, title: 'Workbooks & Journal', desc: 'Begleitende PDFs zum Schreiben, Reflektieren und Vertiefen.' },
            { icon: Heart, title: 'Reflexionsfragen', desc: 'Zu jeder Lektion gibt es Impulse für deine innere Arbeit.' },
            { icon: Gift, title: 'Bonusmodul', desc: 'Ein exklusives Modul zu Legesystemen für Ahnenmuster.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-[#DDD0B8] rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#EDE8F5] flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-[#7B60B4]" />
              </div>
              <h3 className="font-heading text-lg text-[#73605a] mb-2">{title}</h3>
              <p className="text-sm text-[#7A6C60] font-body">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ModulePreview />

      {/* Trust / About */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-[#73605a] mb-6">
            Warum dieser Ansatz anders ist
          </h2>
          <p className="text-base md:text-lg text-[#7A6C60] font-body leading-relaxed mb-8">
            Dieser Kurs verbindet die Weisheit des Tarot mit der Tiefe der
            Ahnenheilung&nbsp;– nicht als oberflächliche Kartenlegung, sondern als echtes
            Werkzeug der Selbsterkenntnis. Du arbeitest mit Reflexion, Journal und Meditation
            an deinem persönlichen Kern. Keine Esoterik-Show, keine Angstmacherei.
            Nur ehrliche, liebevolle Arbeit an dir selbst.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Traumasensibel', 'Herzgeleitet', 'Evidenzbasierte Psychologie trifft Spiritualität'].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-[#EDE8F5] text-[#4A3272] text-sm font-body px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
