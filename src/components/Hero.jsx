import { useEffect, useRef, useState } from "react";
// import { HERO_VIDEO_SRC } from "../config/links";
import HERO_VIDEO_SRC from "../assets/herovideo.mp4";

// Splits text into spans for the staggered pop-up animation.
// `playKey` changes every video loop so the animation can re-fire.
function AnimatedText({ text, className = "", startDelay = 0, playKey }) {
  // Each word is its own shrink-to-fit inline-block so the browser can only
  // break lines between words, not between individual letter spans.
  const words = text.split(" ");
  let charCount = 0;
  const rendered = [];
  words.forEach((word, wi) => {
    rendered.push(
      <span key={`w${wi}`} className="inline-block whitespace-nowrap">
        {word.split("").map((char, i) => {
          const delay = startDelay + charCount * 0.035;
          charCount += 1;
          return (
            <span key={i} className="letter-pop" style={{ animationDelay: `${delay}s` }}>
              {char}
            </span>
          );
        })}
      </span>
    );
    if (wi < words.length - 1) {
      rendered.push(" ");
      charCount += 1;
    }
  });
  return (
    <span className={`inline-block ${className}`} key={playKey}>
      {rendered}
    </span>
  );
}

function Hero() {
  const videoRef = useRef(null);
  const [textVisible, setTextVisible] = useState(true);
  const [playKey, setPlayKey] = useState(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE_WINDOW = 1.2; // seconds before the end / logo reveal

    const handleTimeUpdate = () => {
      const { currentTime, duration } = video;
      if (!duration) return;

      // Looped back to the start -> bring text back and replay the pop-up
      if (currentTime < lastTimeRef.current - 0.5) {
        setTextVisible(true);
        setPlayKey((k) => k + 1);
      }

      // Nearing the end, where the Strike logo lands -> fade text out
      if (duration - currentTime <= FADE_WINDOW) {
        setTextVisible(false);
      }

      lastTimeRef.current = currentTime;
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section
      id="categories"
      className="relative flex min-h-[100svh] w-full items-end justify-start overflow-hidden px-6 pb-16 sm:px-12 sm:pb-24"
      style={{
        borderBottomLeftRadius: "50% 90px",
        borderBottomRightRadius: "50% 90px",
      }}
    >
      {/* Fonts for this section only. Move to index.html <head> for production. */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;900&family=Manrope:wght@400;500;600&display=swap');

        .hero-display { font-family: 'Unbounded', sans-serif; }
        .hero-body { font-family: 'Manrope', sans-serif; }

        .hero-text-shadow {
          text-shadow:
            0 1px 0 rgba(0,0,0,0.35),
            0 2px 0 rgba(0,0,0,0.30),
            0 4px 6px rgba(0,0,0,0.35),
            0 10px 20px rgba(0,0,0,0.45);
        }

        @keyframes letterPop {
          0% { opacity: 0; transform: translateY(120%) rotate(4deg); }
          60% { opacity: 1; transform: translateY(-8%) rotate(0deg); }
          100% { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        .letter-pop {
          display: inline-block;
          opacity: 0;
          animation: letterPop 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .hero-copy-transition {
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .hero-heading {
          font-size: clamp(2rem, 1.2rem + 3.5vw, 3.8rem);
        }

        /* The source video carries a day-label overlay in the top-left
           corner and a small AI-generation watermark in the bottom-right.
           object-fit: cover already crops those corners out on tall/narrow
           viewports; wider viewports whose aspect approaches the video's
           native 16:9 need a deliberate center zoom to push both corners
           out of frame while keeping the bear centered. */
        .hero-video {
          object-position: center center;
          transform: scale(1.05);
          transform-origin: center center;
        }
        @media (min-aspect-ratio: 1/1) {
          .hero-video { transform: scale(1.3); }
        }
        @media (min-aspect-ratio: 3/2) {
          .hero-video { transform: scale(1.6); }
        }
        @media (min-aspect-ratio: 16/10) {
          .hero-video { transform: scale(1.85); }
        }
      `}</style>

      {HERO_VIDEO_SRC && (
        <video
          ref={videoRef}
          className="hero-video absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div
        className={`relative z-10 flex max-w-2xl flex-col items-start gap-4 text-left hero-copy-transition sm:gap-5 ${
          textVisible
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-4"
        }`}
      >
        <span className="hero-body rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35] shadow-sm">
          Strike
        </span>

        <h1 className="hero-display hero-heading hero-text-shadow font-bold leading-[1.05] tracking-tight text-white">
          <AnimatedText text="Memberships you love." playKey={playKey} />
          <br />
          <AnimatedText
            text="Made simple."
            startDelay={0.6}
            playKey={playKey}
            className="text-[#FF6B35]"
          />
        </h1>

        <p className="hero-body hero-text-shadow max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Your favorite memberships, all in one place.
        </p>
      </div>

      {/* scroll cue */}
      <div className="hero-body absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white/80 sm:bottom-8 sm:text-sm">
        Scroll down
        <span className="ml-1 inline-block animate-bounce">⌄</span>
      </div>
    </section>
  );
}

export default Hero;