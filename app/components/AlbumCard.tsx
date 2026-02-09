// AlbumCard.tsx
import React from 'react';
import StreamingLinks from './StreamingLinks';

// Individual album card
function AlbumCard({ 
  title, 
  artist, 
  coverImage, 
  releaseDate,
  links 
}: {
  title: string;
  artist: string;
  coverImage: string;
  releaseDate?: string;
  links?: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    bandcamp?: string;
  };
}) {
  return (
    <div className="max-w-md mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
      {/* Album Cover */}
      <div className="relative aspect-square bg-gray-200">
        <img
          src={coverImage}
          alt={`${title} album cover`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Album Info */}
      <div className="p-6 text-white">
        <div>
          <h2 className="text-xl font-semibold !mb-0 !pb-0">{title}</h2>
          {releaseDate && (
            <p className="text-sm text-gray-200 mb-4 !mt-0 !pt-0">Release date: {releaseDate}</p>
          )}
        </div>

        {links && (
          <>
            <p className='text-gray-200'>Stream or purchase:</p>
            <div className="mt-4">
              <StreamingLinks {...links} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}




// Album data
const albums = [
  //   {
  //   title: "underwater",
  //   artist: "Edwards Radio",
  //   coverImage: "/2026.jpg?w=600&h=600&fit=crop",
  //   releaseDate: "Feb 7, 2026",
  //   links: {
  //     spotify: "https://open.spotify.com/album/0NoYPQJRnnNoZ3f7MPRA2F?si=S3Cbu54PSbKsLIphFXwmnw",
  //     youtube: "https://www.youtube.com/watch?v=hPPAhWVmotY&list=OLAK5uy_nPsB4JATPU2l9D4dtOptunzWo8vCSb4zs",
  //     apple: "https://music.apple.com/us/album/the-weight-of-illusion/1848579138",
  //     bandcamp: "https://edwardsradio.bandcamp.com/album/the-weight-of-illusion",
  //   },
  // },
  {
    title: "The Weight of Illusion",
    artist: "Edwards Radio",
    coverImage: "/theweightofillusion.jpg?w=600&h=600&fit=crop",
    releaseDate: "Nov 7, 2025",
    links: {
      spotify: "https://open.spotify.com/album/0NoYPQJRnnNoZ3f7MPRA2F?si=S3Cbu54PSbKsLIphFXwmnw",
      youtube: "https://www.youtube.com/watch?v=hPPAhWVmotY&list=OLAK5uy_nPsB4JATPU2l9D4dtOptunzWo8vCSb4zs",
      apple: "https://music.apple.com/us/album/the-weight-of-illusion/1848579138",
      bandcamp: "https://edwardsradio.bandcamp.com/album/the-weight-of-illusion",
    },
  },
  {
    title: "This Endless Life",
    artist: "Edwards Radio",
    coverImage: "/thisendlesslife.jpg?w=600&h=600&fit=crop",
    releaseDate: "2023",
    links: {
      spotify: "https://open.spotify.com/album/7eA89ULirGp3xJqq9N9amf?si=Feo5XnmFT-6OtGX9PhLbCg",
      apple: "https://music.apple.com/us/album/this-endless-life/1741657602",
    },
  },
  {
    title: "Feral Nights",
    artist: "Edwards Radio",
    coverImage: "/ferralnights.jpg?w=600&h=600&fit=crop",
    releaseDate: "2022",
    links: {
      spotify: "https://open.spotify.com/album/3rwADCagSmCnPFoC4a8WFB?si=N3cP8wgzTBCABbfqDTIJcw",
      apple: "https://music.apple.com/us/album/feral-nights/1738992532",
    },
  },
];

// Main page component
export default function MusicPage() {
  return (
    <div className="my-12 mx-auto py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <AlbumCard key={index} {...album} />
          ))}
        </div>
      </div>
    </div>
  );
}