import SeoJsonLd from "./components/SeoJsonLd";
import Section from "./components/Section";
import Hero from "./components/Hero";
import MusicPage from "./components/AlbumCard";
import Image from "next/image";




export default function Home() {
  return (
    <>
      <SeoJsonLd />

      <div className="relative text-white">
        <Hero />

        {/* MUSIC */}
        <Section id="music">
          {/* Background */}

          <MusicPage />
        </Section>

        {/* ABOUT */}
        <Section id="about" className="bg-[#242320] py-20">
          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              {/* Portrait */}
              <div className="flex-1">
                <Image
                  src="/evan-parker3.jpg"
                  alt="Evan Parker (Edwards Radio)"
                  width={600}
                  height={800}
                  sizes="(min-width: 1024px) 600px, 90vw"
                  className="rounded-2xl shadow-xl object-cover w-full h-auto"
                  priority
                />
              </div>

              {/* Copy */}
              <div className="flex-1 max-w-lg text-left leading-relaxed">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  <span className="text-white/80">Edwards Radio</span>.
                </h2>

                <p className="mt-5 text-white/80">
                  Edwards Radio is Evan Parker. <i>The Weight of Illusion</i> presents
                  lyric-driven songs with restrained production—intimate vocals,
                  spacious guitars, and measured arrangements. Recorded and
                  mixed in Florida; mastered for digital release.
                </p>
                 <p className="mt-5 text-white/80">Written, recorded, and mastered by Edwards Radio.<br />All rights reserved &copy;2025.</p>

                <div className="mt-8 flex gap-4">
      
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-2xl px-5 py-3 border border-white/20 text-white hover:bg-white/5 transition"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* VIDEO */}
        {/* <Section id="video" className="bg-black">
          <div className="relative z-10 w-full max-w-4xl mx-auto p-8">
            <div className="w-full max-w-4xl flex flex-col md:flex-row items-start gap-12 bg-black/40">
              <div className="flex-none w-[300px] px-8">
                <img
                  src="/edwards-radio.png"
                  alt="Edwards Radio"
                  className="block w-full h-auto"
                />
              </div>
              <div className="flex-1 min-w-0 text-left leading-relaxed">
                <h2 className="text-3xl font-bold">Video</h2>
                <div className="mt-6">
                  <Video />
                </div>
              </div>
            </div>
          </div>
        </Section> */}

        {/* CONTACT */}
        <Section id="contact" className="bg-black">
          <div className="relative z-10 w-full max-w-4xl mx-auto p-8">
            <div className="w-full max-w-4xl flex flex-col md:flex-row items-start gap-12 bg-black/40">
              <div className="flex-1 min-w-0 text-left leading-relaxed">
                <h2 className="text-3xl font-bold">Contact</h2>
                <p className="mt-4">
                  Press, management, and other inquiries:{" "}
                  <a
                    href="mailto:info@edwardsradio.com"
                    className="text-[#d0bd3b] underline"
                  >
                    Evan Parker
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
