import type { Metadata } from "next";

const TITLE = "The Weight of Illusion — Edwards Radio";
const DESCRIPTION =
  "The Weight of Illusion — an album by Edwards Radio. Lyric-driven, analog-leaning indie folk — spacious, intimate, and handmade.";
const COVER = "/theweightofillusion.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/the-weight-of-illusion" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "music.album",
    url: "/the-weight-of-illusion",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Edwards Radio",
    images: [
      { url: COVER, width: 800, height: 800, alt: "The Weight of Illusion album cover" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@evanparkermusic",
    title: TITLE,
    description: DESCRIPTION,
    images: [COVER],
  },
};

export default function TheWeightOfIllusionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
