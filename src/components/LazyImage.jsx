import { useState } from "react";

/**
 * Image wrapper: native lazy-loading + a shimmer skeleton shown until the
 * image actually paints, then a quick fade-in. Keeps perceived load fast
 * even when the network is slow, and avoids layout shift via the
 * aspect-ratio-holding wrapper.
 */
export default function LazyImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  aspectRatio,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, #EFE6DC 30%, #F7F1EA 50%, #EFE6DC 70%)",
            backgroundSize: "200% 100%",
            animation: "lazyimg-shimmer 1.4s ease-in-out infinite",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
      <style>{`
        @keyframes lazyimg-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
