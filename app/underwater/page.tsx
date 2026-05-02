"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Fight it Alone",
  "Your Own Light",
  "Billboard",
  "At the Table",
  "Underwater",
  "Dark Side",
  "Eternity at State",
  "Professor",
  "Only You",
  "Oliver",
];

export default function UnderwaterPage() {
  return <AlbumPage albumName="Underwater" trackOrder={trackOrder} />;
}
