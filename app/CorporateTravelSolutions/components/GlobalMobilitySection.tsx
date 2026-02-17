export default function AboutHero() {
  return (
    <section
      className=" relative w-full min-h-[420px] h-[calc(100vh-80px)] max-h-[640px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/cts-hero.png"
        alt="Traveler connected with nature"
        className="
          absolute inset-0
          w-full h-full
          object-cover object-center
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/75
          via-black/45
          to-black/10
        "
      />

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-20 py-34 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white max-w-[560px] z-10">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-semibold leading-tight">
            Global mobility, <br />
            secured and simplified.
          </h2>

          <p className="mt-6 text-[15px] sm:text-[16px] text-white/85 leading-relaxed">
            Zoiko Orbit delivers enterprise-ready eSIM connectivity for
            organizations that move — across borders, sectors, and time zones.
            Our platform is engineered for global workforces, traveling executives,
            field teams, and remote-first operations that demand security,
            visibility, and compliance — at scale.
          </p>

          <p className="mt-5 text-[15px] sm:text-[16px] text-white/85 leading-relaxed">
            Whether you manage 10 consultants or 10,000 mobiles users,
            Zoiko Orbit ensures your teams stay connected, protected,
            and in-policy — without the delays, logistics, or costs of
            traditional SIM provisioning.
          </p>
        </div>

      </div>
    </section>
  );
}
