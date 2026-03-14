'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Brauche ich Vorkenntnisse mit Tarot?',
    answer:
      'Nein, überhaupt nicht. Der Kurs ist vollständig für Anfängerinnen geeignet. Du wirst Schritt für Schritt in die Welt des Tarot eingeführt – mit dem Fokus auf innere Arbeit, nicht auf das Auswendiglernen von Kartenbedeutungen.',
  },
  {
    question: 'Brauche ich ein eigenes Tarot-Deck?',
    answer:
      'Ein eigenes Deck ist schön, aber nicht zwingend notwendig für den Einstieg. Im Laufe des Kurses wirst du möglicherweise den Wunsch entwickeln, dir eines zuzulegen. Es gibt wundervolle, erschwingliche Decks für Einsteiger.',
  },
  {
    question: 'Ist der Kurs live oder selbstgesteuert?',
    answer:
      'Der Kurs ist vollständig selbstgesteuert. Es gibt keine festen Termine, keine Live-Calls. Du lernst, wann und wo du möchtest – in deinem eigenen Tempo.',
  },
  {
    question: 'Wie lange habe ich Zugriff auf den Kurs?',
    answer:
      'Du hast unbegrenzten Zugriff auf alle Kursinhalte. Du kannst die Videos, Audios und Downloads so oft und so lange nutzen, wie du möchtest.',
  },
  {
    question: 'Ist dieser Kurs für mich geeignet, auch wenn ich mich kaum mit Spiritualität beschäftigt habe?',
    answer:
      'Ja. Der Kurs ist bewusst so gestaltet, dass er offen und einladend ist – auch für Frauen, die bisher wenig Berührungspunkte mit Spiritualität hatten. Offenheit ist alles, was du brauchst.',
  },
  {
    question: 'Wie läuft der Kauf und der Zugang ab?',
    answer:
      'Nach dem Kauf erhältst du eine E-Mail mit deinen Zugangsdaten. Du loggst dich mit deiner E-Mail-Adresse ein und kannst sofort loslegen. Der Prozess ist einfach und klar.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#DDD0B8] rounded-2xl overflow-hidden">
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-[#EDE8F5] transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-body font-semibold text-[#28201A] text-base">{question}</span>
        <ChevronDown
          size={18}
          className={cn('text-[#7A6C60] flex-shrink-0 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      {open && (
        <div className="px-6 py-5 bg-white">
          <p className="text-sm text-[#7A6C60] font-body leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="py-24 px-6 bg-[#EDE8F5]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-[#EBE2A2] mb-4">
            Häufige Fragen
          </h2>
          <p className="text-base text-[#7A6C60] font-body">
            Hier findest du Antworten auf alles, was dich beschäftigt.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
