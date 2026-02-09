import Link from 'next/link';
import { FaSpotify, FaApple, FaYoutube, FaBandcamp } from 'react-icons/fa';

export type StreamingLinksProps = {
  spotify?: string;
  apple?: string;
  youtube?: string;
  bandcamp?: string;
};

export default function StreamingLinks(links: StreamingLinksProps) {
  const platforms = [
    { name: 'Spotify', url: links.spotify, icon: <FaSpotify size={32} /> },
    { name: 'YouTube', url: links.youtube, icon: <FaYoutube size={32} /> },
    { name: 'Apple Music', url: links.apple, icon: <FaApple size={32} /> },
    { name: 'Bandcamp', url: links.bandcamp, icon: <FaBandcamp size={32} /> },
  ].filter(platform => platform.url);

  if (platforms.length === 0) return null;

  return (
    <div className="flex gap-6 my-6">
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
