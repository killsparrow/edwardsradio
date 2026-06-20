"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import GridOverlay from "./GridOverlay";

export default function UnderwaterComingSoonHero() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-dvh snap-start overflow-hidden bg-[#2f303b]"
      aria-label="Home"
    >
      <GridOverlay />

      {/* Foreground */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-10 flex flex-col justify-center min-h-dvh items-center text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#a0633b] mb-6">
          New Album
        </p>

        {/* Album cover with porthole-style border */}
        <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square border-2 border-[#494a5d] p-1 bg-[#24252d]/40 mb-10">
          <div className="relative w-full h-full overflow-hidden border border-[#a0633b]/40">
            <Image
              src="/2026.jpg"
              alt="Underwater album cover"
              fill
              priority
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 256px"
              className="object-cover"
            />
          </div>
          {/* Porthole bolts — midpoints of each side */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#494a5d] border border-[#494a5d]" aria-hidden="true" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#494a5d] border border-[#494a5d]" aria-hidden="true" />
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#494a5d] border border-[#494a5d]" aria-hidden="true" />
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#494a5d] border border-[#494a5d]" aria-hidden="true" />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] text-white uppercase !mb-0 leading-[1]">
          Underwater
        </h1>

        <p className="mt-4 text-xs uppercase tracking-[0.35em] text-white/40">
          by Edwards Radio
        </p>

        <div className="flex items-center justify-center gap-5 mt-10">
          <span className="w-16 h-px bg-[#494a5d]" aria-hidden="true" />
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#bfb689] !mb-0">
            Out Now
          </p>
          <span className="w-16 h-px bg-[#494a5d]" aria-hidden="true" />
        </div>
      </div>

      <a
        href="#weight-of-illusion"
        aria-label="Scroll down"
        className="group absolute left-1/2 -translate-x-1/2 bottom-16 inline-flex"
      >
        <ChevronDown
          className={[
            "h-9 w-9 text-[#bfb689]/70 group-hover:text-[#bfb689] transition-colors",
            reduced ? "" : "animate-bounce",
          ].join(" ")}
        />
      </a>
    </section>
  );
}
