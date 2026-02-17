export default function CorporateResponsibility() {
  return (
    <section className="relative w-full bg-[#F5F7F8] overflow-hidden">

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">

          <img
            src="/cr.png"   // replace with your image
            alt="Corporate Responsibility"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Soft white fade on right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-white" />

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-24">

          <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-semibold text-gray-900">
            Corporate Responsibility
          </h2>

          <p className="mt-6 text-[16px] text-gray-700 leading-relaxed max-w-[650px]">
            Zoiko Orbit is deeply committed to responsible business practices
            that prioritize people, planet, and transparency. As part of Zoiko
            Group Inc., we align with global ESG frameworks and sustainability
            goals, embedding ethical governance, carbon awareness, and community
            engagement into every layer of our operations.
          </p>

          <p className="mt-6 text-[16px] text-gray-700 leading-relaxed max-w-[650px]">
            Our infrastructure runs on energy-efficient provisioning nodes,
            and our platform is designed to reduce SIM card waste by promoting
            100% digital connectivity.
          </p>

        </div>

      </div>
    </section>
  );
}
