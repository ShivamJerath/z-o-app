export default function WhyPartnerWithUs() {
  return (
    <section className="relative bg-[#F7FBFE] py-24 overflow-hidden">

      {/* Subtle Grid Background (optional image if you have one) */}
      {/* <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img
          src="/grid-bg.png"   // optional grid background
          alt="Grid background"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900">
            Why Partner with Zoiko Orbit™
          </h2>
          <p className="mt-3 text-[16px] text-gray-600">
            Why travelers trust Zoiko Orbit for a hassle-free experience.
          </p>
        </div>

        {/* CARDS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-center">

          {/* CARD 1 */}
          <div>
            <img
              src="/pa1.png"
              alt="Attractive Commissions"
              className="mx-auto w-[80px] h-[80px] object-contain mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
              Attractive Commissions
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Earn competitive payouts on every eSIM sold through your network.
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <img
              src="/pa2.png"
              alt="Tier-1 Coverage"
              className="mx-auto w-[80px] h-[80px] object-contain mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
              Tier-1 Coverage
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Provide customers with high-speed, reliable data across 220+ countries.
            </p>
          </div>

          {/* CARD 3 */}
          <div>
            <img
              src="/pa3.png"
              alt="White-Label Options"
              className="mx-auto w-[80px] h-[80px] object-contain mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
              White-Label Options
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Offer eSIMs under your brand with customizable storefronts.
            </p>
          </div>

          {/* CARD 4 */}
          <div>
            <img
              src="/pa4.png"
              alt="Dedicated Support"
              className="mx-auto w-[80px] h-[80px] object-contain mb-6"
            />
            <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
              Dedicated Support
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Access to partner success managers and 24/7 technical support.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
