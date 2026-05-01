"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Warpath",
  "Batten the Hatches",
  "Wilderness",
  "Rescue for the Heartache",
  "Breaking Part",
  "Love Song",
  "No One",
];

export default function WildernessPage() {
  return (
    <AlbumPage
      albumName="Wilderness"
      trackOrder={trackOrder}
      albumArt="/wilderness.jpg.webp"
      backgroundImage="/wilderness.jpg.webp"
      showWaves={false}
      theme="wilderness"
    />
  );
}
