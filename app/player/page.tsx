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
    title: 'billboard',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/billboard.mp3',
  },
    {
    id: 2,
    title: 'at the table',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/at-the-table.mp3',
  },
    {
    id: 3,
    title: 'underwater',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/underwater.mp3',
  },
    {
    id: 4,
    title: 'dark side',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/i-fell-in-love.mp3',
  },
      {
    id: 5,
    title: 'only you',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/only-you.mp3',
  },
     {
    id: 6,
    title: 'professor',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/professor.mp3',
  },
          {
    id: 7,
    title: 'carry on dawn',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/carry-on-dawn.mp3',
  },
             {
    id: 8,
    title: 'oliver at the bridge',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/at-the-bridge.mp3',
  },


      {
    id: 9,
    title: 'cold and dreary',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/cold-and-dreary.mp3',
  },

  //      {
  //   id: 9,
  //   title: 'west of texas',
  //   artist: 'Edwards Radio',
  //   album: 'Underwater',
  //   albumArt: '/2026.jpg',
  //   audioUrl: '/music/2026/west-of-texas.mp3',
  // },

  //  {
  //   id: 8,
  //   title: 'unforgiven',
  //   artist: 'Edwards Radio',
  //   album: 'Underwater',
  //   albumArt: '/2026.jpg',
  //   audioUrl: '/music/2026/unforgiven.mp3',
  // },
  //      {
  //   id: 9,
  //   title: 'west of texas',
  //   artist: 'Edwards Radio',
  //   album: 'Underwater',
  //   albumArt: '/2026.jpg',
  //   audioUrl: '/music/2026/west-of-texas.mp3',
  // },
];

export default function PlayerPage() {
  return (
    <main
      className="min-h-screen py-20 px-4 font-sans relative"
      style={{
        backgroundColor: 'black',
        // backgroundImage: 'url(/bottom-whale.png)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: '100% auto',
        // backgroundPosition: 'bottom center',
      }}
    >
      <MusicPlayer songs={songs} />
    </main>
  );
}
