"use client";

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';
import { useAudio } from '../providers/AudioProvider';

// Pages that render the full MusicPlayer — hide mini player there
const FULL_PLAYER_PAGES = [
  '/wilderness',
  '/underwater',
  '/the-weight-of-illusion',
];

export default function MiniPlayer() {
  const { songs, currentSongIndex, isPlaying, hasStarted, audioRef, togglePlayPause, next, previous, seekTo } = useAudio();
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
    progressRef.current.style.background = `linear-gradient(to right, #bfb689 0%, #bfb689 ${(t / d) * 100}%, rgba(255,255,255,0.15) ${(t / d) * 100}%, rgba(255,255,255,0.15) 100%)`;
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

  // Don't render if no songs loaded, never started, or on pages with full player
  if (songs.length === 0 || !currentSong || !hasStarted) return null;
  if (FULL_PLAYER_PAGES.includes(pathname)) return null;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seekTo(parseFloat(e.target.value));
  };

  return (
    <div className="fixed bottom-16 inset-x-0 z-50 bg-[#24252d]/95 backdrop-blur-sm border-t border-[#494a5d]/40">
      <div className="mx-auto max-w-6xl px-4 flex items-center gap-4 h-16">
        {/* Album art — porthole */}
        <div className="relative w-10 h-10 flex-shrink-0 rounded-full border-2 border-[#494a5d] p-0.5">
          <div className="w-full h-full rounded-full overflow-hidden relative border border-[#a0633b]/40">
            <Image
              src={currentSong.albumArt}
              alt={currentSong.album}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        </div>

        {/* Track info */}
        <div className="min-w-0 flex-shrink-0 w-32 sm:w-48">
          <p className="text-sm text-white uppercase tracking-wide truncate !mb-0">{currentSong.title}</p>
          <p className="text-[10px] text-white/40 uppercase tracking-wider truncate !mb-0">{currentSong.artist}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button onClick={previous} className="text-white/40 hover:text-[#bfb689] transition-colors p-1" aria-label="Previous">
            <FaStepBackward className="w-2.5 h-2.5" />
          </button>
          <button onClick={togglePlayPause} className="w-8 h-8 rounded-full border border-[#bfb689] flex items-center justify-center text-[#bfb689] hover:bg-[#bfb689] hover:text-[#24252d] transition-all" aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? <FaPause className="w-2.5 h-2.5" /> : <FaPlay className="w-2.5 h-2.5 ml-0.5" />}
          </button>
          <button onClick={next} className="text-white/40 hover:text-[#bfb689] transition-colors p-1" aria-label="Next">
            <FaStepForward className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Progress */}
        <span ref={timeRef} className="text-[9px] text-white/30 w-7 tabular-nums tracking-wider flex-shrink-0">0:00</span>
        <input
          ref={progressRef}
          type="range"
          min="0"
          max="100"
          defaultValue={0}
          onChange={handleSeek}
          className="flex-1 h-[2px] bg-white/10 rounded-none appearance-none cursor-pointer slider"
        />
      </div>
    </div>
  );
}
