export default function SupportCapabilities() {
  return (
    <section className="relative bg-[#F7FBFE] py-24 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] md:text-[38px] font-semibold text-gray-900">
            What you can do
          </h2>
          <p className="mt-3 text-[15px] text-gray-600">
            Zoiko Orbit Support Center — always on, always with you.
          </p>
        </div>

        {/* ROW 1 — 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10 text-center">
          <FeatureItem
            icon="/do1.png"
            text="Access step-by-step setup guides for iOS, Android, Windows, and MDM platforms"
          />
          <FeatureItem
            icon="/do2.png"
            text="Activate your eSIM with real-time provisioning assistance"
          />
          <FeatureItem
            icon="/do3.png"
            text="Troubleshoot connection issues with AI-guided diagnostics"
          />
          <FeatureItem
            icon="/do4.png"
            text="Chat live with our multilingual support agents anytime, anywhere"
          />
        </div>

        {/* ROW 2 — 3 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10 text-center mt-14 max-w-[900px] mx-auto">
          <FeatureItem
            icon="/do5.png"
            text="Submit and track service requests through your secure MyZoiko portal"
          />
          <FeatureItem
            icon="/do6.png"
            text="Request enterprise onboarding and remote deployment support"
          />
          <FeatureItem
            icon="/do7.png"
            text="Watch quick-start video tutorials and browse our self-service library"
          />
        </div>

      </div>
    </section>
  );
}


/* ================= Feature Item ================= */
function FeatureItem({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="max-w-[260px] mx-auto">
      
      {/* Circle without extra padding */}
      <div className="w-[90px] h-[90px] mx-auto rounded-full bg-[#0C7687] flex items-center justify-center mb-6">
        <img
          src={icon}
          alt="feature icon"
          className="w-[90px] h-[90px] object-contain"  // 👈 Increased size (less blue gap)
        />
      </div>

      <p className="text-[14px] text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
