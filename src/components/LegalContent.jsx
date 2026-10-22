import { Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const LINK_CLASS =
  "font-medium text-[#C2410C] underline decoration-[#FF6B35]/40 underline-offset-2 transition-colors hover:text-[#FF6B35] break-all";

// Rich text: a plain string, or an array of
// string | { b } (bold) | { i } (italic) | { a, to } (link: route, mailto: or tel:).
function RichText({ text }) {
  if (!Array.isArray(text)) return text;
  return text.map((part, i) => {
    if (typeof part === "string") return <Fragment key={i}>{part}</Fragment>;
    if (part.b) return <strong key={i} className="font-semibold text-[#1A1006]">{part.b}</strong>;
    if (part.i) return <em key={i}>{part.i}</em>;
    if (part.a) {
      return part.to.startsWith("/") ? (
        <Link key={i} to={part.to} className={LINK_CLASS}>{part.a}</Link>
      ) : (
        <a key={i} href={part.to} className={LINK_CLASS}>{part.a}</a>
      );
    }
    return null;
  });
}

function Block({ block }) {
  if (block.type === "ul") {
    return (
      <ul className="flex flex-col gap-2 pl-1">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6B35]" />
            <span><RichText text={item} /></span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="flex list-decimal flex-col gap-2 pl-6 marker:font-semibold marker:text-[#FF6B35]">
        {block.items.map((item, i) => (
          <li key={i} className="pl-1"><RichText text={item} /></li>
        ))}
      </ol>
    );
  }
  return <p><RichText text={block.text} /></p>;
}

function SectionBody({ s }) {
  return (
    <div className="mt-3 flex flex-col gap-3 text-[15px] leading-relaxed text-[#3A2A18]/75">
      {s.paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {s.list && <Block block={{ type: "ul", items: s.list }} />}
      {s.blocks?.map((b, i) => (
        <Block key={i} block={b} />
      ))}
    </div>
  );
}

export default function LegalContent({ eyebrow, title, updated, effective, intro, sections, children }) {
  const { hash } = useLocation();
  useDocumentTitle(title);

  // Support deep links such as /privacy#account-deletion: the target only
  // exists after render, so the browser's own hash scroll can't find it.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);

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
          {(effective || updated) && (
            <p className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-[#3A2A18]/55">
              {effective && <span>Effective date: {effective}</span>}
              {updated && <span>Last updated: {updated}</span>}
            </p>
          )}
        </div>
      </section>

      {children && <section className="px-6 pb-8">{children}</section>}

      <section className="px-6 pb-16 sm:pb-24">
        {/* Animate on mount, not on scroll: long documents are many viewports
            tall, so an in-view threshold may never be reached. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-3xl flex-col gap-10 rounded-[1.75rem] border border-[#EFE6DC] bg-white p-6 sm:p-10"
        >
          {sections.map((s) => (
            <section key={s.id ?? s.heading} id={s.id} className="scroll-mt-6 break-words">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1006] sm:text-2xl">
                {s.heading}
              </h2>
              <SectionBody s={s} />
              {s.subsections?.map((sub) => (
                <div key={sub.id ?? sub.heading} id={sub.id} className="mt-7 scroll-mt-6">
                  <h3 className="text-base font-bold tracking-tight text-[#1A1006] sm:text-lg">
                    {sub.heading}
                  </h3>
                  <SectionBody s={sub} />
                </div>
              ))}
            </section>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
