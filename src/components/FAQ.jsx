import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const BRAND = "#AC2D00";
const INK = "#2D2D2D";

const FAQS = [
  {
    q: "How does a Strike membership work?",
    a: "Subscribe to a plan, browse partner venues in the app, and check in with a QR code — no vouchers, no printing, no waiting. Your savings and usage update in real time in your wallet.",
  },
  {
    q: "Can I pause or cancel anytime?",
    a: "Yes. Every plan can be paused or cancelled directly from your account with no cancellation fees. Changes take effect at the end of your current billing cycle.",
  },
  {
    q: "Which cities is Strike available in?",
    a: "Strike currently operates in 50+ cities with 1000+ partner venues, and we're adding new locations every month. Check the Explore tab in the app for venues near you.",
  },
  {
    q: "How do businesses join Strike?",
    a: "Partner venues apply through our Business portal. Once approved, you get a dashboard for redemptions, payouts, and analytics — plus access to our full member base.",
  },
  {
    q: "Is there a limit on redemptions?",
    a: "Starter includes a set number of redemptions per month. Plus and Premium include unlimited redemptions across all partner venues, subject to each venue's fair-use policy.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-[#EFE6DC]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-[16px] sm:text-[17px] font-normal" style={{ color: INK }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px]"
          style={{ backgroundColor: isOpen ? BRAND : "#FDEDE6" }}
        >
          <Plus size={16} color={isOpen ? "white" : BRAND} />
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
            <p className="pb-6 pr-12 text-[15px] leading-relaxed text-[#6B6459]">
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
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: INK }}>
            Frequently asked{" "}
            <span style={{ color: BRAND }}>questions.</span>
          </h2>
          <p className="mt-4 text-[#6B6459] text-lg">
            Can't find what you're looking for? Reach our support team anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[20px] border border-[#EFE6DC] bg-white px-6 sm:px-8"
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
    </section>
  );
}