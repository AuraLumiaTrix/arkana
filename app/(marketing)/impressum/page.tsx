import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Impressum' };

export default function ImpressumPage() {
  return (
    <div className="pt-24 px-6 pb-20 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl text-[#73605a] mb-8">Impressum</h1>
      <div className="text-sm text-[#7A6C60] font-body leading-relaxed space-y-4">
        <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        <p>
          [Dein Name]<br />
          [Straße Hausnummer]<br />
          [PLZ Ort]
        </p>
        <p><strong>Kontakt:</strong></p>
        <p>
          E-Mail: [deine@email.de]<br />
        </p>
        <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong></p>
        <p>
          [Dein Name]<br />
          [Adresse]
        </p>
        <p className="text-xs mt-8">
          Platzhalter – bitte mit deinen echten Angaben befüllen.
        </p>
      </div>
    </div>
  );
}
