function Hero() {
  return (
    <section
      id="categories"
      className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden px-6 py-24"
      style={{
        background: "linear-gradient(180deg, #FFF9F4 0%, #FFF3E9 55%, #FFEFE4 100%)",
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35] shadow-sm">
          Strike
        </span>

        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[#1A1006] sm:text-5xl md:text-6xl">
          Everything you love,
          <br />
          all in <span className="text-[#FF6B35]">Strike.</span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-[#3A2A18]/70">
          Digital meal memberships made simple.
        </p>

        <button className="mt-4 rounded-xl bg-[#FF6B35] px-8 py-3.5 text-base font-semibold text-white shadow-[0_15px_35px_rgba(255,107,53,0.35)] transition-transform duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
