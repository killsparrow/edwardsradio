"use client";

import { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Song } from '@/lib/songs';
import { useAudio } from '../providers/AudioProvider';

interface MusicPlayerProps {
  songs: Song[];
  showTracklist?: boolean;
}

export default function MusicPlayer({ songs: songsProp, showTracklist = true }: MusicPlayerProps) {
  const {
    songs,
    currentSongIndex,
    isPlaying,
    duration,
    volume,
    isMuted,
    audioRef,
    loadSongs,
    togglePlayPause,
    next: handleNext,
    previous: handlePrevious,
    seekTo,
    selectSong,
    setVolume,
    toggleMute,
  } = useAudio();

  // Load songs into context on mount
  useEffect(() => {
    loadSongs(songsProp);
  }, [songsProp, loadSongs]);

  const progressRef = useRef<HTMLInputElement>(null);
  const currentTimeRef = useRef<HTMLSpanElement>(null);

  const currentSong = songs[currentSongIndex];

  // Update progress bar + time display directly in the DOM — no React re-render
  const updateProgressDOM = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !progressRef.current || !currentTimeRef.current) return;
    const t = audio.currentTime;
    const d = audio.duration || 1;
    progressRef.current.value = String(t);
    progressRef.current.max = String(d);
    progressRef.current.style.background = `linear-gradient(to right, #d1c58b 0%, #d1c58b ${(t / d) * 100}%, rgba(255,255,255,0.2) ${(t / d) * 100}%, rgba(255,255,255,0.2) 100%)`;
    const min = Math.floor(t / 60);
    const sec = Math.floor(t % 60);
    currentTimeRef.current.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
  }, [audioRef]);

  // Use rAF loop instead of timeupdate events — syncs with the browser's
  // paint cycle so DOM writes never trigger mid-frame style recalculations.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let rafId: number;
    const tick = () => {
      updateProgressDOM();
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
  }, [audioRef, updateProgressDOM]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seekTo(parseFloat(e.target.value));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentSong) return null;

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto p-0">
      {/* Compact Player Header - Bandcamp style */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 bg-white/5 rounded-lg p-6 sm:p-8">
        {/* Album Art - Top on mobile, Left on desktop */}
        <motion.div
          key={currentSong.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-[200px] md:max-w-none md:w-36 aspect-square flex-shrink-0 rounded overflow-hidden mx-auto md:mx-0"
        >
          <Image
            src={currentSong.albumArt}
            alt={`${currentSong.album} album art`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Player Controls - Right */}
        <div className="flex-1 flex flex-col min-w-0 items-center md:items-start">
          {/* Song Info */}
          <div className="text-center md:text-left w-full">
            <h2 className="text-base sm:text-lg font-bold text-white truncate leading-snug !mb-0 pb-0">{currentSong.title}</h2>
            <p className="text-xs sm:text-sm text-white/70 truncate">{currentSong.artist} - {currentSong.album}</p>
          </div>

          {/* Controls Row */}
          <div className="flex items-center gap-2 sm:gap-3 mt-0">
            <button
              onClick={handlePrevious}
              className="text-white/80 hover:text-[#d1c58b] active:text-[#d1c58b] transition-colors p-1.5"
              aria-label="Previous track"
            >
              <FaStepBackward className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={togglePlayPause}
              className="bg-[#d1c58b] hover:bg-[#c1b57b] active:bg-[#b1a56b] text-[#2f303b] rounded-full p-2.5 sm:p-3 transition-all"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <FaPause className="w-4 h-4 sm:w-5 sm:h-5" /> : <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              className="text-white/80 hover:text-[#d1c58b] active:text-[#d1c58b] transition-colors p-1.5"
              aria-label="Next track"
            >
              <FaStepForward className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Volume - desktop only */}
            <div className="hidden sm:flex items-center gap-2 ml-auto">
              <button
                onClick={toggleMute}
                className="text-white/60 hover:text-[#d1c58b] transition-colors p-1"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1.5 bg-white/20 rounded appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #d1c58b 0%, #d1c58b ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 mt-6">
            <span ref={currentTimeRef} className="text-[10px] sm:text-xs text-white/60 w-7 sm:w-9 tabular-nums">0:00</span>
            <input
              ref={progressRef}
              type="range"
              min="0"
              max={duration || 0}
              defaultValue={0}
              onChange={handleSeek}
              className="flex-1 h-2 sm:h-1.5 bg-white/20 rounded appearance-none cursor-pointer slider"
            />
            <span className="text-[10px] sm:text-xs text-white/60 w-7 sm:w-9 text-right tabular-nums">{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* Track List - Separate Section */}
      {showTracklist && (
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Tracklist</h3>
          <div className="space-y-1">
            {songs.map((song, index) => (
              <motion.button
                key={song.id}
                onClick={() => selectSong(index)}
                className={`w-full px-3 py-2 rounded transition-all text-left flex items-center gap-3 ${
                  currentSongIndex === index
                    ? 'bg-[#d1c58b]/20 border border-[#d1c58b]'
                    : 'hover:bg-white/5 border border-transparent'
                }`}
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                <span className="text-sm text-white/40 w-5">{index + 1}</span>
                <span className={`flex-1 text-sm truncate ${
                  currentSongIndex === index ? 'text-[#d1c58b] font-semibold' : 'text-white'
                }`}>
                  {song.title}
                </span>
                {currentSongIndex === index && isPlaying && (
                  <div className="flex gap-0.5 items-end h-3">
                    <motion.div
                      className="w-0.5 bg-[#d1c58b] rounded-full"
                      animate={{ height: ['40%', '100%', '40%'] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-0.5 bg-[#d1c58b] rounded-full"
                      animate={{ height: ['100%', '40%', '100%'] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-0.5 bg-[#d1c58b] rounded-full"
                      animate={{ height: ['40%', '100%', '40%'] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
