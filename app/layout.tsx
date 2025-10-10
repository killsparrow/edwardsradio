//app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Edwards Radio",
    template: "%s | Edwards Radio",
  },
  description:
    "Edwards Radio — alt-country/indie artist blending lo-fi and analog. Music, videos, and contact info.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Edwards Radio",
    description:
      "Alt-country/indie artist blending lo-fi and analog. Music, videos, and contact.",
    siteName: "Edwards Radio",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Edwards Radio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@evanparkermusic", // change if you want; or remove
    title: "Edwards Radio",
    description:
      "Alt-country/indie artist blending lo-fi and analog. Music, videos, and contact.",
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


// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mnf3rqw.css" />
      </head>
      <body className={[geistSans.variable, geistMono.variable, "antialiased"].join(" ")}>
          {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-717XZM5WPX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-717XZM5WPX');
          `}
        </Script>

        <Nav />
        {/* 👇 snap container lives here; isolates Nav/Footer */}
        <main className="h-dvh overflow-y-auto snap-y snap-mandatory">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

