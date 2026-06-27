import type { Metadata } from "next";

const TITLE = "Underwater — Edwards Radio";
const DESCRIPTION =
  "Underwater — the fourth album from Edwards Radio. Lyric-driven indie folk with analog warmth, recorded and mixed at home.";
const COVER = "/underwater-og.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/underwater" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "music.album",
    url: "/underwater",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Edwards Radio",
    images: [
      { url: COVER, width: 1200, height: 630, alt: "Underwater — Edwards Radio" },
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

export default function UnderwaterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
