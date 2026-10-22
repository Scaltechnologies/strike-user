import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin,
  PiggyBank,
  Wallet,
  QrCode,
  Headphones,
  Users,
  RefreshCw,
  Award,
  BarChart3,
  Sparkles,
} from "lucide-react";

// Wide, shallow semicircular arrangement — an apex card at top-center,
// two shoulder pairs stepping down either side, and the outer pair
// wrapping the phone's shoulders. Positions/rotations are unchanged from
// the last approved composition.
const features = [
  {
    icon: Users,
    title: "All Memberships",
    description: "in One Place",
    color: "#EC4899",
    pos: { top: "6%", left: "50%" },
    rotate: 0,
    scale: 1.08,
  },

  {
    icon: MapPin,
    title: "1000+",
    description: "Premium Venues",
    color: "#FF5A2C",
    pos: { top: "11%", left: "30%" },
    rotate: -9,
    scale: 1,
  },

  {
    icon: PiggyBank,
    title: "Up to 40%",
    description: "Savings",
    color: "#F43F5E",
    pos: { top: "11%", left: "70%" },
    rotate: 9,
    scale: 1,
  },

  {
    icon: QrCode,
    title: "QR Check-ins",
    description: "& Redemptions",
    color: "#8B5CF6",
    pos: { top: "31%", left: "13%" },
    rotate: -15,
    scale: 1,
  },

  {
    icon: Wallet,
    title: "All in One",
    description: "Digital Wallet",
    color: "#F97316",
    pos: { top: "31%", left: "87%" },
    rotate: 15,
    scale: 1,
  },

  {
    icon: RefreshCw,
    title: "Pause or Cancel",
    description: "Anytime",
    color: "#F59E0B",
    pos: { top: "60%", left: "8%" },
    rotate: -11,
    scale: 1,
  },

  {
    icon: BarChart3,
    title: "Real-time Usage",
    description: "Analytics",
    color: "#3B82F6",
    pos: { top: "60%", left: "92%" },
    rotate: 11,
    scale: 1,
  },

  {
    icon: Headphones,
    title: "24/7 Member",
    description: "Support",
    color: "#22C55E",
    pos: { top: "80%", left: "20%" },
    rotate: -7,
    scale: 0.96,
  },

  {
    icon: Award,
    title: "Exclusive Events",
    description: "& Invites",
    color: "#EAB308",
    pos: { top: "80%", left: "80%" },
    rotate: 7,
    scale: 0.96,
  },
];

// Order the cards are strung together in, tracing one continuous necklace
// from the bottom-left, up over the top, down to the bottom-right —
// indices into the `features` array above.
const CHAIN_ORDER = [7, 5, 3, 1, 0, 2, 4, 6, 8];

// Source-of-truth silhouette traced directly from the reference screenshot
// (the "QR Check-ins & Redemptions" card). Unchanged — not touched by this
// pass, per the request to keep the current organic SVG card shape.
const CARD_PATH =
  "M 78 4 C 60 5, 47 12, 38 24 C 29 36, 25 51, 21 66 C 17 81, 12 97, 10 113 C 8 128, 10 141, 17 151 C 24 161, 36 166, 50 168 C 65 170, 81 169, 96 168 C 111 167, 126 165, 139 160 C 151 155, 158 146, 161 134 C 165 121, 162 107, 158 94 C 154 79, 150 64, 145 51 C 140 37, 133 24, 122 15 C 111 6, 96 3, 78 4 Z";

