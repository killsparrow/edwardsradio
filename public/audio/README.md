# Audio Files Directory

Place your audio files (MP3, WAV, etc.) in this directory.

## How to Add Songs

1. Copy your audio files to this `/public/audio/` directory
2. Update the song list in `/app/player/page.tsx`

## Example Song Configuration

```typescript
const songs: Song[] = [
  {
    id: 1,
    title: 'Your Song Title',
    artist: 'Edwards Radio',
    album: 'Album Name',
    albumArt: '/your-album-cover.jpg', // Image in /public/
    audioUrl: '/audio/your-song.mp3',  // File in /public/audio/
  },
  // Add more songs...
];
```

## Supported Audio Formats

- MP3 (recommended for web)
- WAV
- OGG
- M4A

## Tips

- Use consistent naming for your files (e.g., `01-song-title.mp3`)
- Keep file sizes reasonable for web (128-320 kbps for MP3)
- Make sure album art images are in `/public/` directory
- Recommended album art size: 1000x1000px or larger
