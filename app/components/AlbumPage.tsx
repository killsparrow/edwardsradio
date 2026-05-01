"use client";

import Image from "next/image";
import UnderwaterWaves from "./UnderwaterWaves";
import StreamingLinks from "./StreamingLinks";
import { Song } from "@/lib/songs";
import { getOrderedTracks } from "@/lib/album-tracks";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "../providers/AudioProvider";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

type StreamingUrls = {
  spotify?: string;
  youtube?: string;
  apple?: string;
  bandcamp?: string;
};

type AlbumPageProps = {
  albumName: string;
  trackOrder: string[];
  albumArt?: string;
  backgroundImage?: string;
  showWaves?: boolean;
  theme?: "underwater" | "wilderness";
  streaming?: StreamingUrls;
};

function toRoman(n: number): string {
  const map: [number, string][] = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let result = "";
  let v = n;
  for (const [value, numeral] of map) {
    while (v >= value) {
      result += numeral;
      v -= value;
    }
  }
  return result;
}

function ZissouPlayer({ songs, theme }: { songs: Song[]; theme: "underwater" | "wilderness" }) {
  const {
    currentSongIndex,
    isPlaying,
    duration,
    audioRef,
    loadSongs,
    togglePlayPause,
    next: handleNext,
    previous: handlePrevious,
    seekTo,
    songs: loadedSongs,
  } = useAudio();

  useEffect(() => {
    loadSongs(songs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadSongs]);

  const progressRef = useRef<HTMLInputElement>(null);
  const currentTimeRef = useRef<HTMLSpanElement>(null);
  const seekingRef = useRef(false);

  const currentSong = loadedSongs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => {
      if (seekingRef.current || !progressRef.current || !currentTimeRef.current) return;
      const t = audio.currentTime;
      const d = audio.duration || 1;
      progressRef.current.value = String(t);
      progressRef.current.max = String(d);
      progressRef.current.style.background = `linear-gradient(to right, var(--color-accent-gold) 0%, var(--color-accent-gold) ${(t / d) * 100}%, rgba(255,255,255,0.15) ${(t / d) * 100}%, rgba(255,255,255,0.15) 100%)`;
      const min = Math.floor(t / 60);
      const sec = Math.floor(t % 60);
      currentTimeRef.current.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
    };
    audio.addEventListener("timeupdate", onTimeUpdate);
    return () => audio.removeEventListener("timeupdate", onTimeUpdate);
  }, [audioRef]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    return `${Math.floor(time / 60)}:${Math.floor(time % 60).toString().padStart(2, "0")}`;
  };

  if (!currentSong) return null;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <motion.div
          key={currentSong.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[var(--color-border-base)] p-0.5 flex-shrink-0 relative"
        >
          <div className="w-full h-full rounded-full overflow-hidden relative border border-[var(--color-accent-copper-40)]">
            <Image
              src={currentSong.albumArt}
              alt={`${currentSong.album} album art`}
              fill
              className="object-cover"
              priority
            />
          </div>
          {theme === "underwater" && (
            <>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-border-base-50)] border border-[var(--color-border-base-70)]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-border-base-50)] border border-[var(--color-border-base-70)]" />
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-border-base-50)] border border-[var(--color-border-base-70)]" />
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-border-base-50)] border border-[var(--color-border-base-70)]" />
            </>
          )}
        </motion.div>

        <div className="flex-1 min-w-0">
          <motion.div
            key={currentSong.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-baseline gap-2 mb-1.5"
          >
            <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.08em] text-white !mb-0 truncate">
              {currentSong.title}
            </h2>
            <span className="text-[10px] text-white/30 uppercase tracking-wider flex-shrink-0">
              {currentSong.artist}
            </span>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevious}
              className="text-white/40 hover:text-[var(--color-accent-gold)] transition-colors"
              aria-label="Previous track"
            >
              <FaStepBackward className="w-2.5 h-2.5" />
            </button>

            <button
              onClick={togglePlayPause}
              className="w-8 h-8 rounded-full border border-[var(--color-accent-gold)] flex items-center justify-center text-[var(--color-accent-gold)] hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-bg-card-solid)] transition-all flex-shrink-0"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <FaPause className="w-2.5 h-2.5" />
              ) : (
                <FaPlay className="w-2.5 h-2.5 ml-0.5" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="text-white/40 hover:text-[var(--color-accent-gold)] transition-colors"
              aria-label="Next track"
            >
              <FaStepForward className="w-2.5 h-2.5" />
            </button>

            <span
              ref={currentTimeRef}
              className="text-[9px] text-white/30 w-7 tabular-nums tracking-wider flex-shrink-0"
            >
              0:00
            </span>
            <input
              ref={progressRef}
              type="range"
              min="0"
              max={duration || 0}
              defaultValue={0}
              aria-label="Seek through track"
              onPointerDown={() => { seekingRef.current = true; }}
              onPointerUp={(e) => {
                seekTo(parseFloat((e.target as HTMLInputElement).value));
                seekingRef.current = false;
              }}
              onTouchEnd={(e) => {
                seekTo(parseFloat((e.target as HTMLInputElement).value));
                seekingRef.current = false;
              }}
              className="flex-1 h-[2px] bg-white/10 rounded-none appearance-none cursor-pointer slider"
            />
            <span className="text-[9px] text-white/30 w-7 text-right tabular-nums tracking-wider flex-shrink-0">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AlbumPage({
  albumName,
  trackOrder,
  albumArt = "/2026.jpg",
  backgroundImage = "/ship.webp",
  showWaves = true,
  theme = "underwater",
  streaming,
}: AlbumPageProps) {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const { selectSong, currentSongIndex, isPlaying } = useAudio();

  const orderedTracks = getOrderedTracks(trackOrder);

  const songs: Song[] = orderedTracks.map((t, i) => ({
    id: i + 1,
    title: t.title.toLowerCase(),
    artist: "Edwards Radio",
    album: albumName,
    albumArt,
    audioUrl: t.audioUrl,
  }));

  return (
    <article
      className={`theme-${theme} bg-[var(--color-bg-page)] relative`}
      aria-label={`${albumName} — album by Edwards Radio`}
    >
      <div
        id="underwater-page"
        className="min-h-screen pt-20 pb-16 bg-[var(--color-bg-page)] relative z-10 bg-no-repeat bg-[center_top] bg-[length:200%_auto] md:bg-[length:100%_auto] mx-auto"
        style={{ overflowX: "clip", backgroundImage: `url('${backgroundImage}')` }}
      >
        {showWaves && (
          <div
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{ aspectRatio: "1920/1250" }}
            aria-hidden="true"
          >
            <UnderwaterWaves />
          </div>
        )}

        {theme === "wilderness" && (
          <div
            className="absolute inset-0 pointer-events-none wilderness-overlay"
            aria-hidden="true"
          />
        )}

        <div className={`w-[90%] mx-auto bg-[var(--color-bg-card)] mb-16 relative overflow-hidden ${theme === "wilderness" ? "mt-12 md:mt-20" : "mt-40 md:mt-80"}`}>
          <div
            className="absolute inset-0 pointer-events-none decor-pattern"
            aria-hidden="true"
          />

          <div className="relative p-6 md:p-10">
            <h1 className="sr-only">{albumName} — Album by Edwards Radio (2026)</h1>

            <section aria-label="Music player" className="py-6">
              <ZissouPlayer songs={songs} theme={theme} />
            </section>

            <section aria-label="Tracklist and lyrics" className="max-w-3xl mx-auto py-4 relative">
              {theme === "wilderness" && (
                <div
                  className="absolute inset-0 pointer-events-none tracklist-grain"
                  aria-hidden="true"
                />
              )}
              <h2 className="sr-only">Tracklist</h2>
              <ol className="list-none m-0 p-0 space-y-0 relative" role="list">
                {orderedTracks.map((track, index) => {
                  const isActive = currentSongIndex === index;
                  const liBorder =
                    theme === "wilderness"
                      ? "border-t border-dotted border-[var(--color-border-base-30)]"
                      : "border-t border-[var(--color-border-base-50)]";
                  return (
                    <li key={index} className={liBorder}>
                      <div className="flex items-center gap-0">
                        <button
                          onClick={() => selectSong(index)}
                          aria-label={`Play ${track.title}`}
                          aria-current={isActive ? "true" : undefined}
                          className={`py-4 px-2 md:px-4 flex items-center gap-4 md:gap-6 transition-colors text-left group flex-1 min-w-0 ${
                            isActive ? "bg-[var(--color-accent-gold-5)]" : "hover:bg-white/[0.02]"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`${theme === "wilderness" ? "text-xs italic w-8 text-right" : "text-[10px] uppercase tracking-[0.3em] w-12 font-bold"} flex-shrink-0 ${
                              isActive ? "text-[var(--color-accent-gold)]" : "text-[var(--color-accent-gold-30)]"
                            }`}
                          >
                            {theme === "wilderness" ? toRoman(index + 1) : `Ch. ${index + 1}`}
                          </span>
                          {theme === "wilderness" ? (
                            <span aria-hidden="true" className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-copper-30)] group-hover:bg-[var(--color-accent-copper)] transition-colors" />
                          ) : (
                            <span aria-hidden="true" className="flex-shrink-0 w-4 md:w-6 h-px bg-[var(--color-border-base-60)] group-hover:bg-[var(--color-accent-copper-40)] transition-colors" />
                          )}
                          <span
                            className={`flex-1 text-base md:text-lg tracking-wide truncate ${
                              isActive
                                ? "text-[var(--color-accent-gold)] font-semibold"
                                : "text-white group-hover:text-[var(--color-accent-gold)] transition-colors"
                            }`}
                          >
                            {track.title}
                          </span>
                          {isActive && isPlaying && (
                            <div className="flex gap-0.5 items-end h-3 flex-shrink-0" aria-hidden="true">
                              <motion.div className="w-0.5 bg-[var(--color-accent-gold)] rounded-full" animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 0.8, repeat: Infinity }} />
                              <motion.div className="w-0.5 bg-[var(--color-accent-gold)] rounded-full" animate={{ height: ["100%", "40%", "100%"] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} />
                              <motion.div className="w-0.5 bg-[var(--color-accent-gold)] rounded-full" animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
                            </div>
                          )}
                        </button>

                        {track.lyrics && (
                          <button
                            onClick={() =>
                              setExpandedChapter(expandedChapter === index ? null : index)
                            }
                            aria-expanded={expandedChapter === index}
                            aria-label={`${expandedChapter === index ? "Hide" : "Show"} lyrics for ${track.title}`}
                            className="py-4 px-3 md:px-4 flex-shrink-0 hover:bg-white/[0.02] transition-colors"
                          >
                            <motion.span
                              animate={{ rotate: expandedChapter === index ? 45 : 0 }}
                              transition={{ duration: 0.2 }}
                              aria-hidden="true"
                              className="text-[var(--color-border-base)] hover:text-[var(--color-accent-copper)] text-lg transition-colors block"
                            >
                              +
                            </motion.span>
                          </button>
                        )}
                      </div>

                      <AnimatePresence>
                        {expandedChapter === index && track.lyrics && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                            role="region"
                            aria-label={`Lyrics for ${track.title}`}
                          >
                            <div className="px-2 md:px-4 pb-6 md:pl-[calc(3rem+2.5rem)]">
                              {track.subtitle && (
                                <div className="border border-[var(--color-border-base-30)] px-4 py-3 mb-5">
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-highlight)] !mb-0">
                                    {track.subtitle}
                                  </p>
                                </div>
                              )}
                              <div className="text-white/80 text-sm leading-relaxed border-l-2 border-[var(--color-accent-copper-30)] pl-6 pt-2">
                                {track.lyrics}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ol>
            </section>

            {streaming && (
              <nav aria-label={`Stream or purchase ${albumName}`}>
                <div className="flex justify-center">
                  <StreamingLinks
                    spotify={streaming.spotify}
                    youtube={streaming.youtube}
                    apple={streaming.apple}
                    bandcamp={streaming.bandcamp}
                  />
                </div>
              </nav>
            )}

            <section aria-label="AI audio protection" className="max-w-xl mx-auto text-center py-10">
              <div className="border border-[var(--color-border-base-40)] p-6 md:p-8">
                <h2 className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-accent-copper)] mb-3 !text-[10px]">
                  AIAPS-Protected
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Unauthorized AI training prohibited.
                </p>
                <a
                  href="https://www.aiaps-standard.org/artist/edwards-radio"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-block text-[11px] tracking-[0.15em] text-[var(--color-accent-gold)] border border-[var(--color-accent-gold-40)] px-6 py-2 hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-bg-card-solid)] transition-all break-all"
                >
                  www.aiaps-standard.org/artist/edwards-radio
                </a>
              </div>
            </section>

            <footer className="text-center py-6">
              <p className="text-white/40 text-xs tracking-wide">
                All songs written and recorded by Edwards Radio. 2026&copy;
              </p>
            </footer>
          </div>
        </div>
      </div>
    </article>
  );
}
