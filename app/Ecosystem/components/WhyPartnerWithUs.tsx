export default function WhyPartnerWithUs() {
  return (
    <section className="relative bg-[#F7FBFE] py-24 overflow-hidden">
      {/* Subtle Grid Background (optional image) */}
      {/* <div className="absolute inset-0 opacity-40 pointer-events-none">
        <img
          src="/grid.png"   // optional background grid
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900">
            Why Partner with Us
          </h2>
          <p className="mt-3 text-[16px] text-gray-600">
            Unlock new revenue and delight travelers with ready-to-activate
            global data.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-center">
          {/* Item 1 */}
          <div>
            <img
              src="/us1.png"
              alt="Attractive Commissions"
              className="w-[80px] h-[80px] mx-auto mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
              Attractive Commissions
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Earn competitive margins on every traveler you activate—recurring
              revenue options available.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <img
              src="/us2.png"
              alt="Tier-1 Global Data"
              className="w-[80px] h-[80px] mx-auto mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
              Tier-1 Global Data
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Backed by top carrier networks across 190+ countries for
              dependable, high-speed coverage.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <img
              src="/us3.png"
              alt="White-Label & Co-Brand Ready"
              className="w-[80px] h-[80px] mx-auto mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
              White-Label & Co-Brand Ready
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Offer eSIMs in your brand: customizable storefronts, bundles,
              email templates, and upsell flows.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <img
              src="/us4.png"
              alt="Fast Onboarding & Support"
              className="w-[80px] h-[80px] mx-auto mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
              Fast Onboarding & Support
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              API plug-and-play, guided setup, partner enablement kits,
              dedicated success team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
