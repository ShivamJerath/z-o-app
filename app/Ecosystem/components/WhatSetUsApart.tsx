export default function WhyPartnerWithUs() {
  return (
    <section className="relative bg-[#F7FBFE] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[38px] font-semibold text-gray-900">
            What Sets Us Apart
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">
          {/* CARD 1 */}
          <div className="max-w-[360px] mx-auto">
            <img
              src="/what1.png"
              alt="Engineered for Global Trust"
              className="mx-auto w-[72px] h-[72px] object-contain mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
              Engineered for Global Trust
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Our advanced eSIM platform runs on Tier-1 carrier partnerships
              across 220+ countries, safeguarded by PCI DSS, GDPR, and rigorous
              data privacy standards. You get local-quality speeds and secure
              transactions wherever your journey takes you.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="max-w-[360px] mx-auto">
            <img
              src="/what2.png"
              alt="Built to Give Back"
              className="mx-auto w-[72px] h-[72px] object-contain mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
              Built to Give Back
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Unlike typical travel SIM providers, we embed impact at the core
              of every connection. Each Zoiko Orbit purchase actively supports
              animal rescue centers, wildlife rehabilitation programs, and
              community conservation efforts — so your travels help sustain the
              beauty you’ve come to explore.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="max-w-[360px] mx-auto">
            <img
              src="/what3.png"
              alt="Part of the Zoiko Promise"
              className="mx-auto w-[72px] h-[72px] object-contain mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
              Part of the Zoiko Promise
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              As a member of Zoiko Group, we uphold a legacy of operational
              excellence, cultural intelligence, and meaningful innovation —
              dedicated to improving lives and safeguarding the world we all
              share.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
