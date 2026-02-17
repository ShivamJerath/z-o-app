export default function EnterpriseESIMSection() {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/core-bg.png"
        alt="Enterprise eSIM"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14004A] via-[#1B0560]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <div className="max-w-[520px] text-white">

          <p className="text-[15px] md:text-[16px] leading-relaxed text-white/85">
            Our enterprise eSIM architecture enables central control
            with local flexibility — so you can deploy, manage, and
            scale travel connectivity as a secure extension of your
            corporate infrastructure.
          </p>

          <p className="mt-6 text-[16px] md:text-[17px] font-semibold">
            Zoiko Orbit for Corporate Travel — because
            business shouldn’t stop at the border.
          </p>

        </div>
      </div>

    </section>
  );
}
