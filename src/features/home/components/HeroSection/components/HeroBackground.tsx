export const HeroBackground = () => (
  <div
    className="absolute inset-0 z-0"
    style={{
      background:
        "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)",
      backgroundAttachment: "fixed",
      backgroundSize: "100% 100vh",
    }}
  >
    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 via-black/25 to-transparent pointer-events-none" />

    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
          backgroundAttachment: "fixed",
        }}
      />
    </div>
  </div>
);