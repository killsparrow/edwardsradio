// components/SeoJsonLd.tsx
export default function SeoJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Edwards Radio',
    alternateName: 'Evan Parker',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    sameAs: [
      'https://www.instagram.com/evanparkermusic/',
      'https://edwardsradio.bandcamp.com/',
      'https://music.apple.com/us/artist/edwards-radio/1519077170',
      // add Spotify artist URL if you like
    ],
    jobTitle: 'Musician',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
