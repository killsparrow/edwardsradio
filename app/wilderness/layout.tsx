import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wilderness — Edwards Radio",
  description:
    "Wilderness — an album by Edwards Radio. Lo-fi, home-recorded indie folk.",
  robots: {
    index: true,
    follow: true,
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
