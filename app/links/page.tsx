import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaApple, FaYoutube, FaBandcamp } from "react-icons/fa";
import { SiTidal } from "react-icons/si";

export const metadata: Metadata = {
  title: "Listen to Underwater — Edwards Radio",
  description:
    "Stream Underwater by Edwards Radio on Spotify, Apple Music, YouTube, and Bandcamp.",
  alternates: { canonical: "/links" },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: "music.album",
    url: "/links",
    title: "Listen to Underwater — Edwards Radio",
    description:
      "Stream Underwater by Edwards Radio on Spotify, Apple Music, YouTube, and Bandcamp.",
    siteName: "Edwards Radio",
    images: [
      { url: "/underwater-og.jpg", width: 1200, height: 630, alt: "Underwater — Edwards Radio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@evanparkermusic",
    title: "Listen to Underwater — Edwards Radio",
    description:
      "Stream Underwater by Edwards Radio on Spotify, Apple Music, YouTube, and Bandcamp.",
    images: ["/underwater-og.jpg"],
  },
};

const PLATFORMS = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/album/1wzVPCbhNceaLBb40yfDTq?si=G6FTvvi0R6me4GRsIp-8VQ",
    icon: FaSpotify,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/album/underwater/6783769873",
    icon: FaApple,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/playlist?list=OLAK5uy_mETfnMeMwsJmbFxOSnX3-eTNWc5uoDLE8&si=Ucc1DfHhzoHeYRiC",
    icon: FaYoutube,
  },
  {
    name: "Tidal",
    url: "https://tidal.com/artist/46892204/u",
    icon: SiTidal,
  },
  {
    name: "Bandcamp",
    url: "https://edwardsradio.bandcamp.com/album/underwater",
    icon: FaBandcamp,
  },
];

export default function LinksPage() {
  return (
    <main className="theme-underwater min-h-screen bg-[var(--color-bg-page)] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm flex flex-col items-center text-center">
        <div className="w-44 h-44 md:w-52 md:h-52 relative mb-6 border border-[var(--color-accent-gold-30)] overflow-hidden">
          <Image
            src="/2026.jpg"
            alt="Underwater album cover"
            fill
            sizes="(max-width: 768px) 176px, 208px"
            className="object-cover"
            priority
          />
        </div>

        <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--color-accent-copper)] mb-2">
          Edwards Radio
        </p>
        <h1 className="text-3xl font-bold uppercase tracking-[0.12em] text-white !mb-1">
          Underwater
        </h1>
        <p className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-accent-gold)] mb-10">
          Out Now
        </p>

        <nav
          aria-label="Listen to Underwater"
          className="w-full flex flex-col gap-3"
        >
          {PLATFORMS.map(({ name, url, icon: Icon }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 w-full px-6 py-4 border border-[var(--color-accent-gold-30)] bg-[var(--color-bg-card-solid)] text-white hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-bg-card-solid)] hover:border-[var(--color-accent-gold)] transition-colors"
            >
              <Icon size={22} className="flex-shrink-0" />
              <span className="flex-1 text-left text-sm tracking-[0.15em] uppercase">
                {name}
              </span>
              <span
                aria-hidden="true"
                className="text-[var(--color-accent-gold)] group-hover:text-[var(--color-bg-card-solid)] transition-colors"
              >
                &rarr;
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
