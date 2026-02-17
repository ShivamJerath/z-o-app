export default function PartnerAdvantages() {
  return (
    <section className="bg-[#EAF2F6] py-24">

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <h2 className="text-center text-[28px] md:text-[34px] font-semibold text-gray-800 mb-14">
          Partner Advantages
        </h2>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x">

          <AdvantageItem
            icon="/partner1.png"
            text="Access to 220+ countries and territories"
          />

          <AdvantageItem
            icon="/partner2.png"
            text="Geo-agnostic eSIM management tools with real-time analytics"
          />

          <AdvantageItem
            icon="/partner3.png"
            text="Multi-currency, consolidated billing & tax-compliant invoicing"
          />

          <AdvantageItem
            icon="/partner4.png"
            text="Self-service partner dashboard with provisioning controls"
          />

          <AdvantageItem
            icon="/partner5.png"
            text="Priority onboarding, technical training, and 24/7 enterprise support"
          />

        </div>

      </div>

    </section>
  );
}


/* ================= ITEM ================= */

function AdvantageItem({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-10">

      <div className="w-[70px] h-[70px] rounded-full bg-[#0C7687] flex items-center justify-center mb-5">
        <img
          src={icon}
          alt="icon"
          className="w-[70px] h-[70px] object-contain"
        />
      </div>

      <p className="text-[14px] text-gray-600 leading-relaxed max-w-[200px]">
        {text}
      </p>

    </div>
  );
}
