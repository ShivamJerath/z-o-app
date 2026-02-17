"use client";

import { useState } from "react";

const categories = [
  "eSIM Activation & Setup",
  "Plans & Compatibility",
  "Roaming & Usage",
  "Troubleshooting & Support",
  "Billing & Subscription",
  "Privacy & Account Security",
  "Enterprise & IT FAQs",
];

const faqData: Record<string, { question: string; answer: string }[]> = {
  "eSIM Activation & Setup": [
    {
      question: "How do I activate my Zoiko Orbit eSIM?",
      answer:
        "After purchase, you’ll receive a QR code by email. Scan it in your device’s Cellular settings. Activation typically takes under 2 minutes."
    },
    {
      question: "Can I install the eSIM before traveling?",
      answer:
        "Yes. You can install it anytime. Your data plan activates once you arrive in the supported destination."
    },
    {
      question: "Is my device compatible with eSIM?",
      answer:
        "Most modern iPhones, Samsung Galaxy, Google Pixel, and other flagship devices support eSIM. Please check our compatibility page for a full list."
    },
    {
      question: "Can I keep my physical SIM active?",
      answer:
        "Yes. Most devices support dual SIM, allowing you to use Zoiko Orbit for data while keeping your physical SIM for calls."
    }
  ],

  "Plans & Compatibility": [
    {
      question: "Do you offer regional and global plans?",
      answer:
        "Yes. We offer country-specific, regional (Europe, Asia, Americas), and global multi-country plans."
    },
    {
      question: "Can I upgrade my plan?",
      answer:
        "Yes. You can purchase additional data anytime through your Zoiko dashboard."
    },
    {
      question: "What happens if I run out of data?",
      answer:
        "You can instantly top up from your account without reinstalling your eSIM."
    },
    {
      question: "Are plans prepaid or contract-based?",
      answer:
        "All Zoiko Orbit plans are prepaid with no contracts or hidden fees."
    }
  ],

  "Roaming & Usage": [
    {
      question: "Does Zoiko Orbit support roaming across countries?",
      answer:
        "Yes. Regional and global plans automatically connect to supported networks as you move between countries."
    },
    {
      question: "Is there any roaming surcharge?",
      answer:
        "No. All pricing is transparent with no unexpected roaming charges."
    },
    {
      question: "What network speed can I expect?",
      answer:
        "We connect to Tier-1 carriers worldwide, offering 4G and 5G speeds where available."
    },
    {
      question: "Can I use hotspot/tethering?",
      answer:
        "Yes. Most plans allow hotspot usage, depending on local carrier policies."
    }
  ],

  "Troubleshooting & Support": [
    {
      question: "What if my eSIM isn’t connecting?",
      answer:
        "Ensure data roaming is enabled and your eSIM is selected as the primary data line. If issues persist, contact 24/7 support."
    },
    {
      question: "How do I contact support?",
      answer:
        "Our multilingual support team is available 24/7 via live chat, email, and support portal."
    },
    {
      question: "Can you remotely assist activation?",
      answer:
        "Yes. Our team provides guided activation assistance and enterprise onboarding support."
    },
    {
      question: "Is AI troubleshooting available?",
      answer:
        "Yes. Our intelligent diagnostics tool helps resolve most common connectivity issues instantly."
    }
  ],

  "Billing & Subscription": [
    {
      question: "How will I receive my invoice?",
      answer:
        "Invoices are automatically emailed and available in your Zoiko dashboard."
    },
    {
      question: "Do you offer pooled billing for enterprises?",
      answer:
        "Yes. Enterprises can consolidate billing and manage cost centers centrally."
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No. We believe in transparent pricing — what you see is what you pay."
    },
    {
      question: "Can I request a refund?",
      answer:
        "Refunds are available under our usage policy if the eSIM has not been activated."
    }
  ],

  "Privacy & Account Security": [
    {
      question: "How is my data protected?",
      answer:
        "We use end-to-end encryption, zero-trust architecture, and SOC 2-compliant data centers."
    },
    {
      question: "Are you GDPR compliant?",
      answer:
        "Yes. We comply with GDPR, CCPA, CPRA, and other international data regulations."
    },
    {
      question: "Do you sell user data?",
      answer:
        "No. We never sell personal data to third parties."
    },
    {
      question: "Can I delete my account?",
      answer:
        "Yes. You may request account deletion at any time in accordance with data protection laws."
    }
  ],

  "Enterprise & IT FAQs": [
    {
      question: "Do you offer API integration?",
      answer:
        "Yes. We provide REST APIs and webhooks for provisioning, usage tracking, and billing."
    },
    {
      question: "Is SSO supported?",
      answer:
        "Yes. SAML and OAuth-based SSO integrations are available for enterprise accounts."
    },
    {
      question: "Can we manage multiple employees?",
      answer:
        "Yes. Admin dashboards allow centralized provisioning and monitoring."
    },
    {
      question: "Do you provide onboarding support?",
      answer:
        "Yes. Dedicated enterprise success managers assist with rollout and deployment."
    }
  ]
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f8f8f8] py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-gray-800">
            Got Questions? We’ve Got Answers
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT SIDEBAR */}
          <div className="border-r border-gray-300 pr-8">
            <p className="text-[12px] uppercase text-gray-400 mb-6">
              Getting Started With Your eSIM
            </p>

            <div className="space-y-3">
              {categories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`flex justify-between items-center cursor-pointer px-3 py-3 rounded-md transition-all duration-200
                    ${
                      activeCategory === cat
                        ? "bg-[#0C7687]/10 text-[#0C7687] font-semibold"
                        : "text-gray-500 hover:bg-[#0C7687]/5 hover:text-[#0C7687]"
                    }`}
                >
                  <span>{cat}</span>
                  <span className="text-lg">›</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2">
            <h3 className="text-[26px] font-semibold text-[#0C7687] mb-8">
              {activeCategory}
            </h3>

            <div className="space-y-6">
              {faqData[activeCategory].map((item, index) => (
                <div key={index} className="border-b pb-5">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-[18px] text-gray-700">
                      {item.question}
                    </span>
                    <span className="text-xl">
                      {openIndex === index ? "−" : "›"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
