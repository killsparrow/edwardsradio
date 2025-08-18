import FeralNights from "../components/feralNights";
import ThisEndlessLifePlayer from "../components/thisEndlessLife";
import WarpathToYourOwnGhost from "../components/WarpathToYourOwnGhost";

export default function Music() {
  return (
    <div className="relative min-h-dvh bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-[10%] w-[30%] max-h-[30vh] z-0">
        <img src="/strings-scaled.gif" alt="" className="w-full h-auto" />
      </div>

      {/* main content centered in the visible space (viewport minus 40vh footer art) */}
      <main className="relative z-10 p-8 flex items-center justify-center min-h-[calc(100dvh-10vh)]">
        <section className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-12 bg-black/40">
          <div className="flex-none w-[300px] px-8">
            <img
              src="/edwards-radio.png"
              alt="Edwards Radio"
              className="block w-full h-auto"
            />
          </div>

          {/* Right: fills remaining space */}
          <div className="flex-1 min-w-0 text-left leading-relaxed">
            <h1>Music</h1>
            <WarpathToYourOwnGhost />
            <ThisEndlessLifePlayer />
           <FeralNights />
           
          </div>
        </section>
      </main>

      {/* bottom art (doesn't block clicks) */}
      <div className="fixed inset-x-0 bottom-0 max-h-[40%] pointer-events-none z-0">
        <img
          src="/bottom-scaled.gif"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </div>
  );
}
