export default function HowWeGiveBack() {
  return (
    <section className="relative bg-[#F7FBFE] py-24 overflow-hidden">

      {/* Subtle Grid Background */}
      {/* <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img
          src="/grid.png"   // optional grid background
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900">
            How We Give Back
          </h2>
          <p className="mt-3 text-[16px] text-gray-600">
            Every eSIM purchase drives meaningful change on the ground.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div>
            <img
              src="/give1.png"
              alt="2% of Sales to NGOs"
              className="w-full h-[220px] object-cover rounded-xl"
            />

            <h3 className="mt-6 text-[18px] font-semibold text-gray-900">
              2% of Sales to NGOs
            </h3>

            <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
              We donate a % of every eSIM purchase to trusted wildlife
              protection organizations.
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <img
              src="/give2.png"
              alt="Direct Sanctuary Support"
              className="w-full h-[220px] object-cover rounded-xl"
            />

            <h3 className="mt-6 text-[18px] font-semibold text-gray-900">
              Direct Sanctuary Support
            </h3>

            <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
              From feeding programs to medical care, we directly fund
              wildlife sanctuaries.
            </p>
          </div>

          {/* CARD 3 */}
          <div>
            <img
              src="/give3.png"
              alt="Education & Anti-Poaching"
              className="w-full h-[220px] object-cover rounded-xl"
            />

            <h3 className="mt-6 text-[18px] font-semibold text-gray-900">
              Education & Anti-Poaching
            </h3>

            <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
              Supporting on-ground educational initiatives and anti-poaching
              patrols in vulnerable regions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
