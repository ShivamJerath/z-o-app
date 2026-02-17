export default function DeveloperPlatformSection() {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* Full Background Image */}
      <img
        src="/api-hero.png"
        alt="Developer eSIM Platform"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0033]/90 via-[#14004A]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
        
        <div className="max-w-[620px] text-white">
          <h2 className="text-[28px] md:text-[30px] lg:text-[36px] font-bold leading-tight">
            Embed global eSIM infrastructure into your platform <br/>— with developer-first precision.
          </h2>

          <p className="mt-6 text-[15px] md:text-[16px] text-white/85 leading-relaxed">
            Zoiko Orbit offers a secure, modular API framework designed for businesses that build at scale.
            Whether you're integrating into a travel booking flow, fintech wallet, or a global workforce
            management system — our API suite provides the tools, security, and support to deliver seamless
            eSIM experiences anywhere in the world.
          </p>
        </div>

      </div>
    </section>
  );
}
