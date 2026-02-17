export default function PartnershipPathways() {
  return (
    <section className="relative bg-[#F7FBFE] py-24 overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Heading */}
        <h2 className="text-center text-[30px] md:text-[36px] font-semibold text-gray-900 mb-16">
          Partnership Pathways
        </h2>

        {/* GRID */}
        <div className="flex flex-wrap justify-center gap-y-14 gap-x-20 text-center">
          <PathItem
            icon="/par1.png"
            title="White-Label Solutions"
            desc="Deliver connectivity under your own brand, backed by our Tier-1 infrastructure"
          />

          <PathItem
            icon="/par2.png"
            title="Co-Branded Alliances"
            desc="Amplify reach with shared brand equity and global support"
          />

          <PathItem
            icon="/par3.png"
            title="Reseller & Distribution Models"
            desc="Earn recurring revenue with zero inventory risk"
          />

          <PathItem
            icon="/par4.png"
            title="OEM Integrations"
            desc="Embed eSIM technology in hardware, IoT devices, or travel accessories"
          />

          <PathItem
            icon="/par5.png"
            title="Affiliate & Platform Partnerships"
            desc="Integrate via secure API and earn performance-based commissions"
          />
        </div>
      </div>
    </section>
  );
}
function PathItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="w-[260px]">
      <div className="w-[90px] h-[90px] mx-auto rounded-full bg-[#0C7687] flex items-center justify-center mb-6">
        <img
          src={icon}
          alt={title}
          className="w-[90px] h-[90px] object-contain"
        />
      </div>

      <h3 className="text-[16px] font-semibold text-gray-900 mb-2">{title}</h3>

      <p className="text-[14px] text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
