export default function StayConnectedHero() {
  return (
    <section className="relative w-full overflow-visible">
      {/* Background */}
      <img
        src="/hero-bg.png"
        alt="Global Connectivity"
        className="w-full h-[520px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b2c4a]/50 via-[#0b2c4a]/40 to-[#0b2c4a]/60" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h1 className="text-white font-semibold text-[44px] lg:text-[56px] leading-tight">
          Stay Connected Everywhere
        </h1>

        <p className="mt-4 text-white/90 text-[18px] max-w-[680px]">
          Your global eSIM. Trusted by travelers, enterprises, and travel brands
          worldwide.
        </p>

        {/* Buttons (NOW VISIBLE) */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/plans"><button className="px-8 h-[52px] rounded-xl bg-[#5468A6] text-white font-medium text-[16px] hover:bg-[#475a93] transition">
            Get Your eSIM
          </button></a>

          <a href="/PartnerWithUs"><button className="px-8 h-[52px] rounded-xl border border-white text-white font-medium text-[16px] hover:bg-white/10 transition">
            Partner with Us
          </button></a>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full px-6 z-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-[56px] h-[56px] rounded-full bg-[#E6ECF7] flex items-center justify-center">
                <img src="/stay1.png" alt="" className="w-[56px] h-[56px]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#3E5A9A]">
                  For Individuals
                </h3>
                <p className="text-[14px] text-gray-600">
                  One eSIM, global coverage, no hidden fees.
                </p>
              </div>
            </div>
            <a href="/PersonalTraveller"><span className="text-[#3E5A9A] text-xl">→</span></a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-[56px] h-[56px] rounded-full bg-[#EEE7FB] flex items-center justify-center">
                <img src="/stay2.png" alt="" className="w-[56px] h-[56px]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#3E5A9A]">
                  For Businesses
                </h3>
                <p className="text-[14px] text-gray-600">
                  Retailers & Distributors, Travel Agencies & Tour Operators...
                </p>
              </div>
            </div>
            <a href="/Enterprise"><span className="text-[#3E5A9A] text-xl">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
