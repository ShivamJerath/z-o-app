export default function InvestorRelationsHero() {
  return (
    <section className="relative w-full h-[380px] md:h-[460px] lg:h-[520px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/investor-hero.png" // replace with your image
        alt="Investor Relations"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 lg:px-16 flex items-center">
        <div className="max-w-[560px] text-white">

          <h1 className="text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-tight">
            Investor Relations
          </h1>

          <p className="mt-5 text-[15px] sm:text-[16px] text-white/90 leading-relaxed">
            At Zoiko Orbit, we value the trust and confidence of our global
            investors. As a subsidiary of Zoiko Communications Group Inc.,
            we are committed to financial transparency, strategic growth,
            and long-term value creation.
          </p>

        </div>
      </div>
    </section>
  );
}
