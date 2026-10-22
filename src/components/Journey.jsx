import { useEffect, useRef, useState, useCallback } from "react";
import { Search, ClipboardCheck, CreditCard, UserCheck, QrCode } from "lucide-react";
import StrikeLogo from "./StrikeLogo";

const STEPS = [
  {
    id: 1,
    title: "Discover",
    desc: "Browse curated memberships in your area.",
    icon: Search,
    fraction: 0.06,
  },
  {
    id: 2,
    title: "Choose",
    desc: "Pick the plan that fits your lifestyle perfectly.",
    icon: ClipboardCheck,
    fraction: 0.46,
  },
  {
    id: 3,
    title: "Subscribe",
    desc: "Secure checkout with various payment options.",
    icon: CreditCard,
    fraction: 0.82,
  },
];

const ROAD_D =
  "M -10 260 C 120 260 120 140 260 140 C 390 140 390 260 520 260 C 650 260 650 150 810 150";

const VIEW_W = 800;
const VIEW_H = 340;

// Breakpoint that decides which version mounts. Kept in sync with the
// max-width: 640px rules both versions already used for their own
// responsive tweaks, so the switch happens at the same point that used
// to just be "make things smaller."
const MOBILE_QUERY = "(max-width: 640px)";

/* ------------------------------------------------------------------ */
/*  Shared bits: shell styles + static SVG decoration (birds, lamps)  */
/*  used identically by both versions.                                */
/* ------------------------------------------------------------------ */

