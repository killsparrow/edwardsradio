// AlbumCard.tsx
"use client";
import Link from 'next/link';
import StreamingLinks from './StreamingLinks';

// Individual album card
function AlbumCard({
  title,
  artist,
  coverImage,
  releaseDate,
  links,
  comingSoon = false,
  pageHref,
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
    tidal?: string;
  };
  comingSoon?: boolean;
  pageHref?: string;
}) {
  const cover = (
    <img
      src={coverImage}
      alt={`${title} album cover`}
      className="w-full h-full object-cover"
    />
  );

  return (
    <div
      className={`w-full h-full flex flex-col bg-[#24252d]/70 border border-[#494a5d]/40 overflow-hidden ${
        comingSoon ? "" : "group hover:border-[#bfb689]/40 transition-colors"
      }`}
    >
      {/* Album Cover */}
      <div className="relative aspect-square bg-[#2f303b]">
        {pageHref ? (
          <Link
            href={pageHref}
            aria-label={`Open ${title} album page`}
            className="block w-full h-full"
          >
            {cover}
          </Link>
        ) : (
          cover
        )}
      </div>

      {/* Album Info */}
      <div className="p-6 text-white border-t border-[#494a5d]/40 flex-1 flex flex-col">
        <div>
          <h2 className="text-base uppercase tracking-[0.15em] text-white !mb-0 !pb-0">{title}</h2>
          <div className="mt-2 mb-5 flex items-center gap-3">
            {comingSoon && (
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#bfb689] border border-[#bfb689]/50 px-2 py-1">
                Coming Soon
              </span>
            )}
            {releaseDate && (
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#bfb689]/70 !mb-0 !pt-0">
                {releaseDate}
              </p>
            )}
          </div>
        </div>

        <div className="mt-auto pt-2">
          {comingSoon ? (
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 !mb-0">
              Streaming links available at launch
            </p>
          ) : (
            links && (
              <>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                  Stream / Purchase
                </p>
                <div>
                  <StreamingLinks {...links} size={22} align="start" className="mt-1" />
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}




// Album data
type Album = {
  title: string;
  artist: string;
  coverImage: string;
  releaseDate?: string;
  comingSoon?: boolean;
  pageHref?: string;
  links?: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    bandcamp?: string;
    tidal?: string;
  };
};

const albums: Album[] = [
  {
    title: "Underwater",
    artist: "Edwards Radio",
    coverImage: "/2026.jpg",
    releaseDate: "Jun 20, 2026",
    pageHref: "/underwater",
    links: {
      spotify: "https://open.spotify.com/album/5lPnPCXCAuayLKm3UBHUrl?si=A18dhtTAQza-1I8BdBiSTQ",
      apple: "https://music.apple.com/us/album/underwater/6790856729",
      youtube: "https://youtube.com/playlist?list=OLAK5uy_lEv9tH5-K5RhILrENf1j_hjzMIWYSIKtA&si=tnZ083ieHlKRQovm",
      tidal: "https://tidal.com/album/543035782/u",
      bandcamp: "https://edwardsradio.bandcamp.com/album/underwater",
    },
  },
  {
    title: "Wilderness",
    artist: "Edwards Radio",
    coverImage: "/wilderness-album-cover.jpg",
    releaseDate: "May 1, 2026",
    pageHref: "/wilderness",
    links: {
      spotify: "https://open.spotify.com/album/5vREwhu27d9MoK5sCXQjZX?si=5znSnkN3QqGwyIJeHDPzVg",
      apple: "https://music.apple.com/us/album/wilderness/6781593986",
      youtube: "https://youtube.com/playlist?list=OLAK5uy_kV53AHAu4m21njOe5QaJlMke4KWciXWaU&si=a5B2babFJYxNdBKz",
      bandcamp: "https://edwardsradio.bandcamp.com/album/wilderness",
    },
  },
  {
    title: "The Weight of Illusion",
    artist: "Edwards Radio",
    coverImage: "/theweightofillusion.jpg?w=600&h=600&fit=crop",
    releaseDate: "Nov 7, 2025",
    pageHref: "/the-weight-of-illusion",
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
  {
    title: "Obrien St",
    artist: "Edwards Radio",
    coverImage: "/obrienst.jpg",
    releaseDate: "Nov 20, 2021",
    links: {
      spotify: "https://open.spotify.com/album/1jTMUxucsYh9nyaJVjto9j?si=-XsQch-pQ9mfHzIXQnBRfQ",
      apple: "https://music.apple.com/us/album/obrien-st-ep/6781419252",
      youtube: "https://youtube.com/playlist?list=OLAK5uy_mB4XOzJifEy7Aw_PruQaCZuiPPC_a-WUo&si=f6yZrMoYRHoM5uo3",
      bandcamp: "https://edwardsradio.bandcamp.com/album/obrien-st",
    },
  },
  {
    title: "Cicadas in the Storm",
    artist: "Edwards Radio",
    coverImage: "/cicadas-in-the-storm.jpg",
    releaseDate: "Sep 15, 2021",
    links: {
      spotify: "https://open.spotify.com/album/1s6hOrCJmk2HidxxCwVJHe?si=4SOuFv4VRqyjTWzPT7GtmQ",
      apple: "https://music.apple.com/us/album/cicadas-in-the-storm-ep/6781405800",
      youtube: "https://youtube.com/playlist?list=OLAK5uy_mTJyVVzvZMmTxizwCnEAhS5gw1snncWrg&si=9Hxkyad-vzX4TFNm",
      bandcamp: "https://edwardsradio.bandcamp.com/album/cicadas-in-the-storm",
    },
  },
  {
    title: "unsorry",
    artist: "Edwards Radio",
    coverImage: "/unsorry.jpg",
    releaseDate: "Aug 27, 2021",
    links: {
      spotify: "https://open.spotify.com/album/38xXz0De8YRdtfEa423Mb0?si=qYD5zln6R3eImD85JpXOJg",
      apple: "https://music.apple.com/us/album/unsorry-ep/6781419906",
      youtube: "https://youtube.com/playlist?list=OLAK5uy_ktlMR-ff2ImLnlLhiDcyX9O-Xt-P9o5zk&si=lMSeR0yzbhCSpVPu",
      bandcamp: "https://edwardsradio.bandcamp.com/album/unsorry",
    },
  },
];

// Main page component
export default function MusicPage() {
  return (
    <div className="w-full mx-auto py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#a0633b] mb-4">
            Discography
          </p>
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.15em] text-white !mb-0">
            Releases
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Edwards Radio</span>
            <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {albums.map((album, index) => (
            <div key={index}>
              <AlbumCard {...album} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}