// Default in-phone app preview shown when no feature card is hovered —
// a small, clean Strike home-screen mock, not a blank rectangle.
function DefaultPhonePreview() {
  return (
    <motion.div
      key="default"
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-full flex flex-col px-[9%] pt-[9%] pb-[6%]"
    >
      {/* Brand row */}
      <div className="flex items-center gap-1.5 mb-[8%]">
        <div className="w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center shrink-0">
          <Sparkles className="w-3 h-3 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-[11px] font-bold text-[#1A1006] tracking-tight">
          Strike
        </span>
      </div>

      <p className="text-[9px] text-[#3A2A18]/60 font-medium mb-[7%]">
        Welcome back
      </p>

      {/* Balance card */}
      <div
        className="rounded-2xl p-[10%] mb-[7%]"
        style={{
          background: "linear-gradient(135deg, #FF6B35 0%, #FF9457 100%)",
        }}
      >
        <p className="text-[8px] text-white/80 font-medium mb-1">
          Wallet Balance
        </p>
        <p className="text-[15px] text-white font-bold leading-none">
         ₹128.50
        </p>
      </div>

      {/* Minimal list rows */}
      {[Wallet, QrCode].map((Icon, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-xl bg-[#FAF6F1] px-[8%] py-[6%] mb-[5%]"
        >
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
            <Icon className="w-2.5 h-2.5 text-[#FF6B35]" strokeWidth={2.2} />
          </div>
          <div className="flex-1 h-1.5 rounded-full bg-[#EEE4D8]" />
        </div>
      ))}

      {/* Bottom nav dots */}
      <div className="flex items-center justify-center gap-2 mt-auto pt-[6%]">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="rounded-full"
            style={{
              width: i === 0 ? 12 : 5,
              height: 5,
              backgroundColor: i === 0 ? "#FF6B35" : "#EEE4D8",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Feature preview shown in the phone when a card is hovered — icon,
// title, description, using the feature's own color.
function FeaturePreview({ feature }) {
  const Icon = feature.icon;
  return (
    <motion.div
      key={feature.title + feature.description}
      initial={{ opacity: 0, y: 10, scale: 0.96, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -6, scale: 0.97, filter: "blur(3px)" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col items-center gap-3 text-center px-[10%] pt-[26%]"
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${feature.color}1F` }}
      >
        <Icon className="w-7 h-7" style={{ color: feature.color }} strokeWidth={2} />
      </div>
      <div>
        <p className="text-base font-bold text-[#1A1006] leading-tight">
          {feature.title}
        </p>
        <p className="text-sm font-medium text-[#3A2A18]/70 leading-tight">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturesOrbit() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section className="relative w-full pt-12 pb-12 md:pb-0 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #FFF9F4 0%, #FFF3E9 55%, #FFEFE4 100%)",
        }}
      />

      <div className="relative px-6 flex flex-col items-center">
        {/* Scattered sparkle decorations across the whole section, not just
            the heading — upper cluster around the title, lower cluster
            drifting between the cards and phone. */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
          <Sparkles className="absolute w-3.5 h-3.5 text-[#FF6B35]/30" style={{ top: "8%", left: "9%" }} strokeWidth={1.5} />
          <Sparkles className="absolute w-2.5 h-2.5 text-[#FF6B35]/25" style={{ top: "16%", left: "13%" }} strokeWidth={1.5} />
          <Sparkles className="absolute w-3 h-3 text-[#FF6B35]/25" style={{ top: "6%", right: "12%" }} strokeWidth={1.5} />
          <Sparkles className="absolute w-2 h-2 text-[#FF6B35]/20" style={{ top: "22%", right: "6%" }} strokeWidth={1.5} />
          <Sparkles className="absolute w-3 h-3 text-[#FF6B35]/20" style={{ top: "38%", left: "3%" }} strokeWidth={1.5} />
          <Sparkles className="absolute w-2 h-2 text-[#FF6B35]/20" style={{ top: "48%", right: "2%" }} strokeWidth={1.5} />
          <Sparkles className="absolute w-2.5 h-2.5 text-[#FF6B35]/20" style={{ top: "62%", left: "10%" }} strokeWidth={1.5} />
          <Sparkles className="absolute w-2 h-2 text-[#FF6B35]/20" style={{ top: "58%", right: "9%" }} strokeWidth={1.5} />
          <Sparkles className="absolute w-2.5 h-2.5 text-[#FF6B35]/15" style={{ top: "78%", left: "22%" }} strokeWidth={1.5} />
          <Sparkles className="absolute w-2 h-2 text-[#FF6B35]/15" style={{ top: "80%", right: "20%" }} strokeWidth={1.5} />
        </div>

        {/* Heading — small "Strike" eyebrow + dash-dot divider beneath. */}
        <div className="relative z-10 max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 text-[#FF6B35]">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase">Strike</span>
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1006] leading-[1.08] tracking-tight">
            Everything you love,
            <br />
            all in <span className="text-[#FF6B35]">Strike.</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <span className="w-4 h-px bg-[#FF6B35]/40" />
            <span className="w-1 h-1 rounded-full bg-[#FF6B35]" />
            <span className="w-4 h-px bg-[#FF6B35]/40" />
          </div>
        </div>

        {/* Wide, shallow arc box: everything below is positioned with
            top/left percentages against this box. Percentage-based orbit
            positions only have room to breathe above the tablet breakpoint
            — below that we swap to a stacked phone + card-grid layout
            (mobile block just below) instead of shrinking this in place. */}
        <div className="relative hidden w-full max-w-3xl aspect-[972/560] md:block">
          {/* Dotted necklace strung through every card, bottom-left to
              bottom-right over the top — round-dot dashes, not a solid line. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          >
            <path
              d={CHAIN_ORDER.map((idx, i) => {
                const f = features[idx];
                const x = parseFloat(f.pos.left);
                const y = parseFloat(f.pos.top);
                return `${i === 0 ? "M" : "L"} ${x} ${y}`;
              }).join(" ")}
              fill="none"
              stroke="rgba(255,120,60,0.4)"
              strokeWidth="1"
              strokeDasharray="0 3.4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Small colored beads at the midpoint between consecutive cards,
              echoing each card's accent color. */}
          {CHAIN_ORDER.slice(1).map((idx, i) => {
            const prev = features[CHAIN_ORDER[i]];
            const curr = features[idx];
            const x = (parseFloat(prev.pos.left) + parseFloat(curr.pos.left)) / 2;
            const y = (parseFloat(prev.pos.top) + parseFloat(curr.pos.top)) / 2;
            return (
              <span
                key={idx}
                aria-hidden="true"
                className="absolute rounded-full z-0 pointer-events-none"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                  width: 7,
                  height: 7,
                  backgroundColor: curr.color,
                  boxShadow: `0 0 0 3px ${curr.color}1A`,
                }}
              />
            );
          })}

          {features.map((f) => {
            const Icon = f.icon;
            const isActive = activeFeature === f;
            return (
              <motion.button
                key={f.title + f.description}
                aria-label={`${f.title} ${f.description}`}
                onMouseEnter={() => setActiveFeature(f)}
                onMouseLeave={() => setActiveFeature(null)}
                onFocus={() => setActiveFeature(f)}
                onBlur={() => setActiveFeature(null)}
                initial={{ x: "-50%", y: "-50%", rotate: f.rotate }}
                animate={{
                  x: "-50%",
                  y: isActive ? "calc(-50% - 3px)" : "-50%",
                  rotate: f.rotate,
                  scale: isActive ? (f.scale ?? 1) * 1.04 : f.scale ?? 1,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  top: f.pos.top,
                  left: f.pos.left,
                  width: `calc(clamp(108px, 15.5%, 168px) * ${f.scale ?? 1})`,
                  aspectRatio: "180 / 175",
                }}
                className="absolute z-20 cursor-pointer"
              >
                {/* Organic badge-shaped card background — shape untouched,
                    only the shadow deepens slightly on hover. */}
                <svg
                  viewBox="0 0 180 175"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full transition-[filter] duration-300"
                  style={{
                    filter: isActive
                      ? "drop-shadow(0 18px 28px rgba(0,0,0,0.12))"
                      : "drop-shadow(0 12px 20px rgba(0,0,0,0.07))",
                  }}
                >
                  <path d={CARD_PATH} fill="#FFFFFF" />
                </svg>

                {/* Icon only — no text inside the card. */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ scale: isActive ? 1.08 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-[44%] aspect-square rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${f.color}1F` }}
                  >
                    <Icon
                      className="w-[58%] h-[58%]"
                      style={{ color: f.color }}
                      strokeWidth={2}
                    />
                  </motion.div>
                </div>
              </motion.button>
            );
          })}

          {/* Phone mockup — premium frame, centered, sitting low and
              cropped by the section's bottom edge. Shows a default app
              preview at rest, and the hovered feature's content on hover. */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-10"
            style={{
              top: "44%",
              width: "clamp(190px, 30%, 260px)",
              aspectRatio: "9 / 18.5",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -z-10 rounded-full"
              style={{
                inset: "-45%",
                background:
                  "radial-gradient(closest-side, rgba(255,150,80,0.55), rgba(255,150,80,0.22) 55%, transparent 75%)",
                filter: "blur(24px)",
              }}
            />

            {/* Frame: soft gradient body, layered shadow, subtle ring for
                an edge highlight instead of a flat white block. */}
            <div className="relative w-full h-full rounded-[16%] bg-gradient-to-b from-white to-[#F3F1EE] p-[3.5%] shadow-[0_35px_70px_-15px_rgba(26,16,6,0.28),0_10px_25px_rgba(26,16,6,0.10)] ring-1 ring-black/10">
              {/* side buttons for realism */}
              <div className="absolute -left-[1.2%] top-[16%] w-[1.4%] h-[5%] bg-[#D9D3CA] rounded-r" />
              <div className="absolute -left-[1.2%] top-[24%] w-[1.4%] h-[9%] bg-[#D9D3CA] rounded-r" />
              <div className="absolute -right-[1.2%] top-[20%] w-[1.4%] h-[8%] bg-[#D9D3CA] rounded-l" />

              {/* Dynamic Island */}
              <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[32%] h-[2.5%] bg-[#1A1006] rounded-full z-20 shadow-inner" />

              {/* Screen */}
              <div className="relative w-full h-full bg-white rounded-[13%] overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
                {/* subtle top glass highlight */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/4 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
                  }}
                />
                <AnimatePresence mode="wait">
                  {activeFeature ? (
                    <FeaturePreview feature={activeFeature} />
                  ) : (
                    <DefaultPhonePreview />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/tablet layout: below md, we show just the feature grid
            (no phone mockup — removed per request) as plain,
            non-overlapping cards. */}
        <div className="relative z-10 flex w-full flex-col items-center md:hidden">
          <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title + f.description}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-white px-3 py-4 text-center shadow-[0_8px_20px_rgba(26,16,6,0.06)] ring-1 ring-black/5"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${f.color}1F` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: f.color }} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold leading-tight text-[#1A1006]">{f.title}</p>
                    <p className="text-[10.5px] leading-tight text-[#3A2A18]/65">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}