const SHARED_STYLES = `
  .sj-section {
    --ink: #1c1712;
    --orange: #e4562a;
    --muted: #8a7d70;
    --gray-circle: #eee6db;
    background: transparent;
    color: var(--ink);
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: clamp(32px, 8vw, 72px) 20px 48px;
    box-sizing: border-box;
  }
  .sj-head { text-align: center; margin-bottom: 8px; }
  .sj-h1 {
    font-size: clamp(26px, 3.6vw, 42px);
    font-weight: 700;
    letter-spacing: -0.01em;
    margin: 0;
  }
  .sj-h1 span { color: var(--orange); }
  .sj-sub {
    color: var(--muted);
    font-size: clamp(12px, 1.4vw, 15px);
    margin-top: 10px;
    white-space: nowrap;
  }

  .sj-stage {
    position: relative;
    margin-top: 30px;
  }
  .sj-svg { width: 100%; height: auto; display: block; }

  .sj-road {
    fill: none;
    stroke: #221d18;
    stroke-width: 22;
    stroke-linecap: round;
  }
  .sj-road-dash {
    fill: none;
    stroke: #fbf6f0;
    stroke-width: 2.5;
    stroke-dasharray: 10 12;
    stroke-linecap: round;
  }

  .sj-lamp-pole { stroke: #4a4038; stroke-width: 3; stroke-linecap: round; }
  .sj-lamp-hood { fill: #4a4038; }
  .sj-lamp-cage { fill: #4a4038; }
  .sj-lamp-window { fill: #ffdca8; }
  .sj-lamp-finial { fill: #4a4038; }
  .sj-lamp-ground-glow { fill: var(--orange); opacity: 0.14; }
  .sj-bird { stroke: #b7a998; stroke-width: 2; fill: none; stroke-linecap: round; }

  .sj-marker-ring {
    fill: #fbf6f0;
    stroke: #e7ddd2;
    stroke-width: 2;
    transition: stroke 0.35s ease;
  }
  .sj-marker-ring.hovered { stroke: rgba(228, 86, 42, 0.45); }

  .sj-marker-icon-bg {
    fill: var(--gray-circle);
    transition: fill 0.35s ease, filter 0.35s ease;
  }
  .sj-marker-icon-bg.hovered {
    fill: var(--orange);
    filter: drop-shadow(0 0 10px rgba(228, 86, 42, 0.85));
    animation: sj-pulse 1.4s ease-in-out infinite;
  }

  .sj-marker-num-bg {
    fill: #cfc4b6;
    transition: fill 0.35s ease;
  }
  .sj-marker-num-bg.hovered { fill: var(--orange); }

  .sj-marker-icon {
    color: #6b5f52;
    transition: color 0.35s ease;
  }
  .sj-marker-icon.hovered { color: #fff; }

  @keyframes sj-pulse {
    0%, 100% { filter: drop-shadow(0 0 8px rgba(228, 86, 42, 0.7)); }
    50% { filter: drop-shadow(0 0 16px rgba(228, 86, 42, 1)); }
  }

  .sj-walker-shadow { fill: rgba(0,0,0,0.18); }
  .sj-walker-body { fill: var(--ink); }
  .sj-walker-head { fill: #3a322b; }
  .sj-walker-cheek { fill: #e8c4a8; opacity: 0.9; }
  .sj-leg { stroke: var(--ink); stroke-width: 3.4; stroke-linecap: round; transform-origin: 0px -6px; }
  .sj-arm { stroke: #3a322b; stroke-width: 2.6; stroke-linecap: round; transform-origin: 0px -15px; }
  .walking .sj-leg-l { animation: sj-swing 0.28s ease-in-out infinite alternate; }
  .walking .sj-leg-r { animation: sj-swing 0.28s ease-in-out infinite alternate-reverse; }
  .walking .sj-arm-l { animation: sj-swing-arm 0.28s ease-in-out infinite alternate-reverse; }
  .walking .sj-arm-r { animation: sj-swing-arm 0.28s ease-in-out infinite alternate; }
  @keyframes sj-swing {
    from { transform: rotate(-22deg); }
    to   { transform: rotate(22deg); }
  }
  @keyframes sj-swing-arm {
    from { transform: rotate(-16deg); }
    to   { transform: rotate(16deg); }
  }

  .sj-label {
    position: absolute;
    transform: translate(-50%, -100%);
    text-align: center;
    width: min(170px, 42vw);
    pointer-events: none;
  }
  .sj-label-start { transform: translate(0, -100%); text-align: left; }
  .sj-label-end { transform: translate(-100%, -100%); text-align: right; }
  .sj-label-start .sj-label-title { justify-content: flex-start; }
  .sj-label-end .sj-label-title { justify-content: flex-end; }
  .sj-label-title {
    font-weight: 600;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: color 0.35s ease;
  }
  .sj-label-title.hovered { color: var(--orange); }
  .sj-label-title .sj-num { color: var(--orange); font-weight: 700; }
  .sj-label-desc {
    font-size: 12.5px;
    color: var(--muted);
    margin-top: 3px;
    line-height: 1.35;
  }
`;

function SkyAndLamps() {
  return (
    <>
      <path className="sj-bird" d="M 90 40 q 6 -9 12 0 q 6 -9 12 0" />
      <path className="sj-bird" d="M 470 55 q 5 -8 10 0 q 5 -8 10 0" />
      <path className="sj-bird" d="M 700 30 q 6 -9 12 0 q 6 -9 12 0" />

      <g>
        <ellipse className="sj-lamp-ground-glow" cx="180" cy="249" rx="18" ry="4" />
        <line className="sj-lamp-pole" x1="180" y1="248" x2="180" y2="184" />
        <circle cx="180" cy="193" r="28" fill="url(#sj-glow-grad)" />
        <path className="sj-lamp-hood" d="M 180 166 L 170 184 L 190 184 Z" />
        <rect className="sj-lamp-cage" x="172" y="184" width="16" height="18" rx="3" />
        <rect className="sj-lamp-window" x="175.5" y="187.5" width="9" height="11" rx="1.5" />
        <circle className="sj-lamp-finial" cx="180" cy="164" r="2.2" />
      </g>
      <g>
        <ellipse className="sj-lamp-ground-glow" cx="600" cy="239" rx="18" ry="4" />
        <line className="sj-lamp-pole" x1="600" y1="238" x2="600" y2="174" />
        <circle cx="600" cy="183" r="28" fill="url(#sj-glow-grad)" />
        <path className="sj-lamp-hood" d="M 600 156 L 590 174 L 610 174 Z" />
        <rect className="sj-lamp-cage" x="592" y="174" width="16" height="18" rx="3" />
        <rect className="sj-lamp-window" x="595.5" y="177.5" width="9" height="11" rx="1.5" />
        <circle className="sj-lamp-finial" cx="600" cy="154" r="2.2" />
      </g>
    </>
  );
}

