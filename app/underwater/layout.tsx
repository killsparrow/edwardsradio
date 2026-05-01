import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Underwater — Edwards Radio",
  description:
    "Underwater — an upcoming album by Edwards Radio.",
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

export default function UnderwaterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
