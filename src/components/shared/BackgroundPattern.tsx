export const BackgroundPattern: React.FC = () => (
  <div className="absolute inset-0 opacity-5">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
        backgroundAttachment: "fixed",
      }}
    ></div>
  </div>
);
