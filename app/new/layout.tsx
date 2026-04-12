import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Underwater",
  description:
    "Underwater — the new album by Edwards Radio. 10 tracks of alt-country and indie rock.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
