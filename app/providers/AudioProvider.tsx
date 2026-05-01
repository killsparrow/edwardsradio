"use client";

import { createContext, useContext, useState, useRef, useCallback, useEffect, type ReactNode, type RefObject } from 'react';
import { Song } from '@/lib/songs';

interface AudioContextType {
  songs: Song[];
  currentSongIndex: number;
  isPlaying: boolean;
  hasStarted: boolean;
  duration: number;
  volume: number;
  isMuted: boolean;
  audioRef: RefObject<HTMLAudioElement | null>;
  loadSongs: (songs: Song[]) => void;
  togglePlayPause: () => void;
  next: () => void;
  previous: () => void;
  seekTo: (time: number) => void;
  selectSong: (index: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
}

const AudioCtx = createContext<AudioContextType | null>(null);

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
}

export default function AudioProvider({ children }: { children: ReactNode }) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSong = songs[currentSongIndex];

  const loadSongs = useCallback((newSongs: Song[]) => {
    setSongs(prev => {
      if (prev.length === newSongs.length && prev.every((s, i) => s.id === newSongs[i].id)) {
        return prev;
      }
      setHasStarted(false);
      return newSongs;
    });
  }, []);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onDuration = () => setDuration(audio.duration);
    const onEnded = () => {
      setCurrentSongIndex(prev => (prev + 1) % songs.length);
      setTimeout(() => audioRef.current?.play(), 100);
    };

    audio.addEventListener('loadedmetadata', onDuration);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', onDuration);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentSongIndex, songs.length]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
      setHasStarted(true);
    }
  }, [isPlaying, currentSong]);

  const next = useCallback(() => {
    if (songs.length === 0) return;
    setCurrentSongIndex(prev => (prev + 1) % songs.length);
    setIsPlaying(true);
    setHasStarted(true);
    setTimeout(() => audioRef.current?.play(), 100);
  }, [songs.length]);

  const previous = useCallback(() => {
    if (songs.length === 0) return;
    setCurrentSongIndex(prev => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
    setHasStarted(true);
    setTimeout(() => audioRef.current?.play(), 100);
  }, [songs.length]);

  const seekTo = useCallback((time: number) => {
    if (audioRef.current) audioRef.current.currentTime = time;
  }, []);

  const selectSong = useCallback((index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
    setHasStarted(true);
    setTimeout(() => audioRef.current?.play(), 100);
  }, []);

  const setVolumeCtx = useCallback((vol: number) => {
    setVolume(vol);
    setIsMuted(vol === 0);
  }, []);

  const toggleMute = useCallback(() => {
    if (isMuted) {
      setVolume(1);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  }, [isMuted]);

  return (
    <AudioCtx.Provider value={{
      songs,
      currentSongIndex,
      isPlaying,
      hasStarted,
      duration,
      volume,
      isMuted,
      audioRef,
      loadSongs,
      togglePlayPause,
      next,
      previous,
      seekTo,
      selectSong,
      setVolume: setVolumeCtx,
      toggleMute,
    }}>
      <audio ref={audioRef} src={currentSong?.audioUrl} />
      {children}
    </AudioCtx.Provider>
  );
}
