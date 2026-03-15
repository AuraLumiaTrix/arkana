import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Datenschutz' };

export default function DatenschutzPage() {
  return (
    <div className="pt-24 px-6 pb-20 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl text-[#73605a] mb-8">Datenschutzerklärung</h1>
      <div className="text-sm text-[#7A6C60] font-body leading-relaxed space-y-6">
        <section>
          <h2 className="font-heading text-xl text-[#73605a] mb-3">1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen
            personenbezogenen Daten passiert, wenn du diese Website besuchst.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl text-[#73605a] mb-3">2. Datenerfassung auf dieser Website</h2>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Deine Daten werden zum einen dadurch erhoben, dass du uns diese mitteilst (z.&nbsp;B.
            durch Login mit E-Mail).
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl text-[#73605a] mb-3">3. Firebase & Hosting</h2>
          <p>
            Wir nutzen Firebase (Google Cloud) für Authentifizierung und Datenbankspeicherung.
            Es gelten die Datenschutzbestimmungen von Google.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-xl text-[#73605a] mb-3">4. Deine Rechte</h2>
          <p>
            Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
            Zweck deiner gespeicherten personenbezogenen Daten zu erhalten.
          </p>
        </section>
        <p className="text-xs mt-8">
          Platzhalter – bitte mit einer vollständigen, rechtskonformen Datenschutzerklärung ersetzen.
        </p>
      </div>
    </div>
  );
}
