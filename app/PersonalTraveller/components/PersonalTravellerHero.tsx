export default function PersonalTravellerHero() {
  return (
    <section className="w-full h-[520px] md:h-[620px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/travel1.png"
        alt="Personal Traveller eSIM"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto h-full px-6 lg:px-25 flex items-center">
        <div className="max-w-[720px] text-white">

          <h1 className="text-[34px] md:text-[46px] lg:text-[56px] font-semibold leading-tight">
            Travel Freely. Stay <br />
            Connected Across <br />
            220+ Countries
          </h1>

          <p className="mt-6 text-[16px] md:text-[18px] text-white/90 leading-relaxed">
            Instant eSIM activation. No roaming shocks. Every plan
            supports animal welfare.
          </p>

          <button className="mt-8 bg-[#00718A] hover:bg-[#0995B3] transition text-white px-8 py-4 rounded-xl text-[16px] font-semibold">
            Get Your eSIM
          </button>

        </div>
      </div>

    </section>
  );
}