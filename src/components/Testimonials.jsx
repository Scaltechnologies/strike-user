import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const BRAND = "#FF8A5C";
const INK = "#F5F1EC";

const TESTIMONIALS = [
  {
    name: "Priya Nair",
    role: "Member since 2024",
    quote:
      "Strike replaced four different subscriptions I was juggling. One tap to check in anywhere, and the savings alone paid for the plan in the first month.",
    initials: "PN",
    color: "#FF6B35",
  },
  {
    name: "Daniel Osei",
    role: "Plus member",
    quote:
      "The pause-anytime feature is what sold me. I travel a lot for work, and I'm not paying for venues I can't get to that month.",
    initials: "DO",
    color: "#F43F5E",
  },
  {
    name: "Maya Chen",
    role: "Premium member",
    quote:
      "Discovering new spots in the app genuinely changed how I spend weekends. The QR check-in is instant — no fumbling with codes or receipts.",
    initials: "MC",
    color: "#8B5CF6",
  },
  {
    name: "Arjun Mehta",
    role: "Member since 2023",
    quote:
      "Customer support actually picks up. Had a billing question at 11pm and it was sorted in minutes through the app chat.",
    initials: "AM",
    color: "#22C55E",
  },
  {
    name: "Sofia Ramirez",
    role: "Plus member",
    quote:
      "I manage three memberships for my family from one wallet now. The digital ID scans faster than any card ever did.",
    initials: "SR",
    color: "#EAB308",
  },
  {
    name: "Kenji Watanabe",
    role: "Premium member",
    quote:
      "The exclusive events alone are worth it — got into a tasting menu night that was otherwise fully booked, just for being a member.",
    initials: "KW",
    color: "#3B82F6",
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
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: INK }}>
            Loved by thousands{" "}
            <span style={{ color: BRAND }}>of members.</span>
          </h2>
          <p className="mt-4 text-[#A79E92] text-lg">
            Real stories from members who made Strike part of their routine.
          </p>
        </motion.div>
      </div>

      <div
        className="relative mt-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-scroll px-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ cursor: "grab" }}
          onMouseEnter={() => (hoveredRef.current = true)}
          onMouseLeave={() => (hoveredRef.current = false)}
        >
          {CARDS.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex w-[360px] shrink-0 flex-col rounded-[20px] p-8"
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