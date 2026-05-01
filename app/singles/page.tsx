"use client";

import AlbumPage from "../components/AlbumPage";

const trackOrder: string[] = [
  "Fight it Alone",
  "Your Own Light",
];

export default function SinglesPage() {
  return <AlbumPage albumName="Singles" trackOrder={trackOrder} />;
}
