import type { Metadata } from "next";

const TITLE = "Wilderness — Edwards Radio";
const DESCRIPTION =
  "Wilderness — an EP by Edwards Radio. Lo-fi, home-recorded indie folk. Out May 1, 2026.";
const COVER = "/wilderness-album-cover.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/wilderness" },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "music.album",
    url: "/wilderness",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Edwards Radio",
    images: [
      { url: COVER, width: 1500, height: 1500, alt: "Wilderness album cover" },
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

export default function WildernessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/fes0wtv.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap"
      />
      {children}
    </>
  );
}
