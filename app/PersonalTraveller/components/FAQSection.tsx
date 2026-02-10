"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How do I install an eSIM?",
    answer:
      "After purchasing your plan, you’ll receive a QR code by email. Simply scan the QR code using your phone’s eSIM settings and follow the on-screen instructions. Installation usually takes less than 2 minutes, and no physical SIM swap is required.",
  },
  {
    question: "Does Zoiko Orbit work on my phone?",
    answer:
      "Zoiko Orbit works on most modern smartphones that support eSIM technology, including iPhone XS and newer, Google Pixel, Samsung Galaxy, and many other devices. You can always check our compatibility list before purchasing.",
  },
  {
    question: "Can I top up my plan?",
    answer:
      "Yes! You can easily top up your data anytime from your Zoiko Orbit account. Your existing eSIM stays active — simply add more data when you need it without reinstalling anything.",
  },
  {
    question: "What if I face connectivity issues?",
    answer:
      "Our 24/7 global support team is always here to help. If you experience any issues, contact us via chat or email and we’ll guide you through quick troubleshooting or resolve it instantly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-[900px] mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-center text-[28px] md:text-[36px] font-semibold text-gray-900 mb-12">
          Got Questions? We’ve Got Answers
        </h2>

        {/* FAQ LIST */}
        <div className="divide-y border-t border-b">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">

              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-[16px] md:text-[17px] text-gray-800 font-medium">
                  {faq.question}
                </span>

                <ChevronRight
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="mt-4 text-[15px] text-gray-600 leading-relaxed max-w-[780px]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
