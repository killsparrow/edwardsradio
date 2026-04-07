"use client";

import Image from "next/image";
import UnderwaterWaves from "../components/UnderwaterWaves";
import StreamingLinks from "../components/StreamingLinks";
import { Song } from "@/lib/songs";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "../providers/AudioProvider";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

/* ── track data — single source of truth ── */

const tracks: {
  title: string;
  audioUrl: string;
  subtitle?: string;
  lyrics?: React.ReactNode;
}[] = [
  {
    title: "Billboard",
    audioUrl: "/music/2026/billboard.m4a",
    lyrics: (
      <>
        <p>
          Dreams I hold, I hope I never let go of.<br />
          It looks like rain at night only unfolds.<br />
          Orange groves and lights exposed, don&rsquo;t let&nbsp;go.
        </p>
        <p>
          I know, I know, the sky is taken away.<br />
          I know, I know, I&rsquo;m to blame. I&rsquo;m to blame.<br />
          And I don&rsquo;t know what&rsquo;s worse, that it was paid for, or that it works.
        </p>
        <p>
          Message paid for by someone we don&rsquo;t know.<br />
          It looks like light at night, but it doesn&rsquo;t let go.
        </p>
        <p>
          It&rsquo;s cursed, they say it&rsquo;s cursed.<br />
          I don&rsquo;t know if it&rsquo;s real, maybe it&rsquo;s worse
        </p>
        <p>
          I know, I know, the sky is taken away.<br />
          I know, I know, I&rsquo;m to blame. I&rsquo;m to blame.
        </p>
        <p>And I don&rsquo;t know what&rsquo;s worse, that it was paid for or that it works.</p>
      </>
    ),
  },
  {
    title: "At the Table",
    audioUrl: "/music/2026/at-the-table.m4a",
    lyrics: (
      <>
        <p>
          In the place I used to wait for you, at the table. At the table.<br />
          In the place I used to hide from you, under the table.
        </p>
        <p>Needle falls right through, stare at the clock.</p>
        <p>
          In the place she used to fade away, staring through the cracks.<br />
          Hey light, hey life.<br />
          In the place she used to waste away, falling through the cracks.<br />
          Hey light, hey life.
        </p>
        <p>In this place we used to wait all day, at the table. At the table.</p>
        <p>In this place we used to hide away, under the table.</p>
        <p>Needle falls right through, stare at the clock. Stare at the clock.</p>
        <p>
          In the place she used to fade away, falling through the cracks.<br />
          Hey life, hey light.<br />
          In this place she used to waste away, falling through the cracks.<br />
          Hey light, hey life.
        </p>
      </>
    ),
  },
  {
    title: "Underwater",
    audioUrl: "/music/2026/underwater.m4a",
    lyrics: (
      <>
        <p>
          I don&rsquo;t mind, I&rsquo;ll be yours anytime that you want me to be there for you.<br />
          I&rsquo;m just a person on your black t-shirt.<br />
          That&rsquo;s all I&rsquo;ll ever be, it&rsquo;s all I ever was.<br />
          The fabric beneath me thins, spin cycle takes me again.
        </p>
        <p>
          Been underwater for too long to fake ends.<br />
          Do you remember the parts of me that washed away with time?
        </p>
        <p>
          I&rsquo;m just a person on your black t-shirt.<br />
          If given the choice I&rsquo;d join you in your world.<br />
          I&rsquo;d meet you where you live, I&rsquo;d hold you in real life.<br />
          Fade away with me in this machine.<br />
          Fade away with me in this machine.
        </p>
        <p>
          Been underwater for too long to fake ends.<br />
          Do you remember the parts of me that washed away with time?
        </p>
      </>
    ),
  },
  {
    title: "Dark Side",
    audioUrl: "/music/2026/i-fell-in-love.m4a",
    lyrics: (
      <>
        <p>
          Did your heart die?<br />
          I think you got it,<br />
          pretty well figured out now.<br />
          Don&rsquo;t need to spot you.<br />
          Did you lose your mind?<br />
          I think you got it, figured out.
        </p>
        <p>I think you got it, figured out.</p>
        <p>
          Are you brain dead now? Did you listen to the audio?<br />
          Was it rock n roll? Are you under control?<br />
          Did you lose your mind? I think you got it, pretty well figured out.
        </p>
        <p>I think you got it, figured out.</p>
        <p>
          My rope ladder hangs from a door in the sky, I was lost inside since I was a child.<br />
          I never listened to what they told me to do, and I fell in love with the dark side.
        </p>
        <p>Fell in love with the dark side.</p>
        <p>
          Did your light fade out? I think you figured it out.<br />
          No need to run and hide, they won&rsquo;t come to find you.<br />
          Did you lose control? I think you got it, figured out.
        </p>
        <p>
          My rope ladder hangs from a door in the sky, I was lost inside since I was a child.<br />
          I never listened to what they told me to do, and I fell in love with the dark side.
        </p>
      </>
    ),
  },
  {
    title: "Professor",
    audioUrl: "/music/2026/professor.m4a",
    lyrics: (
      <>
        <p>
          Professor I profess, I don&rsquo;t have the answers, I don&rsquo;t have the answers yet, to any of this.<br />
          And in these halls I can hear their calls past every door and on every floor, I&rsquo;m hiding from your observation.<br />
          I&rsquo;m hiding from your observation.
        </p>
        <p>
          And so far I haven&rsquo;t caught on yet.<br />
          I thought by now that I&rsquo;d be so much stronger.<br />
          And so far I haven&rsquo;t caught on yet.<br />
          I thought by now that I&rsquo;d be so much stronger than I am.
        </p>
        <p>
          And at your desk I must confess I&rsquo;m not strong enough yet to take on<br />
          All that you got wrong.<br />
          And in a way I could realize that you would have hoped for someone to sail this ship when you are gone.
        </p>
        <p>I&rsquo;m hiding from your observation.</p>
        <p>
          And so far I haven&rsquo;t caught on yet.<br />
          I thought by now that I&rsquo;d be so much stronger.<br />
          And so far I haven&rsquo;t caught on yet.<br />
          I thought by now that I&rsquo;d be so much stronger than I am.
        </p>
      </>
    ),
  },
  {
    title: "Cold and Dreary",
    audioUrl: "/music/2026/cold-and-dreary.m4a",
    subtitle: "Inspired by Henry Wadsworth Longfellow, where his likeness sits in Longfellow Square, Portland, Maine. Lyrics reference his poem The Rainy Day (1841).",
    lyrics: (
      <>
        <p>
          Eyes open wide,<br />
          Picture frame views of the east.<br />
          You never stop to say hi, when you pass me by.<br />
          Down this sea of brick late at night.
        </p>
        <p>
          I wish to be alive, and in your eyes.<br />
          Into each life some rain must fall.<br />
          You were meant to pass through.<br />
          But for each storm I am stuck here now.<br />
          As I sit and watch time pass me by.
        </p>
        <p>
          Slow when you open.<br />
          Slow when you go in.<br />
          I&rsquo;ll wait in the cold and dreary.
        </p>
        <p>
          Eyes open wide.<br />
          Picture frame views watch the world pass you by.<br />
          Long after you&rsquo;re gone, I will be here for an eternity.<br />
          I&rsquo;ll await your return,<br />
          From the lanterns on state,<br />
          On this granite I ride.<br />
          Into each life some rain must fall.
        </p>
        <p>
          Slow when you open.<br />
          Slow when you go in.<br />
          I&rsquo;ll wait in the cold and dreary.
        </p>
        <p>Oh be still.</p>
        <p>
          Slow when you go in.<br />
          Slow when you open.<br />
          I&rsquo;ll wait in the cold and dreary.
        </p>
        <p>
          Eyes open wide.<br />
          Into life some rain must fall.
        </p>
      </>
    ),
  },
  {
    title: "Only You",
    audioUrl: "/music/2026/only-you.m4a",
    lyrics: (
      <>
        <p>
          Only you could be so beautiful when you cry.<br />
          I see your eyes like stars against the black of night.<br />
          Like a heron in the trees.<br />
          And I wonder why you would ever want to be so alone.
        </p>
        <p>
          Only you could be<br />
          So warm and kind.<br />
          When the world takes aim at the brighter side and it feels like nothing ever changes.<br />
          Only your smile could last this long, I see you. I see you.
        </p>
        <p>Stay for the night, leave for the day, try not to cry, dry your eyes on your sleeve.</p>
        <p>
          You don&rsquo;t want to be alright, you don&rsquo;t want to be ok.<br />
          You don&rsquo;t want to be just fine, at least not their way, not their way.
        </p>
        <p>I still believe in love.<br />I still believe in love.</p>
        <p>
          Only you, could be, a light this bright.<br />
          A beacon at night, a place to reset to, a chance to believe in something more.<br />
          And I see you. I see you.
        </p>
        <p>Stay for the night, leave for the day, try not to cry, dry your eyes on your sleeve.</p>
        <p>
          You don&rsquo;t want to be alright, you don&rsquo;t want to be ok.<br />
          You don&rsquo;t want to be just fine, at least not their way, not their way.
        </p>
        <p>I still believe in love.<br />I still believe in love.</p>
        <p>
          I don&rsquo;t want to be alright, I don&rsquo;t want to be ok.<br />
          I don&rsquo;t want to be just fine, at least not their way, not their way.
        </p>
        <p>I still believe in love.<br />I still believe in love.</p>
      </>
    ),
  },
  {
    title: "Oliver at the Bridge",
    audioUrl: "/music/2026/at-the-bridge.m4a",
    lyrics: (
      <>
        <p>
          Oliver standing at the bridge, waiting for you to return to this place.<br />
          I know it&rsquo;s been 100 years, if you return to the place would you still recognize my face?<br />
          Or would you see the lines and just walk away?<br />
          Would you see the lines and just walk away?
        </p>
        <p>
          I see no way to save you now.<br />
          From a world that keeps on leading you down, the wrong road the wrong way.<br />
          There&rsquo;s no way out.
        </p>
        <p>
          Oliver standing at the bridge, waiting for you to return to this place.<br />
          I know it&rsquo;s been 1000 years, if you return to the place would you still recognize my face?<br />
          Would you hold me in your arms?<br />
          Would you still hold me in your arms?
        </p>
        <p>
          I see no way to save you now.<br />
          From a world that keeps on leading you down, the wrong road the wrong way.<br />
          There&rsquo;s no way out.
        </p>
      </>
    ),
  },
  {
    title: "St George",
    audioUrl: "/music/2026/st-george.m4a",
    lyrics: (
      <>
        <p>
          I ain&rsquo;t a cowboy,<br />
          ain&rsquo;t got a ten gallon hat.<br />
          Don&rsquo;t wear rattlesnake boots under my jeans,<br />
          but I lived in Texas, slept beneath lone stars,<br />
          turned bluebonnets into eagle claws.<br />
          If you live there you&rsquo;d know what I mean.<br />
          South of San Marcos in New Braunfels I&rsquo;ve seen<br />
          so many things that can&rsquo;t be unseen.
        </p>
        <p>
          I ain&rsquo;t a cowboy,<br />
          ain&rsquo;t got no horse,<br />
          never filed for divorce.<br />
          Somewhere way out west of Texas,<br />
          laid my head in the gorges of old St. George&rsquo;s<br />
          canyons and counted the stars.<br />
          Got so lost in between Native American scars.<br />
          Somewhere way out west of Texas,<br />
          tell me how did you earn yours.
        </p>
        <p>
          I was way out west of Texas,<br />
          laid my head in the gorges of old St. George&rsquo;s<br />
          canyons and counted the stars.<br />
          Got so lost in between Native American scars.<br />
          Way out west of Texas,<br />
          tell me how did you earn yours.
        </p>
      </>
    ),
  },
];

