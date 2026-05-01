"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Warpath",
  "Batten the Hatches",
  "Wilderness",
  "Rescue for the Heartache",
  "Breaking Part",
  "No One",
  "Love Song",
];

export default function WildernessPage() {
  return (
    <AlbumPage
      albumName="Wilderness"
      trackOrder={trackOrder}
      backgroundImage="/wilderness.jpg.webp"
      showWaves={false}
      theme="wilderness"
    />
  );
}
