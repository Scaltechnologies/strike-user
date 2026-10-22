import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const BRAND = "#FF8A5C";
const INK = "#F5F1EC";

const TESTIMONIALS = [
  {
    name: "Viswa",
    role: "Founder, Strike",
    quote:
      "I started Strike because I was tired of juggling a dozen memberships just to enjoy my own city. Watching members open the app and use their pass without a second thought is exactly the experience we set out to build.",
    initials: "V",
    color: "#FF6B35",
  },
  {
    name: "Tarun",
    role: "Co-founder, Strike",
    quote:
      "Every partner venue we onboard is proof the model works — predictable revenue for businesses and real value for members. Building that trust from scratch has been the most rewarding part of this journey.",
    initials: "T",
    color: "#F43F5E",
  },
  {
    name: "Laya",
    role: "HR, Strike",
    quote:
      "What makes Strike different is the people behind it. We've built a team that genuinely cares about the member experience, and that shows in how fast we move to fix things and ship what people ask for.",
    initials: "L",
    color: "#8B5CF6",
  },
  {
    name: "Nikhil",
    role: "Developer, Strike",
    quote:
      "Every feature in the app — from the QR check-in to the wallet — was built to feel instant. Shipping something members use every day and hearing back within hours is what makes working on Strike different.",
    initials: "N",
    color: "#22C55E",
  },
];

const CARDS = [...TESTIMONIALS, ...TESTIMONIALS];
const AUTO_SPEED = 0.55; // px per frame

export default function Testimonials() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const hoveredRef = useRef(false);
  const draggingByWheelRef = useRef(false);
  const resumeTimerRef = useRef(null);

  // Auto-scroll loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame;
    const step = () => {
      if (!hoveredRef.current && !draggingByWheelRef.current) {
        track.scrollLeft += AUTO_SPEED;
      }
      const half = track.scrollWidth / 2;
      if (track.scrollLeft >= half) {
        track.scrollLeft -= half;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Wheel-to-horizontal-scroll, scoped to the card track only
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e) => {
      // Only hijack scroll while the wheel event happens over the track itself.
      e.preventDefault();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      track.scrollLeft += delta;

      const half = track.scrollWidth / 2;
      if (track.scrollLeft >= half) track.scrollLeft -= half;
      if (track.scrollLeft < 0) track.scrollLeft += half;

      draggingByWheelRef.current = true;
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => {
        draggingByWheelRef.current = false;
      }, 500);
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24"
      style={{ background: "#0B0B0E" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: INK }}>
            Meet the people{" "}
            <span style={{ color: BRAND }}>behind Strike.</span>
          </h2>
          <p className="mt-4 text-[#A79E92] text-lg">
            The team building Strike, in their own words.
          </p>
        </motion.div>
      </div>

      <div
        className="relative mt-12 sm:mt-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black min(64px,10vw), black calc(100% - min(64px,10vw)), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black min(64px,10vw), black calc(100% - min(64px,10vw)), transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-scroll px-6 pb-2 sm:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ cursor: "grab" }}
          onMouseEnter={() => (hoveredRef.current = true)}
          onMouseLeave={() => (hoveredRef.current = false)}
        >
          {CARDS.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex w-[82vw] max-w-[340px] shrink-0 flex-col rounded-[20px] p-6 sm:w-[360px] sm:max-w-none sm:p-8"
              style={{
                background: "#151318",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Quote size={26} color={BRAND} className="opacity-80" />

              <p className="mt-5 flex-1 text-[15px] leading-relaxed" style={{ color: "#D8D2C8" }}>
                {t.quote}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: INK }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#8A8378" }}>{t.role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} fill="#FF6B35" color="#FF6B35" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}