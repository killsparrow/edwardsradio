// components/Footer.tsx
import Link from 'next/link';
import { FaSpotify, FaInstagram, FaApple } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 z-50 bg-black/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-6">
          {/* Albums (left) */}
          <div className="flex items-center gap-12">
            <Link
              href="https://music.apple.com/us/artist/edwards-radio/1519077170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#d0bd3b] transition"
            >
              <FaApple size={32} />
            </Link>
            <Link
              href="https://open.spotify.com/track/507ZXeupiS82LXhAFnufHA?si=e402004ed5d346e1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#d0bd3b] transition"
            >
              <FaSpotify size={32} />
            </Link>
          </div>

          {/* Social (right) */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/evanparkermusic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#d0bd3b] transition"
            >
              <FaInstagram size={32} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}