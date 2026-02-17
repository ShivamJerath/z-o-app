"use client";

export default function CookiePreferences() {
  return (
    <section className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-gradient-to-r from-[#061124] via-[#081E35] to-[#032E3E] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/cookie-hero.png"
            alt=""
            className="w-full h-full object-fill"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-[34px] md:text-[46px] lg:text-[52px] font-semibold leading-tight">
              Engineered for Transparency. <br />
              Powered by Consent
            </h1>

            <p className="mt-8 text-[16px] md:text-[17px] text-white/85 leading-relaxed max-w-[650px]">
              At Zoiko Orbit, we treat your data with the same precision as we
              deliver your connectivity. Our use of cookies and similar
              technologies is guided by global privacy law, ethical design, and
              your absolute right to control how your data is collected and used
              online.
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHITE CONTENT SECTION ================= */}
      <div className="bg-[#F5F7F9] py-20">
        <div className="max-w-[1100px] mx-auto px-2 lg:px-5 text-gray-800">
          {/* INTRO */}
          <p className="text-[15px] leading-relaxed mb-8">
            Whether you're browsing, managing an account, or activating an eSIM
            — we ensure every tracking mechanism is lawful, transparent, and
            fully configurable.
          </p>

          {/* ================= COOKIES ================= */}
          <h3 className="text-[18px] font-semibold mb-4">
            Our Use of Cookies Includes:
          </h3>

          <div className="space-y-5 text-[15px] leading-relaxed mb-10">
            <p>
              <span className="font-semibold">1. Essential Cookies</span>
              <br />
              Required to enable secure access, account authentication, fraud
              prevention, and core service delivery. These are active by default
              and do not require consent.
            </p>

            <p>
              <span className="font-semibold">
                2. Performance & Analytics Cookies
              </span>
              <br />
              Help us understand how our platform is used — including page load
              times, navigation paths, error rates, and device/browser trends.
              All analytics are pseudonymized.
            </p>

            <p>
              <span className="font-semibold">3. Functionality Cookies</span>
              <br />
              Store your preferences for language, currency, timezone,
              accessibility, and device type to deliver a personalized
              experience.
            </p>

            <p>
              <span className="font-semibold">
                4. Marketing & Personalization Cookies
              </span>
              <br />
              Used — only with your explicit consent — to show relevant offers,
              retarget ads, and measure marketing effectiveness. No profiling
              occurs without opt-in.
            </p>
          </div>

          {/* ================= GLOBAL COMPLIANCE ================= */}
          <h3 className="text-[18px] font-semibold mb-4">
            Global Legal Compliance
          </h3>

          <p className="text-[15px] leading-relaxed mb-4">
            Zoiko Orbit’s cookie framework is engineered for international
            trust. Our consent infrastructure aligns with:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-[15px] mb-8">
            <li>UK GDPR and DPA 2018</li>
            <li>EU ePrivacy Directive</li>
            <li>California CCPA & CPRA</li>
            <li>
              Canada’s PIPEDA, Brazil’s LGPD, and other emerging global laws
            </li>
          </ul>

          <p className="text-[15px] leading-relaxed mb-10">
            We deploy geo-specific banners and consent layers to ensure lawful
            interaction by jurisdiction — including multilingual preferences, Do
            Not Track (DNT) signals, and mobile OS-level settings.
          </p>

          {/* ================= MANAGE COOKIES ================= */}
          <h3 className="text-[18px] font-semibold mb-4">
            How to Manage Your Preferences
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-[15px] mb-10">
            <li>The Zoiko Orbit Cookie Control Center</li>
            <li>Browser privacy settings and extensions</li>
            <li>MyZoiko account dashboards (for enterprise clients)</li>
            <li>System-level controls (Android/iOS tracking permissions)</li>
          </ul>

          <p className="text-[15px] leading-relaxed mb-10">
            We store your choices securely and never infer consent based on
            inactivity.
          </p>

          {/* ================= ETHICAL COMMITMENT ================= */}
          <h3 className="text-[18px] font-semibold mb-4">
            Our Ethical Commitment
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-[15px] mb-10">
            <li>We do not use hidden trackers</li>
            <li>We do not sell personal data</li>
            <li>
              We do not deploy third-party cookies without informed consent
            </li>
            <li>
              We regularly audit data scripts for compliance and integrity
            </li>
          </ul>

          {/* FOOTER */}
          <p className="text-[15px] font-medium">
            Zoiko Orbit Cookie Preferences — your privacy, your pace, your
            platform.
          </p>
        </div>
      </div>
    </section>
  );
}
