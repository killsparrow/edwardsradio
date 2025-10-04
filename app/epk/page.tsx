// app/epk/page.tsx
// Next.js 15-ready hidden EPK page (server component only)
// - Unlisted (noindex, nofollow)
// - Optional access key via ?k=SECRET or NEXT_PUBLIC_EPK_KEY
// - Clean, printable layout with stream/download links, credits, bios, and photos
// NOTE: This version removes client hooks to fix the error you saw. If you want copy-to-clipboard buttons, I'll provide a tiny client component separately.

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edwards Radio — EPK (Private)",
  description: "Private press kit for an upcoming Edwards Radio single.",
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: "Edwards Radio — Private EPK",
    description:
      "Private press kit with stream, downloads, credits, bios, and artwork.",
    type: "website",
  },
};

// ======== CONTENT (edit this) ========
const EPK_CONTENT = {
  artist: "Edwards Radio",
  albumTitle: "The Weight of Illusion",
  albumReleaseDate: "Friday, November 7, 2025",
  
  // Singles
  singles: [
    {
      title: "The Weight of Illusion",
      releaseDate: "Friday, October 10, 2025",
      bpm: "170",
      key: "D",
      isrc: "QT3F72597193",
    },
    {
      title: "Goodbye May",
      releaseDate: "Friday, October 17, 2025",
      bpm: "160",
      key: "A", 
      isrc: "Unavailable",
    },
  ],
  
  ffo: ["Sparklehorse", "Watchhouse", "Jeff Tweedy", "Will Johnson"],
  genreMood: "indie folk, warm, unguarded",
  shortBlurb:
    "Edwards Radio is Evan Parker. His debut album The Weight of Illusion delivers lyric-driven songs with restrained production—intimate vocals, spacious guitars, and measured arrangements. Recorded and mixed in Florida by Parker; mastered for digital release.",
  longStory:
    "All songs are written and recorded at home. DIY is central to the project—minimal sheen, no added polish. Using analog gear alongside a simple DAW setup, Evan Parker captures raw, usable takes with minimal effects and mixing. Drawing from influences like John Prine, Watchhouse, Sparklehorse, and Will Johnson, the songs move between plainspoken folk-country storytelling and atmospheric indie textures. Vocals stay upfront; production leaves space and imperfection intact. These songs translate directly to solo acoustic performance, underscoring that the recordings reflect the material rather than obscure it. In a landscape of glossy marketing and hyper-real sound, The Weight of Illusion takes a different path.",
  credits:
    "Writing, performance, recording, mixing, and mastering by Evan Parker (Edwards Radio).",
  coverArtUrl: "/download/theweightofillusion.jpg",
  privateStream:
    "https://edwardsradio.bandcamp.com/album/the-weight-of-illusion",
  downloadsFolder: "/download/edwards-radio.zip",
  contact: {
    email: "parkerevan@icloud.com",
    website: "https://www.edwardsradio.com",
    instagram: "https://www.instagram.com/evanparkermusic",
  },
  embargoNote: "For review only. Please don't publish before release dates.",
  bios: {
    short75:
      "Edwards Radio is Florida songwriter Evan Parker. He records at home with a small setup—folksongs meet indie atmosphere, vocals upfront, space intact. The music is DIY by design: written, performed, mixed, and mastered solo, with minimal polish. Simple takes, analog warmth, honest lyrics. If you want small, human songs without the sheen, start here.",
    long150:
      "Edwards Radio is Evan Parker, a DIY songwriter recording at home in Florida. These songs exist between folk storytelling and indie texture—vocals upfront, plenty of space, edges left visible. Parker writes, plays, records, mixes, and masters everything himself, working with a simple DAW and select analog gear. The approach is straightforward: capture a take that feels true, then resist the urge to overwork it. The result is warm, unguarded, and rough around the edges—in a way that feels alive.",
  },
  images: ["/evan-parker1.jpg", "/evan-parker2.jpg", "/evan-parker3.jpg"],
  files: {
    wav: "", // direct WAV link
    mp3: "", // direct MP3 link
    lyricsPdf: "", // direct PDF link
    coverArt: "", // direct cover art link
  },
};

const ACCESS_KEY = process.env.NEXT_PUBLIC_EPK_KEY || "";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide">
      {children}
    </span>
  );
}

function Section({
  title,
  children,
  aside,
}: {
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 md:p-8 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="text-lg md:text-xl font-semibold tracking-tight">
          {title}
        </h2>
        {aside}
      </div>
      <div className="prose prose-invert max-w-none text-sm leading-7">
        {children}
      </div>
    </section>
  );
}

function ActionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
    >
      {children}
    </Link>
  );
}

