import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#DDD0B8] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-heading text-2xl text-[#73605a] mb-3">AuraLumia Arkana-Guide</p>
            <p className="text-sm text-[#7A6C60] font-body leading-relaxed">
              Tarot als Werkzeug zur Heilung, Befreiung und innerer Transformation.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#7A6C60] uppercase tracking-widest mb-4 font-body">
              Kurs
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/kurs" className="text-sm text-[#73605a] hover:text-[#4A3272] font-body">Der Kurs</Link>
              <Link href="/kaufen" className="text-sm text-[#73605a] hover:text-[#4A3272] font-body">Zugang sichern</Link>
              <Link href="/faq" className="text-sm text-[#73605a] hover:text-[#4A3272] font-body">FAQ</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#7A6C60] uppercase tracking-widest mb-4 font-body">
              Rechtliches
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/impressum" className="text-sm text-[#73605a] hover:text-[#4A3272] font-body">Impressum</Link>
              <Link href="/datenschutz" className="text-sm text-[#73605a] hover:text-[#4A3272] font-body">Datenschutz</Link>
              <Link href="/agb" className="text-sm text-[#73605a] hover:text-[#4A3272] font-body">AGB</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-[#DDD0B8] text-center">
          <p className="text-xs text-[#7A6C60] font-body">
            © {new Date().getFullYear()} Arkana – Tarot & Ahnenheilung. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
