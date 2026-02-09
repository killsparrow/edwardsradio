import { Metadata } from "next";
import MusicPlayer from '../components/MusicPlayer';
import UnderwaterWaves from '../components/UnderwaterWaves';
import LyricsAccordion from '../components/LyricsAccordion';
import StreamingLinks from '../components/StreamingLinks';
import { underwaterSongs } from '@/lib/songs';

export const metadata: Metadata = {
  title: "Underwater | Edwards Radio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Underwater() {
  return (
    <main
    className="bg-[#2f303b] relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img
        src="/whales.png"
        alt=""
        className="absolute top-[75%] right-0 w-1/4 pointer-events-none z-0"
      /> */}
          <div
      id="underwater-page"
      className="min-h-screen pt-20 pb-0 bg-[#2f303b] relative z-10 bg-[url('/ship.webp')] bg-no-repeat bg-[center_top] bg-[length:200%_auto] md:bg-[length:100%_auto] mx-auto"
      style={{ overflowX: 'clip' }}
    >

      {/* Overlay matching rendered background image for proportional positioning */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ aspectRatio: '1920/1250' }}
      >
        <UnderwaterWaves />
      </div>

      <div className="w-[90%] mx-auto bg-[#24252d]/70 sm: mt-48 md:mt-108 p-10">

        <MusicPlayer songs={underwaterSongs} showTracklist={false} />

        <div className="mt-8 max-w-2xl p-4 mx-auto text-center mb-8">
          <h1 className="text-[#bfb689]" >Underwater</h1>
          <h5 className="mb-4 text-white">Home recorded demos<br />By: Edwards Radio</h5>

          <p className="mb-4 text-white">This album was built on simple analog principles, live takes, and honest performance. No fancy fixins.</p>
  
          <p className="mb-4 text-white">All songs were written and recorded by Edwards Radio - &copy; 2026.</p>

          <div className="flex justify-center">
            <StreamingLinks
              spotify="https://open.spotify.com/album/0NoYPQJRnnNoZ3f7MPRA2F?si=S3Cbu54PSbKsLIphFXwmnw"
              youtube="https://www.youtube.com/watch?v=hPPAhWVmotY&list=OLAK5uy_nPsB4JATPU2l9D4dtOptunzWo8vCSb4zs"
              apple="https://music.apple.com/us/album/the-weight-of-illusion/1848579138"
              bandcamp="https://edwardsradio.bandcamp.com/album/the-weight-of-illusion"
            />
          </div>
        </div>

        <hr className="my-6 border-t border-[#494a5d]" />

        <LyricsAccordion>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="text-[#bfb689] font-bold">Billboard</h3>
            <p className="text-white">
              Dreams I hold, I hope I never let go of.
              <br />
              It looks like rain at night only unfolds.
              <br />
              Orange groves and lights exposed, don't let&nbsp;go.
            </p>
            <p className="text-white">
              I know, I know, the sky is taken away.
              <br />
              I know, I know, I'm to blame. I'm to blame.
              <br />
              And I don't know what's worse, that it was paid for, or that it works.
            </p>
            <p className="text-white">
              Message paid for by someone we don't know.
              <br />
              It looks like light at night, but it doesn't let go.
            </p>
            <p className="text-white">
              It's cursed, they say it's cursed.
              <br />I don't know if it's real, maybe it's worse
            </p>
            <p className="text-white">
              I know, I know, the sky is taken away.
              <br />
              I know, I know, I'm to blame. I'm to blame.
            </p>
            <p className="text-white">
              And I don't know what's worse, that it was paid for or that it works.
            </p>
          </div>

          <div className="p-4">
            <h3 className="text-[#bfb689] font-bold">At the Table</h3>
            <p className="text-white">
              In the place I used to wait for you, at the table. At the table.
              <br />
              In the place I used to hide from you, under the table.
            </p>
            <p className="text-white">
              Needle falls right through, stare at the clock.
            </p>
            <p className="text-white">
              In the place she used to fade away, staring through the cracks.
              <br />
              Hey light, hey life.
              <br />
              In the place she used to waste away, falling through the cracks.
              <br />
              Hey light, hey life.
            </p>
            <p className="text-white">
              In this place we used to wait all day, at the table. At the table.
            </p>
            <p className="text-white">
              In this place we used to hide away, under the table.
            </p>
            <p className="text-white">
              Needle falls right through, stare at the clock. Stare at the
              clock.
            </p>
            <p className="text-white">
              In the place she used to fade away, falling through the cracks.
              <br />
              Hey life, hey light.
              <br />
              In this place she used to waste away, falling through the cracks.
              <br />
              Hey light, hey life.
            </p>
          </div>

          <div className="p-4">
            <h3 className="text-[#bfb689] font-bold">Underwater</h3>
            <p className="text-white">
              I don't mind, I'll be yours anytime that you want me to be there for you.
              <br />
              I'm just a person on your black t-shirt.
              <br />
              That's all I'll ever be, it's all I ever was.
              <br />
              The fabric beneath me thins, spin cycle takes me again.
            </p>
            <p className="text-white">
              Been underwater for too long to fake ends.
              <br />
              Do you remember the parts of me that washed away with time?
            </p>
            <p className="text-white">
              I'm just a person on your black t-shirt.
              <br />
              If given the choice I'd join you in your world.
              <br />
              I'd meet you where you live, I'd hold you in real life.
              <br />
              Fade away with me in this machine.
              <br />
              Fade away with me in this machine.
            </p>
            <p className="text-white">
              Been underwater for too long to fake ends.
              <br />
              Do you remember the parts of me that washed away with time?
            </p>
          </div>

          <div className="p-4">
            <h3 className="text-[#bfb689] font-bold">Dark Side</h3>
            <p className="text-white">
              Did your heart die?
              <br />
              I think you got it,
              <br />
              pretty well figured out now.
              <br />
              Don't need to spot you.
              <br />
              Did you lose your mind?
              <br />
              I think you got it, figured out.
            </p>
            <p className="text-white">I think you got it, figured out.</p>
            <p className="text-white">
              Are you brain dead now? Did you listen to the audio?
              <br />
              Was it rock n roll? Are you under control?
              <br />
              Did you lose your mind? I think you got it, pretty well figured out.
            </p>
            <p className="text-white">I think you got it, figured out.</p>
            <p className="text-white">
              My rope ladder hangs from a door in the sky, I was lost inside since I was a child.
              <br />
              I never listened to what they told me to do, and I fell in love with the dark side.
            </p>
            <p className="text-white">Fell in love with the dark side.</p>
            <p className="text-white">
              Did your light fade out? I think you figured it out.
              <br />
              No need to run and hide, they won't come to find you.
              <br />
              Did you lose control? I think you got it, figured out.
            </p>
            <p className="text-white">
              My rope ladder hangs from a door in the sky, I was lost inside since I was a child.
              <br />
              I never listened to what they told me to do, and I fell in love with the dark side.
            </p>
          </div>

          <div className="p-4">
            <h3 className="text-[#bfb689] font-bold">Only You</h3>
            <p className="text-white">
              Only you could be so beautiful when you cry.
              <br />
              I see your eyes like stars against the black of night.
              <br />
              Like a heron in the trees.
              <br />
              And I wonder why you would ever want to be so alone.
            </p>
            <p className="text-white">
              Only you could be
              <br />
              So warm and kind.
              <br />
              When the world takes aim at the brighter side and it feels like nothing ever changes.
              <br />
              Only your smile could last this long, I see you. I see you.
            </p>
            <p className="text-white">
              Stay for the night, leave for the day, try not to cry, dry your eyes on your sleeve.
            </p>
            <p className="text-white">
              You don't want to be alright, you don't want to be ok.
              <br />
              You don't want to be just fine, at least not their way, not their way.
            </p>
            <p className="text-white">
              I still believe in love.
              <br />
              I still believe in love.
            </p>
            <p className="text-white">
              Only you, could be, a light this bright.
              <br />
              A beacon at night, a place to reset to, a chance to believe in something more.
              <br />
              And I see you. I see you.
            </p>
            <p className="text-white">
              Stay for the night, leave for the day, try not to cry, dry your eyes on your sleeve.
            </p>
            <p className="text-white">
              You don't want to be alright, you don't want to be ok.
              <br />
              You don't want to be just fine, at least not their way, not their way.
            </p>
            <p className="text-white">
              I still believe in love.
              <br />
              I still believe in love.
            </p>
            <p className="text-white">
              I don't want to be alright, I don't want to be ok.
              <br />
              I don't want to be just fine, at least not their way, not their way.
            </p>
            <p className="text-white">
              I still believe in love.
              <br />
              I still believe in love.
            </p>
          </div>

          <div className="p-4">
            <h3 className="text-[#bfb689] font-bold">Professor</h3>
            <p className="text-white">
              Professor I profess, I don't have the answers, I don't have the answers yet, to any of this.
              <br />
              And in these halls I can hear their calls past every door and on every floor, I'm hiding from your observation.
              <br />
              I'm hiding from your observation.
            </p>
            <p className="text-white">
              And so far I haven't caught on yet.
              <br />
              I thought by now that I'd be so much stronger.
              <br />
              And so far I haven't caught on yet.
              <br />
              I thought by now that I'd be so much stronger than I am.
            </p>
            <p className="text-white">
              And at your desk I must confess I'm not strong enough yet to take on
              <br />
              All that you got wrong.
              <br />
              And in a way I could realize that you would have hoped for someone to sail this ship when you are gone.
            </p>
            <p className="text-white">I'm hiding from your observation.</p>
            <p className="text-white">
              And so far I haven't caught on yet.
              <br />
              I thought by now that I'd be so much stronger.
              <br />
              And so far I haven't caught on yet.
              <br />
              I thought by now that I'd be so much stronger than I am.
            </p>
          </div>

          {/* <div className="p-4">
            <h3 className="text-[#bfb689] font-bold">Carry on Dawn</h3>
            <p className="text-white">New song in progress…</p>
          </div> */}

  

          <div className="p-4">
            <h3 className="text-[#bfb689] font-bold">Cold and Dreary</h3>
            <p className="text-white text-sm italic">
              (Henry Wadsworth Longfellow)
            </p>
            <p className="text-white">
              Eyes open wide,
              <br />
              Picture frame views of the east.
              <br />
              You never stop to say hi, when you pass me by.
              <br />
              Down this sea of brick late at night.
            </p>
            <p className="text-white">
              I wish to be alive, and in your eyes.
              <br />
              Into each life some rain must fall.
              <br />
              You were meant to pass through.
              <br />
              But for each storm I am stuck here now.
              <br />
              As I sit and watch time pass me by.
            </p>
            <p className="text-white">
              Slow when you open.
              <br />
              Slow when you go in.
              <br />
              I'll wait in the cold and dreary.
            </p>
            <p className="text-white">
              Eyes open wide.
              <br />
              Picture frame views watch the world pass you by.
              <br />
              Long after you're gone, I will be here for an eternity.
              <br />
              I'll await your return,
              <br />
              From the lanterns on state,
              <br />
              On this granite I ride.
              <br />
              Into each life some rain must fall.
            </p>
            <p className="text-white">
              Slow when you open.
              <br />
              Slow when you go in.
              <br />
              I'll wait in the cold and dreary.
            </p>
            <p className="text-white">Oh be still.</p>
            <p className="text-white">
              Slow when you go in.
              <br />
              Slow when you open.
              <br />
              I'll wait in the cold and dreary.
            </p>
            <p className="text-white">
              Eyes open wide.
              <br />
              Into life some rain must fall.
            </p>
          </div>


          <div className="p-4">
            <h3 className="text-[#bfb689] font-bold">Oliver at the Bridge</h3>
            <p className="text-white">
              Oliver standing at the bridge, waiting for you to return to this place.
              <br />
              I know it's been 100 years, if you return to the place would you still recognize my face?
              <br />
              Or would you see the lines and just walk away?
              <br />
              Would you see the lines and just walk away?
            </p>
            <p className="text-white">
              I see no way to save you now.
              <br />
              From a world that keeps on leading you down, the wrong road the wrong way.
              <br />
              There's no way out.
            </p>
            <p className="text-white">
              Oliver standing at the bridge, waiting for you to return to this place.
              <br />
              I know it's been 1000 years, if you return to the place would you still recognize my face?
              <br />
              Would you hold me in your arms?
              <br />
              Would you still hold me in your arms?
            </p>
            <p className="text-white">
              I see no way to save you now.
              <br />
              From a world that keeps on leading you down, the wrong road the wrong way.
              <br />
              There's no way out.
            </p>
          </div>


        </div>
        </LyricsAccordion>
      </div>

      {/* Bottom whale background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bottom-whale.webp"
        alt=""
        className="w-full mt-auto pointer-events-none select-none"
      />
      </div>
    </main>
  );
}
