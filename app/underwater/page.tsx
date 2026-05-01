"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Billboard",
  "At the Table",
  "Underwater",
  "Dark Side",
  "Eternity at State",
  "Professor",
  "Only You",
  "St George",
  "Oliver",
];

export default function UnderwaterPage() {
  return <AlbumPage albumName="Underwater" trackOrder={trackOrder} />;
}
