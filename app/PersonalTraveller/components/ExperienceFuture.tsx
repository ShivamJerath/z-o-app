export default function ExperienceFuture() {
  return (
    <section className="relative w-full bg-white">
      <div className="relative w-full overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/exp.png" // replace with your image path
          alt="Experience future of travel"
          className="w-full h-[420px] md:h-[480px] lg:h-[520px] object-cover"
        />

        {/* OVERLAY CARD */}
        <div
          className="
            absolute
            right-6 md:right-10 lg:right-35
            top-1/2 -translate-y-6
            bg-[#0B7C8F]/70
            backdrop-blur-sm
            text-white
            rounded-2xl
            p-7 md:p-9
            max-w-[540px]
            h-
            shadow-xl
          "
        >
          <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold leading-snug">
            Experience the future of travel connectivity—one eSIM for every destination.
          </h3>

          <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-white/90">
            Stay connected effortlessly across 220+ countries with a single
            Zoiko Orbit™ eSIM—no contracts, no SIM swaps, no hidden fees.
            Enjoy seamless, secure, high-speed data wherever your journey
            takes you.
          </p>
        </div>

      </div>

      {/* WHITE SPACE BOTTOM (matches screenshot) */}
      <div className="h-20 bg-white" />
    </section>
  );
}
