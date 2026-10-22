import logoMark from "../assets/strike-logo-mark.png";

// Official STRIKE logo mark (generated from public/assets/strike-logo.png by
// scripts/generate-brand-assets.ps1). Size it by height only — width follows
// the logo's own aspect ratio. Intrinsic width/height reserve space before the
// image loads, so there is no layout shift.
//
// `alt` defaults to "" because the mark usually sits next to the "STRIKE"
// wordmark; pass alt="STRIKE" when the logo appears on its own.
export default function StrikeLogo({ className = "h-5", alt = "", style }) {
  return (
    <img
      src={logoMark}
      alt={alt}
      width={93}
      height={128}
      draggable={false}
      className={`w-auto shrink-0 object-contain select-none ${className}`}
      style={style}
    />
  );
}
