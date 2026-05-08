"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Underwater",
  "Fight it Alone",
  "Your Own Light",
  "Eternity at State",
  "Dark Side",
  "Billboard",
  "At the Table",
  "You Know Me Better",
  "Oliver",
];

export default function UnderwaterPage() {
  return <AlbumPage albumName="Underwater" trackOrder={trackOrder} />;
}
