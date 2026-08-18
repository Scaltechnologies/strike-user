import { motion } from "framer-motion";
import { Hammer, Cpu, GraduationCap, Puzzle, Users2, Mail, Briefcase } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { CONTACT_EMAIL } from "../config/links";

const REASONS = [
  {
    icon: Hammer,
    title: "Build real products",
    desc: "Ship features members actually use every day — not prototypes that sit on a shelf.",
  },
  {
    icon: Cpu,
    title: "Work with modern technology",
    desc: "A codebase and stack built with current tools, not legacy systems you have to fight.",
  },
  {
    icon: GraduationCap,
    title: "Learn and grow",
    desc: "Move fast, take ownership, and pick up new skills as the product grows.",
  },
  {
    icon: Puzzle,
    title: "Solve real-world problems",
    desc: "Memberships, payments, and everyday logistics — problems with real constraints and real users.",
  },
  {
    icon: Users2,
    title: "Collaborative environment",
    desc: "A small, direct team where your input shapes what gets built next.",
  },
];

export default function Careers() {
  return (
    <div className="w-full bg-[#FCFAF8]">
      <PageHeader />

      <section className="px-6 pt-10 pb-6 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B35]">
            Careers
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-[#1A1006]">
            Build the future of memberships
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#3A2A18]/70">
            We're building the simplest way for people to discover, join, and
            manage the memberships they love. If that sounds like a problem
            worth working on, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1006]">
            Why STRIKE?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-[#EFE6DC] bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF3E9]">
                  <r.icon size={19} className="text-[#FF6B35]" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#1A1006]">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#3A2A18]/65">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-[1.75rem] border border-[#EFE6DC] bg-white p-8 text-center sm:p-12"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF3E9]">
            <Briefcase size={20} className="text-[#FF6B35]" />
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#1A1006]">
            Open Positions
          </h2>
          <p className="mt-3 text-[15px] font-semibold text-[#3A2A18]">
            No open positions right now.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#3A2A18]/65">
            We're always interested in hearing from talented people. Send us
            your profile and we'll keep you in mind for future opportunities.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Interested in future opportunities at STRIKE")}`}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(255,107,53,0.3)] transition-transform hover:scale-[1.03]"
          >
            <Mail size={15} />
            Send us your profile
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