// ======== PAGE (Server component) ========
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const s = await searchParams; // Next.js 15: await params/searchParams
  const providedKey =
    typeof s.k === "string" ? s.k : Array.isArray(s.k) ? s.k[0] : "";
  const gateOk = !ACCESS_KEY || providedKey === ACCESS_KEY;

  if (!gateOk) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center text-white">
        <h1 className="text-2xl font-semibold">Private EPK</h1>
        <p className="mt-3 text-sm text-white/70">
          Access key required. Append <code>?k=YOURKEY</code> to the URL.
        </p>
      </main>
    );
  }

  const c = EPK_CONTENT;

  return (
    <div className="min-h-screen bg-[#111] text-white my-12">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
        {/* Header */}
        <header className="mb-8 md:mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Badge>EPK • Private</Badge>
            </div>
          </div>
          <h1 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight">
            {c.artist}
          </h1>
          <p className="mt-2 text-white/80">
            <span className="font-medium">Album:</span> {c.albumTitle}
            <br />
            <span className="font-medium">Album Release:</span>{" "}
            {c.albumReleaseDate}
          </p>
          
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-white/60">Singles:</p>
            {c.singles.map((single, i) => (
              <p key={i} className="text-sm text-white/70">
                {single.title} — {single.releaseDate}
              </p>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/80">
            <span className="rounded-lg bg-white/5 px-3 py-1">
              FFO: {c.ffo.join(", ")}
            </span>
            <span className="rounded-lg bg-white/5 px-3 py-1">
              Genre/Mood: {c.genreMood}
            </span>
          </div>

          {/* Primary actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            {c.privateStream && (
              <ActionLink href={c.privateStream}>🎧 Private Stream</ActionLink>
            )}
            {c.downloadsFolder && (
              <ActionLink href={c.downloadsFolder}>
                ⬇️ Downloads (MP3/Cover/Photos)
              </ActionLink>
            )}
            {c.coverArtUrl && (
              <ActionLink href={c.coverArtUrl}>
                🖼️ 3000×3000 Cover Art
              </ActionLink>
            )}
          </div>
        </header>

        {/* Top layout: artwork + fast facts */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8">
          <div className="md:col-span-2">
            {/* If you have single cover art locally, swap to next/image */}
            {c.coverArtUrl ? (
              <a href={c.coverArtUrl} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  {/* Display external cover as plain img to avoid domain issues */}
                  <img
                    src={c.coverArtUrl}
                    alt="Cover art"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </a>
            ) : (
              <div className="aspect-square w-full rounded-2xl border border-white/10 bg-zinc-800/50" />
            )}
          </div>

          <div className="md:col-span-3 grid gap-6">
            <Section
              title="Short blurb"
              aside={
                <span className="text-xs text-white/50">(Select and copy)</span>
              }
            >
              <p>{c.shortBlurb}</p>
            </Section>

            <Section
              title="Longer story"
              aside={
                <span className="text-xs text-white/50">(Select and copy)</span>
              }
            >
              <p>{c.longStory}</p>
            </Section>
          </div>
        </div>

        {/* Details */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Section title="Credits">
            <p>{c.credits}</p>
          </Section>
          <Section title="Track details">
            <div className="space-y-4">
              {c.singles.map((single, i) => (
                <div key={i}>
                  <p className="font-medium text-white/90 mb-1">{single.title}</p>
                  <ul className="m-0 list-none p-0 text-sm pl-4">
                    <li>
                      <span className="text-white/60">Release:</span> {single.releaseDate}
                    </li>
                    {single.bpm && (
                      <li>
                        <span className="text-white/60">BPM:</span> {single.bpm}
                      </li>
                    )}
                    {single.key && (
                      <li>
                        <span className="text-white/60">Key:</span> {single.key}
                      </li>
                    )}
                    {single.isrc && (
                      <li>
                        <span className="text-white/60">ISRC:</span> {single.isrc}
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Contact">
            <ul className="m-0 list-none p-0 text-sm">
              <li>
                <span className="text-white/60">Email:</span>{" "}
                <Link
                  href={`mailto:${c.contact.email}`}
                  className="underline decoration-white/20 underline-offset-4 hover:decoration-white"
                >
                  {c.contact.email}
                </Link>
              </li>
              <li>
                <span className="text-white/60">Website:</span>{" "}
                <Link
                  href={c.contact.website}
                  target="_blank"
                  className="underline decoration-white/20 underline-offset-4 hover:decoration-white"
                >
                  {c.contact.website}
                </Link>
              </li>
              <li>
                <span className="text-white/60">Instagram:</span>{" "}
                <Link
                  href={c.contact.instagram}
                  target="_blank"
                  className="underline decoration-white/20 underline-offset-4 hover:decoration-white"
                >
                  {c.contact.instagram}
                </Link>
              </li>
            </ul>
          </Section>
        </div>

        {/* Optional direct files */}
        {(c.files.wav ||
          c.files.mp3 ||
          c.files.lyricsPdf ||
          c.files.coverArt) && (
          <div className="mt-8">
            <Section title="Individual files">
              <div className="flex flex-wrap gap-3">
                {c.files.wav && <ActionLink href={c.files.wav}>WAV</ActionLink>}
                {c.files.mp3 && <ActionLink href={c.files.mp3}>MP3</ActionLink>}
                {c.files.lyricsPdf && (
                  <ActionLink href={c.files.lyricsPdf}>Lyrics PDF</ActionLink>
                )}
                {c.files.coverArt && (
                  <ActionLink href={c.files.coverArt}>Cover Art</ActionLink>
                )}
              </div>
            </Section>
          </div>
        )}

        {/* Bios */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Section
            title="Artist bio — 75 words"
            aside={
              <span className="text-xs text-white/50">(Select and copy)</span>
            }
          >
            <p>{c.bios.short75}</p>
          </Section>
          <Section
            title="Artist bio — 150 words"
            aside={
              <span className="text-xs text-white/50">(Select and copy)</span>
            }
          >
            <p>{c.bios.long150}</p>
          </Section>
        </div>

        {/* Gallery */}
        {c.images?.length ? (
          <div className="mt-8">
            <Section title="Press photos">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.images.map((src, i) => (
                  <Link
                    key={i}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <Image
                        src={src}
                        alt={`Edwards Radio press photo ${i + 1}`}
                        width={1200}
                        height={800}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </Section>
          </div>
        ) : null}

        {/* Embargo */}
        {/* {c.embargoNote && (
          <div className="mt-8">
            <Section title="Embargo">
              <p className="text-amber-300/90">{c.embargoNote}</p>
            </Section>
          </div>
        )} */}

        {/* Footer */}
        <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Edwards Radio</div>
          </div>
        </footer>
      </div>
    </div>
  );
}