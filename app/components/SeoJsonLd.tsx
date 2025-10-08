"use client";
import Head from "next/head";

export default function SeoJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.edwardsradio.com";
  const imageUrl = `${siteUrl}/og.jpg`;

  // 🎵 Albums
  const albums = [
    {
      name: "Feral Nights",
      releaseDate: "2022-04-15",
      description:
        "Edwards Radio’s debut album blending lo-fi indie and Americana tones — raw, melodic, and intimate.",
    },
    {
      name: "This Endless Life",
      releaseDate: "2023-08-11",
      description:
        "A collection of folk-leaning songs with analog warmth and reflective lyricism.",
    },
    {
      name: "The Weight of Illusion",
      releaseDate: "2025-11-07",
      description:
        "Lyric-driven, analog-leaning indie folk recorded in Florida — spacious, intimate, and handmade.",
    },
  ];

  // 🧠 JSON-LD schema: Person + MusicGroup + Albums
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Person / Artist Entity (merged from your original)
      {
        "@type": ["Person", "MusicGroup"],
        "@id": `${siteUrl}#artist`,
        name: "Edwards Radio",
        alternateName: "Evan Parker",
        jobTitle: "Musician",
        url: siteUrl,
        image: imageUrl,
        genre: ["Folk", "Indie", "Alt-Country"],
        sameAs: [
          "https://www.instagram.com/evanparkermusic/",
          "https://edwardsradio.bandcamp.com/",
          "https://music.apple.com/us/artist/edwards-radio/1519077170",
          "https://open.spotify.com/artist/your-spotify-id",
        ],
      },
      // Albums
      ...albums.map((album) => ({
        "@type": "MusicAlbum",
        "@id": `${siteUrl}/#${album.name.replace(/\s+/g, "-").toLowerCase()}`,
        name: album.name,
        byArtist: { "@id": `${siteUrl}#artist` },
        url: siteUrl,
        image: imageUrl,
        datePublished: album.releaseDate,
        description: album.description,
        inLanguage: "en-US",
        genre: ["Folk", "Indie", "Alt-Country"],
      })),
    ],
  };

  return (
    <Head>
      {/* Primary meta */}
      <title>Edwards Radio – The Weight of Illusion</title>
      <meta
        name="description"
        content="Edwards Radio (Evan Parker) crafts lyric-driven indie-folk songs with analog warmth. Explore Feral Nights, This Endless Life, and The Weight of Illusion."
      />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="music.musician" />
      <meta property="og:title" content="Edwards Radio – The Weight of Illusion" />
      <meta
        property="og:description"
        content="Lyric-driven indie-folk with analog warmth. Listen to Feral Nights, This Endless Life, and The Weight of Illusion."
      />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Edwards Radio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Edwards Radio – The Weight of Illusion" />
      <meta
        name="twitter:description"
        content="Edwards Radio (Evan Parker) – lyric-driven, analog-leaning indie-folk from Florida."
      />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
      />
    </Head>
  );
}
