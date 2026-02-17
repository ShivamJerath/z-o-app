export default function ResponsibilityHighlights() {
  return (
    <section className="relative bg-[#F5F7F8] py-20 overflow-hidden">

      {/* Optional Grid Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* ================= LEFT CARD ================= */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/cr2.png" // replace with your image
                alt="Animal Welfare"
                className="w-full h-[260px] sm:h-[320px] object-cover"
              />
            </div>

            <p className="mt-6 text-[17px] text-gray-800 leading-relaxed">
              We support animal welfare with every plan activated, reinvesting
              in partner organizations that protect wildlife, habitats, and
              endangered species.
            </p>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/cr1.png" // replace with your image
                alt="Corporate Accountability"
                className="w-full h-[260px] sm:h-[320px] object-cover"
              />
            </div>

            <p className="mt-6 text-[17px] text-gray-800 leading-relaxed">
              We hold ourselves accountable — not just for what we build, but
              how we build it. From data protection and accessibility to supply
              chain integrity and climate responsibility — corporate
              citizenship is integral to how we grow.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
