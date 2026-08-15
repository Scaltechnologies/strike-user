import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden w-full py-28 px-6 flex items-center justify-center bg-gradient-to-br from-[#4A0D05] via-[#B3220D] to-[#FF5A2C]">
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
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight w-full">
          Ready to Scale Your Business?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-white/90 text-lg leading-8 text-center">
          Join 1000+ top-tier businesses growing with STRIKE.
          Let's transform your customer loyalty today.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
          <button className="bg-white text-[#1A1006] font-semibold px-14 py-3 text-lg rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105">
            Become a Partner
          </button>

          <button className="border-2 border-white text-white font-semibold px-14 py-3 text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1A1006]">
            Book a Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}