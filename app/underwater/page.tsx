"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Billboard",
  "At the Table",
  "Underwater",
  "Fight it Alone",
  "Your Own Light",
  "Dark Side",
  "You Know Me Better",
  "Eternity at State",
  "Oliver",
];

export default function UnderwaterPage() {
  return (
    <AlbumPage
      albumName="Underwater"
      trackOrder={trackOrder}
      streaming={{
        spotify: "https://open.spotify.com/album/1wzVPCbhNceaLBb40yfDTq?si=G6FTvvi0R6me4GRsIp-8VQ",
        apple: "https://music.apple.com/us/album/underwater/6783769873",
        youtube: "https://youtube.com/playlist?list=OLAK5uy_mETfnMeMwsJmbFxOSnX3-eTNWc5uoDLE8&si=Ucc1DfHhzoHeYRiC",
        tidal: "https://tidal.com/artist/46892204/u",
        bandcamp: "https://edwardsradio.bandcamp.com/album/underwater",
      }}
    />
  );
}
