"use client";

import { useRef, useId, useState } from "react";
import { motion, useInView, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import forBusiness from "../assets/for-business.jpg";
import forMembers from "../assets/for-members.jpg";
import LazyImage from "./LazyImage";
import { GOOGLE_PLAY_URL, VENDOR_WEBSITE_URL } from "../config/links";

// ---------------------------------------------------------------------------
// Content — members shown first since the public-facing site is member-led;
// each side links out to its own destination (the member app vs. the
// business/vendor platform).
// ---------------------------------------------------------------------------
const CARDS = [
  {
    id: "members",
    image: forMembers,
    title: "For Members",
    description:
      "Discover memberships, access benefits, and manage everything in one place.",
    href: GOOGLE_PLAY_URL,
  },
  {
    id: "business",
    image: forBusiness,
    title: "For Businesses",
    description:
      "Manage memberships, improve customer engagement, and simplify operations.",
    href: VENDOR_WEBSITE_URL,
  },
];

function BusinessCard({ card, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [hovered, setHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBackground = useMotionTemplate`radial-gradient(320px circle at ${glowX}% ${glowY}%, rgba(255,140,90,0.18), transparent 70%)`;

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(py * -10);
    glowX.set((px + 0.5) * 100);
    glowY.set((py + 0.5) * 100);
  }
  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  }

  return (
    <motion.a
      ref={ref}
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.45, 0, 0.2, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="w-full sm:flex-1 sm:min-w-0"
      style={{
        perspective: 1800,
        position: "relative",
        display: "block",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* ambient orange glow, expands and brightens on hover */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.92 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: "-10%",
          borderRadius: "2rem",
          background:
            "radial-gradient(closest-side, rgba(255,107,53,0.55), rgba(255,107,53,0.18) 60%, transparent 80%)",
          filter: "blur(22px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
          position: "relative",
          borderRadius: "1.5rem",
          background: "#ffffff",
          zIndex: 1,
        }}
        animate={{
          boxShadow: hovered
            ? "0 30px 60px -15px rgba(255,107,53,0.45), 0 0 0 1px rgba(255,107,53,0.35)"
            : "0 1px 2px rgba(20,20,20,0.05), 0 0 0 1px rgba(20,20,20,0.04)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* soft directional sheen that follows the cursor */}
        <motion.div
          aria-hidden="true"
          animate={{ opacity: hovered ? 0.8 : 0 }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1.5rem",
            background: glowBackground,
            pointerEvents: "none",
          }}
        />

        <div
          className="flex flex-col items-center px-6 py-9 text-center sm:px-8 sm:py-12"
          style={{ position: "relative" }}
        >
          <LazyImage
            src={card.image}
            alt={card.title}
            className="mb-7 h-32 w-full max-w-[12rem] rounded-[1rem] sm:h-[8.5rem]"
            imgClassName="rounded-[1rem]"
          />
          <h3
            className="text-2xl sm:text-3xl"
            style={{ marginBottom: "0.9rem", fontWeight: 700, letterSpacing: "-0.01em", color: "#171717" }}
          >
            {card.title}
          </h3>
          <p
            style={{
              maxWidth: "22rem",
              fontSize: "0.975rem",
              lineHeight: 1.7,
              color: "#737373",
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            }}
          >
            {card.description}
          </p>
        </div>
      </motion.div>
    </motion.a>
  );
}

function CurvedHeading({ text }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 1300 210"
      width="100%"
      style={{ display: "block", maxWidth: "1080px", margin: "0 auto", overflow: "visible" }}
      role="img"
      aria-label={text}
    >
      <path id={`curve-${id}`} d="M 10,175 Q 650,15 1290,175" fill="none" />
      <text
        textAnchor="middle"
        style={{
          fill: "#171717",
          fontWeight: 800,
          fontFamily: "'Georgia', 'Iowan Old Style', 'Times New Roman', serif",
          letterSpacing: "-0.01em",
        }}
      >
        <textPath href={`#curve-${id}`} startOffset="50%" style={{ fontSize: "64px" }}>
          {text}
        </textPath>
      </text>
    </svg>
  );
}

export default function Businesses() {
  return (
    <section
      id="for-businesses"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#ffffff",
        paddingTop: "clamp(2rem, 6vw, 3rem)",
        paddingBottom: "clamp(3.5rem, 10vw, 6rem)",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "68rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <CurvedHeading text="Better Memberships. Better Businesses." />

        <p
          style={{
            marginTop: "1.25rem",
            maxWidth: "42rem",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            color: "#737373",
          }}
        >
          We believe in a win-win ecosystem where businesses get predictable
          revenue and customers get unparalleled value and convenience.
        </p>

        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-6 sm:mt-16 sm:flex-row sm:gap-10">
          {CARDS.map((card, i) => (
            <BusinessCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}