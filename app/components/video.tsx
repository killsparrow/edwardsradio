export default function Video() {
  return (
    <div className="relative w-full max-w-3xl mx-auto [aspect-ratio:16/9]">
      <iframe
        src="https://www.youtube.com/embed/lmm5Nbq8t70?si=eI_CNejbu-Hxhtjy"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
