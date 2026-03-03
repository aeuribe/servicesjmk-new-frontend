export const HeroBackground = () => {
  return (
    <div
      className="
        absolute inset-0 z-0 overflow-hidden
        [clip-path:polygon(0_0,_100%_0,_100%_90%,_78%_100%,_0_100%)]
        lg:[clip-path:polygon(0_0,_100%_0,_100%_75%,_88%_100%,_0_100%)]
      "
    >
      {/* Fallback gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)",
        }}
      />

      {/* Video - Subí la opacidad porque el overlay hará el trabajo de contraste */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/fallback.jpg"
        className="absolute inset-0 object-cover w-full h-full opacity-90"
      >
        <source src="/videos/services_video.webm" type="video/webm" />
        Tu navegador no soporta videos de fondo.
      </video>

      {/* --- NUEVO: Overlay Gradiente de Izquierda a Derecha --- */}
      {/* El 'from-black/90' oscurece el lado del texto, el 'to-transparent' libera la imagen a la derecha */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Vignette (Top to Bottom) - Lo mantenemos para el header */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </div>
  );
};