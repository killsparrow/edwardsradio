// components/Footer.tsx
'use client';

import Link from 'next/link';
import { FaSpotify, FaInstagram, FaApple } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isUnderwater = pathname === '/underwater';

  return (
    <footer className={`fixed bottom-0 inset-x-0 z-50 ${
      isUnderwater
        ? 'bg-[#24252d]/80 backdrop-blur-md border-t border-[#494a5d]/30'
        : 'bg-black/60'
    }`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`flex items-center justify-between gap-6 ${isUnderwater ? 'h-14' : 'h-16'}`}>
          {/* Streaming (left) */}
          <div className="flex items-center gap-12">
            <Link
              href="https://music.apple.com/us/artist/edwards-radio/1519077170"
              target="_blank"
              rel="noopener noreferrer"
              className={isUnderwater
                ? 'text-white/50 hover:text-[#bfb689] transition'
                : 'text-white hover:text-[#d0bd3b] transition'
              }
            >
              <FaApple size={isUnderwater ? 22 : 32} />
            </Link>
            <Link
              href="https://open.spotify.com/track/507ZXeupiS82LXhAFnufHA?si=e402004ed5d346e1"
              target="_blank"
              rel="noopener noreferrer"
              className={isUnderwater
                ? 'text-white/50 hover:text-[#bfb689] transition'
                : 'text-white hover:text-[#d0bd3b] transition'
              }
            >
              <FaSpotify size={isUnderwater ? 22 : 32} />
            </Link>
          </div>

          {/* Social (right) */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/evanparkermusic/"
              target="_blank"
              rel="noopener noreferrer"
              className={isUnderwater
                ? 'text-white/50 hover:text-[#bfb689] transition'
                : 'text-white hover:text-[#d0bd3b] transition'
              }
            >
              <FaInstagram size={isUnderwater ? 22 : 32} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
