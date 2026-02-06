import {
  MessageSquareText,
  Cpu,
  Wrench,
  MessagesSquare,
  ListChecks,
  Users,
  PlayCircle,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[520px] md:h-[600px] w-full">
        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
          alt="24/7 Support"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 h-full flex items-center">
          <div className="max-w-[720px] text-white">
            <h1 className="text-[34px] md:text-[44px] lg:text-[52px] font-semibold leading-tight mb-6">
              24/7 Expert Support — Wherever <br />
              You Are, Worldwide
            </h1>

            <p className="text-[16px] md:text-[18px] leading-relaxed opacity-95">
              The Zoiko Orbit Support Center is your dedicated hub for fast,
              intelligent, and reliable assistance — available 24/7, across
              every timezone. Whether you&apos;re activating a personal eSIM
              for travel or managing a fleet of enterprise devices, our global
              team ensures seamless connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU CAN DO ================= */}
      <section className="bg-white py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-[34px] md:text-[42px] font-semibold text-gray-800">
              What you can do
            </h2>
            <p className="mt-3 text-[18px] text-gray-600">
              Zoiko Orbit Support Center — always on, always with you.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 text-center">

            <Feature icon={MessageSquareText}
              text="Access step-by-step setup guides for iOS, Android, Windows, and MDM platforms" />

            <Feature icon={Cpu}
              text="Activate your eSIM with real-time provisioning assistance" />

            <Feature icon={Wrench}
              text="Troubleshoot connection issues with AI-guided diagnostics" />

            <Feature icon={MessagesSquare}
              text="Chat live with our multilingual support agents anytime, anywhere" />

            <div className="lg:col-span-2">
              <Feature icon={ListChecks}
                text="Submit and track service requests through your secure MyZoiko portal" />
            </div>

            <Feature icon={Users}
              text="Request enterprise onboarding and remote deployment support" />

            <Feature icon={PlayCircle}
              text="Watch quick-start video tutorials and browse our self-service library" />

          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= FEATURE COMPONENT ================= */
function Feature({
  icon: Icon,
  text,
}: {
  icon: any;
  text: string;
}) {
  return (
    <div>
      <div className="mx-auto w-20 h-20 bg-[#00718A] rounded-full flex items-center justify-center mb-6">
        <Icon className="w-9 h-9 text-white" />
      </div>
      <p className="text-[16px] text-gray-700 leading-relaxed max-w-[420px] mx-auto">
        {text}
      </p>
    </div>
  );
}
