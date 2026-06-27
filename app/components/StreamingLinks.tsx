import Link from 'next/link';
import { FaSpotify, FaApple, FaYoutube, FaBandcamp } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';

export type StreamingLinksProps = {
  spotify?: string;
  apple?: string;
  youtube?: string;
  bandcamp?: string;
  tidal?: string;
  size?: number;
  align?: 'start' | 'center';
  className?: string;
};

export default function StreamingLinks({
  size = 32,
  align = 'center',
  className = 'my-6',
  ...links
}: StreamingLinksProps) {
  const platforms = [
    { name: 'Spotify', url: links.spotify, icon: <FaSpotify size={size} /> },
    { name: 'YouTube', url: links.youtube, icon: <FaYoutube size={size} /> },
    { name: 'Apple Music', url: links.apple, icon: <FaApple size={size} /> },
    { name: 'Tidal', url: links.tidal, icon: <SiTidal size={size} /> },
    { name: 'Bandcamp', url: links.bandcamp, icon: <FaBandcamp size={size} /> },
  ].filter(platform => platform.url);

  if (platforms.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-5 ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}>
      {platforms.map((platform) => (
        <Link
          key={platform.name}
          href={platform.url!}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#d0bd3b] transition"
          title={platform.name}
        >
          {platform.icon}
        </Link>
      ))}
    </div>
  );
}