function Walker({ innerRef, className }) {
  return (
    <g ref={innerRef} className={className}>
      <ellipse className="sj-walker-shadow" cx="0" cy="12" rx="8" ry="2.6" />
      <line className="sj-leg sj-leg-l" x1="0" y1="-5" x2="-3.5" y2="10" />
      <line className="sj-leg sj-leg-r" x1="0" y1="-5" x2="3.5" y2="10" />
      <line className="sj-arm sj-arm-l" x1="-3.5" y1="-15" x2="-6" y2="-3" />
      <line className="sj-arm sj-arm-r" x1="3.5" y1="-15" x2="6" y2="-3" />
      <path className="sj-walker-body" d="M -4.5 -4 Q -4.8 -19 0 -19 Q 4.8 -19 4.5 -4 Z" />
      <circle className="sj-walker-head" cx="0" cy="-23.5" r="5.2" />
      <circle className="sj-walker-cheek" cx="1.8" cy="-22.5" r="1.4" />
    </g>
  );
}

function Markers({ markerPoints, activeId }) {
  if (!markerPoints) return null;
  return STEPS.map((step, i) => {
    const isActive = activeId === step.id;
    return (
      <g key={step.id} transform={`translate(${markerPoints[i].x} ${markerPoints[i].y})`}>
        <circle className={`sj-marker-ring${isActive ? " hovered" : ""}`} r="30" />
        <circle className={`sj-marker-icon-bg${isActive ? " hovered" : ""}`} r="24" />
        <foreignObject x="-11" y="-11" width="22" height="22">
          <div
            className={`sj-marker-icon${isActive ? " hovered" : ""}`}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <step.icon size={20} strokeWidth={2.2} />
          </div>
        </foreignObject>
        <circle className={`sj-marker-num-bg${isActive ? " hovered" : ""}`} cx="-22" cy="-22" r="11" />
        <text x="-22" y="-18" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
          {step.id}
        </text>
      </g>
    );
  });
}

function Labels({ markerPoints, activeId }) {
  if (!markerPoints) return null;
  return STEPS.map((step, i) => (
    <div
      key={step.id}
      className={`sj-label${
        i === 0 ? " sj-label-start" : i === STEPS.length - 1 ? " sj-label-end" : ""
      }`}
      style={{
        left: `${(markerPoints[i].x / VIEW_W) * 100}%`,
        top: `${((markerPoints[i].y - 42) / VIEW_H) * 100}%`,
      }}
    >
      <div className={`sj-label-title${activeId === step.id ? " hovered" : ""}`}>
        <span className="sj-num">{step.id}</span> {step.title}
      </div>
      <div className="sj-label-desc">{step.desc}</div>
    </div>
  ));
}

/* ------------------------------------------------------------------ */
/*  Mobile version — walker animates on its own once scrolled into    */
/*  view (unchanged from the original auto-walk build).               */
/* ------------------------------------------------------------------ */

const ACTIVE_RADIUS = 0.1;
const CYCLE_MS = 9000;
const FADE = 0.045;

