export default function WhyEnterprisesChooseZoiko() {
  return (
    <section className="bg-[#EEF6FB] py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900">
            Why Enterprises Choose Zoiko Orbit™
          </h2>
          <p className="mt-3 text-[16px] text-gray-600">
            Why thousands of travelers trust us every day
          </p>
        </div>

        {/* WHITE CONTAINER */}
        <div className="relative bg-white rounded-2xl shadow-sm px-8 py-14">

          {/* VERTICAL DIVIDERS */}
          <div className="hidden md:block absolute top-14 bottom-14 left-1/3 w-px bg-gray-200" />
          <div className="hidden md:block absolute top-14 bottom-14 left-2/3 w-px bg-gray-200" />

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* ITEM 1 */}
            <div className="text-center px-6">
              <img
                src="/en1.png"
                alt="Predictable Billing"
                className="w-[72px] h-[72px] mx-auto mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
                Predictable Billing
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Simplify your expenses with consolidated global billing,
                pooled data plans, and transparent cost tracking.
                Say goodbye to unpredictable roaming charges.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="text-center px-6">
              <img
                src="/en2.png"
                alt="Tier-1 Network Security"
                className="w-[72px] h-[72px] mx-auto mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
                Tier-1 Network Security
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Enterprise-grade security and privacy. All connections
                are GDPR-compliant and powered by Tier-1 networks with
                SOC 2 and PCI DSS certifications.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="text-center px-6">
              <img
                src="/en3.png"
                alt="Admin Dashboard"
                className="w-[72px] h-[72px] mx-auto mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
                Admin Dashboard
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Gain total control with a centralized platform to
                provision eSIMs, monitor data usage, and generate
                detailed reports for all your teams.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
