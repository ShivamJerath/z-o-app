"use client";
import { useRef } from "react";

export default function EcosystemPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const cards = [
    {
      title: "Retailers & Dealers",
      bullets: [
        "High-margin products, Custom POS kits",
        "Staff training & marketing toolkits.",
      ],
      cta: "Become an Authorised Dealer",
      img: "https://images.unsplash.com/photo-1556741533-974f8e62a92d",
    },
    {
      title: "Travel Agencies & OTAs",
      bullets: [
        "API & white-label integrations",
        "Add eSIM to every booking.",
      ],
      cta: "Integrate Zoiko Orbit",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Travel Insurance Providers",
      bullets: [
        "Bundle eSIM into travel insurance.",
        "Global activation dashboards.",
      ],
      cta: "Offer Seamless Coverage",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    },
    {
      title: "Airlines & Loyalty Programs",
      bullets: [
        "Enhance passenger connectivity",
        "Increase ancillary revenue streams.",
      ],
      cta: "Explore Airline Integrations",
      img: "https://images.unsplash.com/photo-1496560736447-3c5a5c8c8e8f",
    },
  ];

  return (
    <section className="bg-[#F5F7F9] py-20">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[32px] font-semibold text-[#0C7687]">
            Ecosystem Partners
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="px-4 py-2 rounded-md border text-sm text-gray-600 hover:bg-gray-100"
            >
              ‹ Previous
            </button>
            <button
              onClick={() => scroll("right")}
              className="px-4 py-2 rounded-md border text-sm text-gray-600 hover:bg-gray-100"
            >
              Next ›
            </button>
          </div>
        </div>

        {/* Scroll Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative min-w-[340px] h-[420px] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={`${card.img}?auto=format&fit=crop&w=900&q=80`}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C7687]/95 via-[#0C7687]/70 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-[20px] font-semibold mb-3">
                  {card.title}
                </h3>

                <ul className="space-y-2 text-[14px] text-white/90 mb-4">
                  {card.bullets.map((b, idx) => (
                    <li key={idx}>• {b}</li>
                  ))}
                </ul>

                <button className="text-white font-medium text-[14px] flex items-center gap-2 hover:gap-3 transition">
                  {card.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          <span className="w-6 h-2 bg-[#0C7687] rounded-full" />
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
      </div>
    </section>
  );
}
