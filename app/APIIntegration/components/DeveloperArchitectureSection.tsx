export default function DeveloperArchitectureSection() {
  return (
    <section className="relative bg-[#F5F7F9] py-24 overflow-hidden">

      {/* Optional Grid Background */}
      {/* <img src="/grid.png" className="absolute inset-0 w-full h-full opacity-30 object-cover" /> */}

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-[620px]">

          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-semibold text-gray-900">
            Developer-Grade Architecture
          </h2>

          <ul className="mt-8 space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-[15px] text-gray-700 leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/api1.png"   // replace with your image
            alt="Developer Architecture"
            className="w-[360px] sm:w-[460px] lg:w-[560px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

/* ================= DATA ================= */
const features = [
  "RESTful endpoints with JSON schema and version control",
  "Full developer portal with Swagger, API keys, and token lifecycle tools",
  "TLS 1.3 encryption, HMAC signature verification, and IP-restricted access",
  "Event-driven webhooks (activation, expiration, renewal, failure)",
  "Multi-tier staging: sandbox, UAT, production",
  "99.99% uptime SLA with real-time monitoring and audit trails",
];
