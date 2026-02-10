export default function HowItWorks() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5eef6_1px,transparent_1px),linear-gradient(to_bottom,#e5eef6_1px,transparent_1px)] bg-[size:120px_120px] opacity-40" />

      <div className="relative max-w-[1200px] mx-auto px-4 lg:px-12">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-[34px] -mt-8 md:text-[42px] font-semibold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-[18px] text-gray-600">
            Stay connected wherever you go with ready-to-activate global data.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* STEP 1 */}
          <StepCard
            step="1"
            title="Pick Your Destination & Plan"
            desc="Select a sub-region and then your specific country to view coverage and pricing."
            bgColor="bg-[#006F87]"
            image="/how1.png"
          />

          {/* STEP 2 */}
          <StepCard
            step="2"
            title="Activate Instantly"
            desc="After purchase, receive a QR code and simple instructions. Scan and connect in minutes."
            bgColor="bg-[#415FA3]"
            image="/how2.png"
          />

          {/* STEP 3 */}
          <StepCard
            step="3"
            title="Roam Worldwide"
            desc="Enjoy fast, reliable data across all countries in your chosen sub-region with automatic Tier-1 carrier switching."
            bgColor="bg-[#006F87]"
            image="/how3.png"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- STEP CARD ---------------- */

function StepCard({
  step,
  title,
  desc,
  bgColor,
  image,
}: {
  step: string;
  title: string;
  desc: string;
  bgColor: string;
  image: string;
}) {
  return (
    <div className="text-center">
      {/* IMAGE CARD */}
      <div className="relative bg-[#ECECEC] rounded-2xl h-[260px] flex items-center justify-center mb-8">
        {/* circle */}
        <div className={`absolute w-[180px] h-[180px] rounded-full ${bgColor}`} />

        {/* step number */}
        <div className="absolute top-6 left-6 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center text-[15px] font-semibold z-10">
          {step}
        </div>

        {/* phone image */}
        <img
          src={image}
          alt={title}
          className="relative z-10 w-[140px] object-contain"
        />
      </div>

      {/* TEXT */}
      <h3 className="text-[20px] font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-3 text-[16px] text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}