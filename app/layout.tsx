import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Arkana – Tarot, Ahnenheilung & Glaubenssätze',
    template: '%s | Arkana',
  },
  description:
    'Ein tiefgehender Online-Kurs für Frauen: Tarot, Ahnenheilung und das Lösen alter Glaubenssätze. Sanft, selbstgesteuert, transformativ.',
  keywords: ['Tarot', 'Ahnenheilung', 'Glaubenssätze', 'Online-Kurs', 'Spiritualität'],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Arkana',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
