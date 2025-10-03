"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import WeightofIllusion from "./WeightofIllusion";

export default function Hero() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return (
    <section id="home" className="relative min-h-dvh snap-start" aria-label="Home">
      {/* Background */}
      <div className="kb-wrap absolute inset-0 -z-10 overflow-hidden">
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
        <p className="mt-4 max-w-[60ch] leading-relaxed text-white/90">
        Full Album release November 7, 2025.
        </p>
      </div>

      <a
        href="#music"
        aria-label="Scroll to Music"
        className="group absolute left-1/2 -translate-x-1/2 bottom-16 inline-flex"
      >
        <ChevronDown className={["h-9 w-9 text-white/90", reduced ? "" : "animate-bounce"].join(" ")} />
      </a>

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
