export default function TravelFutureSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1600px] mx-auto">

        {/* IMAGE + CARD WRAPPER */}
        <div className="relative overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <img
            src="/gg1.png"
            alt="Join us in redefining travel"
            className="w-full h-[420px] md:h-[480px] object-cover"
          />

          {/* OVERLAY CARD */}
          <div
            className="
              absolute
              right-6 md:right-10 lg:right-16
              top-86 -translate-y-26
              bg-[#0a7a8f]/70
              backdrop-blur-sm
              text-white
              rounded-2xl
              p-8 md:p-10
              max-w-[520px]
              shadow-xl
            "
          >

            <p className="text-[14px] md:text-[15px] leading-relaxed text-white/90">
              Experience the future of travel connectivity—one eSIM for every destination.
            </p>

            <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-white/90">
              Stay connected effortlessly across 190+ countries with a single Zoiko Orbit™ eSIM—no contracts, no SIM swaps, no hidden fees. Enjoy seamless, secure, high-speed data wherever your journey takes you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
