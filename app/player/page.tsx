import MusicPlayer, { Song } from '../components/MusicPlayer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music Player | Edwards Radio',
  description: 'Listen to music from Edwards Radio',
  robots: {
    index: false,
    follow: false,
  },
};

// Example song data - Replace with your actual songs
const songs: Song[] = [
  {
    id: 1,
    title: 'I Fell in Love',
    artist: 'Edwards Radio',
    album: 'Untitled',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/i-fell-in-love.mp3',
  },
  {
    id: 2,
    title: 'Cold and Dreary',
    artist: 'Edwards Radio',
    album: 'Untitled',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/cold-and-dreary.mp3',
  },
  // Add more songs here
];

export default function PlayerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black py-20 px-4">
      <MusicPlayer songs={songs} />
    </main>
  );
}
