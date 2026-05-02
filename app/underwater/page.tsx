"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Underwater",
  "Fight it Alone",
  "Your Own Light",
  "Dark Side",
  "Eternity at State",
  "Professor",
  "Billboard",
  "At the Table",
  // "Only You",
  "Oliver",
];

export default function UnderwaterPage() {
  return <AlbumPage albumName="Underwater" trackOrder={trackOrder} />;
}
