"use client";

export default function PrivacyByDesign() {
  return (
    <section className="w-full overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-gradient-to-r from-[#061124] via-[#081E35] to-[#032E3E] overflow-hidden">
  
  {/* Background Image */}
  <div className="absolute inset-0 opacity-30">
    <img
      src="/privacy.png"
      alt=""
      className="w-full h-full object-fill"
    />
  </div>

  {/* Content */}
  <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

    {/* LEFT CONTENT */}
    <div className="text-white">

      <h1 className="text-[34px] md:text-[46px] lg:text-[52px] font-semibold leading-tight">
        Privacy by Design <br />
        — Protection Without <br />
        Compromise
      </h1>

      <p className="mt-8 text-[16px] md:text-[17px] text-white/85 leading-relaxed max-w-[650px]">
        At Zoiko Orbit, protecting your privacy isn't just a regulatory obligation —
        it's a core part of our infrastructure. As a global eSIM and connectivity
        platform serving users across more than 220 countries and territories,
        we are fully committed to data protection frameworks including the
        UK Data Protection Act (2018), EU GDPR, California CCPA & CPRA,
        and relevant international laws governing cross-border data transfers.
      </p>

    </div>

  </div>
</div>


      {/* ================= WHITE CONTENT SECTION ================= */}
      <div className="bg-[#F5F7FA]">

        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-20">

          {/* Policy Explanation */}
          <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed">

            <h3 className="text-[18px] font-semibold text-gray-900">
              Our Privacy Policy clearly explains how your data is:
            </h3>

            <p>
              <span className="font-semibold text-gray-900">Collected</span> — including personal identifiers,
              device metadata, SIM/eSIM profile details, and real-time network diagnostics.
            </p>

            <p>
              <span className="font-semibold text-gray-900">Used</span> — for service activation,
              account management, network optimization, fraud prevention,
              and personalized support.
            </p>

            <p>
              <span className="font-semibold text-gray-900">Shared</span> — only with vetted processors
              and regulatory authorities where required by law.
            </p>

            <p>
              <span className="font-semibold text-gray-900">Protected</span> — using zero-trust access controls,
              end-to-end encryption, and geographically distributed,
              SOC 2–compliant data centers.
            </p>

            <p>
              <span className="font-semibold text-gray-900">Stored & Retained</span> — only for as long
              as necessary to meet legal, billing, and service continuity requirements.
            </p>

            <p>
              <span className="font-semibold text-gray-900">Deleted or Ported</span> — upon request,
              in accordance with your data rights.
            </p>

          </div>


          {/* Additional Guidance */}
          <div className="mt-14">

            <h3 className="text-[18px] font-semibold text-gray-900 mb-6">
              You’ll also find clear guidance on:
            </h3>

            <ul className="space-y-4 text-gray-700 text-[15px] list-disc pl-6">

              <li>
                How to access, correct, restrict, or delete your personal information
              </li>

              <li>
                Your right to object to data profiling or direct marketing
              </li>

              <li>
                Our lawful bases for data processing (consent, contract, legal obligation, legitimate interest)
              </li>

              <li>
                How we handle children’s data and ensure age-appropriate safeguards
              </li>

              <li>
                How to file a concern with our Data Protection Officer (DPO)
                or local supervisory authority
              </li>

            </ul>

          </div>


          {/* Closing Statement */}
          <div className="mt-14 text-gray-700 text-[15px] leading-relaxed">

            <p>
              We do not sell your personal data. We do not use your information
              for profiling without your clear consent. And we never hide behind jargon or legalese.
            </p>

            <p className="mt-6 font-semibold text-gray-900">
              Zoiko Orbit — engineering digital trust, globally.
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}
