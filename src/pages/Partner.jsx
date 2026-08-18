import { motion } from "framer-motion";
import { ExternalLink, LayoutGrid, TrendingUp, Settings2, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { VENDOR_WEBSITE_URL } from "../config/links";

const HIGHLIGHTS = [
  {
    icon: LayoutGrid,
    title: "Manage memberships",
    desc: "Set up plans, track subscribers, and handle renewals from one dashboard.",
  },
  {
    icon: Users,
    title: "Understand your customers",
    desc: "See how members engage with your business and where to double down.",
  },
  {
    icon: Settings2,
    title: "Simplify operations",
    desc: "Replace manual passes and spreadsheets with digital check-ins and tracking.",
  },
  {
    icon: TrendingUp,
    title: "Grow with STRIKE",
    desc: "Reach members already looking for memberships like yours.",
  },
];

export default function Partner() {
  return (
    <div className="w-full bg-[#FCFAF8]">
      <PageHeader />

      <section className="px-6 pt-10 pb-6 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B35]">
            STRIKE for Business
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-[#1A1006]">
            Grow your business with STRIKE
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#3A2A18]/70">
            STRIKE gives businesses the tools to manage memberships,
            customers, services, and day-to-day operations — all in one
            place, so you can focus on the experience you offer.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={VENDOR_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF6B35] px-7 py-3.5 text-base font-semibold text-white shadow-[0_15px_35px_rgba(255,107,53,0.3)] transition-transform hover:scale-[1.03]"
            >
              Visit STRIKE for Businesses
              <ExternalLink size={16} />
            </a>
            <p className="max-w-sm text-xs text-[#3A2A18]/45">
              The STRIKE for Business platform is still being built. This
              button currently leads to a placeholder link and will point to
              the real vendor site once it's live.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-4 rounded-2xl border border-[#EFE6DC] bg-white p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF3E9]">
                <h.icon size={19} className="text-[#FF6B35]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1A1006]">{h.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#3A2A18]/65">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #4A0D05 0%, #B3220D 55%, #FF5A2C 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to bring your business to STRIKE?
          </h2>
          <p className="mt-4 text-white/85">
            Take a look at the STRIKE for Business platform.
          </p>
          <a
            href={VENDOR_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A1006] shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.03]"
          >
            Visit STRIKE for Businesses
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