function JourneyMobile() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const walkerRef = useRef(null);
  const rafRef = useRef(null);
  const elapsedRef = useRef(0);

  const [markerPoints, setMarkerPoints] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const placeWalker = useCallback((pt) => {
    if (!walkerRef.current || !pt) return;
    walkerRef.current.setAttribute(
      "transform",
      `translate(${pt.x} ${pt.y - 11}) rotate(${pt.angle})`
    );
  }, []);

  useEffect(() => {
    if (!pathRef.current) return;
    const total = pathRef.current.getTotalLength();

    const markers = STEPS.map((s) => {
      const p = pathRef.current.getPointAtLength(s.fraction * total);
      return { x: p.x, y: p.y };
    });
    setMarkerPoints(markers);

    const p0 = pathRef.current.getPointAtLength(0);
    const p1 = pathRef.current.getPointAtLength(Math.min(1, total));
    const angle0 = (Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180) / Math.PI;
    placeWalker({ x: p0.x, y: p0.y, angle: angle0 });
  }, [placeWalker]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!pathRef.current) return;

    if (!isVisible) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const path = pathRef.current;
    const total = path.getTotalLength();

    if (reducedMotion) {
      const p = path.getPointAtLength(STEPS[0].fraction * total);
      const p2 = path.getPointAtLength(Math.min(STEPS[0].fraction * total + 1, total));
      const angle = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
      placeWalker({ x: p.x, y: p.y, angle });
      if (walkerRef.current) walkerRef.current.style.opacity = "1";
      setActiveId(STEPS[0].id);
      return;
    }

    const start = performance.now() - elapsedRef.current;

    const tick = (now) => {
      const elapsed = now - start;
      elapsedRef.current = elapsed % CYCLE_MS;
      const t = elapsedRef.current / CYCLE_MS;

      const len = t * total;
      const p = path.getPointAtLength(len);
      const p2 = path.getPointAtLength(Math.min(len + 1, total));
      const angle = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
      placeWalker({ x: p.x, y: p.y, angle });

      let opacity = 1;
      if (t > 1 - FADE) opacity = (1 - t) / FADE;
      else if (t < FADE) opacity = t / FADE;
      if (walkerRef.current) walkerRef.current.style.opacity = String(opacity);

      let nearestStep = null;
      let nearestGap = Infinity;
      for (const step of STEPS) {
        const gap = Math.abs(step.fraction - t);
        if (gap < nearestGap) {
          nearestGap = gap;
          nearestStep = step;
        }
      }
      setActiveId(nearestGap <= ACTIVE_RADIUS ? nearestStep.id : null);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, reducedMotion, placeWalker]);

  return (
    <section id="explore" className="sj-section" ref={sectionRef}>
      <style>{`
        ${SHARED_STYLES}

        @media (max-width: 640px) {
          .sj-section { padding-top: 44px; padding-bottom: 64px; }
          .sj-sub { white-space: normal; }
          .sj-bird { display: none; }
          .sj-stage { margin-top: 40px; margin-left: -8px; margin-right: -8px; width: calc(100% + 16px); }
        }

        /* Mobile-only stacked step list — the road+walker above stays purely
           decorative on narrow screens; at phone widths the road's S-curve
           packs markers too close together for readable text to sit next to
           each one without colliding, so the actual copy lives here instead. */
        .sj-steps {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sj-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px;
          border-radius: 16px;
          transition: background-color 0.3s ease;
        }
        .sj-step.active { background-color: rgba(228, 86, 42, 0.07); }
        .sj-step-badge {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background: var(--gray-circle);
          color: #6b5f52;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .sj-step.active .sj-step-badge {
          background: var(--orange);
          color: #fff;
          box-shadow: 0 0 0 6px rgba(228, 86, 42, 0.12);
        }
        .sj-step-title {
          display: flex;
          align-items: center;
          gap: 7px;
          font-weight: 600;
          font-size: 15.5px;
          color: var(--ink);
          transition: color 0.3s ease;
        }
        .sj-step.active .sj-step-title { color: var(--orange); }
        .sj-step-title .sj-num { color: var(--orange); font-weight: 700; }
        .sj-step-desc {
          margin-top: 4px;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--muted);
        }

        @media (prefers-reduced-motion: reduce) {
          .sj-leg-l, .sj-leg-r, .sj-arm-l, .sj-arm-r { animation: none !important; }
          .sj-marker-icon-bg.hovered { animation: none !important; }
        }
      `}</style>

      <div className="sj-head">
        <h2 className="sj-h1">
          A <span>Seamless</span> Journey
        </h2>
        <p className="sj-sub">Discover. Choose. Subscribe. Your meals, simplified.</p>
      </div>

      <div className="sj-stage">
        <svg
          className="sj-svg"
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          role="img"
          aria-label="Membership journey: discover, choose, subscribe"
        >
          <defs>
            <radialGradient id="sj-glow-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--orange)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--orange)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <SkyAndLamps />

          <path ref={pathRef} className="sj-road" d={ROAD_D} />
          <path className="sj-road-dash" d={ROAD_D} />

          <Walker innerRef={walkerRef} className={isVisible && !reducedMotion ? "walking" : ""} />

          <Markers markerPoints={markerPoints} activeId={activeId} />
        </svg>
      </div>

      <div className="sj-steps">
        {STEPS.map((step) => {
          const Icon = step.icon;
          const isActive = activeId === step.id;
          return (
            <div key={step.id} className={`sj-step${isActive ? " active" : ""}`}>
              <div className="sj-step-badge">
                <Icon size={16} strokeWidth={2.2} />
              </div>
              <div>
                <p className="sj-step-title">
                  <span className="sj-num">{step.id}</span> {step.title}
                </p>
                <p className="sj-step-desc">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop version — unchanged: walker follows the cursor along the  */
/*  road, plus the membership card.                                   */
/* ------------------------------------------------------------------ */

const SAMPLE_COUNT = 160;
const HOVER_RADIUS = 0.12;

function JourneyDesktop() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const walkerRef = useRef(null);
  const samplesRef = useRef([]);
  const [markerPoints, setMarkerPoints] = useState(null);
  const [walking, setWalking] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const idleTimer = useRef(null);

  const placeWalker = useCallback((pt) => {
    if (!walkerRef.current || !pt) return;
    walkerRef.current.setAttribute(
      "transform",
      `translate(${pt.x} ${pt.y - 11}) rotate(${pt.angle})`
    );
  }, []);

  useEffect(() => {
    if (!pathRef.current) return;
    const total = pathRef.current.getTotalLength();

    const samples = [];
    for (let i = 0; i <= SAMPLE_COUNT; i++) {
      const t = i / SAMPLE_COUNT;
      const len = t * total;
      const p = pathRef.current.getPointAtLength(len);
      const p2 = pathRef.current.getPointAtLength(Math.min(len + 1, total));
      const angle = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
      samples.push({ x: p.x, y: p.y, angle, t });
    }
    samplesRef.current = samples;

    const markers = STEPS.map((s) => {
      const p = pathRef.current.getPointAtLength(s.fraction * total);
      return { x: p.x, y: p.y };
    });
    setMarkerPoints(markers);

    placeWalker(samples[0]);
  }, [placeWalker]);

  const handleMove = useCallback((e) => {
    const svg = svgRef.current;
    if (!svg || samplesRef.current.length === 0) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const loc = pt.matrixTransform(svg.getScreenCTM().inverse());

    let best = samplesRef.current[0];
    let bestDist = Infinity;
    for (const s of samplesRef.current) {
      const d = (s.x - loc.x) ** 2 + (s.y - loc.y) ** 2;
      if (d < bestDist) {
        bestDist = d;
        best = s;
      }
    }
    placeWalker(best);
    setWalking(true);
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setWalking(false), 180);

    let nearestStep = null;
    let nearestGap = Infinity;
    for (const step of STEPS) {
      const gap = Math.abs(step.fraction - best.t);
      if (gap < nearestGap) {
        nearestGap = gap;
        nearestStep = step;
      }
    }
    setHoveredId(nearestGap <= HOVER_RADIUS ? nearestStep.id : null);
  }, [placeWalker]);

  const handleLeave = useCallback(() => {
    setWalking(false);
    setHoveredId(null);
  }, []);

  return (
    <section id="explore" className="sj-section">
      <style>{`
        ${SHARED_STYLES}

        .sj-svg { cursor: pointer; }

        .sj-card-wrap {
          position: absolute;
          right: 0;
          top: 2%;
        }
        .sj-card {
          background: #16130f;
          border-radius: 26px;
          width: 132px;
          padding: 10px 10px 14px;
          box-shadow: 0 14px 30px rgba(0,0,0,0.2);
        }
        .sj-card-top {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #fdf5ee;
          font-weight: 800;
          font-size: 11px;
          padding: 4px 2px 8px;
        }
        .sj-card-body { background: #fdf5ee; border-radius: 18px; padding: 12px 10px; text-align: center; }
        .sj-check { color: #2e9e5b; margin: 0 auto 4px; }
        .sj-card-status { font-size: 10px; font-weight: 700; }
        .sj-card-sub { font-size: 8.5px; color: var(--muted); margin-bottom: 8px; }
        .sj-pass-label { font-size: 9px; font-weight: 800; color: var(--orange); letter-spacing: 0.04em; margin-bottom: 6px; }
        .sj-qr {
          width: 84px;
          height: 84px;
          margin: 0 auto;
          background: #fff;
          border: 1.5px solid #f0e6d8;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sj-valid { margin-top: 8px; font-size: 8px; color: var(--muted); }

        @media (prefers-reduced-motion: reduce) {
          .sj-leg-l, .sj-leg-r { animation: none !important; }
          .sj-marker-icon-bg.hovered { animation: none !important; }
        }
      `}</style>

      <div className="sj-head">
        <h2 className="sj-h1">
          A <span>Seamless</span> Journey
        </h2>
        <p className="sj-sub">Discover. Choose. Subscribe. Your meals, simplified.</p>
      </div>

      <div className="sj-stage">
        <svg
          ref={svgRef}
          className="sj-svg"
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          role="img"
          aria-label="Membership journey: discover, choose, subscribe"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <defs>
            <radialGradient id="sj-glow-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--orange)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--orange)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <SkyAndLamps />

          <path ref={pathRef} className="sj-road" d={ROAD_D} />
          <path className="sj-road-dash" d={ROAD_D} />

          <Walker innerRef={walkerRef} className={walking ? "walking" : ""} />

          {markerPoints &&
            STEPS.map((step, i) => {
              const isHovered = hoveredId === step.id;
              return (
                <g
                  key={step.id}
                  transform={`translate(${markerPoints[i].x} ${markerPoints[i].y})`}
                  onMouseEnter={() => setHoveredId(step.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{ cursor: "pointer" }}
                >
                  <circle className={`sj-marker-ring${isHovered ? " hovered" : ""}`} r="30" />
                  <circle className={`sj-marker-icon-bg${isHovered ? " hovered" : ""}`} r="24" />
                  <foreignObject x="-11" y="-11" width="22" height="22">
                    <div
                      className={`sj-marker-icon${isHovered ? " hovered" : ""}`}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <step.icon size={20} strokeWidth={2.2} />
                    </div>
                  </foreignObject>
                  <circle className={`sj-marker-num-bg${isHovered ? " hovered" : ""}`} cx="-22" cy="-22" r="11" />
                  <text x="-22" y="-18" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
                    {step.id}
                  </text>
                </g>
              );
            })}
        </svg>

        <Labels markerPoints={markerPoints} activeId={hoveredId} />

        <div className="sj-card-wrap">
          <div className="sj-card">
            <div className="sj-card-top">
              <StrikeLogo className="" style={{ height: 14 }} />
              STRIKE
            </div>
            <div className="sj-card-body">
              <UserCheck className="sj-check" size={22} strokeWidth={2.4} />
              <div className="sj-card-status">You're a Member Now!</div>
              <div className="sj-card-sub">Welcome to Strike.</div>
              <div className="sj-pass-label">MEAL PASS</div>
              <div className="sj-qr">
                <QrCode size={48} strokeWidth={1.6} color="#16130f" />
              </div>
              <div className="sj-valid">Valid till 30 Nov 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Switch: mobile viewport → auto-walk version, everything else →    */
/*  the unchanged hover version.                                      */
/* ------------------------------------------------------------------ */

export default function Journey() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return isMobile ? <JourneyMobile /> : <JourneyDesktop />;
}