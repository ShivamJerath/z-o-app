export default function ImpactStatsSection() {
  return (
    <section className="relative bg-[#F7FBFE] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-[30px] md:text-[36px] font-semibold text-gray-900">
            Impact You’re Part Of:
          </h2>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ITEM 1 */}
          <div className="flex gap-4 items-start">
            <span className="w-[3px] h-16 bg-[#00718A] rounded-full"></span>
            <div>
              <h3 className="text-[28px] font-semibold text-[#00718A]">
                30+
              </h3>
              <p className="text-[14px] text-gray-600 mt-2 leading-relaxed max-w-[180px]">
                Countries supported through wildlife programs.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex gap-4 items-start">
            <span className="w-[3px] h-16 bg-[#00718A] rounded-full"></span>
            <div>
              <h3 className="text-[28px] font-semibold text-[#00718A]">
                12
              </h3>
              <p className="text-[14px] text-gray-600 mt-2 leading-relaxed max-w-[180px]">
                Sanctuaries funded globally.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex gap-4 items-start">
            <span className="w-[3px] h-16 bg-[#00718A] rounded-full"></span>
            <div>
              <h3 className="text-[28px] font-semibold text-[#00718A]">
                2%
              </h3>
              <p className="text-[14px] text-gray-600 mt-2 leading-relaxed max-w-[200px]">
                Of our gross revenue donated to environmental causes.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="flex gap-4 items-start">
            <span className="w-[3px] h-16 bg-[#00718A] rounded-full"></span>
            <div>
              <h3 className="text-[28px] font-semibold text-[#00718A]">
                50,000+ hectares
              </h3>
              <p className="text-[14px] text-gray-600 mt-2 leading-relaxed max-w-[200px]">
                Protected forest areas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
