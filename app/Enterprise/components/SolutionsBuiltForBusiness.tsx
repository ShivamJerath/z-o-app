export default function SolutionsBuiltForBusiness() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <img
          src="/grid.png"
          alt="Grid background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900">
            Solutions Built for Your Business.
          </h2>
          <p className="mt-3 text-[16px] text-gray-600 max-w-[700px] mx-auto">
            Scale from a few travelers to global workforce coverage—mix & match programs
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* CARD 1 */}
          <div className="group">
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src="/so1.png"
                alt="Corporate Travel Data"
                className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 text-[18px] font-semibold text-gray-900">
              Corporate Travel Data
            </h3>
            <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
              Pre-trip provisioning, data pools, expense integration.
            </p>

            <a
              href="#"
              className="inline-block mt-3 text-[15px] font-medium text-[#00718A] hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* CARD 2 */}
          <div className="group">
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src="/so2.png"
                alt="Remote Worker Data"
                className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 text-[18px] font-semibold text-gray-900">
              Remote Worker Data
            </h3>
            <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
              Always-on connectivity for distributed teams.
            </p>

            <a
              href="#"
              className="inline-block mt-3 text-[15px] font-medium text-[#00718A] hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* CARD 3 */}
          <div className="group">
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src="/so3.png"
                alt="Bespoke Global Programs"
                className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 text-[18px] font-semibold text-gray-900">
              Bespoke Global Programs
            </h3>
            <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
              Tailored plans for industries like energy, consulting, etc.
            </p>

            <a
              href="#"
              className="inline-block mt-3 text-[15px] font-medium text-[#00718A] hover:underline"
            >
              Learn More →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
