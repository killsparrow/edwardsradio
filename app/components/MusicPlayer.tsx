"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { motion } from 'framer-motion';

export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  audioUrl: string;
  duration?: string;
}

interface MusicPlayerProps {
  songs: Song[];
}

export default function MusicPlayer({ songs }: MusicPlayerProps) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play(), 100);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play(), 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setIsMuted(vol === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(1);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };

  const selectSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play(), 100);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl mx-auto p-4">
      {/* Left Side: Player Controls & Playlist */}
      <div className="lg:w-3/5 flex flex-col gap-6">
        {/* Song Info & Player Controls */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white mb-1">{currentSong.title}</h2>
            <p className="text-base text-white/70 mb-0.5">{currentSong.artist}</p>
            <p className="text-sm text-white/50">{currentSong.album}</p>
          </div>

          {/* Player Controls */}
          <div className="space-y-3">
            {/* Playback Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevious}
                className="text-white/80 hover:text-[#d1c58b] transition-colors p-1"
                aria-label="Previous track"
              >
                <FaStepBackward size={20} />
              </button>

              <button
                onClick={togglePlayPause}
                className="bg-[#d1c58b] hover:bg-[#c1b57b] text-black rounded-full p-3 transition-all transform hover:scale-105"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} className="ml-0.5" />}
              </button>

              <button
                onClick={handleNext}
                className="text-white/80 hover:text-[#d1c58b] transition-colors p-1"
                aria-label="Next track"
              >
                <FaStepForward size={20} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #d1c58b 0%, #d1c58b ${(currentTime / duration) * 100}%, rgba(255,255,255,0.2) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-white/60">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="text-white/80 hover:text-[#d1c58b] transition-colors"
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
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #d1c58b 0%, #d1c58b ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Unreleased</h3>
          <div className="space-y-1.5">
          {songs.map((song, index) => (
            <motion.button
              key={song.id}
              onClick={() => selectSong(index)}
              className={`w-full p-3 rounded transition-all text-left flex items-center gap-3 ${
                currentSongIndex === index
                  ? 'bg-[#d1c58b]/20 border border-[#d1c58b]'
                  : 'bg-white/5 hover:bg-white/10 border border-transparent'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={song.albumArt}
                  alt={`${song.album} album art`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-semibold truncate ${
                  currentSongIndex === index ? 'text-[#426c69]' : 'text-white'
                }`}>
                  {song.title}
                </h4>
                <p className="text-xs text-white/60 truncate">{song.artist}</p>
              </div>
              {currentSongIndex === index && isPlaying && (
                <div className="flex gap-0.5 items-end h-4">
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
      </div>

      {/* Right Side: Album Artwork */}
      <div className="lg:w-2/5">
        <motion.div
          key={currentSong.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-square w-full max-w-sm mx-auto lg:mx-0 rounded overflow-hidden shadow-xl p-4"
        >
          <Image
            src={currentSong.albumArt}
            alt={`${currentSong.album} album art`}
            fill
            className="object-cover"
            priority
          />
          {isPlaying && (
            <motion.div
              className="absolute inset-0 bg-black/10"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={currentSong.audioUrl} />

      {/* Custom Slider Styles */}
      <style jsx global>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #d1c58b;
          cursor: pointer;
          box-shadow: 0 0 6px rgba(209, 197, 139, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #d1c58b;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 6px rgba(209, 197, 139, 0.5);
        }
      `}</style>
    </div>
  );
}
