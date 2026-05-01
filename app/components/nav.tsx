// components/Nav.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GiRadioTower } from 'react-icons/gi';

const LINKS = [
  { href: '/#music', label: 'Music' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

const HIDE_ON = ['/wilderness'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    const prev = body.style.overflow;
    body.style.overflow = open ? 'hidden' : '';
    return () => {
      body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (HIDE_ON.includes(pathname)) return null;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#24252d]/80 backdrop-blur-md border-b border-[#494a5d]/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <Link href="/#home" className="flex items-center gap-2">
            <span className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-white/70">
              <GiRadioTower size={16} />
              Edwards Radio
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-[#bfb689] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center"
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 right-0 top-0 h-[2px] bg-white transition-transform duration-300 ${
                  open ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-white transition-all duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-[2px] bg-white transition-transform duration-300 ${
                  open ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <aside
        id="mobile-menu"
        className={`md:hidden fixed right-0 top-0 z-50 h-dvh w-[80vw] max-w-xs border-l border-[#494a5d]/30 bg-[#24252d]/95 backdrop-blur-md
        transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="h-10 w-10 grid place-items-center"
          >
            <div className="relative w-6 h-6">
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-white rotate-45" />
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-white -rotate-45" />
            </div>
          </button>
        </div>

        <nav className="px-6 pb-8 grid gap-5">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-white/70 hover:text-[#bfb689]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
}
