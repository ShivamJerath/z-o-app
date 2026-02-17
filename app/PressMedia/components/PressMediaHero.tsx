export default function PressMediaHero() {
  return (
    <section className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/press-hero.png"
        alt="Press & Media"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay (right side) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 lg:px-16 flex items-center justify-end">
        
        {/* Text Block */}
        <div className="max-w-[520px] text-white">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-tight">
            Press & Media
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] text-white/85 leading-relaxed">
            Stay informed with the latest developments from Zoiko Orbit — including
            product innovations, global rollouts, strategic alliances, sustainability
            initiatives, and thought leadership from our executive team.
          </p>
        </div>

      </div>
    </section>
  );
}
