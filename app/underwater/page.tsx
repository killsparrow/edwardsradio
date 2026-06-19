"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Underwater",
  "Fight it Alone",
  "Your Own Light",
  "Billboard",
  "At the Table",
  "Dark Side",
  "Eternity at State",
  "You Know Me Better",
  "Oliver",
];

export default function UnderwaterPage() {
  return <AlbumPage albumName="Underwater" trackOrder={trackOrder} />;
}
