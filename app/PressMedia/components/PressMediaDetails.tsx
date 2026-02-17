export default function PressMediaDetails() {
  return (
    <section className="relative bg-[#F5F7F8] py-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE (single image only) */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-[420px] h-[420px] rounded-lg border-4 border-[#0C7687] overflow-hidden shadow-xl">
            <img
              src="/press-1.png" 
              alt="Press image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[560px]">
          <p className="text-[16px] text-gray-700 leading-relaxed">
            Our dedicated Press & Media Center provides accredited journalists,
            editors, and analysts with access to official press releases,
            multimedia assets, leadership profiles, and high-resolution imagery
            across our global operations.
          </p>

          <p className="mt-6 text-[16px] text-gray-700">
            We welcome media inquiries for:
          </p>

          <ul className="mt-6 space-y-4 text-[15px] text-gray-700">
            {[
              "Interviews with executives and technical leads",
              "Industry commentary on eSIM, travel connectivity, and telecom evolution",
              "Press briefings and event coverage",
              "Feature articles and trend analysis",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[12px]">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom text */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-16 mt-16 text-gray-700 text-[15px] leading-relaxed">
        <p>
          Our team offers timely responses, factual verification, and on-the-record
          perspectives to support high-quality reporting and global syndication
        </p>

        <p className="mt-6">
          <strong>Media Contact:</strong> press@zoikoorbit.com
        </p>

        <p className="mt-6">
          For brand guidelines, logos, approved photography, and editorial assets,
          please visit our Brand Resources page.
        </p>
      </div>
    </section>
  );
}
