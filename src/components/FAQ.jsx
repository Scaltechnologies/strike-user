import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const BRAND = "#AC2D00";
const INK = "#2D2D2D";

const FAQS = [
  {
    q: "What is STRIKE?",
    a: "STRIKE is a membership platform that brings your favorite gyms, salons, restaurants, and more into one place — so you can discover, join, and manage every membership from a single app.",
  },
  {
    q: "How do memberships work?",
    a: "Browse memberships from places you love, subscribe in a few taps, and get instant digital access — no paperwork, no waiting. Your usage and benefits update in real time.",
  },
  {
    q: "Can I manage multiple memberships?",
    a: "Yes. Every membership you subscribe to lives in one wallet inside the STRIKE app, so you can view, renew, pause, or cancel any of them without switching apps.",
  },
  {
    q: "How do I use my membership?",
    a: "Open the app, select the membership you want to use, and check in with your digital pass or QR code — no vouchers or printing required.",
  },
  {
    q: "Where can I find available memberships?",
    a: "Explore the Discover tab in the app to browse memberships by category — fitness, salons, restaurants, retail, and more — all in one place.",
  },
  {
    q: "How can I get support?",
    a: "Reach our Support Hub any time from the app or website. You'll get quick answers plus a direct line to our team for anything you can't resolve yourself.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-[#EFE6DC] last:border-b-0">
      <button
        onClick={onClick}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:bg-[#FFF8F3]/60 px-1 -mx-1 rounded-lg"
      >
        <span
          className="text-[17px] sm:text-[19px] font-semibold tracking-tight transition-colors"
          style={{ color: isOpen ? BRAND : INK }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors"
          style={{ backgroundColor: isOpen ? BRAND : "#FDEDE6" }}
        >
          <Plus size={17} color={isOpen ? "white" : BRAND} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-4 text-[15.5px] leading-[1.75] text-[#6B6459] sm:pr-12">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#FCFAF8] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: heading + supporting copy, sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: BRAND }}
            >
              Support
            </span>
            <h2
              className="mt-4 text-4xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight"
              style={{ color: INK }}
            >
              Frequently asked{" "}
              <span style={{ color: BRAND }}>questions.</span>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#6B6459]">
              Everything you need to know about discovering, joining, and
              managing your memberships with STRIKE.
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[24px] border border-[#EFE6DC] bg-white px-6 sm:px-9"
          >
            {FAQS.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
