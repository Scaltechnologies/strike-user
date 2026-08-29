import { motion } from "framer-motion";
import { Dumbbell, Scissors, UtensilsCrossed, ShoppingBag, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const SOLUTIONS = [
  {
    id: "fitness",
    icon: Dumbbell,
    color: "#FF6B35",
    tag: "Fitness & Wellness",
    title: "Gym & wellness memberships",
    who: "For members who want consistent access to the gyms and studios they train at.",
    how: "STRIKE brings gym and wellness memberships into one wallet — subscribe, check in with a QR code, and track everything in the app instead of juggling separate passes.",
    benefits: [
      "Gym and studio memberships",
      "Wellness plan management",
      "One-tap check-in, no paperwork",
    ],
  },
  {
    id: "salons",
    icon: Scissors,
    color: "#8B5CF6",
    tag: "Salons & Beauty",
    title: "Salon & beauty memberships",
    who: "For members who visit the same salon or spa regularly and want it to feel effortless.",
    how: "Digital membership cards replace paper punch cards. Recurring memberships, member-only benefits, and usage history all live in your STRIKE wallet.",
    benefits: [
      "Digital membership cards",
      "Recurring membership plans",
      "Member benefits, tracked automatically",
    ],
  },
  {
    id: "restaurants",
    icon: UtensilsCrossed,
    color: "#F59E0B",
    tag: "Restaurants & Meals",
    title: "Meal memberships & subscriptions",
    who: "For members who eat at the same places often and want a simpler way to pay and track it.",
    how: "STRIKE powers digital meal subscriptions with built-in consumption tracking, so members always know what's left on their plan and businesses avoid manual bookkeeping.",
    benefits: [
      "Digital meal subscriptions",
      "Real-time consumption tracking",
      "Simplified renewals",
    ],
  },
  {
    id: "retail",
    icon: ShoppingBag,
    color: "#22C55E",
    tag: "Retail",
    title: "Membership-based retail",
    who: "For members who want ongoing perks at the retail spots they shop most.",
    how: "Retail partners offer membership-based benefits through STRIKE — members get consistent value, and every perk is tracked in one place.",
    benefits: [
      "Membership-based retail perks",
      "Member benefit tracking",
      "One place for every retail membership",
    ],
  },
];

function SolutionRow({ solution, index }) {
  const Icon = solution.icon;
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.45, 0, 0.2, 1] }}
      className={`flex flex-col items-center gap-10 lg:gap-16 ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Icon panel */}
      <div className="relative flex w-full max-w-sm shrink-0 items-center justify-center lg:w-[38%]">
        <div
          aria-hidden="true"
          className="absolute h-56 w-56 rounded-full opacity-25 blur-2xl"
          style={{ background: solution.color }}
        />
        <div
          className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] sm:h-52 sm:w-52"
          style={{
            background: `linear-gradient(135deg, ${solution.color}22, ${solution.color}0A)`,
            border: `1px solid ${solution.color}33`,
          }}
        >
          <Icon size={72} strokeWidth={1.5} style={{ color: solution.color }} />
        </div>
      </div>

      {/* Copy panel */}
      <div className="flex-1">
        <span
          className="text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: solution.color }}
        >
          {solution.tag}
        </span>
        <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1006]">
          {solution.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[#3A2A18]/70">
          {solution.who}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#3A2A18]/70">
          {solution.how}
        </p>
        <ul className="mt-6 flex flex-col gap-2.5">
          {solution.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-[#1A1006]">
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${solution.color}22` }}
              >
                <Check size={12} strokeWidth={3} style={{ color: solution.color }} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Explore() {
  return (
    <div className="w-full bg-[#FCFAF8]">
      <PageHeader />

      <section className="px-6 pt-10 pb-6 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF6B35]">
            Explore Strike
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-[#1A1006]">
            What can STRIKE provide?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#3A2A18]/70">
            STRIKE brings memberships from every part of your life into one
            place. Here's a look at the kinds of memberships you can
            discover, join, and manage.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-20 sm:gap-28">
          {SOLUTIONS.map((solution, i) => (
            <SolutionRow key={solution.id} solution={solution} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
