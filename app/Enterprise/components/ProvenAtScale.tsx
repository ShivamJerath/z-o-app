export default function ProvenAtScale() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h2 className="text-[30px] md:text-[36px] font-semibold text-gray-900">
            Proven at Global Scale.
          </h2>
          <p className="mt-3 text-[15px] text-gray-600">
            Enterprises reduce roaming spend and improve traveler experience with Zoiko Orbit™
          </p>
        </div>

        {/* ================= CASE STUDY 1 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24">

          {/* IMAGE COLLAGE */}
          <div className="relative flex justify-between lg:justify-start">
            <div className="relative w-[420px] h-[380px]">

              <img
                src="/prove1.png"
                alt="Law firm case study"
                className="absolute left-0 top-0 w-[460px] h-[440px] object-cover rounded-lg shadow-md"
              />

            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-[620px]">
            <h3 className="text-[18px] font-semibold text-gray-900 leading-snug">
              Empowering Global Legal Excellence: How a Multinational Law Firm
              Reduced Roaming Costs by 62% While Enhancing Executive Mobility
            </h3>

            <div className="mt-5 text-[14px] text-gray-600 leading-relaxed space-y-3">
              <p>
                <strong>Client Overview:</strong>
              </p>
              <p>
                One of the world’s leading cross-border law firms, with over 3,400
                partners and senior counsel operating in 20+ countries across
                North America, Europe, the Middle East, and Asia.
              </p>

              <p>
                <strong>Industry:</strong> Legal Services, International Arbitration, Corporate Law  
                <br />
                <strong>Use Case Focus:</strong> Executive Airport Mobility & Real-Time Connectivity
              </p>
            </div>

            <button className="mt-5 text-[#00718A] text-[14px] font-medium hover:underline">
              Read More →
            </button>
          </div>

        </div>

        {/* ================= CASE STUDY 2 ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT (LEFT ON DESKTOP) */}
          <div className="order-2 lg:order-1 max-w-[620px]">
            <h3 className="text-[18px] font-semibold text-gray-900 leading-snug">
              Luxury Reimagined: How a Global Hospitality Group Delivered Always-On VIP Connectivity Across 17 Countries
            </h3>

            <div className="mt-5 text-[14px] text-gray-600 leading-relaxed space-y-3">
              <p>
                <strong>Client Overview:</strong>
              </p>
              <p>
                A premier hospitality chain operating over 200 properties across
                the Caribbean, LATAM, Europe, and Southeast Asia, catering to
                elite travelers and high-net-worth clientele.
              </p>

              <p>
                <strong>Industry:</strong> Travel, Leisure & Hospitality  
                <br />
                <strong>Use Case Focus:</strong> Guest eSIM Integration & Staff Mobility
              </p>
            </div>

            <button className="mt-5 text-[#00718A] text-[14px] font-medium hover:underline">
              Read More →
            </button>
          </div>

          {/* IMAGE COLLAGE */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-between">
            <div className="relative w-[420px] h-[380px]">

              <img
                src="/prove2.png"
                alt="Hospitality case"
                className="absolute bottom-0 w-[460px] h-[440px] object-cover rounded-lg shadow-md"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
