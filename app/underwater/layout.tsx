import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Underwater",
  description:
    "Underwater — the new album by Edwards Radio. 10 tracks of alt-country and indie rock. Listen, stream, and read the lyrics.",
  openGraph: {
    type: "music.album",
    url: "/underwater",
    title: "Underwater — Edwards Radio",
    description:
      "The new album by Edwards Radio. 10 tracks of alt-country and indie rock.",
    images: [{ url: "/2026.jpg", width: 1200, height: 1200, alt: "Underwater album art — Edwards Radio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Underwater — Edwards Radio",
    description:
      "The new album by Edwards Radio. 10 tracks of alt-country and indie rock.",
    images: ["/2026.jpg"],
  },
  alternates: { canonical: "/underwater" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicAlbum",
  name: "Underwater",
  byArtist: {
    "@type": "MusicGroup",
    name: "Edwards Radio",
    url: "https://edwardsradio.com",
  },
  datePublished: "2026",
  numTracks: 10,
  genre: ["Alt-Country", "Indie Rock"],
  image: "https://edwardsradio.com/2026.jpg",
  track: [
    { "@type": "MusicRecording", name: "Billboard", position: 1 },
    { "@type": "MusicRecording", name: "Billboard-B", position: 2 },
    { "@type": "MusicRecording", name: "At the Table", position: 3 },
    { "@type": "MusicRecording", name: "Underwater", position: 4 },
    { "@type": "MusicRecording", name: "Dark Side", position: 5 },
    { "@type": "MusicRecording", name: "Professor", position: 6 },
    { "@type": "MusicRecording", name: "Cold and Dreary", position: 7 },
    { "@type": "MusicRecording", name: "Only You", position: 8 },
    { "@type": "MusicRecording", name: "Oliver at the Bridge", position: 9 },
    { "@type": "MusicRecording", name: "St George", position: 10 },
  ],
};

export default function UnderwaterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
