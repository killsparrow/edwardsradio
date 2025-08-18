// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 z-50 bg-black/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-6">
          {/* Albums (left) */}
          <div className="flex items-center gap-4">
            <a
              href="https://music.apple.com/us/artist/edwards-radio/1519077170"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex"
            >
              <img src="/apple-music-white.gif" alt="Apple Music" className="h-8 w-auto" />
            </a>
            <a
              href="https://open.spotify.com/album/1AlZ78Yf8rnRN8q3HflC5l?si=zYjWEdIiRDue7xdTT-81lg"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex"
            >
              <img src="/spotify.png" alt="Spotify" className="h-8 w-auto" />
            </a>
          </div>

          {/* Social (right) */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/evanparkermusic/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex"
            >
              <img src="/instagram.gif" alt="Instagram" className="h-8 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
