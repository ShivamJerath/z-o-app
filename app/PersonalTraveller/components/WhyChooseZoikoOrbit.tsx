export default function WhyChooseZoikoOrbit() {
  return (
    <section className="bg-[#EAF4FB] py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900">
            Why Choose Zoiko Orbit
          </h2>
          <p className="mt-3 text-[16px] text-gray-600">
            Why thousands of travelers trust us every day
          </p>
        </div>

        {/* WHITE CARD */}
        <div className="bg-white rounded-2xl shadow-sm px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4">

            {/* ITEM 1 */}
            <div className="text-center px-6 border-r border-gray-200">
              <img
                src="/choose1.png"
                alt="Tier-1 Global Coverage"
                className="w-[72px] h-[72px] mx-auto mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
                Tier-1 Global Coverage
              </h3>
              <p className="text-[15px] text-gray-600">
                Stay connected in 220+ countries.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="text-center px-6 border-r border-gray-200">
              <img
                src="/choose2.png"
                alt="Transparent Rates"
                className="w-[72px] h-[72px] mx-auto mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
                Transparent Rates
              </h3>
              <p className="text-[15px] text-gray-600">
                No hidden fees, no surprises.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="text-center px-6 border-r border-gray-200">
              <img
                src="/choose3.png"
                alt="Supports Animal Welfare"
                className="w-[72px] h-[72px] mx-auto mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
                Supports Animal Welfare
              </h3>
              <p className="text-[15px] text-gray-600">
                A share of every plan goes to global causes.
              </p>
            </div>

            {/* ITEM 4 */}
            <div className="text-center px-6">
              <img
                src="/choose4.png"
                alt="24/7 Support"
                className="w-[72px] h-[72px] mx-auto mb-6"
              />
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-[15px] text-gray-600">
                Multilingual assistance whenever you need it.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
