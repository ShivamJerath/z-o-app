"use client";

export default function TermsOfService() {
  return (
    <section className="w-full overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-gradient-to-r from-[#061124] via-[#081E35] to-[#032E3E] overflow-hidden">
  
  {/* Background Image */}
  <div className="absolute inset-0 opacity-30">
    <img
      src="/term-hero.png"
      alt=""
      className="w-full h-full object-fill"
    />
  </div>

  {/* Content */}
  <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

    {/* LEFT CONTENT */}
    <div className="text-white">

      <h1 className="text-[34px] md:text-[46px] lg:text-[52px] font-semibold leading-tight">
        Service Clarity. Global <br />
        Protection. Mutual Trust.
      </h1>

      <p className="mt-8 text-[16px] md:text-[17px] text-white/85 leading-relaxed max-w-[650px]">
        The Terms of Service define the legally binding agreement between you and Zoiko Orbit, a global connectivity brand under Zoiko Communications Group. These terms apply to your use of our eSIM services, mobile applications, online portals, and related platforms — whether you’re an individual traveler or an enterprise client with international operations.
      </p>

    </div>

  </div>
</div>


      {/* ================= WHITE CONTENT SECTION ================= */}
      <div className="bg-[#F5F7F9] py-20">

  <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-gray-800">

    {/* INTRO */}
    <p className="text-[15px] leading-relaxed mb-8">
      Our goal is to deliver reliable, transparent service — and protect both
      your rights and ours — with fairness, precision, and full regulatory
      compliance.
    </p>

    {/* HEADING */}
    <h3 className="text-[18px] font-semibold mb-6">
      Key provisions include:
    </h3>

    {/* LIST */}
    <div className="space-y-4 text-[15px] leading-relaxed">

      <p><span className="font-semibold">Eligibility & Account Creation</span> — who can use our services and how accounts are established</p>

      <p><span className="font-semibold">Service Access & Activation</span> — how eSIM profiles are provisioned, paused, suspended, or revoked under defined conditions</p>

      <p><span className="font-semibold">Billing, Payments & Refunds</span> — including billing cycles, auto-renewal options, chargebacks, and refund eligibility</p>

      <p><span className="font-semibold">Fair Usage & Network Management</span> — policies on excessive consumption, throttling, or SIM misuse to protect all users</p>

      <p><span className="font-semibold">Device Requirements & Compatibility</span> — what you need to use our services and limitations that may apply</p>

      <p><span className="font-semibold">Downtime, Interruptions & Service Levels</span> — how planned maintenance or third-party carrier outages are handled</p>

      <p><span className="font-semibold">Limitations of Liability</span> — boundaries of responsibility related to service delivery, connectivity quality, and third-party infrastructure</p>

      <p><span className="font-semibold">User Conduct & Acceptable Use</span> — expected behavior, fraud prevention, security practices, and prohibited use cases</p>

      <p><span className="font-semibold">Intellectual Property</span> — use of Zoiko Orbit logos, trademarks, applications, and all digital content</p>

      <p><span className="font-semibold">Governing Law & Jurisdiction</span> — dispute resolution in accordance with UK, US, and international telecom frameworks</p>

      <p><span className="font-semibold">Contact Channels</span> — for legal inquiries, regulatory escalations, or dispute notifications</p>

    </div>

    {/* FOOTER TEXT */}
    <p className="mt-10 text-[15px] leading-relaxed">
      By using Zoiko Orbit, you acknowledge and accept these Terms — which are
      designed to uphold service excellence, operational fairness, and global
      compliance.
    </p>

    {/* BOTTOM LINE */}
    <p className="mt-6 font-semibold text-[15px]">
      Zoiko Orbit Terms of Service — engineered for transparency, enforced with integrity.
    </p>

  </div>

</div>


    </section>
  );
}
