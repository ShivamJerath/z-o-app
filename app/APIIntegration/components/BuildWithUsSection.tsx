export default function BuildWithUsSection() {
  const features = [
    "Instant eSIM activation at checkout or post-sale",
    "Dynamic region-aware pricing and usage controls",
    "QR and in-app provisioning with real-time status tracking",
    "Data top-up orchestration with intelligent auto-renew logic",
    "Role-based enterprise dashboards and billing integrations",
    "KYC/AML validation flows, reporting feeds, and account sync APIs",
  ];

  return (
    <section className="w-full bg-[#f5f7fb] py-15 lg:py-18">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <h2 className="text-center text-[26px] md:text-[30px] font-semibold text-gray-800 mb-14">
          Build With Us:
        </h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Illustration */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/api1.png"
              alt="Build With Us API"
              className="w-[420px] md:w-[480px] object-contain"
            />
          </div>

          {/* Right Feature List */}
          <ul className="space-y-5">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-[15.5px] md:text-[16px] text-gray-700 leading-relaxed">
                
                {/* Green Check Icon */}
                <span className="mt-1 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                {item}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
