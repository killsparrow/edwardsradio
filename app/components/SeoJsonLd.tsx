export default function SeoJsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.edwardsradio.com";
  const imageUrl = `${siteUrl}/og.jpg`;

  const albums = [
    {
      name: "Feral Nights",
      slug: "feral-nights",
      releaseDate: "2022-04-15",
      image: `${siteUrl}/ferralnights.jpg`,
      description:
        "Edwards Radio's debut album blending lo-fi indie and Americana tones — raw, melodic, and intimate.",
    },
    {
      name: "This Endless Life",
      slug: "this-endless-life",
      releaseDate: "2023-08-11",
      image: `${siteUrl}/thisendlesslife.jpg`,
      description:
        "A collection of folk-leaning songs with analog warmth and reflective lyricism.",
    },
    {
      name: "The Weight of Illusion",
      slug: "the-weight-of-illusion",
      releaseDate: "2025-11-07",
      image: `${siteUrl}/theweightofillusion.jpg`,
      description:
        "Lyric-driven, analog-leaning indie folk — spacious, intimate, and handmade.",
    },
    {
      name: "Underwater",
      slug: "underwater",
      releaseDate: "2026",
      image: `${siteUrl}/2026.jpg`,
      description:
        "The upcoming fourth album from Edwards Radio. Lyric-driven indie folk with analog warmth — coming 2026.",
    },
  ];

  const faq = [
    {
      q: "Who is Edwards Radio?",
      a: "Edwards Radio is the indie folk project of songwriter Evan Parker. Parker writes, records, and produces the music in his home studio, blending folk sincerity with indie rock textures.",
    },
    {
      q: "When is the new album Underwater coming out?",
      a: "Underwater is the upcoming fourth album from Edwards Radio, scheduled for release in 2026.",
    },
    {
      q: "How many albums has Edwards Radio released?",
      a: "Edwards Radio has released three full-length albums: Feral Nights (2022), This Endless Life (2023), and The Weight of Illusion (2025). A fourth album, Underwater, is coming in 2026.",
    },
    {
      q: "What genre is Edwards Radio?",
      a: "Edwards Radio's music sits between folk, indie rock, and alt-country, with a lo-fi, analog-leaning production style.",
    },
    {
      q: "Where can I listen to Edwards Radio?",
      a: "Edwards Radio is available on Spotify, Apple Music, YouTube, and Bandcamp. Direct links are at edwardsradio.com.",
    },
    {
      q: "Who writes and produces Edwards Radio's music?",
      a: "All Edwards Radio music is written, recorded, mixed, and produced by Evan Parker in his home studio.",
    },
    {
      q: "Is Edwards Radio's music protected from AI training?",
      a: "Yes. All Edwards Radio audio is protected under the AIAPS Standard, an open framework that safeguards music from unauthorized AI training and reproduction.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Edwards Radio",
        description:
          "Official site of Edwards Radio (Evan Parker) — indie folk artist with lyric-driven, analog-leaning songs.",
        publisher: { "@id": `${siteUrl}#artist` },
        inLanguage: "en-US",
      },
      {
        "@type": ["Person", "MusicGroup"],
        "@id": `${siteUrl}#artist`,
        name: "Edwards Radio",
        alternateName: "Evan Parker",
        jobTitle: "Musician, Songwriter, Producer",
        description:
          "Edwards Radio is the indie folk project of songwriter Evan Parker. Parker writes, records, and produces all material in his home studio.",
        url: siteUrl,
        image: imageUrl,
        foundingDate: "2022",
        genre: ["Folk", "Indie", "Alt-Country", "Indie Folk", "Lo-Fi"],
        memberOf: {
          "@type": "MusicGroup",
          name: "Edwards Radio",
        },
        sameAs: [
          "https://www.instagram.com/evanparkermusic/",
          "https://edwardsradio.bandcamp.com/",
          "https://music.apple.com/us/artist/edwards-radio/1519077170",
          "https://open.spotify.com/artist/2rHb13sKpZjRPoBEkiRah5?si=j24WCIFaRD2_9TIOJktIUA",
        ],
        album: albums.map((a) => ({ "@id": `${siteUrl}#${a.slug}` })),
      },
      ...albums.map((album) => ({
        "@type": "MusicAlbum",
        "@id": `${siteUrl}#${album.slug}`,
        name: album.name,
        byArtist: { "@id": `${siteUrl}#artist` },
        url: siteUrl,
        image: album.image,
        datePublished: album.releaseDate,
        description: album.description,
        inLanguage: "en-US",
        genre: ["Folk", "Indie", "Alt-Country", "Indie Folk"],
      })),
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
