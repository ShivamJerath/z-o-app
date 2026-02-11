export default function BuiltToFitWorkflow() {
  return (
    <section className="bg-[#EEF5FA] py-24">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[38px] font-semibold text-gray-900">
            Built to Fit Your Workflow
          </h2>
          <p className="mt-3 text-[16px] text-gray-600">
            From lightweight referral links to deep API integrations—scale at your pace
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/man.png"   // upload your illustration
              alt="Workflow integration"
              className="w-full max-w-[520px] object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-10">

            {/* API SECTION */}
            <div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-4">
                API: Plug & Play
              </h3>

              <ul className="space-y-3 text-[15px] text-gray-700 leading-relaxed">
                <li>• REST/GraphQL endpoints for offer retrieval, activation, balance, status.</li>
                <li>• Sandbox access in minutes.</li>
                <li>• Simple code in JS, PHP, Python.</li>
                <li>• Multi-currency & localization support.</li>
              </ul>
            </div>

            {/* CO-BRANDED SECTION */}
            <div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-4">
                Co-Branded Storefronts & Portals
              </h3>

              <ul className="space-y-3 text-[15px] text-gray-700 leading-relaxed">
                <li>• Ready-to-launch hosted storefront branded with your logo/colors.</li>
                <li>• Bundle eSIM offers into booking confirmations & post-booking emails.</li>
                <li>• Analytics dashboard (attach rates, revenue per PNR).</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
