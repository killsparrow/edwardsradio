export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  audioUrl: string;
  duration?: string;
}

export const underwaterSongs: Song[] = [
  {
    id: 1,
    title: 'billboard',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/billboard.m4a',
  },
    {
    id: 11,
    title: 'billboard 2',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/billboard15a.m4a',
  },
  {
    id: 2,
    title: 'at the table',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/at-the-table.m4a',
  },
  {
    id: 3,
    title: 'underwater',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/underwater.m4a',
  },
  {
    id: 4,
    title: 'dark side',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/i-fell-in-love.m4a',
  },
  {
    id: 5,
    title: 'only you',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/only-you.m4a',
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
    title: 'cold and dreary',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/cold-and-dreary.mp3',
  },
    {
    id: 8,
    title: 'song of the damned',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/the-same-cheese.m4a',
  },
    {
    id: 9,
    title: 'oliver at the bridge',
    artist: 'Edwards Radio',
    album: 'Underwater',
    albumArt: '/2026.jpg',
    audioUrl: '/music/2026/at-the-bridge.mp3',
  },
];
