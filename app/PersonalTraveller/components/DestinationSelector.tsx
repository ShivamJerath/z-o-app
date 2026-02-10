export default function DestinationSelector() {
  const destinationsLeft = [
    "Europe & UK",
    "North America",
    "South America",
    "Rest of Africa",
    "Rest of Asia",
    "Rest of Middle East",
    "Pacific Islands",
  ];

  const destinationsRight = [
    "Rest of Europe",
    "Central America & Caribbean",
    "Africa",
    "Asia",
    "Middle East & CIS",
    "Australia & New Zealand",
    "Global Premium & Ultra",
  ];

  return (
    <section className="bg-[#F7F7F7] py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-900">
            Only pay for what you need. Stay in control.
          </h2>
          <p className="mt-2 text-[15px] text-gray-500">
            Stay connected in over 220+ destinations worldwide, wherever you travel,
            at affordable rates
          </p>
        </div>

        {/* SECTION TITLE */}
        <div className="text-center mb-10">
          <p className="inline-block pb-2 text-[15px] font-medium text-gray-700 border-b-2 border-[#00718A]">
            Select your destination Where you’re traveling to
          </p>
        </div>

        {/* DESTINATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-[900px] mx-auto">

          {/* LEFT COLUMN */}
          <div className="space-y-3">
            {destinationsLeft.map((item) => (
              <DestinationCard key={item} label={item} />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-3">
            {destinationsRight.map((item) => (
              <DestinationCard key={item} label={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function DestinationCard({ label }: { label: string }) {
  return (
    <button
      className="
        w-full flex items-center justify-between
        bg-white px-4 py-3 rounded-lg
        shadow-lg border border-gray-200
        hover:shadow-md hover:border-[#00718A]
        transition
      "
    >
      <div className="flex items-center gap-3">
        {/* ICON PLACEHOLDER */}
        <div className="w-7 h-7 bg-[#00718A]/10 rounded-md flex items-center justify-center">
          🌍
        </div>

        <span className="text-[14px] font-medium text-gray-800">
          {label}
        </span>
      </div>

      {/* ARROW */}
      <span className="text-gray-400 text-lg">›</span>
    </button>
  );
}
