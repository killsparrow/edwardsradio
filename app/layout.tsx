//app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import AudioProvider from "./providers/AudioProvider";
import MiniPlayer from "./components/MiniPlayer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Edwards Radio — Underwater (Coming 2026)",
    template: "%s | Edwards Radio",
  },
  description:
    "Edwards Radio (Evan Parker) — lyric-driven indie folk with analog warmth. New album Underwater coming 2026. Stream The Weight of Illusion, This Endless Life, and Feral Nights.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Edwards Radio — Underwater (Coming 2026)",
    description:
      "New album Underwater coming 2026. Lyric-driven indie folk with analog warmth from Edwards Radio.",
    siteName: "Edwards Radio",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Edwards Radio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@evanparkermusic",
    title: "Edwards Radio — Underwater (Coming 2026)",
    description:
      "New album Underwater coming 2026. Lyric-driven indie folk with analog warmth.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/roi4zgt.css" />
      </head>
      <body className="antialiased">
        <AudioProvider>
          <Nav />
          {/* 👇 snap container lives here; isolates Nav/Footer */}
          <main className="h-dvh overflow-y-auto snap-y snap-mandatory">
            {children}
          </main>
          <MiniPlayer />
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}

