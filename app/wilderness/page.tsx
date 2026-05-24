"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { FaSpotify, FaApple, FaBandcamp, FaPlay, FaPause } from "react-icons/fa";
import { GiRadioTower } from "react-icons/gi";
import { useAudio } from "../providers/AudioProvider";
import { getOrderedTracks } from "@/lib/album-tracks";
import type { Song } from "@/lib/songs";

type WildernessTrack = {
  key: string;
  display: string;
  time: string;
};

const TRACKS: WildernessTrack[] = [
  { key: "Wilderness", display: "Wilderness", time: "03:37" },
  { key: "Rescue for the Heartache", display: "Rescue for the Heartache", time: "03:54" },
    { key: "Warpath", display: "Warpath", time: "04:30" },
  { key: "Batten the Hatches", display: "Batten the Hatches", time: "03:11" },
      { key: "Love Song", display: "Love Song", time: "02:56" },
    { key: "Breaking Part", display: "The Breaking Part", time: "03:55" },
  { key: "No One", display: "No One", time: "05:10" },
];

const ALBUM_NAME = "Wilderness";
const ALBUM_ART = "/wilderness-album.webp";

export default function WildernessPage() {
  const { loadSongs, selectSong, togglePlayPause, currentSongIndex, isPlaying, hasStarted } =
    useAudio();

  const songs = useMemo<Song[]>(() => {
    const ordered = getOrderedTracks(TRACKS.map((t) => t.key));
    return ordered.map((t, i) => ({
      id: i + 1,
      title: t.title.toLowerCase(),
      artist: "Edwards Radio",
      album: ALBUM_NAME,
      albumArt: ALBUM_ART,
      audioUrl: t.audioUrl,
    }));
  }, []);

  useEffect(() => {
    loadSongs(songs);
  }, [loadSongs, songs]);

  const handleTrackClick = (i: number) => {
    if (i === currentSongIndex) togglePlayPause();
    else selectSong(i);
  };

  return (
    <div
      className="min-h-dvh text-[#0a0a0c] bg-[#ede6d3]"
      style={{ fontFamily: '"henriette", sans-serif' }}
    >
      <div className="max-w-[1280px] mx-auto p-4 md:p-8 min-h-dvh">
        {/* HEADER */}
        <header className="grid grid-cols-3 items-center pb-6 border-b border-[#0a0a0c] uppercase text-[10px] tracking-[0.22em] font-medium">
          <div className="text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 whitespace-nowrap hover:text-[#b8451f] transition-colors"
            >
              <GiRadioTower size={14} />
              Edwards Radio
            </Link>
          </div>
          <div className="text-center font-bold" />
          <div className="text-right" />
        </header>

        {/* HERO */}
        <section className="grid md:grid-cols-2 border-b border-[#0a0a0c]">
          <div className="min-w-0 overflow-hidden px-6 py-12 md:px-12 md:py-16 md:border-r border-b md:border-b-0 border-[#0a0a0c] flex flex-col justify-between min-h-[420px] md:min-h-[560px]">
            {/* meta row */}
            <div className="flex justify-between items-center uppercase text-[10px] tracking-[0.22em] font-semibold">
              <span>EP / Digital</span>
              <div className="flex gap-3.5 items-center">
                <a
                  href="https://edwardsradio.bandcamp.com/album/wilderness"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Listen on Bandcamp"
                  className="text-[#0a0a0c] hover:text-[#b8451f] transition-colors"
                >
                  <FaBandcamp size={16} />
                </a>
              </div>
            </div>

            {/* title block */}
            <div className="py-12">
              <h1
                className="italic font-black leading-[0.88] tracking-[-0.02em] text-[#0a0a0c] -ml-[0.18em]"
                style={{
                  fontFamily: '"henriette", sans-serif',
                  fontSize: "clamp(56px, 7vw, 108px)",
                }}
              >
                Wilder<span className="text-[#b8451f]">ness</span>
              </h1>
              <div
                className="mt-2 text-[22px] font-medium text-[#1a1d3a]"
                style={{ fontFamily: '"henriette", sans-serif' }}
              >
                By: Edwards Radio
              </div>
            </div>

            <p className="text-[19px] leading-[1.5] font-medium text-[#1a1d3a] max-w-[38ch]" aria-hidden="true">
              &nbsp;
            </p>
          </div>

          {/* hero art */}
          <div className="relative overflow-hidden bg-[#ede6d3] aspect-square md:aspect-auto md:min-h-[560px]">
            <Image
              src={ALBUM_ART}
              alt="Wilderness album cover"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{
                mixBlendMode: "multiply",
                filter: "contrast(1.05) saturate(1.1)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 40%, transparent 0%, rgba(10,10,12,0.35) 100%),
                  linear-gradient(180deg, transparent 60%, rgba(10,10,12,0.4))
                `,
              }}
            />
          </div>
        </section>

        {/* TRACKS */}
        <section className="grid md:grid-cols-[1fr_2fr] border-b border-[#0a0a0c]">
          <aside className="bg-[#0a0a0c] text-[#ede6d3] p-12 md:border-r border-b md:border-b-0 border-[#0a0a0c] flex flex-col justify-between">
            <div className="text-[10px] tracking-[0.32em] uppercase font-bold text-[#c9a24a]">
              Home Recorded / Lo-Fi
            </div>

            <p
              className="text-[12px] leading-[1.5] text-[#ede6d3]/60 max-w-[38ch]"
              style={{ fontFamily: '"henriette", sans-serif' }}
            >
              All audio on this album is protected under the{" "}
              <a
                href="https://aiaps-standard.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a24a] border-b border-current pb-px hover:text-[#b8451f] hover:border-[#b8451f] transition-colors"
              >
                AIAPS
              </a>{" "}
              Standard, an open framework that safeguards music from
              unauthorized AI training and reproduction.
            </p>
          </aside>

          <ol className="list-none m-0 p-0 flex flex-col">
            {TRACKS.map((track, i) => {
              const isActive = hasStarted && i === currentSongIndex;
              const num = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={track.key}
                  onClick={() => handleTrackClick(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleTrackClick(i);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play ${track.display}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group grid grid-cols-[48px_1fr_auto] md:grid-cols-[80px_1fr_auto] items-baseline px-6 md:px-12 py-[18px] md:py-[22px] border-b border-[#0a0a0c] last:border-b-0 cursor-pointer transition-colors ${
                    isActive
                      ? "bg-[#0a0a0c] text-[#ede6d3]"
                      : "hover:bg-[#0a0a0c] hover:text-[#ede6d3]"
                  }`}
                >
                  <span
                    className="text-[13px] tracking-[0.1em] font-medium relative inline-flex items-center"
                    style={{ fontFamily: '"henriette", sans-serif' }}
                  >
                    {/* Track number — hidden on hover and when active */}
                    <span
                      className={`${
                        isActive ? "hidden" : "group-hover:hidden"
                      }`}
                    >
                      {num}
                    </span>
                    {/* Play / pause icon — shown on hover and when active */}
                    <span
                      className={`${
                        isActive
                          ? "inline-flex"
                          : "hidden group-hover:inline-flex"
                      } items-center text-[#c9a24a]`}
                      aria-hidden="true"
                    >
                      {isActive && isPlaying ? (
                        <FaPause className="w-3 h-3" />
                      ) : (
                        <FaPlay className="w-3 h-3" />
                      )}
                    </span>
                  </span>
                  <span className="flex items-center gap-3 min-w-0">
                    <span
                      className="italic font-bold text-[22px] md:text-[32px] tracking-[-0.01em] truncate"
                      style={{ fontFamily: '"henriette", sans-serif' }}
                    >
                      {track.display}
                    </span>
                    {isActive && isPlaying && (
                      <span
                        className="flex gap-0.5 items-end h-3 flex-shrink-0"
                        aria-hidden="true"
                      >
                        <span className="w-0.5 h-3 bg-[#c9a24a] rounded-sm animate-pulse" />
                        <span
                          className="w-0.5 h-2 bg-[#c9a24a] rounded-sm animate-pulse"
                          style={{ animationDelay: "0.15s" }}
                        />
                        <span
                          className="w-0.5 h-3 bg-[#c9a24a] rounded-sm animate-pulse"
                          style={{ animationDelay: "0.3s" }}
                        />
                      </span>
                    )}
                  </span>
                  <span
                    className={`text-[12px] tracking-[0.15em] font-medium ${
                      isActive ? "text-[#c9a24a]" : "text-[#1a1d3a] group-hover:text-[#c9a24a]"
                    }`}
                  >
                    {track.time}
                  </span>
                </li>
              );
            })}
          </ol>
        </section>

        {/* FOOTER */}
        <footer className="grid grid-cols-3 py-6 uppercase text-[10px] tracking-[0.22em] font-medium">
          <div className="text-left">© Edwards Radio</div>
          <div className="text-center">Wilderness</div>
          <div className="text-right">All Rights Reserved</div>
        </footer>
      </div>
    </div>
  );
}
