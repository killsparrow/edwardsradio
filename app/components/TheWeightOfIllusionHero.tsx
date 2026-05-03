// TheWeightOfIllusionHero.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import WeightofIllusion from "./WeightofIllusion";
import StreamingLinks from "./StreamingLinks";

export default function TheWeightOfIllusionHero() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return (
    <section id="weight-of-illusion" className="relative min-h-dvh snap-start" aria-label="The Weight of Illusion">
      {/* Background */}
      <div className="kb-wrap absolute inset-0 overflow-hidden">
        <Image
          src="/flower.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`kb-img object-cover ${reduced ? "kb-paused" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
      </div>

      {/* Foreground */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-8 flex flex-col justify-center min-h-dvh items-center">
        <img
          src="/logo.svg"
          alt="Edwards Radio"
          className="block w-[280px] md:w-[320px] h-auto mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-semibold">The Weight of Illusion</h1>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-white/90">
          Alt-country / indie with lo-fi edges and analog heart.
        </p>

        <WeightofIllusion />
    
        
        {/* Social Links */}
        <div className="mt-6">
          <StreamingLinks
            spotify="https://open.spotify.com/album/0NoYPQJRnnNoZ3f7MPRA2F?si=S3Cbu54PSbKsLIphFXwmnw"
            youtube="https://www.youtube.com/watch?v=hPPAhWVmotY&list=OLAK5uy_nPsB4JATPU2l9D4dtOptunzWo8vCSb4zs"
            apple="https://music.apple.com/us/album/the-weight-of-illusion/1848579138"
            bandcamp="https://edwardsradio.bandcamp.com/album/the-weight-of-illusion"
          />
        </div>

        {/* AIAPS Protection */}
        <section aria-label="AI audio protection" className="w-full max-w-md mx-auto text-center mt-10">
          <div className="border border-[#494a5d]/50 p-6 md:p-7 bg-black/30 backdrop-blur-sm">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#a0633b] mb-3 !text-[10px]">
              AIAPS-Protected
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Unauthorized AI training prohibited.
            </p>
            <a
              href="https://www.aiaps-standard.org/artist/edwards-radio"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block text-[11px] tracking-[0.15em] text-[#bfb689] border border-[#bfb689]/40 px-6 py-2 hover:bg-[#bfb689] hover:text-[#24252d] transition-all break-all"
            >
              www.aiaps-standard.org/artist/edwards-radio
            </a>
          </div>
        </section>

      </div>

      {/* Ken Burns styles */}
      <style jsx global>{`
        :root { --kb-duration: 20s; --kb-scale-start: 1.00; --kb-scale-end: 1.25; }
        .kb-wrap { backface-visibility: hidden; }
        .kb-img {
          will-change: transform;
          transform-origin: center center;
          animation: kenburns var(--kb-duration) ease-in-out infinite alternate;
        }
        .kb-paused { animation: none !important; transform: none !important; }
        @keyframes kenburns {
          0%   { transform: scale(var(--kb-scale-start)) translate3d(0%, 0%, 0); }
          100% { transform: scale(var(--kb-scale-end))   translate3d(2%, -2%, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .kb-img { animation: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}