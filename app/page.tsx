import SeoJsonLd from "./components/SeoJsonLd";
import Section from "./components/Section";
import UnderwaterComingSoonHero from "./components/UnderwaterComingSoonHero";
import TheWeightOfIllusionHero from "./components/TheWeightOfIllusionHero";
import MusicPage from "./components/AlbumCard";
import GridOverlay from "./components/GridOverlay";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SeoJsonLd />

      <div className="relative text-white bg-[#2f303b]">
        <UnderwaterComingSoonHero />

        {/* <TheWeightOfIllusionHero /> */}

        {/* AIAPS */}
        <section id="aiaps" className="relative bg-[#24252d] py-28 md:py-32 snap-start overflow-hidden">
          <div className="relative z-10 w-full max-w-xl mx-auto px-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#a0633b] mb-4">
              AI Audio Protection
            </p>
            <h2 className="text-2xl md:text-3xl uppercase tracking-[0.15em] text-white !mb-0">
              AIAPS Standard
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4 mb-8">
              <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Open Framework
              </span>
              <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
            </div>

            <div className="border border-[#494a5d]/40 p-6 md:p-8 bg-[#2f303b]/40">
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                All audio released by Edwards Radio is protected under the{" "}
                <strong className="text-white">AIAPS Standard</strong>, an open
                framework that safeguards music from unauthorized AI training and
                reproduction.
              </p>
              <a
                href="https://aiaps-standard.org"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#bfb689] border border-[#bfb689]/40 px-6 py-2 mt-2 hover:bg-[#bfb689] hover:text-[#24252d] transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* MUSIC */}
        <Section id="music" className="bg-[#2f303b]">
          <GridOverlay />
          <div className="relative z-10 w-full">
            <MusicPage />
          </div>
        </Section>

        {/* ABOUT */}
        <Section id="about" className="bg-[#24252d] py-20">
          <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#a0633b] mb-4">
                About
              </p>
              <h2 className="text-2xl md:text-3xl uppercase tracking-[0.15em] text-white !mb-0">
                Edwards Radio
              </h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Captain&rsquo;s Log
                </span>
                <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center">
              {/* Logs image */}
              <div className="flex-shrink-0 w-64 md:w-96">
                <div className="border border-[#494a5d]/40 p-1">
                  <Image
                    src="/underwater/logs.jpg"
                    alt=""
                    width={800}
                    height={533}
                    sizes="(min-width: 768px) 384px, 256px"
                    className="object-cover w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="flex-1 max-w-lg text-left leading-relaxed border-l-2 border-[#a0633b]/30 pl-6">
                <p className="text-white/80 text-sm md:text-base">
                  Edwards Radio is the indie folk project of songwriter Evan
                  Parker, with four studio albums released between 2022 and
                  2026. Parker has carved out a distinctive sonic space where
                  the raw sincerity of folk intersects with the textured depth
                  of indie rock. Recorded and mixed entirely in his home
                  studio, his music showcases an evolving craft as both a
                  songwriter and producer, capturing analog moments with a
                  DIY/lo-fi spirit that never sacrifices emotional impact.
                </p>

                <div className="mt-8 flex gap-4">
                  <a
                    href="#contact"
                    className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#bfb689] border border-[#bfb689]/40 px-6 py-3 hover:bg-[#bfb689] hover:text-[#24252d] transition-all"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative min-h-dvh snap-start flex items-center overflow-hidden"
          style={{
            backgroundColor: "#2f303b",
            backgroundImage: "url(/bottom-whale.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            backgroundPosition: "bottom center",
          }}
        >
          <GridOverlay />
          <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#a0633b] mb-4">
                Contact
              </p>
              <h2 className="text-2xl md:text-3xl uppercase tracking-[0.15em] text-white !mb-0">
                Get in Touch
              </h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Press / Management
                </span>
                <span className="w-12 h-px bg-[#494a5d]" aria-hidden="true" />
              </div>
            </div>

            <div className="border border-[#494a5d]/40 p-8 md:p-10 text-center bg-[#24252d]/40">
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                For press, management, and other inquiries, reach out to
                Evan Parker directly.
              </p>
              <a
                href="mailto:info@edwardsradio.com"
                className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#bfb689] border border-[#bfb689]/40 px-8 py-3 hover:bg-[#bfb689] hover:text-[#24252d] transition-all"
              >
                info@edwardsradio.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
