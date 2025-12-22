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
    title: 'Under Water',
    artist: 'Edwards Radio',
    album: 'Untitled',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/1_underwater.mp3',
  },
    {
    id: 2,
    title: 'Cold and Dreary',
    artist: 'Edwards Radio',
    album: 'Untitled',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/2_cold-and-dreary.mp3',
  },
  {
    id: 3,
    title: 'Dark Side',
    artist: 'Edwards Radio',
    album: 'Untitled',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/3_i-fell-in-love.mp3',
  },
   {
    id: 4,
    title: 'The Same Cheese',
    artist: 'Edwards Radio',
    album: 'Untitled',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/4_the-sae-cheese.mp3',
  },
     {
    id: 4,
    title: 'Professor',
    artist: 'Edwards Radio',
    album: 'Untitled',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/5_professor.mp3',
  },
  // Add more songs here
];

export default function PlayerPage() {
  return (
    <main
      className="min-h-screen py-20 px-4 font-sans relative"
      style={{
        backgroundColor: 'black',
        backgroundImage: 'url(/bottom-whale.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundPosition: 'bottom center',
      }}
    >
      <MusicPlayer songs={songs} />
    </main>
  );
}
