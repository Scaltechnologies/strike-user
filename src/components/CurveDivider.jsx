export default function CurveDivider({
  fill = "#ffffff",
  backdrop = "transparent",
  flip = false,
  height = 120,
  mobileHeight = 40,
  className = "",
}) {
  return (
    <div
      aria-hidden="true"
      className={`curve-divider relative w-full leading-[0] ${className}`}
      style={{
        height,
        marginTop: -1,
        marginBottom: -1,
        background: backdrop,
        // CSS variable so media query below can use it
        ["--curve-mobile-height"]: `${mobileHeight}px`,
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .curve-divider {
            height: var(--curve-mobile-height) !important;
          }
        }
      `}</style>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-full w-full"
      >
        <g transform={flip ? "translate(0, 120) scale(1, -1)" : undefined}>
          <path
            d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z"
            fill={fill}
          />
        </g>
      </svg>
    </div>
  );
}