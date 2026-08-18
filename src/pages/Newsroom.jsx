import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

// Real announcements go here once there are some to publish — each entry
// would render as a card below. Left empty until then; the empty state
// covers the no-content case.
const ARTICLES = [];

export default function Newsroom() {
  return (
    <div className="w-full bg-[#FCFAF8]">
      <PageHeader />

      <section className="px-6 pt-10 pb-6 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B35]">
            Newsroom
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-[#1A1006]">
            STRIKE Newsroom
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#3A2A18]/70">
            Stay updated with the latest from STRIKE.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20">
        {ARTICLES.length > 0 ? (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <div key={article.title} className="rounded-2xl border border-[#EFE6DC] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#FF6B35]">
                  {article.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#1A1006]">{article.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3A2A18]/65">{article.summary}</p>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-lg flex-col items-center rounded-[1.75rem] border border-[#EFE6DC] bg-white px-8 py-16 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF3E9]">
              <Newspaper size={24} className="text-[#FF6B35]" strokeWidth={1.8} />
            </div>
            <p className="mt-5 text-lg font-bold text-[#1A1006]">No announcements yet.</p>
            <p className="mt-2 text-sm text-[#3A2A18]/60">Check back soon.</p>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  );
}
