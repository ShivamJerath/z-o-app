export default function PartnerNetworkHero() {
  return (
    <section className="relative w-full h-[520px] md:h-[620px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/partner-hero.png"
        alt="Partner Network"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081E35]/90 via-[#081E35]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 lg:px-16 flex items-center">

        <div className="max-w-[600px] text-white">

          <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-tight">
            Co-create the future <br />
            of global connectivity.
          </h1>

          <p className="mt-6 text-[15px] md:text-[17px] text-white/90 leading-relaxed">
            The Zoiko Orbit Partner Network is a high-performance ecosystem
            designed for scale, trust, and mutual growth. Whether you're a
            telecom disruptor, enterprise platform, or international reseller,
            we empower you to deliver world-class eSIM solutions — tailored to
            your business model and brand vision.
          </p>

          <button className="mt-8 bg-[#0C7687] hover:bg-[#0995B3] transition text-white px-8 py-3 rounded-lg text-[15px] font-semibold">
            Partner with Us
          </button>

        </div>

      </div>

    </section>
  );
}
