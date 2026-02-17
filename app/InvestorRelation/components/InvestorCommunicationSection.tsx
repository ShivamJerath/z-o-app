export default function InvestorCommunicationSection() {
  return (
    <section className="relative bg-[#F5F7F9] py-20 overflow-hidden">

      {/* Optional Grid Background */}
      {/* <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img
          src="/grid-bg.png"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-30">

        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 mb-28">

          {/* TEXT */}
          <div className="text-right text-xl text-gray-700 leading-relaxed max-w-[520px] mx-auto lg:mx-0">
            <p>
              We maintain open communication with institutional and private
              investors, guided by global best practices in financial governance
              and disclosure. Our leadership team delivers consistent performance
              updates, regulatory compliance reports, and stakeholder briefings
              to ensure investors are informed and aligned with our strategic
              objectives.
            </p>
          </div>

          {/* SINGLE IMAGE (RIGHT) */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/investor1.png"
              alt="Investor meeting"
              className="w-[360px] md:w-[420px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* ===== BOTTOM SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* SINGLE IMAGE (LEFT) */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/investor2.png"
              alt="eSIM phone"
              className="w-[360px] md:w-[420px] rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="text-center lg:text-left text-xl text-gray-700 leading-relaxed max-w-[520px] mx-auto lg:mx-0">
            <p>
              From our pioneering work in sustainable eSIM connectivity to our
              expanding footprint across travel, telecom, and conservation
              markets, Zoiko Orbit represents a forward-thinking investment
              opportunity rooted in innovation, resilience, and responsible
              growth.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
