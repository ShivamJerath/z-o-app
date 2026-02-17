export default function CoreCapabilitiesCorporates() {
  const items = [
    {
      img: "/core1.png",
      text: "Zero-touch provisioning through MDM, QR, or API workflows",
    },
    {
      img: "/core2.png",
      text: "Region-based data plans with country-specific tax compliance",
    },
    {
      img: "/core3.png",
      text:
        "Real-time dashboards with granular usage, cost center distribution, and policy enforcement",
    },
    {
      img: "/core4.png",
      text:
        "Multi-entity, multi-currency invoicing — audit-ready for finance and procurement",
    },
    {
      img: "/core5.png",
      text: "Role-based access for IT operations, and mobility stakeholders",
    },
    {
      img: "/core6.png",
      text:
        "eKYC onboarding, encrypted eSIM delivery, and SOC 2-aligned infrastructure",
    },
    {
      img: "/core7.png",
      text:
        "Tier-1 global coverage with 24/7 multilingual enterprise support",
    },
  ];

  return (
    <section className="bg-[#F5F7F8] py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-center text-[28px] md:text-[34px] font-semibold text-gray-800 mb-16">
          Core Capabilities for Corporates
        </h2>

        {/* 12-column grid for perfect centering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-14">
          
          {/* Row 1 - 4 items */}
          <div className="lg:col-span-3"><Card {...items[0]} /></div>
          <div className="lg:col-span-3"><Card {...items[1]} /></div>
          <div className="lg:col-span-3"><Card {...items[2]} /></div>
          <div className="lg:col-span-3"><Card {...items[3]} /></div>

          {/* Row 2 - centered 3 items */}
          <div className="hidden lg:block lg:col-span-1" />
          <div className="lg:col-span-3"><Card {...items[4]} /></div>
          <div className="lg:col-span-3"><Card {...items[5]} /></div>
          <div className="lg:col-span-3"><Card {...items[6]} /></div>
          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ img, text }: { img: string; text: string }) {
  return (
    <div className="max-w-[260px] mx-auto">
      {/* Image */}
      <div className="w-full h-[170px] rounded-xl overflow-hidden shadow-sm">
        <img
          src={img}
          alt="capability"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <p className="mt-4 text-[15px] text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
