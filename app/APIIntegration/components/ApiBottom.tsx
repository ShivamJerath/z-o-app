export default function ApiBottom() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1600px] mx-auto">
        {/* IMAGE + CARD WRAPPER */}
        <div className="relative overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <img
            src="/api-b.png"
            alt="Join us in redefining travel"
            className="w-full h-[420px] md:h-[480px] object-cover"
          />

          {/* OVERLAY CARD */}
          <div
            className="
              absolute
              right-6 md:right-10 lg:right-35
              top-93 -translate-y-26
              bg-[#0a7a8f]/60
              backdrop-blur-sm
              text-white
              p-8 md:p-10
              max-w-[420px]
              shadow-xl
            "
          >
            <p className="text-[14px] md:text-[16px] leading-relaxed text-white/90">
              Whether you're a digital-first travel agency, neobank, IoT
              platform, or telecom disruptor — Zoiko Orbit’s APIs give you
              carrier-grade capabilities with zero telco complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
