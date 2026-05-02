"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Underwater",
  "Fight it Alone",
  "Your Own Light",
  "Eternity at State",
  "Dark Side",
  "Billboard",
  // "Professor",
  "At the Table",
  // "Only You",
  "Oliver",
];

export default function UnderwaterPage() {
  return <AlbumPage albumName="Underwater" trackOrder={trackOrder} />;
}
