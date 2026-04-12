// AlbumCard.tsx
"use client";
import React, { useRef, useState, useEffect } from 'react';
import StreamingLinks from './StreamingLinks';

// Individual album card
function AlbumCard({
  title,
  artist,
  coverImage,
  releaseDate,
  links,
  comingSoon = false,
}: {
  title: string;
  artist: string;
  coverImage: string;
  releaseDate?: string;
  links?: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    bandcamp?: string;
  };
  comingSoon?: boolean;
}) {
  return (
    <div
      className={`w-full h-full flex flex-col bg-[#24252d]/70 border border-[#494a5d]/40 overflow-hidden ${
        comingSoon ? "" : "group hover:border-[#bfb689]/40 transition-colors"
      }`}
    >
      {/* Album Cover */}
      <div className="relative aspect-square bg-[#2f303b]">
        <img
          src={coverImage}
          alt={`${title} album cover`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Album Info */}
      <div className="p-6 text-white border-t border-[#494a5d]/40 flex-1 flex flex-col">
        <div>
          <h2 className="text-base uppercase tracking-[0.15em] text-white !mb-0 !pb-0">{title}</h2>
          <div className="mt-2 mb-5 flex items-center gap-3">
            {comingSoon && (
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#bfb689] border border-[#bfb689]/50 px-2 py-1">
                Coming Soon
              </span>
            )}
            {releaseDate && (
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#bfb689]/70 !mb-0 !pt-0">
                {releaseDate}
              </p>
            )}
          </div>
        </div>

        <div className="mt-auto pt-2">
          {comingSoon ? (
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 !mb-0">
              Streaming links available at launch
            </p>
          ) : (
            links && (
              <>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                  Stream / Purchase
                </p>
                <div>
                  <StreamingLinks {...links} />
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}




// Album data
type Album = {
  title: string;
  artist: string;
  coverImage: string;
  releaseDate?: string;
  comingSoon?: boolean;
  links?: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    bandcamp?: string;
  };
};

const albums: Album[] = [
  {
    title: "Underwater",
    artist: "Edwards Radio",
    coverImage: "/2026.jpg",
    releaseDate: "2026",
    comingSoon: true,
    // Flip `comingSoon` to false at launch and uncomment links below.
    // links: {
    //   spotify: "",
    //   youtube: "",
    //   apple: "",
    //   bandcamp: "",
    // },
  },
  {
    title: "The Weight of Illusion",
    artist: "Edwards Radio",
    coverImage: "/theweightofillusion.jpg?w=600&h=600&fit=crop",
    releaseDate: "Nov 7, 2025",
    links: {
      spotify: "https://open.spotify.com/album/0NoYPQJRnnNoZ3f7MPRA2F?si=S3Cbu54PSbKsLIphFXwmnw",
      youtube: "https://www.youtube.com/watch?v=hPPAhWVmotY&list=OLAK5uy_nPsB4JATPU2l9D4dtOptunzWo8vCSb4zs",
      apple: "https://music.apple.com/us/album/the-weight-of-illusion/1848579138",
      bandcamp: "https://edwardsradio.bandcamp.com/album/the-weight-of-illusion",
    },
  },
  {
    title: "This Endless Life",
    artist: "Edwards Radio",
    coverImage: "/thisendlesslife.jpg?w=600&h=600&fit=crop",
    releaseDate: "2023",
    links: {
      spotify: "https://open.spotify.com/album/7eA89ULirGp3xJqq9N9amf?si=Feo5XnmFT-6OtGX9PhLbCg",
      apple: "https://music.apple.com/us/album/this-endless-life/1741657602",
    },
  },
  {
    title: "Feral Nights",
    artist: "Edwards Radio",
    coverImage: "/ferralnights.jpg?w=600&h=600&fit=crop",
    releaseDate: "2022",
    links: {
      spotify: "https://open.spotify.com/album/3rwADCagSmCnPFoC4a8WFB?si=N3cP8wgzTBCABbfqDTIJcw",
      apple: "https://music.apple.com/us/album/feral-nights/1738992532",
    },
  },
];

// Main page component
export default function MusicPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth + 4);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="w-full mx-auto py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#a0633b] mb-4">
            Discography
          </p>
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.15em] text-white !mb-0">
            Releases
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Edwards Radio</span>
            <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 items-stretch"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {albums.map((album, index) => (
              <div
                key={index}
                className="w-[85vw] sm:w-[60vw] md:w-[calc(33.333%-1.5rem)] flex-shrink-0 snap-start"
              >
                <AlbumCard {...album} />
              </div>
            ))}
          </div>

          {/* Right edge fade hint */}
          {canScroll && (
            <div
              className="absolute right-0 top-0 bottom-4 w-16 pointer-events-none"
              aria-hidden="true"
              style={{
                background: "linear-gradient(to right, transparent, #24252d)",
              }}
            />
          )}
        </div>

        {canScroll && (
          <p className="text-center mt-4 text-[10px] uppercase tracking-[0.4em] text-[#bfb689]/70">
            Scroll for more &rarr;
          </p>
        )}
      </div>
    </div>
  );
}