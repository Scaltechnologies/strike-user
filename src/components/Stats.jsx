import { motion } from "framer-motion";

const stats = [
  {
    value: "1000+",
    label: "Partners",
  },
  {
    value: "50+",
    label: "Cities",
  },
  {
    value: "100K+",
    label: "Memberships",
  },
  {
    value: "95%",
    label: "Happy",
  },
];

export default function Stats() {
  return (
    <section id="about" className="w-full bg-[#FCFAF8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Center the entire stats block */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-36 lg:gap-x-28 gap-y-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-[44px] lg:text-[56px] font-bold leading-none text-[#AC2D00]">
                  {stat.value}
                </h2>

                <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[#6B6B6B]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}