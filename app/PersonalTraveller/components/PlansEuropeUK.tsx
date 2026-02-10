"use client";

import { useState } from "react";
import {
  Database,
  Zap,
  Headphones,
  Star,
  Signal,
} from "lucide-react";

const plans = [
  {
    name: "Orbit Explore",
    price: 6,
    data: "2 GB",
    save: "Save 30% vs roaming",
  },
  {
    name: "Orbit Group",
    price: 13,
    data: "7 GB",
    save: "Save 80% vs roaming",
  },
  {
    name: "Orbit Wild",
    price: 20,
    data: "15 GB",
    save: "Save 78% vs roaming",
  },
];

export default function PlansEuropeUK() {
  const [days, setDays] = useState(8);

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* TITLE */}
        <h2 className="text-center text-[28px] md:text-[34px] font-semibold text-[#00718A] mb-8">
          Europe & UK
        </h2>

        {/* DAY TABS */}
        <div className="flex justify-center mb-16">
          <div className="bg-white shadow-lg rounded-full flex p-2 gap-2">
            {[8, 15, 30].map((d) => (
              <button
                key={d}
                onClick={() => setDays(d)}
                className={`px-8 py-3 rounded-full font-semibold text-[15px] transition
                  ${
                    days === d
                      ? "bg-[#00718A] text-white"
                      : "text-[#00718A] hover:bg-[#e8f5f8]"
                  }`}
              >
                {d} Days
              </button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
            className="border-2 border-[#FF8A00] rounded-2xl p-6 flex flex-col justify-between">
              {/* HEADER */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[20px] font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-[28px] font-bold text-[#00718A]">
                      ${plan.price}
                    </span>
                    <p className="text-[14px] text-gray-500">
                      / {days} days
                    </p>
                  </div>
                </div>

                {/* TAGS */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#E6F7FB] text-[#00718A] text-[13px] font-medium">
                    eSIM
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFF3D6] text-[#FF8A00] text-[13px] font-medium">
                    pSIM
                  </span>
                </div>

                {/* FEATURES */}
                <ul className="space-y-3 text-[14px] text-gray-700">
                  <li className="flex gap-3">
                    <Database className="text-[#00718A]" />
                    {plan.data} high-speed data
                  </li>
                  <li className="flex gap-3">
                    <Signal className="text-[#00718A]" />
                    5G Ready
                  </li>
                  <li className="flex gap-3">
                    <Zap className="text-[#00718A]" />
                    Instant activation (eSIM)
                  </li>
                  <li className="flex gap-3">
                    <Headphones className="text-[#00718A]" />
                    24/7 Support
                  </li>
                  <li className="flex gap-3">
                    <Star className="text-[#00718A]" />
                    Data Only
                  </li>
                  <li className="flex gap-3">
                    <Star className="text-[#00718A]" />
                    No Contract
                  </li>
                  <li className="flex gap-3">
                    <Star className="text-[#00718A]" />
                    Top-up Anytime
                  </li>
                </ul>

                {/* SAVE */}
                <div className="mt-6 bg-[#EEF7FD] rounded-xl px-4 py-2 text-[#00718A] text-[13px] font-medium">
                  🤖 {plan.save}
                </div>
              </div>

              {/* CTA */}
              <button className="mt-8 bg-[#00718A] hover:bg-[#0b8fa8] transition text-white py-4 rounded-xl font-semibold text-[16px]">
                Buy Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
