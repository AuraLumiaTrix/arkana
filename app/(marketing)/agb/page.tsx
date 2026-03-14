import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'AGB' };

export default function AgbPage() {
  return (
    <div className="pt-24 px-6 pb-20 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl text-[#28201A] mb-8">Allgemeine Geschäftsbedingungen</h1>
      <div className="text-sm text-[#7A6C60] font-body leading-relaxed space-y-6">
        <section>
          <h2 className="font-heading text-xl text-[#28201A] mb-3">1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für den Kauf und die Nutzung des
            Online-Kurses „Tarot, Ahnenheilung & das Lösen alter Glaubenssätze".
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl text-[#28201A] mb-3">2. Vertragsschluss</h2>
          <p>
            Mit dem Kauf des Kurses kommt ein Vertrag zwischen dir und der Anbieterin zustande.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl text-[#28201A] mb-3">3. Nutzungsrecht</h2>
          <p>
            Du erhältst ein persönliches, nicht übertragbares Nutzungsrecht an den Kursinhalten.
          </p>
        </section>
        <p className="text-xs mt-8">
          Platzhalter – bitte mit vollständigen, rechtskonformen AGB ersetzen.
        </p>
      </div>
    </div>
  );
}
