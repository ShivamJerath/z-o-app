export default function PartnerConnect() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1600px] mx-auto">

        {/* IMAGE + CARD WRAPPER */}
        <div className="relative overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <img
            src="/partner-b.png"
            alt="Join us in redefining travel"
            className="w-full h-[420px] md:h-[480px] object-cover"
          />

          {/* OVERLAY CARD */}
          <div
            className="
              absolute
              right-6 md:right-10 lg:right-35
              top-99 -translate-y-26
              bg-[#0a7a8f]/60
              backdrop-blur-sm
              text-white
              rounded-2xl
              p-8 md:p-10
              max-w-[420px]
              shadow-xl
            "
          >

            <p className="text-[14px] md:text-[15px] leading-relaxed text-white/90">
              We don’t just offer a product — we deliver an infrastructure, commercial engine, and trusted reputation that scales with you.
            </p>

            <a href="#"><p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-white/90">
              Let’s connect — and go global together
            </p></a>
          </div>
        </div>

      </div>
    </section>
  );
}