/* ── derived song list for audio player ── */

const underwaterSongs: Song[] = tracks.map((t, i) => ({
  id: i + 1,
  title: t.title.toLowerCase(),
  artist: "Edwards Radio",
  album: "Underwater",
  albumArt: "/2026.jpg",
  audioUrl: t.audioUrl,
}));

/* ── Zissou-style player (no tracklist) ── */

function ZissouPlayer() {
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
    songs,
  } = useAudio();

  useEffect(() => {
    loadSongs(underwaterSongs);
  }, [loadSongs]);

  const progressRef = useRef<HTMLInputElement>(null);
  const currentTimeRef = useRef<HTMLSpanElement>(null);
  const seekingRef = useRef(false);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => {
      if (seekingRef.current || !progressRef.current || !currentTimeRef.current) return;
      const t = audio.currentTime;
      const d = audio.duration || 1;
      progressRef.current.value = String(t);
      progressRef.current.max = String(d);
      progressRef.current.style.background = `linear-gradient(to right, #bfb689 0%, #bfb689 ${(t / d) * 100}%, rgba(255,255,255,0.15) ${(t / d) * 100}%, rgba(255,255,255,0.15) 100%)`;
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
      {/* Compact horizontal player */}
      <div className="flex items-center gap-4">
        {/* Album art — small porthole */}
        <motion.div
          key={currentSong.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#494a5d] p-0.5 flex-shrink-0 relative"
        >
          <div className="w-full h-full rounded-full overflow-hidden relative border border-[#a0633b]/40">
            <Image
              src={currentSong.albumArt}
              alt={`${currentSong.album} album art`}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Porthole bolts */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#494a5d]/50 border border-[#494a5d]/70" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#494a5d]/50 border border-[#494a5d]/70" />
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#494a5d]/50 border border-[#494a5d]/70" />
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#494a5d]/50 border border-[#494a5d]/70" />
        </motion.div>

        {/* Track info + controls + progress */}
        <div className="flex-1 min-w-0">
          {/* Title row */}
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

          {/* Controls + progress in one row */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevious}
              className="text-white/40 hover:text-[#bfb689] transition-colors"
              aria-label="Previous track"
            >
              <FaStepBackward className="w-2.5 h-2.5" />
            </button>

            <button
              onClick={togglePlayPause}
              className="w-8 h-8 rounded-full border border-[#bfb689] flex items-center justify-center text-[#bfb689] hover:bg-[#bfb689] hover:text-[#24252d] transition-all flex-shrink-0"
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
              className="text-white/40 hover:text-[#bfb689] transition-colors"
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

/* ── page ── */

export default function Underwater() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const { selectSong, currentSongIndex, isPlaying } = useAudio();

  return (
    <article
      className="bg-[#2f303b] relative"
      aria-label="Underwater — album by Edwards Radio"
    >
      <div
        id="underwater-page"
        className="min-h-screen pt-20 pb-16 bg-[#2f303b] relative z-10 bg-[url('/ship.webp')] bg-no-repeat bg-[center_top] bg-[length:200%_auto] md:bg-[length:100%_auto] mx-auto"
        style={{ overflowX: "clip" }}
      >
        {/* Animated waves overlay */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{ aspectRatio: "1920/1250" }}
          aria-hidden="true"
        >
          <UnderwaterWaves />
        </div>

        {/* Content area */}
        <div className="w-[90%] mx-auto bg-[#24252d]/70 mt-40 md:mt-80 mb-16 relative overflow-hidden">
          {/* Decorative grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(#f5e6c8 1px, transparent 1px),
                linear-gradient(90deg, #f5e6c8 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative p-6 md:p-10">

            {/* Visually hidden h1 for SEO — the player shows the album name visually */}
            <h1 className="sr-only">Underwater — Album by Edwards Radio (2026)</h1>

            {/* Player */}
            <section aria-label="Music player" className="py-6">
              <ZissouPlayer />
            </section>

            {/* Tracklist / Lyrics */}
            <section aria-label="Tracklist and lyrics" className="max-w-3xl mx-auto py-4">
              <h2 className="sr-only">Tracklist</h2>
              <ol className="list-none m-0 p-0 space-y-0" role="list">
                {tracks.map((track, index) => {
                  const isActive = currentSongIndex === index;
                  return (
                    <li key={index} className="border-t border-[#494a5d]/50">
                      <div className="flex items-center gap-0">
                        <button
                          onClick={() => selectSong(index)}
                          aria-label={`Play ${track.title}`}
                          aria-current={isActive ? "true" : undefined}
                          className={`py-4 px-2 md:px-4 flex items-center gap-4 md:gap-6 transition-colors text-left group flex-1 min-w-0 ${
                            isActive ? "bg-[#bfb689]/5" : "hover:bg-white/[0.02]"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`text-[10px] uppercase tracking-[0.3em] w-12 flex-shrink-0 font-bold ${
                              isActive ? "text-[#bfb689]" : "text-[#bfb689]/30"
                            }`}
                          >
                            Ch. {index + 1}
                          </span>
                          <span aria-hidden="true" className="flex-shrink-0 w-4 md:w-6 h-px bg-[#494a5d]/60 group-hover:bg-[#a0633b]/40 transition-colors" />
                          <span
                            className={`flex-1 text-base md:text-lg tracking-wide truncate ${
                              isActive
                                ? "text-[#bfb689] font-semibold"
                                : "text-white group-hover:text-[#bfb689] transition-colors"
                            }`}
                          >
                            {track.title}
                          </span>
                          {isActive && isPlaying && (
                            <div className="flex gap-0.5 items-end h-3 flex-shrink-0" aria-hidden="true">
                              <motion.div className="w-0.5 bg-[#bfb689] rounded-full" animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 0.8, repeat: Infinity }} />
                              <motion.div className="w-0.5 bg-[#bfb689] rounded-full" animate={{ height: ["100%", "40%", "100%"] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} />
                              <motion.div className="w-0.5 bg-[#bfb689] rounded-full" animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
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
                              className="text-[#494a5d] hover:text-[#a0633b] text-lg transition-colors block"
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
                                <div className="border border-[#494a5d]/30 px-4 py-3 mb-5">
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#c4895f] !mb-0">
                                    {track.subtitle}
                                  </p>
                                </div>
                              )}
                              <div className="text-white/80 text-sm leading-relaxed border-l-2 border-[#a0633b]/30 pl-6 pt-2">
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

                      <nav aria-label="Stream or purchase Underwater">
                <div className="flex justify-center">
                  <StreamingLinks
                    spotify="https://open.spotify.com/album/0NoYPQJRnnNoZ3f7MPRA2F?si=S3Cbu54PSbKsLIphFXwmnw"
                    youtube="https://www.youtube.com/watch?v=hPPAhWVmotY&list=OLAK5uy_nPsB4JATPU2l9D4dtOptunzWo8vCSb4zs"
                    apple="https://music.apple.com/us/album/the-weight-of-illusion/1848579138"
                    bandcamp="https://edwardsradio.bandcamp.com/album/the-weight-of-illusion"
                  />
                </div>
              </nav>

            {/* AIAPS section */}
            <section aria-label="AI audio protection" className="max-w-xl mx-auto text-center py-10">
              <div className="border border-[#494a5d]/40 p-6 md:p-8">
                <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#a0633b] mb-4 !text-[10px]">
                  AI Audio Protection
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  All audio on this album is protected under the{" "}
                  <strong className="text-white">AIAPS Standard</strong>, an open framework
                  that safeguards music from unauthorized AI training and reproduction.
                </p>
                <a
                  href="https://aiaps-standard.org"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#bfb689] border border-[#bfb689]/40 px-6 py-2 hover:bg-[#bfb689] hover:text-[#24252d] transition-all"
                >
                  Learn More
                </a>
              </div>
            </section>

            {/* Album credits */}
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
