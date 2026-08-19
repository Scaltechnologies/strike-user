import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden w-full py-20 px-6 flex items-center justify-center bg-gradient-to-br from-[#4A0D05] via-[#B3220D] to-[#FF5A2C] sm:py-24 lg:py-28">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-orange-400/15 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-400/15 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight w-full">
          Ready to Scale Your Business?
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-white/90 text-base leading-7 text-center sm:mt-6 sm:text-lg sm:leading-8">
          Join 1000+ top-tier businesses growing with STRIKE.
          Let's transform your customer loyalty today.
        </p>

        <div className="mt-10 flex w-full justify-center items-center sm:mt-12">
          <Link
            to="/partner"
            className="w-full max-w-xs text-center bg-white text-[#1A1006] font-semibold px-8 py-3 text-base rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 sm:w-auto sm:max-w-none sm:px-14 sm:text-lg"
          >
            Become a Partner
          </Link>
        </div>
      </motion.div>
    </section>
  );
}