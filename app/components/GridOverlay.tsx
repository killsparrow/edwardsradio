export default function GridOverlay() {
  return (
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
  );
}
