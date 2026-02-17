export default function TravelEnd() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1600px] mx-auto">
        {/* IMAGE + CARD WRAPPER */}
        <div className="relative overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <img
            src="/support-bg.png"
            alt="Join us in redefining travel"
            className="w-full h-[420px] md:h-[480px] object-cover"
          />

          {/* OVERLAY CARD */}
          <div
            className="
              absolute
              right-6 md:right-10 lg:right-35
              top-85 -translate-y-26
              bg-[#0a7a8f]/70
              backdrop-blur-sm
              text-white
              rounded-2xl
              p-8 md:p-10
              max-w-[480px]
              shadow-xl
            "
          >

            <p className="text-[14px] md:text-[15px] leading-relaxed text-white/90">
              Whether you’re serving budget backpackers or premium
              globe-trotters, Zoiko Orbit lets you add high-margin digital
              products that travellers love — and that require zero fulfilment
              effort on your part.
            </p>

            <p className="mt-4 text-[14px] md:text-[16px] leading-relaxed text-white/90 font-bold">
              Connect your travellers. Monetize your bookings. Build brand
              loyalty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
