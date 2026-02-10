export default function LovedByTravelers() {
  return (
    <section className="relative bg-[#F7FBFE] py-22 px-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-9 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-900 leading-tight">
              Loved by <br /> Travelers Everywhere.
            </h2>

            <p className="mt-5 max-w-[420px] text-[15px] text-gray-600 leading-relaxed">
              Zoiko Orbit™ has earned the trust of global travelers who value
              simplicity, speed, and reliability. Real experiences, real
              journeys—here’s a glimpse of what they love most.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="relative flex justify-center lg:justify-end">

            {/* MAIN CARD */}
            <div className="bg-white rounded-2xl shadow-xl w-[320px] md:w-[360px] overflow-hidden relative z-10">

              <img
                src="/travell.png"
                alt="Traveler review"
                className="w-full h-[200px] object-cover"
              />

              <div className="p-5">
                <h4 className="font-semibold text-gray-900 text-[15px] leading-snug">
                  Loved how simple activation was. <br />
                  No SIM swaps!
                </h4>

                <p className="mt-2 text-[13px] text-gray-500">
                  20 July 2025 | Erick Peters
                </p>

                {/* ACTIONS */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 text-sm">
                  <span className="cursor-pointer">❤️</span>
                  <span className="cursor-pointer">💬</span>
                  <span className="cursor-pointer">↗</span>
                </div>

                <p className="mt-4 text-[13px] text-gray-500">
                  122 people viewed
                </p>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}
