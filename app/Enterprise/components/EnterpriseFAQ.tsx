"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function EnterpriseFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can we centrally manage data for all our travelers?",
      answer:
        "Yes. Zoiko Orbit provides a centralized admin dashboard where you can provision eSIMs, monitor usage in real-time, manage pooled data plans, and generate detailed reports across teams and regions."
    },
    {
      question: "Do you integrate with our travel booking tool?",
      answer:
        "Absolutely. Our REST APIs and webhooks integrate seamlessly with major travel booking platforms, ERP systems, and expense tools, enabling automatic provisioning and reporting workflows."
    },
    {
      question: "How secure is traveler data?",
      answer:
        "We provide enterprise-grade security with GDPR compliance, Tier-1 carrier infrastructure, SOC 2 alignment, and PCI DSS standards. All data is encrypted and securely transmitted."
    },
    {
      question: "How quickly can we roll out globally?",
      answer:
        "Global deployment can be completed within days. With remote provisioning and centralized controls, you can activate teams across 220+ countries without physical SIM distribution."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-[30px] md:text-[36px] font-semibold text-gray-900">
            Got Questions? We’ve Got Answers
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">

              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-6 text-left"
              >
                <span className="text-[16px] text-gray-800 font-medium">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
