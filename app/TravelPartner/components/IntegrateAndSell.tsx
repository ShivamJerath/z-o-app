export default function IntegrateAndSell() {
  return (
    <section className="bg-[#EAF4FB] py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="/in1.png"   // replace with your image
              alt="Integrate and Sell"
              className="w-full h-[420px] object-cover rounded-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[520px]">

            <h2 className="text-[30px] md:text-[36px] font-semibold text-gray-900 leading-tight">
              Integrate and Sell <br /> Effortlessly.
            </h2>

            <p className="mt-4 text-[16px] text-gray-600 leading-relaxed">
              Set up a ready-to-use storefront with your logo and brand colors.
            </p>

            <div className="mt-6">
              <h4 className="text-[16px] font-semibold text-gray-900 mb-3">
                API: Plug & Play
              </h4>

              <ul className="space-y-3 text-[15px] text-gray-600">
                <li>• Easy plan customization.</li>
                <li>• Commission dashboard.</li>
                <li>• Marketing-ready assets.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
