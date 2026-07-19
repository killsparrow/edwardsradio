"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Billboard",
  "At the Table",
  "Underwater",
  "Fight it Alone",
  "Your Own Light",
  "Dark Side",
  "Professor",
  "Eternity at State",
  "Oliver",
];

export default function UnderwaterPage() {
  return (
    <AlbumPage
      albumName="Underwater"
      trackOrder={trackOrder}
      streaming={{
        spotify: "https://open.spotify.com/album/5lPnPCXCAuayLKm3UBHUrl?si=A18dhtTAQza-1I8BdBiSTQ",
        apple: "https://music.apple.com/us/album/underwater/6790856729",
        youtube: "https://youtube.com/playlist?list=OLAK5uy_lEv9tH5-K5RhILrENf1j_hjzMIWYSIKtA&si=tnZ083ieHlKRQovm",
        tidal: "https://tidal.com/album/543035782/u",
        bandcamp: "https://edwardsradio.bandcamp.com/album/underwater",
      }}
    />
  );
}
