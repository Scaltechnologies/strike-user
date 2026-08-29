import { motion } from "framer-motion";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

export default function LegalContent({ eyebrow, title, updated, intro, sections }) {
  return (
    <div className="w-full bg-[#FCFAF8]">
      <PageHeader />

      <section className="px-6 pt-10 pb-6 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF6B35]">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-[#1A1006]">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-[#3A2A18]/70 sm:text-lg">
              {intro}
            </p>
          )}
          {updated && (
            <p className="mt-4 text-xs text-[#3A2A18]/45">Last updated: {updated}</p>
          )}
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-3xl flex-col gap-10 rounded-[1.75rem] border border-[#EFE6DC] bg-white p-6 sm:p-10"
        >
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold tracking-tight text-[#1A1006] sm:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-3 text-[15px] leading-relaxed text-[#3A2A18]/75">
                {s.paragraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.list && (
                  <ul className="flex flex-col gap-2 pl-1">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B35]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
