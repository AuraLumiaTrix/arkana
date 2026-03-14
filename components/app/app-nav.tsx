'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, Download, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { signOut } from '@/lib/firebase/auth';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/app/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/app/module', icon: BookOpen, label: 'Module' },
  { href: '/app/downloads', icon: Download, label: 'Downloads' },
  { href: '/app/profil', icon: User, label: 'Profil' },
];

export function AppNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-60 bg-white border-r border-[#DDD0B8] z-40">
        <div className="px-6 h-16 flex items-center border-b border-[#DDD0B8]">
          <Link href="/app/dashboard" className="font-heading text-xl text-[#28201A] hover:text-[#4A3272] transition-colors">
            Arkana
          </Link>
        </div>
        <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-body font-medium transition-all',
                pathname === href || pathname.startsWith(href + '/')
                  ? 'bg-[#EDE8F5] text-[#4A3272]'
                  : 'text-[#7A6C60] hover:bg-[#EDE8F5] hover:text-[#28201A]'
              )}
            >
              <Icon size={17} />
              {label}
            </Link>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <button
            onClick={() => { localStorage.removeItem('dev_admin'); signOut().then(() => (window.location.href = '/login')); }}
            className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-sm font-body font-medium text-[#7A6C60] hover:bg-red-50 hover:text-red-500 transition-all"
          >
            <LogOut size={17} />
            Ausloggen
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#DDD0B8] h-14 flex items-center justify-between px-4">
        <Link href="/app/dashboard" className="font-heading text-xl text-[#28201A]">
          Arkana
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-[#28201A]" aria-label="Menü">
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/30" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute left-0 top-0 bottom-0 w-64 bg-white pt-14"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="px-3 py-4 flex flex-col gap-1">
              {navItems.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body font-medium transition-all',
                    pathname === href || pathname.startsWith(href + '/')
                      ? 'bg-[#EDE8F5] text-[#4A3272]'
                      : 'text-[#7A6C60]'
                  )}
                >
                  <Icon size={17} />
                  {label}
                </Link>
              ))}
              <button
                onClick={() => { localStorage.removeItem('dev_admin'); signOut().then(() => (window.location.href = '/login')); }}
                className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-body font-medium text-[#7A6C60] hover:text-red-500 mt-4 transition-all"
              >
                <LogOut size={17} />
                Ausloggen
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
