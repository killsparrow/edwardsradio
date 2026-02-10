"use client";

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';
import { useAudio } from '../providers/AudioProvider';

// Pages that render the full MusicPlayer — hide mini player there
const FULL_PLAYER_PAGES = ['/underwater', '/player'];

export default function MiniPlayer() {
  const { songs, currentSongIndex, isPlaying, audioRef, togglePlayPause, next, previous, seekTo } = useAudio();
  const pathname = usePathname();

  const progressRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);

  const currentSong = songs[currentSongIndex];

  // Direct DOM updates for progress — no re-renders
  const updateProgress = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !progressRef.current || !timeRef.current) return;
    const t = audio.currentTime;
    const d = audio.duration || 1;
    progressRef.current.value = String(t);
    progressRef.current.max = String(d);
    progressRef.current.style.background = `linear-gradient(to right, #d1c58b 0%, #d1c58b ${(t / d) * 100}%, rgba(255,255,255,0.15) ${(t / d) * 100}%, rgba(255,255,255,0.15) 100%)`;
    const min = Math.floor(t / 60);
    const sec = Math.floor(t % 60);
    timeRef.current.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
  }, [audioRef]);

  // rAF loop synced with paint cycle — avoids mid-frame style recalculations
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let rafId: number;
    const tick = () => {
      updateProgress();
      rafId = requestAnimationFrame(tick);
    };
    const start = () => { rafId = requestAnimationFrame(tick); };
    const stop = () => cancelAnimationFrame(rafId);

    audio.addEventListener('play', start);
    audio.addEventListener('pause', stop);
    audio.addEventListener('ended', stop);

    if (!audio.paused) start();

    return () => {
      stop();
      audio.removeEventListener('play', start);
      audio.removeEventListener('pause', stop);
      audio.removeEventListener('ended', stop);
    };
  }, [audioRef, updateProgress]);

  // Don't render if no songs loaded or on pages with full player
  if (songs.length === 0 || !currentSong) return null;
  if (FULL_PLAYER_PAGES.includes(pathname)) return null;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seekTo(parseFloat(e.target.value));
  };

  return (
    <div className="fixed bottom-16 inset-x-0 z-50 bg-[#1a1b23]/95 backdrop-blur-sm border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 flex items-center gap-3 h-14">
        {/* Album art */}
        <div className="relative w-10 h-10 flex-shrink-0 rounded overflow-hidden">
          <Image
            src={currentSong.albumArt}
            alt={currentSong.album}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>

        {/* Track info */}
        <div className="min-w-0 flex-shrink-0 w-32 sm:w-48">
          <p className="text-sm text-white truncate !mb-0">{currentSong.title}</p>
          <p className="text-xs text-white/50 truncate !mb-0">{currentSong.artist}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button onClick={previous} className="text-white/70 hover:text-[#d1c58b] transition-colors p-1" aria-label="Previous">
            <FaStepBackward className="w-3 h-3" />
          </button>
          <button onClick={togglePlayPause} className="bg-[#d1c58b] text-[#1a1b23] rounded-full p-2 hover:bg-[#c1b57b] transition-colors" aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <FaPause className="w-3 h-3" /> : <FaPlay className="w-3 h-3 ml-0.5" />}
          </button>
          <button onClick={next} className="text-white/70 hover:text-[#d1c58b] transition-colors p-1" aria-label="Next">
            <FaStepForward className="w-3 h-3" />
          </button>
        </div>

        {/* Progress */}
        <span ref={timeRef} className="text-[10px] text-white/50 w-7 tabular-nums flex-shrink-0">0:00</span>
        <input
          ref={progressRef}
          type="range"
          min="0"
          max="100"
          defaultValue={0}
          onChange={handleSeek}
          className="flex-1 h-1 bg-white/15 rounded appearance-none cursor-pointer slider"
        />
      </div>
    </div>
  );
}
