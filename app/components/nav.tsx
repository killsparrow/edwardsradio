// components/Nav.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/#music', label: 'Music' },
  { href: '/#about', label: 'About' },
  // { href: '#video', label: 'Video' },
  { href: '/#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // lock scroll when mobile menu open
  useEffect(() => {
    const body = document.body;
    const prev = body.style.overflow;
    body.style.overflow = open ? 'hidden' : '';
    return () => {
      body.style.overflow = prev;
    };
  }, [open]);

  // close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          {/* Logo on the left */}
          <Link href="/#hero" className="flex items-center gap-2">
            <Image
              src="/edwards-radio_2.png"
              alt="Edwards Radio"
              width={150}
              height={32}
            />

          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-white hover:text-[#d0bd3b] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
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

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Slide-out mobile menu */}
      <aside
        id="mobile-menu"
        className={`md:hidden fixed right-0 top-0 z-50 h-dvh w-[80vw] max-w-xs bg-black/95 border-l border-white/10
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
              className="text-lg text-white hover:text-[#d0bd3b]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
}
