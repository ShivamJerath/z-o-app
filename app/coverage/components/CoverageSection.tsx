"use client";

import { useState } from "react";

export default function CoverageSection() {
  const [showResult, setShowResult] = useState(false);

  return (
    <section className="relative bg-[#F7FBFE] py-20 overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= COVERAGE CARD ================= */}
        <div className="bg-[#F1F3F4] rounded-2xl p-8 md:p-12 text-center shadow-sm">

          <h2 className="text-[22px] md:text-[26px] font-semibold text-gray-900">
            Going somewhere? Let’s check your coverage.
          </h2>

          <p className="mt-2 text-[14px] text-gray-600">
            Enter the Country you're Traveling to and check coverage & sub region
          </p>

          {/* Input + Button */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 max-w-[520px] mx-auto">
            <input
              type="text"
              placeholder="Over 220+ Countries Covered"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-[14px] text-gray-700 outline-none focus:border-[#0C7687]"
            />
            <button
              onClick={() => setShowResult(true)}
              className="bg-[#0C7687] hover:bg-[#0a6371] text-white px-6 py-3 rounded-lg text-[14px] font-semibold transition"
            >
              Check Coverage
            </button>
          </div>

          {/* ================= RESULT SECTION ================= */}
          {showResult && (
            <div className="mt-8 text-center">

              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <span className="text-[18px]">✔</span>
                You’re Covered in Europe & UK!
              </div>

              <p className="mt-3 text-[13px] text-gray-600 max-w-[650px] mx-auto">
                This destination is part of our Europe & UK coverage zone —
                ideal for multi-country travel in the area.
                Enjoy Tier-1 network speed, secure connectivity,
                and instant activation.
              </p>

              <a
                href="#"
                className="inline-block mt-4 text-[#0C7687] text-[13px] font-semibold hover:underline"
              >
                Browse Best Plans for Europe & UK →
              </a>

              {/* Country List */}
              <div className="mt-8 text-left text-[12px] text-gray-600 max-w-[850px] mx-auto leading-relaxed">
                <p className="font-semibold mb-2">
                  List of all countries Covered in Europe & UK:
                </p>

                Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic,
                Denmark, Estonia, Finland, France, Germany, Greece, Hungary,
                Iceland, Ireland, Italy, Latvia, Lithuania, Luxembourg,
                Malta, Netherlands, Norway, Poland, Portugal, Romania,
                Slovakia, Slovenia, Spain, Sweden, United Kingdom

                <p className="mt-4 font-semibold">
                  Territories:
                </p>

                Azores, Balearic Islands, Canary Islands, French Guiana,
                Guadeloupe, Martinique, Mayotte, Reunion Island,
                St Barthelemy, St Martin (FR), St Pierre-et-Miquelon,
                Gibraltar
              </div>

            </div>
          )}

        </div>

        {/* ================= WHY SECTION ================= */}
        <div className="mt-20 text-center">

          <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-900">
            WHY ZOIKO ORBIT WORKS GLOBALLY
          </h2>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">

            <Feature icon="/gl1.png" text="Data Protected Globally" />
            <Feature icon="/gl2.png" text="Adaptive Roaming Across Time Zones" />
            <Feature icon="/gl3.png" text="24/7 Intelligent Support" />
            <Feature icon="/gl4.png" text="Enterprise-grade Network Switching" />

          </div>

        </div>

      </div>

    </section>
  );
}

/* ================= Feature Component ================= */
function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="max-w-[160px] text-center">
      <div className="w-[80px] h-[80px] mx-auto rounded-full bg-[#0C7687] flex items-center justify-center mb-4">
        <img
          src={icon}
          alt="feature"
          className="w-[80px] h-[80px] object-contain"
        />
      </div>
      <p className="text-[13px] text-gray-700 leading-snug">
        {text}
      </p>
    </div>
  );
}
