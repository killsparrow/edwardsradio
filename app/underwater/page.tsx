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
  "Follow the Fractures",
  "St George",
  "You Know Me Better",
  "Professor",
  "Oliver",
];

export default function UnderwaterPage() {
  return <AlbumPage albumName="Underwater" trackOrder={trackOrder} />;
}
