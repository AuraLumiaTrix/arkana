'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [
  { href: '/kurs', label: 'Der Kurs' },
  { href: '/ueber', label: 'Über mich' },
  { href: '/faq', label: 'FAQ' },
];

export function MarketingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#DDD0B8]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl text-[#28201A] tracking-wide hover:text-[#4A3272] transition-colors">
          Arkana
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-body font-medium text-[#7A6C60] hover:text-[#28201A] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">Einloggen</Button>
          </Link>
          <Link href="/kaufen">
            <Button size="sm">Kurs starten</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#28201A] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#DDD0B8] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-body font-medium text-[#28201A]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/kaufen" onClick={() => setOpen(false)}>
            <Button className="w-full">Kurs starten</Button>
          </Link>
          <Link href="/login" onClick={() => setOpen(false)}>
            <Button variant="outline" className="w-full">Einloggen</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
