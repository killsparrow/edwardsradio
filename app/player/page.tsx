import MusicPlayer from '../components/MusicPlayer';
import { underwaterSongs } from '@/lib/songs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music Player | Edwards Radio',
  description: 'Listen to music from Edwards Radio',
  robots: {
    index: false,
    follow: false,
  },
};

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
      <MusicPlayer songs={underwaterSongs} />
    </main>
  );
}
