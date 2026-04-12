// components/Footer.tsx
'use client';

import Link from 'next/link';
import { FaSpotify, FaInstagram, FaApple } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 z-50 bg-[#24252d]/80 backdrop-blur-md border-t border-[#494a5d]/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 h-14">
          <div className="flex items-center gap-12">
            <Link
              href="https://music.apple.com/us/artist/edwards-radio/1519077170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#bfb689] transition"
            >
              <FaApple size={22} />
            </Link>
            <Link
              href="https://open.spotify.com/track/507ZXeupiS82LXhAFnufHA?si=e402004ed5d346e1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#bfb689] transition"
            >
              <FaSpotify size={22} />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/evanparkermusic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#bfb689] transition"
            >
              <FaInstagram size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
