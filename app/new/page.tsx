"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Fight it Alone",
  "Your Own Light",
  "Wilderness",
  "Underwater",
  "Warpath",
  "Professor",
  "Rescue for the Heartache",
  "Billboard",
  "Batten the Hatches",
  "At the Table",
  "Breaking Part",
  "St George",
  "No One",
  "Eternity at State",
  "Love Song",
  "Only You",
  "Dark Side",
  "Oliver",
];

export default function NewPage() {
  return (
    <AlbumPage
      albumName="Underwater"
      trackOrder={trackOrder}
      streaming={{
        spotify: "https://open.spotify.com/album/0NoYPQJRnnNoZ3f7MPRA2F?si=S3Cbu54PSbKsLIphFXwmnw",
        youtube: "https://www.youtube.com/watch?v=hPPAhWVmotY&list=OLAK5uy_nPsB4JATPU2l9D4dtOptunzWo8vCSb4zs",
        apple: "https://music.apple.com/us/album/the-weight-of-illusion/1848579138",
        bandcamp: "https://edwardsradio.bandcamp.com/album/the-weight-of-illusion",
      }}
    />
  );
}
