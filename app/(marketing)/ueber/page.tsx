import type { Metadata } from 'next';
import { CtaSection } from '@/components/marketing/cta-section';

export const metadata: Metadata = { title: 'Über mich' };

export default function UeberPage() {
  return (
    <div className="pt-24">
      <section className="px-6 pt-12 pb-20 max-w-3xl mx-auto text-center">
        <h1 className="font-heading text-5xl md:text-6xl text-[#73605a] mb-8">
          Über mich
        </h1>
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#C8BAE6] to-[#C6A338] mx-auto mb-8" />
        <div className="text-base text-[#7A6C60] font-body leading-relaxed space-y-6 text-left">
          <p>
            Willkommen, schön, dass du hier bist. Mein Name ist … und ich begleite Frauen dabei,
            sich aus alten Mustern zu befreien, die oft über Generationen weitergegeben werden.
          </p>
          <p>
            Durch meine eigene Heilungsreise habe ich erfahren, wie tief ererbte Glaubenssätze unser
            Leben prägen – und wie kraftvoll es ist, wenn wir beginnen, sie bewusst loszulassen.
          </p>
          <p>
            Mein Ansatz verbindet die symbolische Sprache des Tarot mit der Tiefenarbeit der
            Ahnenheilung. Kein Hokuspokus – sondern ehrliche, liebevolle Arbeit an uns selbst.
          </p>
          <p>
            Ich glaube daran, dass jede Frau die Kraft in sich trägt, ihre eigene Geschichte
            umzuschreiben. Dieser Kurs ist meine Einladung an dich, genau das zu tun.
          </p>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
